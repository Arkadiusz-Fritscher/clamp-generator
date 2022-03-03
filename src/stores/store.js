import { defineStore } from "pinia";

export const useStore = defineStore({
  id: "store",
  state: () => ({
    baseFont: {
      value: 16,
      unit: "px",
    },
    minViewport: {
      value: 390,
      unit: "px",
    },
    maxViewport: {
      value: 1440,
      unit: "px",
    },
    minFontsize: {
      value: 16,
      unit: "px",
    },
    maxFontsize: {
      value: 24,
      unit: "px",
    },
    sufix: "text-",
    title: "headline",
    letterSpacing: {
      value: "",
      unit: "px",
    },
    lineHeight: {
      value: "",
      unit: "px",
    },
    variables: [
      {
        order: 1,
        id: "001",
        sufix: "text-",
        title: "xs",
        minViewport: { value: 390, unit: "px" },
        maxViewport: { value: 1440, unit: "px" },
        minFontsize: { value: 11, unit: "px" },
        maxFontsize: { value: 14, unit: "px" },
      },
      {
        order: 2,
        id: "002",
        sufix: "text-",
        title: "sm",
        minViewport: { value: 390, unit: "px" },
        maxViewport: { value: 1440, unit: "px" },
        minFontsize: { value: 14, unit: "px" },
        maxFontsize: { value: 16, unit: "px" },
      },
      {
        order: 3,
        id: "003",
        sufix: "text-",
        title: "base",
        minViewport: { value: 390, unit: "px" },
        maxViewport: { value: 1440, unit: "px" },
        minFontsize: { value: 16, unit: "px" },
        maxFontsize: { value: 20, unit: "px" },
      },
      {
        order: 4,
        id: "004",
        sufix: "text-",
        title: "md",
        minViewport: { value: 390, unit: "px" },
        maxViewport: { value: 1440, unit: "px" },
        minFontsize: { value: 18, unit: "px" },
        maxFontsize: { value: 24, unit: "px" },
      },
      {
        order: 5,
        id: "005",
        sufix: "text-",
        title: "lg",
        minViewport: { value: 390, unit: "px" },
        maxViewport: { value: 1440, unit: "px" },
        minFontsize: { value: 22, unit: "px" },
        maxFontsize: { value: 32, unit: "px" },
      },
    ],
  }),
  getters: {
    doubleCount: (state) => state.counter * 2,

    generateUid() {
      return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
        (
          c ^
          (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
        ).toString(16)
      );
    },

    validatedValues() {
      const values = [
        "baseFont",
        "minViewport",
        "maxViewport",
        "minFontsize",
        "maxFontsize",
      ];

      let isValidated = true;

      for (const key of values) {
        isValidated = this[key].value !== "" && this[key].value !== null;
        if (!isValidated) break;
      }

      return isValidated;
    },

    currentClamp() {
      if (this.validatedValues) {
        return this.createClamp();
      }
    },

    getStoredClamp() {
      const strings = this.variables
        .map((entry) => {
          return {
            values: {
              ...entry,
            },
            string: this.createClamp(
              entry.minViewport,
              entry.maxViewport,
              entry.minFontsize,
              entry.maxFontsize
            ).string,
          };
        })
        .sort((a, b) => a.values.order - b.values.order);

      return strings;
    },

    getSortedVariables() {
      return this.variables
        .map((entry) => entry)
        .sort((a, b) => a.order - b.order);
    },
  },

  actions: {
    pxToRem(px) {
      return px / this.baseFont.value;
    },

    entryToRem(entry) {
      const { value, unit } = entry;
      if (
        unit !== "rem" &&
        unit !== "" &&
        unit !== "percent" &&
        unit !== "none"
      ) {
        return this.pxToRem(value);
      } else {
        return value;
      }
    },

    shortenedNumber(value) {
      return Number(+value.toFixed(3).replace(/(\.0+|0+)$/, ""));
    },

    createClamp(
      minViewport = this.minViewport,
      maxViewport = this.maxViewport,
      minFontsize = this.minFontsize,
      maxFontsize = this.maxFontsize,
      sufix = this.sufix,
      title = this.title
    ) {
      if (this.validatedValues) {
        const minViewportRem = this.entryToRem(minViewport);
        const maxViewportRem = this.entryToRem(maxViewport);
        const minFontsizeRem = this.entryToRem(minFontsize);
        const maxFontsizeRem = this.entryToRem(maxFontsize);
        const slope =
          (maxFontsizeRem - minFontsizeRem) / (maxViewportRem - minViewportRem);
        const yAxisIntersection = -minViewportRem * slope + minFontsizeRem;
        const clamp = {
          values: {
            order: this.variables.length + 1,
            sufix,
            title,
            minViewport,
            maxViewport,
            minFontsize,
            maxFontsize,
          },
          string: `clamp(${this.shortenedNumber(
            minFontsizeRem
          )}rem, ${this.shortenedNumber(
            yAxisIntersection
          )}rem + ${this.shortenedNumber(
            slope * 100
          )}vw, ${this.shortenedNumber(maxFontsizeRem)}rem)`,
        };

        return clamp;
      }
    },

    storeClap() {
      if (this.validatedValues && this.title !== "") {
        const { values, string } = this.createClamp();
        this.variables.push(
          JSON.parse(JSON.stringify({ id: this.generateUid, ...values }))
        );
      }
    },

    changeVariables(newValues) {
      const storedIndex = this.variables.findIndex(
        (entry) => entry.id === newValues.id
      );
      const variables = this.variables[storedIndex];

      for (const [key, entry] of Object.entries(newValues)) {
        if (typeof entry === "object") {
          const { value, unit } = entry;

          if (variables[key].value !== value) {
            variables[key].value = value;
          }

          if (variables[key].unit !== unit) {
            variables[key].unit = unit;
          }
        } else {
          if (variables[key] !== entry) {
            variables[key] = entry;
          }
        }
      }
    },
  },
});
