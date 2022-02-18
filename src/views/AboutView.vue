<script setup>
  import { ref } from 'vue'
  const text = ref("text")
  const picked = ref()
  const selected = ref()
  const props =defineProps({
      check: {
        type:String,
        default:"text2"
      }

  })
</script>

<template>
<div class="subtitle">分頁</div>
  <div class="bigblock">

    <div class= "block">
      <br>
      <div class="text" >

          <input type="text" v-model="text">
          <br>
          {{text}}

      </div>

      <div class="radio" >

          <input type="radio"  value="Apple" v-model="picked" />
          <label >Apple</label>
          <br>
          <input type="radio"  value="Banana" v-model="picked" />
          <label >Banana</label>
          <br>
          <input type="radio"  value="Cherry" v-model="picked" />
          <label >Cherry</label>
          <br>
          <span>喜歡什麼水果？</span>
          <br>
          <span>{{picked}}</span>

      </div>
  
      <div class="select" >

          <span>喜歡什麼寵物？</span>
          <br>
          <select name="寵物" v-model="selected">
            <option value="Bird">Bird</option>
            <option value="Cat">Cat</option>
            <option value="Dog">Dog</option>
          </select>
          <br>
          <span>我喜歡的是:{{selected}}</span>
          <br>

      </div>
      <br>
    </div>
    <br>
  </div>
</template>

<style lang="scss">
@mixin centerX{
  left: 50vw;
  transform: translateX(-50%);
}
.subtitle{
  position: relative;
  text-align: center;
  font-size: 50px;
  width: 90%;
  @include centerX;
}
.about
{
  position: relative;
  text-align: center;
  font-size: 10px;
  width: 90%;
  @include centerX;
}
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
