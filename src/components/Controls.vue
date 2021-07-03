<template>
    <div id="buttons">
        <button v-on:click="moveLeft" class="button">Left</button>
        <button v-on:click="moveRight" class="button">Right</button>
        <button v-on:click="moveUp" class="button">Up</button>
        <button v-on:click="moveDown" class="btn btn-primary">Down</button>
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