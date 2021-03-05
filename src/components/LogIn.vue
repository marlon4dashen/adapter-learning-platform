<template>
  <div class="signup">
      <h2> log in page </h2>

      <h1> Adaptive Learning Platform </h1>

      <form>
        <label for="username">Username:    </label>
        <input type="text" id="username" name="username">
        <br><br>
        <label for="password">Passwpord:    </label>
        <input type="text" id="password" name="password">
      </form> 
      <p> 
        <button type="button">Log in</button> <button type="button">Sign up</button>
      </p>
        

  </div>
</template>


<script>
export default {
  name: 'LogIn',

}
</script>

<style>
  h1 {text-align: center;}
  form {text-align: center;}
  p {text-align: center;}

</style>