const getAllContacts = require("./getAllContacts");
const updateContact = require("./updateContact");

const removeContactById = async (id) => {
  const contacts = await getAllContacts();
  const idx = contacts.findIndex((item) => item.id === id);
  if (idx === -1) {
    return null;
  }
  const newContact = contacts.filter((_, index) => index !== idx);
  await updateContact(newContact);
  return contacts[idx];
};

module.exports = removeContactById;
