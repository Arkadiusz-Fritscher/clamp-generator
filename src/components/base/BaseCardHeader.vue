<template>
  <header
    class="flex h-10 items-center justify-between bg-clamp-dark-blue-300 px-base-gap-inline"
  >
    <div class="flex items-center gap-x-2">
      <button
        :disabled="checkbox && !isChecked"
        @click="$emit('isFolded', isFolded)"
        class="flex items-center justify-center"
      >
        <IconChevronLeft :class="!isFolded ? 'card--open' : 'card--close'" />
      </button>
      <p class="text-base font-semibold">
        {{ title }}
      </p>
    </div>
    <div v-if="checkbox" class="flex items-center">
      <BaseCheckbox v-model:changeState="isChecked" />
    </div>
  </header>
</template>

<script setup>
import { ref, watch } from "vue";
import IconChevronLeft from "../icons/IconChevronLeft.vue";
import BaseCheckbox from "./BaseCheckbox.vue";
const emit = defineEmits(["isFolded", "isChecked"]);
defineProps({
  isFolded: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    required: true,
  },
  checkbox: {
    type: Boolean,
    default: false,
  },
});

const isChecked = ref(false);
watch(isChecked, (value, oldvalue) => {
  if (value !== oldvalue) {
    emit("isChecked", value);
  }
});
</script>

<style scoped>
.card--open {
  transform: rotate(90deg);
  transition: transform 0.2s ease-out;
}

.card--close {
  transition: transform 0.2s ease-out;
  transform: rotate(0deg);
}

button {
  transition: transform 0.2s ease-out;
}

button:disabled {
  color: var(--color-gray);
  transform: rotate(-90deg);
}
</style>
