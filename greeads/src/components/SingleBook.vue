<template lang="html">
  <div class="big-books">
    <img src="" alt="">
    <h3>Book One</h3>
    <router-link class="DeleteBook-route" to="/books/:id/delete">Delete?</router-link>
    <router-link class="EditAuthor-route" to="/books/:id/edit">Edit Book</router-link>
    <h4>Authors</h4>
    <h4>Genre</h4>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  </div>
</template>

<script>
export default {
  name: 'SingleBook'
}
</script>

<style lang="css">
</style>
