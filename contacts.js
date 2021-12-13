const contactsOperations = require("./db/app");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const contacts = await contactsOperations.getAllContacts();
      console.table(contacts);
      break;

    case "get":
      const contact = await contactsOperations.getContactById(id);
      console.log(contact);
      break;

    case "add":
      const newContact = await contactsOperations.addContact({
        name,
        email,
        phone,
      });
      console.log(newContact);
      break;

    case "remove":
      const removeContact = await contactsOperations.removeContactById(id);
      console.log(removeContact);
      break;

    case "update":
      const rmvContact = await contactsOperations.updateContact(id);
      console.log(updateContact);
      break;

    default:
      console.log("Unknown action type!");
  }
};

module.exports = invokeAction;
