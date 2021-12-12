const { v4 } = require("uuid");

const updateContact = require("./upgateContact");
const getAllContacts = require("./getAllContacts");

const addContact = async (data) => {
  const newContact = { ...data, id: v4() };
  const contacts = await getAllContacts();
  products.push(newContact);
  await updateContact(contacts);
  return newContact;
};

module.exports = addContact;
