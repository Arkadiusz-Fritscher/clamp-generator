<template>
  <label class="hover:cursor-pointer" :class="{ 'label-checked': changeState }">
    <input
      type="checkbox"
      :checked="changeState"
      @change="$emit('update:changeState', $event.target.checked)"
      class="absolute inset-0"
    />
    <span
      class="indicator"
      :class="changeState ? 'indicator-checked' : 'indicator-unchecked'"
    ></span>
  </label>
</template>

<script setup>
defineEmits(["update:changeState"]);
defineProps({
  changeState: {
    type: Boolean,
    required: true,
  },
});
</script>

<style scoped>
[type="checkbox"] {
  -webkit-appearance: none;
}

label {
  --checkbox-height: 20px;
  display: inline-block;
  position: relative;
  height: var(--checkbox-height);
  width: calc(var(--checkbox-height) * 2);
  outline: 1px solid var(--color-gray);
  border-radius: var(--checkbox-height);
  background-color: var(--color-dark-blue-300);
  transition: all 0.2s ease-out;
}

.label-checked {
  outline-color: var(--color-active);
}

.indicator {
  --gap: 2px;
  position: absolute;
  border-radius: 50%;
  margin-inline: calc(var(--gap) / 2);
  height: calc(var(--checkbox-height) - (var(--gap) * 2));
  width: calc(var(--checkbox-height) - (var(--gap) * 2));
  transform-origin: center;
  transform: translateY(-50%) scaleX(1);
  top: 50%;
  left: 0%;
  transition: all 0.2s ease-in-out;
}

.indicator-checked {
  background-color: var(--color-active);
  left: calc(50% + (var(--gap) / 2));
}

.indicator-unchecked {
  background-color: var(--color-gray);
  left: calc(0% + (var(--gap) / 2));
}
</style>
