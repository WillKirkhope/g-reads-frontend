<template lang="">
  <div class="main-authors">
    <div class="little-comp">
      <div class="little-author">
        <router-link class="NewAuthor-route" to="/authors/new">Add Author</router-link>
        <p>Authors</p>
      </div>
      <div class="little-books">
        <router-link class="NewBook-route" to="/books/new">Add Book</router-link>
        <p>Books</p>
      </div>
    </div>
    <div class="big-authors">
      <img src="" alt="">
      <h3>Author One</h3>
      <router-link class="SingleAuthor-route" to="/authors/:id/">More Info</router-link>
      <router-link class="DeleteAuthor-route" to="/authors/:id/delete">Delete?</router-link>
      <router-link class="EditAuthor-route" to="/authors/:id/edit">Edit Author</router-link>
      <h4>Books</h4>
      <textarea>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</textarea>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Authors'
}
</script>

<style lang="css">
</style>
