<template>
  <v-container fluid>
    <h1 class="text-h1 text-left">
      Inout uncle <span class="text-subtitle-2 my-2">2023-01 ~ 2023-04</span>
    </h1>
    <!-- 사용된 도구 -->
    <v-row class="my-4" style="width: 40%">
      <v-col
        cols="4"
        v-for="(t, idx1) in ['firebase', 'flutter', 'google-cloud']"
        :key="idx1"
      >
        <v-chip color="secondary"> {{ t }} </v-chip>
      </v-col>
    </v-row>
    <h5 class="subheading my-3">
      inout box 프로젝트의 사입 직원들의 사입/배송/픽업 사용을 목적으로 제작된
      프로젝트 <br />
    </h5>
    <h4 class="text-h4 mt-5">주요 기능</h4>
    <v-card style="width: 70%" class="pa-3 my-3">
      <v-chip
        class="ma-1"
        v-for="(t, idx1) in ['Push messaging(FCM)', '사입자 출/퇴근 관리(APP)']"
        :key="idx1"
        color="pink"
        label
        text-color="white"
      >
        {{ t }}
      </v-chip>
    </v-card>
    <v-carousel>
      <v-carousel-item src="/iobox/uncle-app-1.png" />
      <v-carousel-item src="/iobox/uncle-app-2.png" />
      <v-carousel-item src="/iobox/app-store.jpeg" />
    </v-carousel>
  </v-container>
</template>
