<template>
  <div id="about">
      <h1>About Greeady</h1>
      <p>Greeady is an application</p>
        <h2>The Greeady Team</h2>
        <img src="https://pre00.deviantart.net/14ca/th/pre/f/2015/334/9/c/rammy_goat_vector___castle_crashers_by_mordefic-d9il0qf.png" alt="">
  </div>
</template>


<script>
export default {
  name: 'About'
}
</script>


<style scoped>
.event-listitem {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  padding: 0 2vw;
  margin-bottom: 1vw;
}
h2 {
  font-size:3vw;
}
img {
height:25vh;
width: 21vw;
padding-right:2vw;
margin-left: 3vw;
}
p {
  padding: 0 2vw;
}
#about {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left:2vw;
  background-color: rgb(228, 230, 234);
}
</style>
