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
        <CurrentClampCard />
      </div>
      <div class="content-bottom">
        <CssFileCard />
      </div>

      <!-- Right Menu -->
      <aside class="right-menu">
        <BaseCard title="CSS Functions">
          <StoredValuesCard />
        </BaseCard>
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
import { useStore } from "../stores/store";
import StoredValuesCard from "./card/StoredValuesCard.vue";
import CurrentClampCard from "./card/CurrentClampCard.vue";
import CssFileCard from "@/components/card/CssFileCard.vue";

const store = useStore();
</script>

<style scoped>
.dashboard__grid {
  display: grid;
  width: 100%;
  height: auto;
  grid-template-rows: 1fr;
  grid-auto-rows: auto;
  gap: var(--base-grid-gap-y) var(--base-grid-gap-x);
  grid-template-areas:
    "left-menu"
    "content-top"
    "right-menu"
    "content-bottom";
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

@media screen(mobile) {
  .dashboard__grid {
    grid-template-columns: minmax(15.25rem, 1fr) minmax(21.5rem, 2.5fr) minmax(
        21.5rem,
        1.5fr
      );
    grid-template-areas:
      "left-menu content-top right-menu"
      "left-menu content-bottom right-menu";
    grid-template-rows: auto 1fr;
  }
}
</style>
