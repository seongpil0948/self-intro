<template>
  <v-container>
    <v-card
      v-for="(proj, idx) in projects"
      :key="idx"
      class="mx-auto mb-3"
      max-width="400"
      :hover="proj.to !== undefined"
      :href="proj.to"
    >
      <v-img height="200" class="align-end" :src="proj.titleImg">
        <v-card-title
          :style="`${
            proj.whiteImg === true ? 'color: black;' : 'color: white;'
          }‘`"
          >{{ proj.title }}</v-card-title
        >
      </v-img>

      <v-card-subtitle class="pt-4"> {{ proj.desc }} </v-card-subtitle>
      <v-card-text>
        <v-row justify="start" align="start" no-gutters>
          <div v-for="(url, idx2) in proj.using" :key="idx2">
            <v-icon
              v-if="url.includes('mdi')"
              class="mr-2"
              :icon="url"
              size="30"
            />
            <v-img class="mr-2" v-else :src="url" width="30" />
          </div>
          <v-spacer />
          <v-icon v-if="proj.projType === ProjType.web" icon="mdi-web" />
          <div v-else-if="proj.projType === ProjType.app">
            <v-icon icon="mdi-apple" />
            <v-icon icon="mdi-android" />
          </div>
        </v-row>
      </v-card-text>
      <!-- 
      <v-card-actions>
        <v-btn> 자세히 </v-btn>

      </v-card-actions> -->
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
enum ProjType {
  web,
  app,
}
const projects = [
  {
    title: "Inout box",
    desc: "의류 소/도매 플랫폼",
    projType: ProjType.web,
    titleImg: "/iobox/inout-login.png",
    using: ["mdi-vuejs", "mdi-language-go", "mdi-language-typescript"],
    to: "/project/inout-box",
  },
  {
    title: "Inout uncle",
    desc: "의류 배송 플랫폼",
    projType: ProjType.app,
    titleImg: "/iobox/app-store.jpeg",
    using: ["/flutter-logo.svg", "mdi-google-cloud", "mdi-google-analytics"],
  },
  {
    title: "Campi",
    desc: "캠핑 플랫폼",
    projType: ProjType.app,
    titleImg: "/campi/my-page.jpg",
    using: ["/flutter-logo.svg", "mdi-firebase"],
    whiteImg: true,
  },
  {
    title: "Virtual try on backend",
    desc: "AI 부서로 부터 제작된 모델을 바탕으로, 웹 서비스 제작(국가 과제)",
    projType: ProjType.web,
    titleImg: "/try-on.png",
    using: ["mdi-language-python"],
  },
  {
    title: "CJ 크롤러 제작",
    desc: "각종 쇼핑플랫폼에서 판매중인 CJ 제일제당 상품데이터 수집 및 ETL to cj",
    projType: ProjType.web,
    titleImg: "/try-on.png",
    using: ["mdi-kubernetes", "mdi-language-python"],
  },
  {
    title: "LOTTE 추천 어드민 페이지",
    desc: "롯데 홈쇼핑 추천서비스 어드민 페이지 제작",
    projType: ProjType.web,
    titleImg: "/try-on.png",
    using: ["mdi-kubernetes", "mdi-vuejs", "mdi-language-python"],
  },
];
</script>
