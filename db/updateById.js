const updateContact = require("./updateContact");
const getAllContacts = require("./getAllContacts");

const updateById = async ({ id, name, price }) => {
  const contacts = await getAllContacts();
  const idx = contacts.findIndex((item) => item.id === id);
  if (idx === -1) {
    return null;
  }
  contacts[idx] = { id, name, price };
  await updateContact(contacts);
  return contacts[idx];
};

module.exports = updateById;
