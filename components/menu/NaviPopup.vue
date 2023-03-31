<template>
  <v-menu v-model="menu" :close-on-content-click="false" location="end">
    <template v-slot:activator="{ props }">
      <v-btn
        style="position: absolute; right: 0"
        v-bind="props"
        icon="mdi-apps"
      />
    </template>

    <v-card min-width="300">
      <v-list>
        <v-list-item
          v-for="[icon, path, title, subTitle] in links"
          :key="path"
          :to="path"
          link
          active-color="primary"
          rounded="shaped"
          :title="title"
          :subtitle="subTitle"
        >
          <template v-slot:prepend>
            <v-icon class="ma-2" color="indigo" :icon="icon"></v-icon>
          </template>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" variant="text" @click="() => (menu = false)">
          더보기
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-menu>
</template>

<script setup lang="ts">
const menu = ref(false);
const links = [
  ["mdi-home", "/", "home", "go to root"],
  ["mdi-shield-account", "/project/list", "projects", "project list"],
  ["mdi-store", "/design/list", "designs", "design list"],
  ["mdi-emoticon-kiss", "/inquiry", "inquiry", "call me~"],
];
</script>
