<template >
    <div id="mycourse">
        <HeadView></HeadView>
        <h2 style="margin-top:50px;">我是学生端界面</h2>
    </div>
</template>
<script>
import HeadView from '../../components/Head'
export default {
    name: 'login',
    data() {
        return {
            
        }
    },
    created() {
        this.$store.dispatch('SET_TITLE', '我的课程');
        console.log(this.$store.state.title)
    },
    methods: {
        
    },
    components: {
        HeadView
    },
}
</script>
<style lang='less' scoped>
#mycourse {

}
</style>