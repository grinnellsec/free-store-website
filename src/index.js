import Manifest from '@mnfst/sdk';
import './style.css';

const itemList = document.getElementById("item-list");

// ITEM functions --------------------------------------

/**
 * Adds an item to the item-list.
 */
async function addItem(name, num) {
  // Create a new list element (not in the DOM yet)
  let newItem = document.createElement('li');
  // Load item.html
  const resp = await fetch("item.html");
  // Get the text from the file
  const html = await resp.text();
  // Insert the html from item.html between the list element
  newItem.insertAdjacentHTML("beforeend", html);
  // Add defining characteristics
  newItem.setAttribute('id', num);
  newItem.firstElementChild.firstElementChild.textContent=name;
  // Add the list element to the DOM
  itemList.appendChild(newItem);
}

/**
 * 
 */


// POPUP Functions --------------------------------------
window.showPopup = () => {
  document.getElementById("popup").style.display = "block";
}

window.hidePopup = () => {
  document.getElementById("popup").style.display = "none";
} 

// DEV TOOLS --------------------------------------
window.addItem = () => {addItem();}

// Initialize client with default backend URL: http://localhost:1111.
const manifest = new Manifest();

// Get all items.
const items = await manifest.from('items').find();

console.log(items.data);

for (let item of items.data) {
  console.log(item.name);
}

