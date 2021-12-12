const getAllContacts = require("./getAllContacts");
const updateProducts = require("./updateProducts");

const removeContact = async (id) => {
  const contacts = await getAllContacts();
  const idx = contacts.findIndex((item) => item.id === id);
  if (idx === -1) {
    return null;
  }
  const newContact = contacts.filter((_, index) => index !== idx);
  await updateContact(newContact);
  return contacts[idx];
};

module.exports = removeContact;
