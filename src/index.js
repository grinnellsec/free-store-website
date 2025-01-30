import Manifest from '@mnfst/sdk';
import './style.css';

const itemList = document.getElementById("item-list");

// Initialize client with default backend URL: http://localhost:1111.
const manifest = new Manifest();

// Get all items.
let items = await manifest.from('items').find();

// ITEM functions --------------------------------------

/**
 * Adds an item to the item-list.
 */
async function addItem(name, num) {
  // Create a DocumentFragment to append the newItem to.
  // This allows setting properties of child elements
  // without parsing the string.
  let fragment = new DocumentFragment();
  // Create a new list element (not in the DOM yet)
  let newItem = document.createElement('li');
  // Load item.html
  const resp = await fetch("item.html");
  // Get the text from item.html
  const html = await resp.text();
  // Insert the html from item.html between the list element
  newItem.insertAdjacentHTML("beforeend", html);
  // Add the list element to the fragment
  fragment.appendChild(newItem);
  // Add defining characteristics
  newItem.setAttribute('id', String(num));
  newItem.firstChild.firstChild.textContent=name;
  itemList.appendChild(fragment);
}

function clearItems() {
  itemList.replaceChildren();
}

function setItems() {
  let counter = 0;
  for (let item of items.data) {
    addItem(item.name, counter);
    counter += 1;
  }
}

/**
 * Refresh the item list.
 */
async function refreshItems() {
  items = await manifest.from('items').find();
  clearItems();
  setItems();
}

// POPUP Functions --------------------------------------
window.showPopup = () => {
  document.getElementById("popup").style.display = "block";
}

window.hidePopup = () => {
  document.getElementById("popup").style.display = "none";
} 

// DEV TOOLS --------------------------------------
window.addItem = (name, num) => {addItem(name, num);}
window.setItems = () => {setItems();}
window.refreshItems = () => {refreshItems();}


console.log("running!");
