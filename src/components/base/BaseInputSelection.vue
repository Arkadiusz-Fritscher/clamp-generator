<script setup>
import { ref } from "vue";

defineEmits(["update:baseInput", "update:baseSelection"]);
defineProps({
  baseInput: {
    type: [String, Number],
    default: "",
  },
  label: {
    type: String,
    default: "",
  },
  id: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: "text",
  },
  placeholder: {
    type: String,
    default: "",
  },
  baseSelection: {
    type: String,
    default: "px",
  },
  options: {
    type: Object,
    default: () => {
      return { px: "px", rem: "rem" };
    },
  },
});
</script>

<template>
  <div class="">
    <label v-if="label" :for="id" class="label">{{ label }}</label>
    <div class="input flex items-center gap-x-0.5">
      <input
        class=""
        :type="type"
        :placeholder="placeholder"
        :id="id"
        :value="baseInput"
        @input="$emit('update:baseInput', $event.target.value)"
      />

      <select
        :value="baseSelection"
        :id="id"
        class="bg-inherit"
        @change="$emit('update:baseSelection', $event.target.value)"
      >
        <option v-for="(option, i) in options" :value="i" :key="i">
          {{ option }}
        </option>
      </select>
    </div>
  </div>
</template>

<style scoped>
.input__container {
  /* flex: 0 0 6ch; */
}
</style>
