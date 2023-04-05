<template>
  <v-container fluid>
    <h1 class="text-h1 text-left">Campi Campi</h1>
    <!-- 사용된 도구 -->
    <v-row class="my-4" style="width: 70%">
      <v-col
        v-for="(t, idx1) in [
          'firebase',
          'flutter',
          'google-cloud',
          'go-lang',
          'gin-go',
        ]"
        :key="idx1"
      >
        <v-chip color="secondary"> {{ t }} </v-chip>
      </v-col>
    </v-row>
    <h5 class="subheading my-3">
      Camping SNS 플랫폼 구축이 목적인 프로젝트로 <br />
      사용자/인플루언서들은 캠핑 관련된 컨텐츠를 게시, 도매처의 캠핑상품 판매
      서비스 제공.
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
      <v-carousel-item src="/campi/feed.jpg" cover />
      <v-carousel-item src="/campi/my-page.jpg" cover />
    </v-carousel>
    <h5 class="text-h5 my-3">업로드 사진 편집</h5>
    <div class="text-body-1 my-2">
      기획상 모든 피드(게시물)에 동영상/사진들의 일관된 크기(ex 200x200)를
      유지하기 해야 했습니다.<br />
      기기에 맞게(aspect) Virtual square(200x200)를 기기에 <br />
      취하는 제스처(scale, pan, drag)에 따라 편집을 할 수 있도록 제공을
      하였습니다.
    </div>
  </v-container>
</template>
