<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <Contact />
  </div>
</template>

<script>
import Contact from "./contact/Contact";

export default {
  name: 'HelloWorld',
  components: {
    Contact
  },
  props: {
    msg: String
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
