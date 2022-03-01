<template>
  <BaseCard title="CSS Output">
    <div class="rounded bg-clamp-dark-blue-300 p-base-padding-inline">
      <code v-if="store.getStoredClamp.length > 0">
        <p>
          <span class="selector">:root </span>
          <span class="brackets">{</span>
        </p>
        <ul class="space-y-0.5 py-1 pl-6">
          <li v-for="(entry, i) in store.getStoredClamp" :key="i">
            <span class="title">{{
              `--${entry.values.sufix}${entry.values.title}: `
            }}</span>
            <span class="value">{{ `${entry.string};` }}</span>
          </li>
        </ul>
        <p><span class="brackets">}</span></p>
      </code>
      <div v-else>Empty state text</div>
    </div>
  </BaseCard>
</template>

<script setup>
import BaseCard from "@/components/base/BaseCard.vue";
import { useStore } from "@/stores/store";
const store = useStore();
</script>

<style scoped>
code .selector {
  @apply text-fuchsia-400;
}
code .brackets {
  @apply text-cyan-100;
}

code .title {
  @apply text-sky-500;
}

code {
  font-size: var(--text-base);
  line-height: 160%;
}

code p {
  display: block;
}
</style>
