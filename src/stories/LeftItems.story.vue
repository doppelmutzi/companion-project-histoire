<script setup lang="ts">
import LeftItems from "@/components/LeftItems.vue";

const initState = () => ({
  label: "open todos",
  leftItems: 3,
});
</script>
<template>
  <Story title="components/ActionBar/LeftItems">
    <Variant title="number field" :init-state="initState" auto-props-disabled>
      <template #default="{ state }">
        <LeftItems :label="state.label" :todos-left="state.leftItems" />
      </template>
      <template #controls="{ state }">
        <HstText v-model="state.label" title="label" />
        <HstNumber v-model="state.leftItems" :step="1" title="count" />
      </template>
    </Variant>
    <Variant title="slider" :init-state="initState" auto-props-disabled>
      <template #default="{ state }">
        <LeftItems :label="state.label" :todos-left="state.leftItems" />
      </template>
      <template #controls="{ state }">
        <HstText v-model="state.label" title="label" />
        <HstSlider
          :model-value="state.leftItems"
          :step="1"
          :min="0"
          :max="10"
          title="count"
          @update:model-value="state.leftItems = $event"
        />
      </template>
    </Variant>
  </Story>
</template>
