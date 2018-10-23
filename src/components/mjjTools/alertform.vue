<template>
    <div class='container root1 ' :style='{paddingTop:item.style.paddingTop ||"30px", width:item.style.width ||"330px"}'>
        <!-- 内容宽度容器 -->
        <div class='Widthcon' :style='{width:item.style.selectWidth || "292px"}'>
            <formtool v-for='(content,index) in item.alertRender ' :key='index' :item='content' @cancel.native='canceled'></formtool>
        </div>
    </div>
</template>

<script>
    import formtool from './formtool'
    export default {
        name: 'alertform',
        props: ['item'],
        components: {
            formtool,
        },
        data() {
            return {
            }
        },
        methods: {
            canceled() {
                this.$emit('canceled')
            },
            // submit() {
            // this.$emit('floorTwoClickHide')
        // }
        },
        
    }
</script>

<style scoped>

</style>