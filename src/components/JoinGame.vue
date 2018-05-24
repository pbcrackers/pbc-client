<template>
    <form v-on:submit.prevent="$emit('join-game', gameCode)">
        <label>Enter game code</label>
        <input v-model="gameCode" type="text"/>
        <button type="submit">Join</button>
    </form>
</template>

<script>
export default {
    name: "JoinGame",
    data: function(){
        return {
            gameCode: ''
        }
    }
}
</script>

<style>

</style>
