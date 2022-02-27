<template>
  <div class="flex flex-col gap-y-2">
    <div class="draggable-item-grid text-caption text-clamp-dark-blue-200">
      <div class="drag"></div>
      <div class="sufix">Sufix</div>
      <div class="title">Title</div>
      <div class="value1">Min. Font</div>
      <div class="value2">Max. Font</div>
      <div class="icon"></div>
    </div>
    <BaseDraggableCard
      v-for="(entry, i) in store.variables"
      :key="i"
      :sufix="entry.sufix ? entry.sufix : ''"
      :title="entry.title ? entry.title : ''"
      :value1="entry.minFontsize.value + entry.minFontsize.unit"
      :value2="entry.maxFontsize.value + entry.maxFontsize.unit"
    />
  </div>
</template>

<script setup>
import { useStore } from "../../stores/store";
import BaseDraggableCard from "../base/BaseDraggableCard.vue";

const store = useStore();
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
