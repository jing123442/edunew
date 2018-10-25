<template>
  <div class="hello" @click='clickme'>
    <myform></myform>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        componentName: 'creatNewStudent'
      }
    },
    methods: {
    },
    components: {
      myform: () =>
        import ('./stuAndClassManage/MyForm.vue')
    },
    mounted() {
    }
  }
</script>


<style scoped>
  h1,
  h2 {
    font-weight: normal;
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
