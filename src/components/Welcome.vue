<template>
  <div class="welcomecontainer">
      
    <section>
      <div class="learn">Learning Modules</div><div class="test">Test</div>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <div class="explain">Explain how it works here</div>
    </section>

    
  </div>
</template>


<script>
export default {
  name: 'Welcome',

}
</script>

<style>
  section {
    padding: 200px;
  }
  div {
      box-sizing: border-box;
      display: inline;
      height: 600px;
      padding: 20px;
      text-align: center;
      width: 400px;
  }
  .learn {
    border: solid;
    margin-right: 5cm;
  }

  .test {
    border: solid;
  }
  
  .explain{
    border: solid;
  }

</style>