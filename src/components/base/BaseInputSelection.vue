<script setup>
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
    default: "number",
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

  isValid: {
    type: Boolean,
    default: true,
  },

  error: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <div class="flex-auto">
    <label v-if="label" :for="id" class="label">{{ label }}</label>
    <div class="input flex items-center gap-x-0.5" :class="{ error: !isValid }">
      <input
        class=""
        :type="type"
        :placeholder="placeholder"
        :id="id"
        :value="baseInput"
        @input="$emit('update:baseInput', $event.target.value)"
        max="999"
        min="1"
      />

      <select
        :value="baseSelection"
        :id="id"
        class="flex h-full items-center bg-inherit hover:cursor-pointer"
        @change="$emit('update:baseSelection', $event.target.value)"
      >
        <option v-for="(option, i) in options" :value="i" :key="i">
          {{ option }}
        </option>
      </select>
    </div>
    <div v-if="!isValid" class="error mt-1">
      {{ error }}
    </div>
  </div>
</template>

<style scoped></style>
