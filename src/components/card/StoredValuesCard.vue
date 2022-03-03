<template>
  <div class="space-y-2">
    <div class="draggable-item-grid text-caption text-clamp-dark-blue-200">
      <div class="drag"></div>
      <div class="sufix">Sufix</div>
      <div class="title">Title</div>
      <div class="value1">Min. Font</div>
      <div class="value2">Max. Font</div>
      <div class="icon"></div>
    </div>

    <div
      class="flex flex-col gap-y-2"
      @drop="dropHandler"
      @dragover.prevent="dragEnter"
      @dragenter.prevent="dragEnter"
      @dragleave.prevent="dragLeave"
    >
      <BaseDraggableCard
        v-for="entry in store.getSortedVariables"
        @dragstart="dragStart($event, entry.order)"
        :key="entry.id"
        :id="entry.id"
        :order="entry.order"
        :is-dragging="isDragging"
        :sufix="entry.sufix ? entry.sufix : ''"
        :title="entry.title ? entry.title : ''"
        :value1="entry.minFontsize.value + entry.minFontsize.unit"
        :value2="entry.maxFontsize.value + entry.maxFontsize.unit"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "../../stores/store";
import BaseDraggableCard from "../base/BaseDraggableCard.vue";

const store = useStore();
const isDragging = ref(false);

const dragStart = (event, order) => {
  isDragging.value = true;
  event.dataTransfer.dropEffect = "move";
  event.dataTransfer.effectAllowed = "move";
  event.dataTransfer.setData("position", order);

  const dragElement = event.target.closest("[data-element]");
  dragElement?.classList.contains("grabbed") === false
    ? dragElement?.classList.add("grabbed")
    : "";
};

const dragEnter = (event) => {
  const enteredElement = event.target.closest("[data-order]");

  enteredElement?.classList.contains("over") === false
    ? enteredElement.classList.add("over")
    : "";
};

const dragLeave = (event) => {
  const leaveElement = event.target.closest("[data-order]");

  leaveElement?.classList.contains("over")
    ? leaveElement.classList.remove("over")
    : "";
};

const dropHandler = (event) => {
  event.dataTransfer.dropEffect = "move";

  const startOrder = event.dataTransfer.getData("position");
  const startElement = document.querySelector(`[data-order='${startOrder}']`);
  const dropEndElement = event.target.closest("[data-order]");
  const endOrder = dropEndElement?.dataset?.order;

  isDragging.value = false;

  if (startOrder && endOrder) {
    swapPosition(+startOrder, +endOrder);
  }

  dropEndElement?.classList.contains("over")
    ? dropEndElement.classList.remove("over")
    : "";

  const child = startElement.querySelector("[data-element]");

  child?.classList.contains("grabbed")
    ? child?.classList.remove("grabbed")
    : "";
};

const swapPosition = (oldPos, newPos) => {
  const dragElement = store.variables.find((entry) => entry.order === oldPos);
  const dropElement = store.variables.find((entry) => entry.order === newPos);

  const pos = {
    oldPos: JSON.parse(JSON.stringify(dragElement.order)),
    newPos: JSON.parse(JSON.stringify(dropElement.order)),
  };

  dragElement.order = pos.newPos;
  dropElement.order = pos.oldPos;
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
</style>
