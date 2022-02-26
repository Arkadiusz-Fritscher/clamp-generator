<template>
  <main class="flex h-full w-full py-base-grid-gap-y">
    <div class="dashboard__grid">
      <!-- Left Menu -->
      <aside class="left-menu flex flex-col">
        <ViewportsCard />
        <FontsizeCard />
        <CssVariablesCard />
        <TailwindConfigCard />
        <GenerateClampCard class="flex-grow" />
      </aside>

      <!-- Center Content -->
      <div class="content-top">
        <BaseCard title="Current Clamp" />
      </div>
      <div class="content-bottom">
        <BaseCard title="CSS Output" />
      </div>

      <!-- Right Menu -->
      <aside class="right-menu">
        <BaseCard title="CSS Functions" />
      </aside>
    </div>
  </main>
</template>

<script setup>
import BaseCard from "./base/BaseCard.vue";
import ViewportsCard from "./card/ViewportsCard.vue";
import FontsizeCard from "./card/FontsizeCard.vue";
import CssVariablesCard from "./card/CssVariablesCard.vue";
import TailwindConfigCard from "./card/TailwindConfigCard.vue";
import GenerateClampCard from "./card/GenerateClampCard.vue";
</script>

<style scoped>
.dashboard__grid {
  display: grid;
  width: 100%;
  height: auto;
  grid-template-columns: minmax(20%, 294px) minmax(auto, 1fr) minmax(20%, 294px);
  grid-template-rows: auto 1fr;
  gap: var(--base-grid-gap-y) var(--base-grid-gap-x);
  grid-template-areas:
    "left-menu content-top right-menu"
    "left-menu content-bottom right-menu";
}

.left-menu {
  grid-area: left-menu;
}
.content-top {
  grid-area: content-top;
}
.content-bottom {
  grid-area: content-bottom;
}
.right-menu {
  grid-area: right-menu;
}
</style>
