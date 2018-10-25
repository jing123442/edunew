<template>
<<<<<<< HEAD
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
=======
    <div>
<creatNewStu>   </creatNewStu>
    </div>
</template>

<script>
    import creatNewStu from './creatNewstu.vue'
    export default {
         name:'HelloWorld',
         components:{
             creatNewStu
         }
        
>>>>>>> 64b77c61b510666fee8984d2ed305039e4e80d8f
    }
</script>

<style scoped>

</style>