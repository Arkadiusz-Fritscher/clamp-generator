<template>
  <BaseCard title="CSS Variables">
    <form class="flex h-auto gap-x-4">
      <BaseInput
        label="Prefix*"
        id="sufix"
        placeholder="text-"
        v-model:baseInput.trim="store.sufix"
      />

      <BaseInput
        label="Name"
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
