<template>
    <div>
        <div id="grid">
            <div v-for="(number, index) in 100" 
                :class="{ 'active': number == getCurrentPosition() }"
                :key="index" 
                class="block">
            </div>
        </div>
        
        <Controls/>

    </div>

</template>

<script>
import { mapGetters } from 'vuex'
import Controls from './Controls.vue'

export default {
    components: { Controls },
    name: 'Game',
    props: {
        gridSize: Number,
    },

    methods: {
        ...mapGetters([
            'getCurrentPosition'
        ])
    },

}
</script>

<style scoped lang="scss">
    #grid {
        border: 1px solid #999;
        width: 520px;
        height: 520px;
        margin: 0 auto;
        .block {
            width: 50px;
            height: 50px;
            float: left;
            border: 1px solid #333;
            &.active {
                background: red;
            }
        }
    }
</style>