<template>
  <BaseCard title="Viewports">
    <form class="flex gap-x-4">
      <BaseInputSelection
        label="Min. Viewport"
        id="minViewport"
        placeholder="390"
        v-model:baseInput.number="store.minViewport.value"
        v-model:baseSelection="store.minViewport.unit"
      />

      <BaseInputSelection
        label="Max. Viewport"
        id="maxViewport"
        placeholder="1440"
        v-model:baseInput.number="store.maxViewport.value"
        v-model:baseSelection="store.maxViewport.unit"
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
