<template>
    <div id="contact-list">
      <ul>
        <li v-for="(contact, id) in contacts" v-bind:key="id">
          {{contact.firstname}} {{contact.lastname}}
        </li>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'ContactList',
  mounted() {
    fetch("http://rest.learncode.academy/api/vue-5/contacts")
      .then(response => response.json())
      .then((data) => {
        this.contacts = data;
      })
  },
  data() {
    return {
      contacts: []
    }
  },
}
</script>

<style scoped>

</style>

