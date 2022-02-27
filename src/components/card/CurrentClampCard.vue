<template>
  <BaseCard title="Current clamp">
    <div
      class="flex items-center justify-center gap-x-4 rounded px-base-padding-inline"
    >
      <div
        class="clamp-string flex h-14 items-center justify-center rounded bg-clamp-dark-blue-300 py-6 px-12 font-semibold"
      >
        {{ store.currentClamp.string }}
      </div>
      <div>
        <button class="btn">
          <IconCopy />
        </button>
      </div>
    </div>
  </BaseCard>
</template>

<script setup>
import { useStore } from "../../stores/store";
import BaseCard from "../base/BaseCard.vue";
import IconCopy from "../icons/IconCopy.vue";
const store = useStore();
</script>

<style scoped>
::-moz-selection {
  color: var(--color-dark-blue-400);
  background: var(--color-blue-white-50);
}

::selection {
  color: var(--color-dark-blue-400);
  background: var(--color-blue-white-50);
}

.clamp-string {
  font-size: clamp(1rem, -0.126rem + 1.835vw, 1.25rem);
}

.btn {
  @apply flex h-14 w-14 items-center justify-center rounded bg-clamp-active;
}
</style>
