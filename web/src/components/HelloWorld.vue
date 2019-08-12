<template>
    <div class="hello">
        <van-button type="default" size="small">默认按钮</van-button>
        <img :src="captcha" alt="" @click="captchaClickHandler">
    </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        captcha: 'http://localhost:3061/public/captcha',
        base64: ''
      }
    },
    props: {},
    methods: {
      captchaClickHandler() {
        this.captcha = this.captcha.split('?')[0] + '?' + Date.parse(new Date())
      }

    }
  }
</script>

<style scoped>
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
