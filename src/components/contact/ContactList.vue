<template>
    <div id="contact-list">
      <ul>
        <li v-for="(contact, id) in ContactStore.contacts" v-bind:key="id">
          <div v-if="editedId === contact.id">
            <input v-model="contact.firstname" />
            <input v-model="contact.lastname" /> 
            <button v-on:click="update(contact)">save</button>
          </div>
          <div v-else>
          {{contact.firstname}} {{contact.lastname}} 
          <button v-on:click="editedId = contact.id">edit</button>
          <button v-on:click="remove(contact)">remove</button>
          </div>
        </li>
      </ul>
      <div>
        <h3>Add a contact</h3>
        <input v-model="newContact.firstname" placeholder="First Name" />
        <input v-model="newContact.lastname" placeholder="Last Name" /> 
        <input v-model="newContact.mobile" placeholder="Mobile" /> 
        <button v-on:click="add(newContact)">add</button>
      </div>
    </div>
</template>

<script>
import ContactStore from "../../store/ContactStore"
export default {
  name: 'ContactList',
  data() {
    return {
      "newContact" : {},
      "editedId": null,
      "ContactStore": ContactStore.data
    }
  },
  methods: {
    add(contact) {
      ContactStore.methods.add(contact);  
      console.log("Added: " + JSON.stringify(contact));
      this.newContact = {};  
    },
    update(contact) {
      ContactStore.methods.update(contact);
      console.log("updated: " + JSON.stringify(contact));
      this.editedId = null;
    },
    remove(contact) {
      ContactStore.methods.remove(contact.id);
      console.log("removed: " + JSON.stringify(contact));
    }
  },
  mounted() {
    ContactStore.methods.list();
  }
}
</script>

<style scoped>

</style>

