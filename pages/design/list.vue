<template>
  <h2 class="text-h2">Design Grid</h2>
  <v-row justify="center" align="center" class="mt-3">
    <v-col cols="6">
      <v-card
        style="max-height: 400px; overflow: hidden"
        elevation="12"
        class="d-flex child-flex"
      >
        <v-img
          src="/robot-sit.png"
          aspect-ratio="1"
          cover
          class="bg-grey-lighten-2"
        >
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular
                indeterminate
                color="grey-lighten-5"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup lang="ts"></script>
