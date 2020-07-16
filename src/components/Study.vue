<template>
    <div>
        <p><router-link to="/alburm">Alburm</router-link></p>
        <p><router-link to="/todo">Todo</router-link></p>
        <div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Study',
    props: {
        msg: String
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
