<template>
  <n-config-provider
    :locale="localeData.locale"
    :date-locale="localeData.dateLocale"
  >
    <NuxtLayout :name="layout">
      <NuxtPage />
    </NuxtLayout>
  </n-config-provider>
</template>
<script setup lang="ts">
import { koKR, dateKoKR, enUS, dateEnUS, NConfigProvider } from "naive-ui";
import { SI_Locale } from "./composables/locale";

const sil = useState<SI_Locale>("locale", () => SI_Locale.en);
const localeData = computed(() => {
  switch (sil.value) {
    case SI_Locale.ko:
      return { locale: koKR, dateLocale: dateKoKR };
    case SI_Locale.en:
      return { locale: enUS, dateLocale: dateEnUS };

    default:
      throw new Error("Locale Error");
  }
});
const layout = "default-pc";
</script>
