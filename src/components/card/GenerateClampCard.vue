<template>
  <div class="h-auto border border-clamp-dark-blue-300 p-base-gap-inline">
    <p class="py-base-gap-top text-caption text-clamp-dark-blue-200">
      * Fields optional
    </p>
    <button class="btn" @click="store.storeClap()">Generate clamp</button>
  </div>
</template>

<script setup>
import { useStore } from "../../stores/store";

const store = useStore();
</script>

<style scoped>
.btn {
  @apply flex h-14 w-full items-center justify-center rounded-lg px-4 py-2 text-base font-semibold;
  background-color: var(--color-active);
  transition: background-color 0.2s ease-out;
}

.btn:hover {
  background-color: #6654c4;
}
</style>
