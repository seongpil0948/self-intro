<template>
  <v-container fluid>
    <h1 class="text-h1 text-left">
      Inout box <span class="text-subtitle-2 my-2">2022-06 ~ 2023-04</span>
    </h1>
    <!-- 사용된 도구 -->
    <v-row style="width: 70%">
      <v-col
        v-for="(t, idx1) in [
          'firebase',
          'typescript',
          'google-cloud',
          'vue-js',
          'go-lang',
          'gin-go',
        ]"
        :key="idx1"
      >
        <v-chip color="secondary"> {{ t }} </v-chip>
      </v-col>
    </v-row>
    <!-- 개요 및 구축 목적 -->
    <h5 class="subheading my-3">
      의류 산업(동대문 특화) 플랫폼 구축이 목적인 프로젝트. <br />
      각 역할(소매/도매/사입)별 필요 기능들을 구축하여, 하나의 플랫폼에서 전자
      상거래가 이루어 지는 것이 목표.
    </h5>
    <h4 class="text-h4 mt-5">주요 기능</h4>
    <v-card style="width: 70%" class="pa-3 my-3">
      <v-chip
        class="ma-1"
        v-for="(t, idx1) in [
          'Log centralize',
          'Push messaging(FCM)',
          'Editor(공지사항)',
          'Payment gateway(PG)',
          'Elastic search(도매상품/유저 검색)',
          '도매 POS 재고관리 시스템',
        ]"
        :key="idx1"
        color="pink"
        label
        text-color="white"
      >
        {{ t }}
      </v-chip>
    </v-card>
    <v-carousel>
      <v-carousel-item src="/iobox/inquiry.png" cover />
      <v-carousel-item src="/iobox/shop-main.png" cover />
      <v-carousel-item src="/iobox/uncle-main.png" cover />
      <v-carousel-item src="/iobox/vendor-main.png" cover />
    </v-carousel>
    <h4 class="text-h4 mt-5">각종 이슈 해결 후기</h4>
    <h5 class="text-h5 my-3">로그 중앙화</h5>
    <div class="text-body-1 my-2">
      Admin, Web-app, Flutter-app, Api-server, 기타 컨테이너 로 분리된
      서비스에서 기록되는 로그를 <br />
      한 화면에서 확인할 수 있어야 하며, 특정 로그레벨 이상(Emergency)인 경우
      알림을 받을 수 있어야 했습니다. <br />
      이에 Cloud-logging(like Log4j, GCP Saas)를 선정, <br />
      각 언어별로 제공되는 Google-cloud-sdk(미지원일경우 api-server 중계) 를
      통해 통일된 entries 형태로 로그를 저장 할 수 있었습니다. <br />
      또한 제공되는 View 로 중앙 관리가 가능하였고, Cloud-Monitoring 을 통해
      일정 로그레벨 이상일경우 <br />
      Slack 을 통해 팀대화방에 알림, 휴대폰으로도 지속 추적관리가 가능하게끔
      해결 할 수 있었습니다.
    </div>
    <h5 class="text-h5 my-3">영수증 출력</h5>
    <div class="text-body-1 my-2">
      웹 서비스 도매 POS 기능으로부터 판매 정보에 대한 영수증 정보를 각 기기에서
      출력 할 수 있어야 했습니다. <br />
      이에 각 브라우저별 내장된 프린트 기능을 이용하여 제공 하려 하였으나,
      <br />
      기기/브라우저별 해상도, 기타 미지원 기능, 스타일로 인해 깨지는 현상이 발생
      하였습니다. <br />
      영수증 출력용 virtual dom 객체를 만들어 다시 영수증 기기에 맞는 HTML로
      출력하여 원활하게 제공 할 수 있었습니다.
    </div>
  </v-container>
</template>
