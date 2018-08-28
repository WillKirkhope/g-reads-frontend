<template lang="html">
  <div class="EditAuthorForm">
  <div class="little-comp">
    <div class="little-author">
      <img src="" alt="">
      <p>Authors</p>
    </div>
    <div class="little-books">
      <img src="" alt="">
      <p>Books</p>
    </div>
  </div>
  <div class="EditForm">
    <form id="form">
      <div class = "form-div">
        <label htmlFor="name">First Name</label>
        <input type="text" name="FirstName" placeholder="edit me">
      </div>
      <div class = "form-div">
        <label htmlFor="lastname">Last Name</label>
        <input type="text" name="eventName" placeholder="edit me">
      </div>
      <div class = "form-div">
        <label htmlFor="URL">Portrait Url</label>
        <input type="text" name="PortUrl" placeholder="edit me">
      </div>
      <div class = "form-div">
        <label htmlFor="Bio">Biography</label>
        <textarea type="text" name="description"></textarea>
      </div>
      <button type="submit-button" name="button">Edit Author</button>
    </form>
  </div>

  </div>
</template>

<script>
export default {
  name: 'EditAuthorForm'
}
</script>

<style lang="css">
#form {
  display:flex;
  flex-direction:column;
  padding:50px;
  width:40vw;
  align-items:center;
}
.form-div {
  padding:20px;
}
input {
  width: 40vw;
}
textarea {
  width: 40vw;
}
.form-container {
  display:flex;
  justify-content:center;
  background-color: rgb(228, 230, 234);
}
#submit-button {
  background-color: #007bff;
  color: #fff;
  border-radius: .5vw;
  padding: 1vw;
  width: 20vw;
}
</style>
