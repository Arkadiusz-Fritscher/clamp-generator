<template>
  <div
    :data-order="id"
    class="draggable-item-grid h-10 rounded bg-clamp-dark-blue-300 px-2 text-caption font-medium text-clamp-blue-white-50"
  >
    <div class="drag text-clamp-dark-blue-200 hover:cursor-grab">
      <IconGrab />
    </div>
    <div class="sufix" ref="sufix">{{ sufix }}</div>
    <div class="title">{{ title }}</div>
    <div class="value1">{{ value1 }}</div>
    <div class="value2">{{ value2 }}</div>
    <div class="icon">
      <div class="flex items-center gap-x-2 text-clamp-dark-blue-200">
        <IconCopy class="h-5 w-5" />
        <IconEdit class="h-5 w-5" />
      </div>
    </div>
  </div>
</template>

<script setup>
import IconGrab from "../icons/IconGrab.vue";
import IconCopy from "../icons/IconCopy.vue";
import IconEdit from "../icons/IconEdit.vue";

defineProps({
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
    type: Number,
  },
});
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

[data-order]:active {
  cursor: grabbing;
}

[data-order]:hover:active {
  cursor: grabbing;
}

[data-order]:hover {
  cursor: grab;
}
</style>
