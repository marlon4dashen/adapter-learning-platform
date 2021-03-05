<template>
  <div class="signup">
      <h2> sign up page</h2>
      <h1> Sign Up </h1>

      <form>
        <label for="name">Name:    </label>
        <input type="text" id="name" name="name">
        <br><br>
        <label for="email">Email:    </label>
        <input type="text" id="email" name="email">
        <br><br>
        <label for="password">Password:    </label>
        <input type="text" id="password" name="password">
        <br><br>
        <label for="confirm-password">Confirm password:    </label>
        <input type="text" id="confirm-password" name="confirm-password">
      </form> 
      <p> 
        <button type="button">Sign up</button> <button type="button">Policy</button>
      </p>
  </div>
</template>


<script>
export default {
  name: 'SignUp',

}
</script>

<style>
  h1 {text-align: center;}
  form {
    align-items: center;
  }
  p {text-align: center;}
</style>