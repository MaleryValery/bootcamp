import { contacts } from "../data/contacts.js";

/*************** array methods  *******************/

const sortContactatsByName = (contactsArr) => {
  return [...contactsArr].sort((contact1, contact2) => {
    if (contact1.name.last.toLowerCase() > contact2.name.last.toLowerCase()) return 1;
    if (contact1.name.last.toLowerCase() < contact2.name.last.toLowerCase()) return -1;
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
  return contactsArr
    .map((contact) => contact.name.first)
    .filter((name, i, arr) => i === arr.indexOf(name));
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
  return contactsArr.reduce(
    (acc, contact) => (acc = contact.location.country === countryStr ? acc + 1 : acc),
    0
  );
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
// printContectEmail(contacts.results);
getContactById(contacts.results, { name: "BSN", value: "54866958" });
countContactsFromOneCountry(contacts.results, "New Zealand");
getContactsParticularAge(contacts.results, 25, 35);

/*************** search contacts  *******************/

const createHTMLEl = (parent, tab, className, content) => {
  const el = document.createElement(tab);
  el.className = className;
  el.innerHTML = content || "";
  parent.append(el);
  return el;
};

const mainEl = document.querySelector(".main");
const formEl = document.querySelector(".form");
const inputEl = document.querySelector(".form__input");

const createContactCard = (contactObj) => {
  return `<div class="card">
  <div class="card__image-wrapper"><img src="${contactObj.picture.thumbnail}" alt=""></div>
    <div class="card__content-wrapper">
      <h4 class="content__bio">${contactObj.name.first} ${contactObj.name.last}</h4>
      <p class="content__age">age: ${contactObj.dob.age}</p>
      <p class="content__email">${contactObj.email}</p>
      <p class="content__location">${contactObj.location.city} ${contactObj.location.country}</p>
      <p class="content__phone">${contactObj.phone}</p>
    </div>
  </div>
</div>`;
};

const searchContacts = (contactsArr, valueStr) => {
  if (isNaN(valueStr))
    return contactsArr.filter(
      (contact) =>
        contact.name.first.toLowerCase().includes(valueStr) ||
        contact.name.last.toLowerCase().includes(valueStr)
    );

  return contactsArr.filter((contact) => contact.phone.includes(valueStr));
};

const showSearchResult = (parent, value) => {
  const resultContainerEl = createHTMLEl(parent, "div", "search-result__wrapper");
  const searchResultArr = searchContacts(contacts.results, value);

  searchResultArr.forEach((contact) =>
    resultContainerEl.insertAdjacentHTML("beforeend", createContactCard(contact))
  );

  if (!searchResultArr.length) resultContainerEl.textContent = "Contacts are not found 👀";
};

const removeSearchResult = () => {
  const prevResult = document.querySelector(".search-result__wrapper");
  if (prevResult) prevResult.remove();
};

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  removeSearchResult();
  showSearchResult(mainEl, inputEl.value);
});

inputEl.addEventListener("input", (e) => {
  if (e.target.value === "") removeSearchResult();
});
