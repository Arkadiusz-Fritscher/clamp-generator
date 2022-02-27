<template>
  <BaseCard title="CSS Variables" checkbox>
    <form class="flex h-auto gap-x-4">
      <BaseInput
        label="Sufix"
        id="sufix"
        placeholder="--text-"
        v-model:baseInput.trim="store.sufix"
      />

      <BaseInput
        label="Title"
        id="title"
        placeholder="md"
        v-model:baseInput.trim="store.title"
      />
    </form>
  </BaseCard>
</template>

<script setup>
import { useStore } from "../../stores/store";
import BaseCard from "../base/BaseCard.vue";
import BaseInput from "../base/BaseInput.vue";
const store = useStore();
</script>

<style scoped></style>
