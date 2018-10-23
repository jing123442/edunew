<template>
    <div class='root'>
        <formtool v-for='(content,index) in stuEventName2' :item='content' :key='index' @keyValue='getKeyValue'></formtool>
    </div>
</template>

<script>
    import formtool from '../formtool.vue'
    export default {
        name: 'alertThreePart',
        components: {
            formtool,
        },
        methods:{ getKeyValue: function(key, value) {
                this.getKeyValues[key] = value.value;
            }},
        data() {
            return {
                getKeyValues: {},
                stuEventName2: [{
                    type: "02",
                    englishname: "stuEventName2",
                    name: "说明",
                    arr: ["-1", "-2", "-5", "-10"],
                    style: {
                        labelWidth: "110px",
                        labelPosition: "right",
                        width: "7",
                        inLine: ""
                    }
                }],
            }
        },
    }
</script>

<style scoped>
    .root {
        height: 250px;
    }
</style>