<script setup>
  import { RouterLink, RouterView } from 'vue-router';
  import { ref } from 'vue';
  import $ from "jquery";

  const text = ref("text");
  const picked = ref();
  const selected = ref();
  var time=0;

  defineProps({
      check: {
        type:String,
        default:"text2"
      }
  })
  setInterval(
    function(){
      console.log(time);
      time=time+1;
      switch(time){
        case 1:
          $("*").css("color","#000");
          $(".block").css("border-color","#71838F");
          $(".block").css("background-color","#D6C7B2");
          $("header").css("background-color","#E8EADC");
          $("#app").css("background-color","#E8EADC");
          break;
        case 5:
          $("*").css("color","#700626");
          $(".block").css("border-color","#644845");
          $(".block").css("background-color","#E2E2B6");
          $("header").css("background-color","#93C088");
          $("#app").css("background-color","#93C088");
          break;
        case 10:
          $("*").css("color","#fc2a06");
          $(".block").css("border-color","#ab522c");
          $(".block").css("background-color","#f4ae56");
          $("header").css("background-color","#fdf3bf");
          $("#app").css("background-color","#fdf3bf");;
          break;
        case 15:
          time=0;
          break;
      }
    },1000);

</script>

<template>

  <header>
    <div class="hd">
      <div class="header_title">
      呂宗憲(Eddie)
      </div>
    </div>
    <nav>
      <RouterLink to="/">主頁</RouterLink> |
      <RouterLink to="/about">分頁</RouterLink>
    </nav>
  </header>

  <div class="bigblock">
    
    <div class="buttons">
      <input type="radio" value="text2" v-model="check" >text<br>
      <input type="radio" value="radio2" v-model="check" >radio<br>
      <input type="radio" value="select2" v-model="check" >select<br>      
    </div>

    <div class= "block" >
      <br>
      <div class="text" >
        <div v-bind:class= "check">
          <input type="text" v-model="text">
          <br>
          {{text}}
        </div>
      </div>

      <div class="radio" >
        <div v-bind:class= "check">
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
      </div>

      <div class="select" >
        <div v-bind:class= "check">
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
      </div>
      <br>
    </div>
    <br>
  </div>
  <div class="view">
  <RouterView />
  </div>
  
</template>

<style lang="scss">
@mixin centerX{
  left: 50vw;
  transform: translateX(-50%);
}
*{
  margin: 0;
  padding: 0;
  font-family: 微軟正黑體;
  text-align: center;
}

#app{
  width: 100vw;
  height: 200vh;
  background-color: #E8EADC;
  transition-duration: 0.5s;
}

header{
  position: fixed;
  width: 100%;
  z-index: 1;
  background-color: #E8EADC;
  transition-duration: 0.5s;
  .hd{
    font-size: 50px;
    position: fixed;
    @include centerX;
    position: relative;
    width: 90%;
    height: auto;
  }

  nav a.router-link-exact-active {
    color: var(--color-text);
  }

  nav a.router-link-exact-active:hover {
    background-color: transparent;
  }

  nav a {
    font-size: 18px;
    display: inline-block;
    border-left: 1px solid var(--color-border);
    padding: 5px 0px;
  }
}

.bigblock{
  top: 130px;
  width: 250px;
  height: auto;
  position: relative;
  @include centerX;
  .buttons{
    padding: 5px 0px;
  }
}

.block{
  width: 100%;
  height: auto;
  position: relative;
  border: 4px solid #71838F;
  background-color: #D6C7B2;
  transition-duration: 0.5s;
  .text{
    padding: 10px 0px;
    .radio2{
      display: none;
    }
    .select2{
      display: none;
    }
  }

  .radio{
    padding: 10px 0px;
    .select2{
      display: none;
    }
    .text2{
      display: none;
    }
  }

  .select{
    padding: 10px 0px;
    .radio2{
      display: none;
    }

    .text2{
      display: none;
    }
  }

  .text,.radio,.select{
    padding: 0;
  }
}

.view{
  position: relative;
  top: 120px;
}

</style>
