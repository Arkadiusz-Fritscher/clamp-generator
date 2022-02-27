<template>
  <BaseCard title="Fontsizes">
    <form class="flex h-auto gap-x-4">
      <BaseInputSelection
        label="Min. Fontsize"
        id="minFontsize"
        placeholder="16"
        v-model:baseInput.number="store.minFontsize.value"
        v-model:baseSelection="store.minFontsize.unit"
      />

      <BaseInputSelection
        label="Max. Fontsize"
        id="maxFontsize"
        placeholder="24"
        v-model:baseInput.number="store.maxFontsize.value"
        v-model:baseSelection="store.maxFontsize.unit"
      />
    </form>
  </BaseCard>
</template>

<script setup>
import BaseCard from "../base/BaseCard.vue";
import BaseInputSelection from "../base/BaseInputSelection.vue";
import { useStore } from "../../stores/store";
const store = useStore();
</script>

<style scoped></style>
