<template lang="html">
  <div class="main-page">
    <div class="authors">
      <img src="https://smashingconf.com/whistler-2014/content/02-speakers/02-kyle-simpson/kyle-simpson.jpg" alt="">
      <h3>Authors</h3>
    </div>
    <div class="books">
      <img src="https://s3.amazonaws.com/tinycards/image/a3799ba4b173f713759130fc1e75c183" alt="">
      <h3>Books</h3>
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
    padding-right:2vw;
    margin-left: 3vw;
  }

  .books{
    border: solid black 2px;
    margin-top: 8vw;
    margin-bottom: 2vw;
  }

  .authors{
    border: solid black 2px;
    margin-top: 8vw;
    margin-bottom: 2vw;
  }

</style>
