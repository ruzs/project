<script setup>
import axios from "axios";
import jquery from "jquery";
import ajax from "jquery";
// import Vue from "vue";
import JSON from "jquery";
import $ from "jquery";

var datalist
={
  data:
      axios.get('https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8')
      .then(res => {
      console.log(res.data)
      })
}
;
</script>

<template>
  <main>
    <div class="title">主頁</div>
    <div class="subtitle">得到一組資料</div>
    {{datalist.data}}
    <!-- {{info}} -->
  </main>
  <!-- {{list}} -->
  <!-- {{component}} -->
</template>

<style lang="scss">
@mixin centerX{
  left: 50vw;
  transform: translateX(-50%);
}
main{
  position: relative;
  text-align: center;
  
  @include centerX;
}
.title{
  font-size: 50px;
}
.subtitle{
  font-size: 20px;
}
</style>