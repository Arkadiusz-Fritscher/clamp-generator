<template>
  <header class="flex h-20 items-center gap-x-6 px-base-padding-inline">
    <div class="h-8 w-auto">
      <IconLogo />
    </div>
    <div class="ml-auto flex items-center gap-x-1">
      <span class="text-caption text-clamp-dark-blue-200">Basefontsize</span>
      <BaseInput
        class="max-w-[4ch]"
        id="baseFont"
        :base-input="store.baseFont.value"
        @change="changeBaseFont"
      />
      <span class="text-caption text-clamp-dark-blue-200">px</span>
    </div>
    <div class="flex items-center gap-x-1">
      <span class="text-caption text-clamp-dark-blue-200">Reset</span>
      <IconRefresh @click="resetStore" />
    </div>
  </header>
</template>

<script setup>
import IconLogo from "./icons/IconLogo.vue";
import IconRefresh from "./icons/IconRefresh.vue";
import BaseInput from "./base/BaseInput.vue";
import { useStore } from "../stores/store";

const store = useStore();

const changeBaseFont = (event) => {
  const input = +event.target.value;
  if (input > 1) {
    store.baseFont.value = input;
  }
};

const resetStore = () => {
  store.$reset();
};
</script>

<style scoped>
header {
  background-image: linear-gradient(
    96.61deg,
    rgba(201, 97, 242, 0.168) 1.01%,
    rgba(88, 150, 232, 0.248) 25.52%,
    rgba(88, 150, 232, 0) 100%
  );
}
</style>
