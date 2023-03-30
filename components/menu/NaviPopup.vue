<template>
  <n-popover trigger="click" :show-arrow="false" raw>
    <template #trigger>
      <n-button quaternary circle>
        <template #icon>
          <n-icon><AppsOutline /></n-icon>
        </template>
      </n-button>
    </template>
    <n-card content-style="width: 20vw; padding: 0">
      <n-menu :indent="18" :options="menuOptions" />
    </n-card>
  </n-popover>
</template>

<script setup lang="ts">
import {
  NIcon,
  NSpace,
  NText,
  NPopover,
  NButton,
  NCard,
  NMenu,
  type MenuOption,
} from "naive-ui";
import { AppsOutline } from "@vicons/ionicons5";
import { BuildingShop20Regular, AccessTime24Regular } from "@vicons/fluent";
import { Gitlab, UserAstronaut } from "@vicons/fa";
import type { VNodeChild } from "vue";

const renderIcon = (icon: Component) => () =>
  h(
    NIcon,
    {
      size: 28,
    },
    { default: () => h(icon) }
  );
const renderMenu = (path: string, icon: Component, label: VNodeChild) => ({
  label: () =>
    h(
      NButton,
      {
        bordered: false,
        style: {
          minWidth: "100px",
          width: "100%",
          height: "100%",
        },
        onClick: () => {
          navigateTo(path);
        },
      },
      { default: () => label }
    ),
  key: path,
  icon: renderIcon(icon),
});
const menuOptions: MenuOption[] = [
  renderMenu("/", UserAstronaut, "to home"),
  renderMenu("/project/list", Gitlab, "projects"),
  renderMenu("/design/list", BuildingShop20Regular, "designs"),
  renderMenu("/inquiry", AccessTime24Regular, "inquiry"),
];
</script>
