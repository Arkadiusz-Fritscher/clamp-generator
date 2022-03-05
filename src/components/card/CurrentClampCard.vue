<template>
  <BaseCard title="Current clamp">
    <div
      v-if="store.currentClamp"
      class="flex items-center justify-center gap-x-4 rounded px-base-padding-inline"
    >
      <div
        class="flex h-14 items-center justify-center rounded bg-clamp-dark-blue-300 py-6 px-12 font-semibold"
      >
        {{ store.currentClamp.string }}
      </div>
      <div>
        <button class="btn">
          <IconCopy @click="copyClamp" />
        </button>
      </div>
    </div>
  </BaseCard>
</template>

<script setup>
import { useStore } from "../../stores/store";
import BaseCard from "../base/BaseCard.vue";
import IconCopy from "../icons/IconCopy.vue";
const store = useStore();

const copyClamp = (event) => {
  navigator.clipboard.writeText(store.currentClamp.string).then(
    () => {
      store.addMessage({
        message: "Value copy",
        type: "success",
        pos: { x: event.pageX, y: event.pageY },
      });
    },
    () => {
      store.addMessage({
        message: "Copy fail",
        type: "error",
        pos: { x: event.pageX, y: event.pageY },
      });
    }
  );
};
</script>

<style scoped>
::-moz-selection {
  color: var(--color-dark-blue-400);
  background: var(--color-blue-white-50);
}

::selection {
  color: var(--color-dark-blue-400);
  background: var(--color-blue-white-50);
}

.btn {
  @apply flex h-14 w-14 items-center justify-center rounded bg-clamp-active;
}
</style>
