<template>
    <div id="buttons">
        <button v-on:click="moveLeft" class="hidden">Left</button>
        <button v-on:click="moveRight" class="hidden">Right</button>
        <button v-on:click="moveUp" class="hidden">Up</button>
        <button v-on:click="moveDown" class="hidden">Down</button>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name: 'Controls',
    methods: {
        ...mapActions([
            'moveLeft',
            'moveRight',
            'moveUp',
            'moveDown'
        ])
    },
}
</script>