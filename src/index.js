import Manifest from '@mnfst/sdk';
import './style.css';

import Favicon from './seclogo.png';

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
  newItem.childNodes[1].firstChild.setAttribute('onclick', "showPopup(" + String(num) + ")");
  newItem.firstChild.firstChild.textContent=name;
  itemList.appendChild(fragment);
}

function clearItems() {
  itemList.replaceChildren();
}

function setItems() {
  for (let i = items.data.length - 1; i >= 0; i--) {
    addItem(items.data[i].name, i);
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
window.showPopup = (index) => {
  
  document.getElementById("popup").style.display = "block";
  // console.log(popup);
  // popup.;
  let title = items.data[index].name;
  document.getElementById("popup-title").textContent=title;
}

window.hidePopup = (index) => {
  document.getElementById("popup").style.display = "none";
} 

// DEV TOOLS --------------------------------------
window.addItem = (name, num) => {addItem(name, num);}
window.setItems = () => {setItems();}
window.refreshItems = () => {refreshItems();}


// On load -----------------------------------------------
// Set Favicon
let fav = document.createElement('link');
fav.rel = 'shortcut icon';
fav.href = Favicon;
document.head.appendChild(fav);

refreshItems();
console.log("running!");
console.log(items.data);
