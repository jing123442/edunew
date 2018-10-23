<template>
  <div class="hello">
  </div>
</template>

<script>
  import creatNewStudent from './creatNewStudent'
  export default {
    name: 'HelloWorld',
    data() {
      return {}
    },
    mounted() {
      console.log('ppppp')
      this.$axios.get('http://mytestdata/getAllClass').then(function(res) {
        console.log(res)
      })
     
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
