<script setup>
defineEmits(["update:baseInput"]);
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
});
</script>

<template>
  <div class="">
    <label v-if="label" for="" class="label">{{ label }}</label>
    <input
      class="input"
      :type="type"
      :placeholder="placeholder"
      :id="id"
      :value="baseInput"
      @input="$emit('update:baseInput', $event.target.value)"
    />
  </div>
</template>

<style scoped></style>
