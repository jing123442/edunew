<template>
    <div class='container root1 ' :style='{paddingTop:"30px", width:item.style.width ||"330px"}'>
        <!-- 内容宽度容器 -->
        <div :style='{width:item.style.selectWidth || "292px"}'>
            <formtool v-for='(content,index) in item.alertRender ' :key='index' :item='content' @cancel='canceled' @submited='submited' @keyValue='getKeyValue'></formtool>
        </div>
    </div>
</template>

<script>
    import formtool from './formtool'
    export default {
        name: 'alertform',
        props: {item:{default:{style:'30px'}}},
        components: {
            formtool,
        },
        data() {
            return {
                getKeyValues: {}
            }
        },
        methods: {
            getKeyValue: function(key, value) {
                this.getKeyValues[key] = value.value;
            },
            canceled() {
                this.$emit('canceled')
            },
            submited() {
                this.$emit('floorTwoClickHide', this.getKeyValues)
                console.log('jingjing')
            }
<<<<<<< HEAD
        },
=======
        },      
>>>>>>> 12d5ea024a907cad0782bd87976ace45b7181214
    }
</script>

<style scoped>

</style>