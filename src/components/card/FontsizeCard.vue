<template>
  <BaseCard title="Fontsizes">
    <form class="flex h-auto gap-x-4">
      <BaseInputSelection
        label="Min. Fontsize"
        id="minFontsize"
        placeholder="16"
        v-model:baseInput="store.minFontsize"
      />

      <BaseInputSelection
        label="Max. Fontsize"
        id="maxFontsize"
        placeholder="24"
        v-model:baseInput="store.maxFontsize"
      />
    </form>
  </BaseCard>
</template>

<script setup>
import { reactive } from "vue";
import BaseCard from "../base/BaseCard.vue";
import BaseInputSelection from "../base/BaseInputSelection.vue";

const store = reactive({
  minFontsize: "",
  maxFontsize: "",
});
</script>

<style scoped></style>
