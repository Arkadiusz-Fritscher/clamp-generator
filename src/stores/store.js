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
    sufix: "",
    title: "",
    letterSpacing: {
      value: 24,
      unit: "px",
    },
    lineHeight: {
      value: 24,
      unit: "px",
    },
    variables: [],
  }),
  getters: {
    doubleCount: (state) => state.counter * 2,

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
      const strings = this.variables.map((entry) => {
        return this.createClamp(
          entry.minViewport,
          entry.maxViewport,
          entry.minFontsize,
          entry.maxFontsize
        ).string;
      });
      return strings;
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
        this.variables.push(JSON.parse(JSON.stringify(values)));
      }
    },
  },
});
