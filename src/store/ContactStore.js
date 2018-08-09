const ContactStore = {
    data: {
        contacts: []
    },
    methods: {
        list() {
            fetch("http://rest.learncode.academy/api/vue-5/contacts")
                .then(response => response.json())
                .then((data) => {
                    ContactStore.data.contacts = data
                });
        },
        add(contact) {
            fetch("http://rest.learncode.academy/api/vue-5/contacts", { 
                body: JSON.stringify(contact),
                method: "POST",
                headers : {
                    "Content-Type": "application/json" 
                }
            })
                .then(response => response.json())
                .then((data) => {
                    ContactStore.data.contacts.push(data);
                });
        },
        update(contact) {
            fetch("http://rest.learncode.academy/api/vue-5/contacts/" + contact.id, { 
                body: JSON.stringify(contact),
                method: "PUT",
                headers : {
                    "Content-Type": "application/json" 
                }
            });
        },
        remove(id, index) {
            fetch("http://rest.learncode.academy/api/vue-5/contacts/" + id, {
                method: "DELETE"
            })
                .then(() => {
                    ContactStore.data.contacts.splice(index, 1);
                });
        }
    }
};

export default ContactStore;