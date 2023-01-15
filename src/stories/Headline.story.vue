<docs lang="md">
    # Headline

    Todo
</docs>
<script lang="ts" setup>
import type { HeadlineColor } from "@/components/Headline.vue";
import Headline from "@/components/Headline.vue";

const initState = () => ({
  text: "todos",
  fontColor: "red" as HeadlineColor,
});
// TODO https://icones.js.org/

// TODO https://histoire.dev/reference/vue3/variant.html
// TODO https://histoire.dev/reference/vue3/story.html
// icon, group, app setup etc.
</script>

<template>
  <Story title="components/Headline">
    <Variant
      title="color prop (dropdown)"
      :init-state="initState"
      auto-props-disabled
      icon="lucide:car"
      icon-color="#8B5CF6"
    >
      <template #default="{ state }">
        <Headline :text="state.text" :font-color="state.fontColor" />
      </template>
      <template #controls="{ state }">
        <HstText v-model="state.text" title="headline text" />
        <HstSelect
          v-model="state.fontColor"
          title="Font color"
          :options="{
            green: 'green',
            red: 'red',
            gray: 'gray',
          }"
        />
      </template>
    </Variant>
    <Variant
      title="color prop (button group)"
      :init-state="initState"
      auto-props-disabled
    >
      <template #default="{ state }">
        <Headline :text="state.text" :font-color="state.fontColor" />
      </template>
      <template #controls="{ state }">
        <HstText v-model="state.text" title="headline text" />
        <HstButtonGroup
          v-model="state.fontColor"
          title="Font color"
          :options="[
            {
              label: 'green',
              value: 'green',
            },
            {
              label: 'red',
              value: 'red',
            },
            {
              label: 'gray',
              value: 'gray',
            },
          ]"
        />
      </template>
    </Variant>
    <Variant
      title="color prop (radio buttons)"
      :init-state="initState"
      auto-props-disabled
    >
      <template #default="{ state }">
        <Headline :text="state.text" :font-color="state.fontColor" />
      </template>
      <template #controls="{ state }">
        <HstText v-model="state.text" title="headline text" />
        <HstRadio
          v-model="state.fontColor"
          title="Font color"
          :options="[
            {
              label: 'green',
              value: 'green',
            },
            {
              label: 'red',
              value: 'red',
            },
            {
              label: 'gray',
              value: 'gray',
            },
          ]"
        />
      </template>
    </Variant>
    <Variant title="default color" :init-state="initState" auto-props-disabled>
      <template #default="{ state }">
        <Headline :text="state.text" />
      </template>
      <template #controls="{ state }">
        <HstText v-model="state.text" title="headline text" />
      </template>
    </Variant>
  </Story>
</template>
