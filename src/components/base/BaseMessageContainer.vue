<template>
  <div
    v-show="showModal"
    id="modal"
    class="absolute z-50 -translate-x-full -translate-y-full rounded border bg-clamp-dark-blue-400 py-4 px-8 text-caption font-medium"
    :class="messages.type === 'error' ? 'error' : 'success'"
  >
    {{ messages.message }}
  </div>
</template>

<script setup>
import { computed, ref, watch } from "vue";
import { useStore } from "../../stores/store";
const store = useStore();

const messages = store.getMessage;
const showModal = ref(true);

watch(messages, (state) => {
  const modal = document.querySelector("#modal");
  if (state.message) {
    showModal.value = true;
    modal.style.top = messages.pos.y + "px";
    modal.style.left = messages.pos.x + "px";
  } else {
    showModal.value = false;
    modal.style.top = 0 + "px";
    modal.style.left = 0 + "px";
  }
});
</script>

<style scoped>
.error {
  @apply border-rose-400  text-rose-400;
}

.success {
  @apply border-emerald-400  text-emerald-400;
}
</style>
