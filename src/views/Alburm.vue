<template>
    <div>
        <h1>alburm list</h1>
        <ul>
            <li v-for="(albumItem, index) in albumsItems" v-bind:key="index">
                {{albumItem}}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data: () => {
            return {
                albumsItems: []
            }
        },
        created() {
            this.$axios.get('https://jsonplaceholder.typicode.com/albums').then((response) => {
                console.log(response.data);
                this.albumsItems = response.data.map(r => r)
            }).catch(function(error) {
                console.log(error);
            });
        }
    }
</script>