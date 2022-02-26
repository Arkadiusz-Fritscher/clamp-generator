<template>
  <BaseCard title="Viewports">
    <form class="flex gap-x-4">
      <BaseInputSelection
        label="Min. Viewport"
        id="minViewport"
        placeholder="390"
        v-model:baseInput="store.minViewport"
      />

      <BaseInputSelection
        label="Max. Viewport"
        id="maxViewport"
        placeholder="1440"
        v-model:baseInput="store.maxViewport"
      />
    </form>
  </BaseCard>
</template>

<script setup>
import { reactive, ref } from "vue";
import BaseCard from "../base/BaseCard.vue";
import BaseInputSelection from "../base/BaseInputSelection.vue";

const store = reactive({
  minViewport: "",
  maxViewport: "",
});
</script>

<style scoped>
form > * {
  flex: 1 1 0%;
}
</style>
