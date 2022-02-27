<template>
  <BaseCard title="Tailwind Theme" checkbox>
    <form class="flex h-auto gap-x-4">
      <BaseInputSelection
        label="Letter spacing*"
        id="letterSpacing"
        placeholder="0.3"
        v-model:baseInput.number="store.letterSpacing.value"
        v-model:baseSelection="store.letterSpacing.unit"
      />

      <BaseInputSelection
        label="Line height*"
        id="lineHeight"
        placeholder="1.1"
        v-model:baseInput.number="store.lineHeight.value"
        v-model:baseSelection="store.lineHeight.unit"
        :options="{ none: '-', px: 'px', rem: 'rem', percent: '%' }"
      />
    </form>
  </BaseCard>
</template>

<script setup>
import { useStore } from "../../stores/store";
import BaseCard from "../base/BaseCard.vue";
import BaseInputSelection from "../base/BaseInputSelection.vue";

const store = useStore();
</script>

<style scoped></style>
