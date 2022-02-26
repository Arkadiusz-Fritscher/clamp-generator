<template>
  <div :data-element="title" class="relative flex flex-col">
    <BaseCardHeader
      class="z-10"
      :title="title"
      :checkbox="checkbox"
      @is-checked="(value) => (isChecked = value)"
      @is-folded="
        (value) => {
          isFolded = !value;
        }
      "
      :is-folded="isFolded"
    />
    <div
      v-if="(checkbox && isChecked) || !checkbox"
      ref="card"
      class="base-card"
      :class="{ hidden: isFolded }"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import BaseCardHeader from "./BaseCardHeader.vue";
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  checkbox: {
    type: Boolean,
    default: false,
  },
});

const isFolded = ref(false);
const isChecked = ref(false);
const card = ref(null);
</script>

<style scoped>
.base-card {
  background-color: var(--color-dark-blue-400);
  padding-inline: var(--base-element-gap-inline);
  overflow: hidden;
  height: min-content;
  z-index: 1;
  padding-top: var(--base-element-gap-top);
  padding-bottom: var(--base-element-gap-bottom);
  border: 1px solid var(--color-dark-blue-300);
}
</style>
