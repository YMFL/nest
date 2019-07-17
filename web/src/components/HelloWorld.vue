<template>
  <div class="hello">
    <!--<img :src="captcha" alt="" @click="captchaClickHandler">-->
    <embed :src="base64"  class="haha" />
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data(){
    return {
      captcha:'http://localhost:3061/public/captcha',
      base64:''
    }
  },
  props: {
    msg: String
  },
  methods:{
    captchaClickHandler(){
      this.captcha=this.captcha.split('?')[0]+'?'+Date.parse(new Date())
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .haha{
    width: 100%;
    height: 400px;
  }
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
