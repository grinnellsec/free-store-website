import Manifest from '@mnfst/sdk';
import './style.css';
// Favicon import
import Favicon from './seclogo.png';

// The list element of all items.
const itemList = document.getElementById("item-list");

// Initialize client with default backend URL: http://localhost:1111.
const manifest = new Manifest();

// Get all items.
let items = await manifest.from('items').find();

// item.html
let itemHtml = await loadFileText('item.html');


// HELPERS ------------------------------

/**
 * Loads a file's text.
 * 
 * @param {String} filename 
 *    The name of the file (e.x. 'file.html')
 * @returns 
 *    The file's text.
 */
async function loadFileText(filename) {
  let Html = await fetch(filename);
  let HtmlText = await Html.text();
  return HtmlText;
}

// ITEM functions --------------------------------------

/**
 * Adds an item to the item-list.
 * 
 * @param {String} name 
 *    The name of the item.
 * @param {Number, String} num 
 *    The index number of the item.
 */
async function addItem(name, num) {
  // Create a DocumentFragment to append the newItem to.
  // This allows setting properties of child elements
  // without parsing the string.
  let fragment = new DocumentFragment();
  // Create a new list element (not in the DOM yet)
  let newItem = document.createElement('li');
  // Insert the html from item.html between the list element
  newItem.insertAdjacentHTML("beforeend", await itemHtml);
  // Add the list element to the fragment
  fragment.appendChild(newItem);
  // Add defining characteristics
  newItem.childNodes[1].firstChild.setAttribute('onclick', "showPopup(" + String(num) + ")");
  newItem.firstChild.firstChild.textContent=name;
  itemList.appendChild(fragment);
}

/**
 * Clear the item-list of all items.
 */
function clearItems() {
  itemList.replaceChildren();
}

/**
 * Add items based off of the data from manifest.
 */
function setItems() {
  for (let i = items.data.length - 1; i >= 0; i--) {
    addItem(items.data[i].name, i);
  }
}

/**
 * Refresh the item list from manifest.
 */
async function refreshItems() {
  items = await manifest.from('items').find();
  clearItems();
  setItems();
}

// POPUP Functions --------------------------------------

/**
 * Show the popup (item setting).
 * @param {Number} index 
 *    The index value of the item
 */
window.showPopup = (index) => {
  let popup = document.getElementById("popup");

  popup.insertAdjacentHTML("beforeend", itemHtml);

  let title = items.data[index].name;
  document.getElementById("popup-title").textContent=title;
  
  popup.style.display = "block";
}

/**
 * Hide the popup.
 */
window.hidePopup = () => {
  document.getElementById("popup").style.display = "none";
} 

// DEV TOOLS --------------------------------------
window.addItem = (name, num) => {addItem(name, num);}
window.setItems = () => {setItems();}
window.refreshItems = () => {refreshItems();}

// ON LOAD -----------------------------------------------
// Set Favicon
let fav = document.createElement('link');
fav.rel = 'shortcut icon';
fav.href = Favicon;
document.head.appendChild(fav);

refreshItems();
console.log("running!");
console.log(items.data);
