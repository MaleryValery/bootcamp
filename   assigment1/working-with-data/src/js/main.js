import { contacts } from "../data/contacts.js";

console.log(contacts);

const sortContactatsByName = (contactsArr) => {
  return [...contactsArr].sort((contact1, contact2) => {
    if (contact1.name.last > contact2.name.last) return 1;
    if (contact1.name.last < contact2.name.last) return -1;
    return 0;
  });
};

const reverseContacts = (contactsArr) => {
  const reversedArr = [];
  for (let i = contactsArr.length - 1; i >= 0; i--) {
    reversedArr.push(contactsArr[i]);
  }
  return reversedArr;
};

const getFirstFiveContacts = (contactsArr) => {
  const sortedContacts = sortContactatsByName(contactsArr);
  return sortedContacts.slice(0, 5);
};

const getUniqueContactsName = (contactsArr) => {
  return contactsArr.map((contact) => contact.name.first).filter((name, i, arr) => i === arr.indexOf(name));
};

const createFullNamesArray = (contactsArr) => {
  return contactsArr.map((contact) => `${contact.name.first} ${contact.name.last}`);
};

const printContectEmail = (contactsArr) => {
  return contactsArr.forEach((contact) => {
    console.log(contact.email);
  });
};

const getContactById = (contactsArr, idObj) => {
  return contactsArr.find((contact) => JSON.stringify(contact.id) === JSON.stringify(idObj));
};

const countContactsFromOneCountry = (contactsArr, countryStr) => {
  return contactsArr.reduce((acc, contact) => (acc = contact.location.country === countryStr ? acc + 1 : acc), 0);
};

const getContactsParticularAge = (contactsArr, ageMin, ageMax) => {
  return contactsArr.reduce((acc, contact) => {
    if (contact.dob.age >= ageMin && contact.dob.age <= ageMax) return [...acc, contact];
    return acc;
  }, []);
};

sortContactatsByName(contacts.results);
reverseContacts(contacts.results);
getFirstFiveContacts(contacts.results);
getUniqueContactsName(contacts.results);
createFullNamesArray(contacts.results);
printContectEmail(contacts.results);
getContactById(contacts.results, { name: "BSN", value: "54866958" });
countContactsFromOneCountry(contacts.results, "New Zealand");
getContactsParticularAge(contacts.results, 25, 35);
