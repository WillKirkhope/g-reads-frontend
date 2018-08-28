<template lang="html">
  <div class="main-page">
    <div class="authors">
      <img src="https://smashingconf.com/whistler-2014/content/02-speakers/02-kyle-simpson/kyle-simpson.jpg" alt="">
      <router-link class="author-route" to="/authors">Authors</router-link>
    </div>
    <div class="books">
      <img src="https://s3.amazonaws.com/tinycards/image/a3799ba4b173f713759130fc1e75c183" alt="">
      <router-link class="book-route" to="/books">Books</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'main-page'
}
</script>

<style lang="css">

  .main-page{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items:center;
    background-color: rgb(228, 230, 234);
  }

  img {
    height: 50vh;
    width: 45vw;
    /* padding-right:2vw; */
    /* margin-left: 3vw; */
  }

  .books{
    display: flex;
    flex-direction: column;
    border: solid black 2px;
    margin-top: 8vw;
    margin-bottom: 2vw;
  }

  .book-route{
    display: flex;
    font-size: 2vw;
    font-family: cursive;
    text-decoration: none;
    justify-content: center;
    align-items: center;
    color: #1f2232;
  }

  .authors{
    display: flex;
    flex-direction: column;
    border: solid black 2px;
    margin-top: 8vw;
    margin-bottom: 2vw;
  }

  .author-route{
    display: flex;
    font-size: 2vw;
    font-family: cursive;
    text-decoration: none;
    justify-content: center;
    align-items: center;
    color: #1f2232;
  }

</style>
