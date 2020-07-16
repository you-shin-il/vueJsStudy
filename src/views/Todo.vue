<template>
    <div>
        <h1>todo list</h1>
        <ul>
            <li v-for="(toDoItem, index) in toDoItems" v-bind:key="index">
                {{toDoItem}}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data: () => {
      return {
          toDoItems: []
      }
    },
    created() {
            this.$axios.get('https://jsonplaceholder.typicode.com/todos').then((response) => {
                console.log(response.data);
                this.toDoItems = response.data.map(r => r)
            }).catch(function(error) {
                console.log(error);
            });
        }
    }
</script>