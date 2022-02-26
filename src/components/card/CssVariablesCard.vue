<template>
  <BaseCard title="CSS Variables" checkbox>
    <form class="flex h-auto gap-x-4">
      <BaseInput
        label="Sufix"
        id="sufix"
        placeholder="--text-"
        v-model:baseInput="store.sufix"
      />

      <BaseInput
        label="Title"
        id="title"
        placeholder="md"
        v-model:baseInput="store.title"
      />
    </form>
  </BaseCard>
</template>

<script setup>
import { reactive } from "vue";
import BaseCard from "../base/BaseCard.vue";
import BaseInput from "../base/BaseInput.vue";

const store = reactive({
  sufix: "",
  title: "",
  checkbox: false,
});
</script>

<style scoped></style>
