<template>
  <div :data-order="order">
    <div
      data-element="draggable"
      draggable="true"
      class="draggable-item-grid h-10 rounded bg-clamp-dark-blue-300 px-2 text-caption font-medium text-clamp-blue-white-50 hover:cursor-grab hover:bg-clamp-dark-blue-250"
    >
      <div class="text-clamp-dark-blue-200">
        <IconGrab />
      </div>
      <div class="sufix" ref="sufix">{{ sufix }}</div>
      <div class="title">{{ title }}</div>
      <div class="value1">{{ value1 }}</div>
      <div class="value2">{{ value2 }}</div>
      <div class="icon">
        <div class="flex items-center gap-x-2 text-clamp-dark-blue-200">
          <IconCopy class="h-5 w-5 hover:cursor-pointer" @click="copyClamp" />
          <IconEdit
            class="h-5 w-5 hover:cursor-pointer"
            @click="() => (isEditOpen = !isEditOpen)"
          />
        </div>
      </div>
    </div>
    <BaseDraggableEditCard :id="id" v-if="isEditOpen" />
  </div>
</template>

<script setup>
import IconGrab from "../icons/IconGrab.vue";
import IconCopy from "../icons/IconCopy.vue";
import IconEdit from "../icons/IconEdit.vue";
import BaseDraggableEditCard from "./BaseDraggableEditCard.vue";
import { computed, onUpdated, ref, watch } from "vue";
import { useStore } from "../../stores/store";

const store = useStore();
const props = defineProps({
  sufix: {
    type: String,
    default: "",
  },
  title: {
    type: String,
    default: "",
  },
  value1: {
    type: [String, Number],
    required: true,
  },
  value2: {
    type: [String, Number],
    required: true,
  },
  id: {
    required: true,
    type: String,
  },
  isDragging: {
    type: Boolean,
    default: false,
  },
  order: {
    type: Number,
    required: true,
  },
});

const isEditOpen = ref(false);

onUpdated(() => {
  if (props.isDragging) isEditOpen.value = false;
});

const copyClamp = (event) => {
  store.copyClamp(props.id, { x: event.pageX, y: event.pageY });
};
</script>

<style scoped>
.drag {
  grid-area: drag;
}
.sufix {
  grid-area: sufix;
}
.title {
  grid-area: title;
}
.value1 {
  grid-area: value1;
}
.value2 {
  grid-area: value2;
}
.icon {
  grid-area: icon;
  justify-self: end;
}

[data-order] {
  transition: all 0.2s ease-out;
}

.over {
  @apply -translate-x-2  opacity-60;
}

[data-element]:hover:active {
  background-color: var(--color-active);
}
</style>
