<template>
  <BaseCard title="Tailwind Theme" checkbox>
    <form class="flex h-auto gap-x-4">
      <BaseInputSelection
        label="Letter spacing*"
        id="letterSpacing"
        placeholder="0.3"
        v-model:baseInput="store.minFontsize"
      />

      <BaseInputSelection
        label="Line height*"
        id="lineHeight"
        placeholder="1.1"
        v-model:baseInput="store.minFontsize"
        :options="{ none: '-', px: 'px', rem: 'rem', percent: '%' }"
      />
    </form>
  </BaseCard>
</template>

<script setup>
import { reactive } from "vue";
import BaseCard from "../base/BaseCard.vue";
import BaseInputSelection from "../base/BaseInputSelection.vue";

const store = reactive({
  sufix: "",
  title: "",
  checkbox: false,
});
</script>

<style scoped></style>
