<script setup lang="ts">
import FilterButton from "@/components/FilterButton.vue";
import { logEvent } from "histoire/client";

const onClick = () => {
  logEvent("click", {
    buttonLabel: "completed",
  });
};
</script>

<template>
  <Story title="components/ActionBar/FilterButton" auto-props-disabled>
    <div class="story-wrapper">
      <FilterButton label="completed" :active="true" :on-click="onClick" />
    </div>
  </Story>
</template>
<style lang="scss">
.story-wrapper {
  padding: 1rem;

  html:not(.htw-dark) & {
    background-color: rgb(109, 117, 130);
  }
}
</style>
