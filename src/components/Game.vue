<template>
    <div>
        <div id="grid">
            <div v-for="number in gridSize*gridSize" 
                :class="{ 'active': number == currentPosition }"
                :key="number" 
                class="block">
            </div>
        </div>

        <div id="buttons">
            <button v-on:click="moveLeft" class="hidden">Left</button>
            <button v-on:click="moveRight" class="hidden">Right</button>
            <button v-on:click="moveUp" class="hidden">Up</button>
            <button v-on:click="moveDown" class="hidden">Down</button>
        </div>
    </div>

</template>

<script>
export default {
    name: 'Game',
    props: {
        gridSize: Number,
    },
    data() {
        return {
            currentPosition: 1
        }
    },
    methods: {
        moveLeft() {
            if ([1, 11, 21, 31, 41, 51, 61, 71, 81, 91].includes(this.currentPosition)) {
                return false
            }

            return this.currentPosition -= 1
        },
        moveRight() {
            if (this.currentPosition % 10 == 0) {
                return false
            }
            return !! (this.currentPosition += 1)
        },
        moveUp() {
            if (this.currentPosition >= 11) {
                return !! (this.currentPosition -= 10)
            }
            return false
        },
        moveDown() {
            if (this.currentPosition <= 89) {
                return !! (this.currentPosition += 10)
            }
        }
    }
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