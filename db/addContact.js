const { v4 } = require("uuid");

const updateContact = require("./updateContact");
const getAllContacts = require("./getAllContacts");

const addContact = async (data) => {
  const newContact = { ...data, id: v4() };
  const contacts = await getAllContacts();
  contacts.push(newContact);
  await updateContact(contacts);
  return newContact;
};

module.exports = addContact;
