<template>
  <header class="header">
    <img id="logo-img" src="https://pre00.deviantart.net/14ca/th/pre/f/2015/334/9/c/rammy_goat_vector___castle_crashers_by_mordefic-d9il0qf.png" alt="logo">
    <h1 class = "header-title">Greeady</h1>
    <nav class="nav-links">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <!-- THIS IS NOT A LOGIN LINK -->
      <a href="#">Login</a>
    </nav>
  </header>
</template>


<script>
  export default {
    name: 'Header'
  }
</script>


<style scoped>
  .header {
    box-sizing:border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0 10vw;
    background-color: #2C4251;
    padding-top:5px;
    color: #C1C1C1;
  }
  .nav-links a {
    padding: .5vw;
    color: #C1C1C1;
    text-decoration:none;
  }
  #logo-img {
    height: 8vw;
    width:auto;
  }
  .header-title {
    font-size: 40px;
    padding-right:45%;
  }
</style>
