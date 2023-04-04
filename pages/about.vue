<template>
  <v-container
    fluid
    class="d-flex flex-column fill-height justify-center align-center"
  >
    <v-avatar size="150" image="/me.jpg" />
    <v-btn @click="clickGit" class="mx-auto mt-2" icon="mdi-github" />
    <v-row>
      <v-col
        v-for="(info, idx) in [
          '4year+',
          '1995.09.28',
          '최성필',
          '경기도 광명시 철산동',
        ]"
        :key="idx"
      >
        <v-chip class="ma-2" color="primary"> {{ info }} </v-chip>
      </v-col>
    </v-row>

    <h3 class="subheading my-3">Can i speak</h3>
    <v-row>
      <v-col v-for="(lang, idx1) in langs" :key="idx1">
        <v-chip> {{ lang }} </v-chip>
      </v-col>
    </v-row>
    <h3 class="subheading my-3">With</h3>
    <v-row>
      <v-col v-for="(frame, idx2) in frames" :key="idx2">
        <v-chip color="secondary"> {{ frame }} </v-chip>
      </v-col>
    </v-row>
    <h3 class="subheading my-3">Can i use</h3>
    <v-row>
      <v-col v-for="(service, idx3) in services" :key="idx3">
        <v-chip color="green" text-color="white"> {{ service }} </v-chip>
      </v-col>
    </v-row>
    <h3 class="subheading my-3">About</h3>
    <v-card>
      <v-tabs v-model="tab" color="deep-purple-accent-4" align-tabs="center">
        <v-tab value="ko">Ko</v-tab>
        <v-tab value="en">En</v-tab>
      </v-tabs>
      <v-window v-model="tab">
        <v-window-item value="ko">
          <v-container fluid>
            <div class="text-subtitle-1 my-2">
              Web & App, Front/Backend 개발 업무를 주로 담당하는 4+년차
              소프트웨어 엔지니어 입니다.
            </div>
            <div class="text-body-1 my-2">
              저는 다년간 많은 소프트웨어를 웹/앱(flutter), 프론트/백엔드,
              서비스(AWS/GCP/온프레미스/서버리스)에 구애받지 않고, 서비스를
              제공하여 왔습니다.
            </div>
            <div class="text-body-1 my-2">
              아니면 저를 Project manager라 불러도 좋습니다. 저는 회사 소속으로
              회사 홈페이지 제작에 대한 외주 업체를 직접 선정,<br />
              일정 조율/개발/유지보수를 담당한 경력이 있습니다.
            </div>
            <div class="text-body-1 my-2">
              UI/UX 아름다운 것에 관심이 많습니다. <br />
              디자인툴에 능통한 개발자 분들에 대한 막연한 존경으로부터,
              최근(2023.04) Blender 툴을 다루기 시작했습니다.
            </div>
          </v-container>
        </v-window-item>
        <v-window-item value="en">
          <v-container fluid>
            <div class="text-subtitle-1 my-2">
              I'm a software engineer for 4+ years of experience with Web & App,
              Front/Backend development.
            </div>
            <div class="text-body-1 my-2">
              I've been using a lot of software for years, regardless of
              web/app, front/backend, and service
              (AWS/GCP/on-premise/serverless) I've been providing it.
            </div>
            <div class="text-body-1 my-2">
              Or you can call me Project Manager. As a member of the company, I
              personally selected an outsourcing web-agency for the production
              of the company's website.<br />
              I have experience in scheduling/development/maintenance.
            </div>
            <div class="text-body-1 my-2">
              UI/UX I'm very interested in beautiful things. <br />
              From vague respect for developers who are fluent in design tools,
              we recently started dealing with Blender tools (2023.04).
            </div>
          </v-container>
        </v-window-item>
      </v-window>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
function clickGit() {
  window.open("https://github.com/seongpil0948");
}
const langs = ["Go", "Dart", "Javascript", "Typescript", "Python"];
const frames = ["Vue", "Flutter", "Gin", "Kubernetes", "Django", "Fast-api"];
const services = [
  "Google-cloud",
  "Firebase",
  "AWS",
  "Netlify",
  "Figma",
  "Blender",
];
const tab = ref("ko");
</script>
