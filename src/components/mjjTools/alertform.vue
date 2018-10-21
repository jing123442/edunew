<template>
    <div class='root1 root2 '>
<formtool v-for='(content,index) in ' :key=index></formtool>
    </div>
</template>

<script>
    import formtool from './formtool.vue'
    export default {
        porps:[''],
        components:{
            formtool,
        }
        
    }
</script>

<style scoped>
.root1{
    width:330px;
}

</style>