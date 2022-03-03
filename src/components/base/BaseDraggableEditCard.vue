<template>
  <div
    class="mt-1 rounded bg-gray-500/5 px-4 py-2 text-caption font-medium text-clamp-blue-white-50"
  >
    <div class="edit flex flex-wrap gap-4">
      <BaseInput
        label="Prefix"
        id="sufix"
        v-model:baseInput.trim="newValues.sufix"
      />
      <BaseInput
        label="Title"
        id="title"
        v-model:baseInput.trim="newValues.title"
      />
      <BaseInputSelection
        label="Min. Fontsize"
        id="minFontsize"
        v-model:baseInput.number="newValues.minFontsize.value"
        v-model:baseSelection="newValues.minFontsize.unit"
      />
      <BaseInputSelection
        label="Max. Fontsize"
        id="maxFontsize"
        v-model:baseInput.number="newValues.maxFontsize.value"
        v-model:baseSelection="newValues.maxFontsize.unit"
      />
    </div>
    <div>
      <div class="flex items-center justify-between py-4">
        <button class="btn btn--delete">Delete</button>
        <button class="btn btn--save" @click="submitChanges">
          Save Changes
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "@/stores/store";
import { computed, onMounted, reactive } from "vue";
import BaseInput from "./BaseInput.vue";
import BaseInputSelection from "./BaseInputSelection.vue";

const store = useStore();
const props = defineProps({
  id: {
    type: String,
    required: true,
  },
});

const element = store.getStoredClamp.find(
  (entry) => entry.values.id === props.id
);

const newValues = reactive(JSON.parse(JSON.stringify(element.values)));

const submitChanges = () => {
  store.changeVariables(JSON.parse(JSON.stringify(newValues)));
};
</script>

<style scoped>
.edit > * {
  flex: 1 1 90px;
  max-width: 50%;
}

.btn {
  @apply rounded py-3 px-8 text-caption font-medium;
}

.btn--delete {
  @apply bg-black/5 text-rose-500;
}

.btn--save {
  @apply bg-clamp-active text-clamp-blue-white-50;
}

@media screen(sm) {
  .edit > * {
    flex: 1 1 90px;
    max-width: 30%;
  }
}
</style>
