import Manifest from '@mnfst/sdk';
import './style.css';

const itemList = document.getElementById("item-list");

// ITEM functions
async function addItem() {
  let newItem = document.createElement('li');
  const resp = await fetch("item.html");
  const html = await resp.text();
  newItem.insertAdjacentHTML("beforeend", html);
  itemList.appendChild(newItem);
}

window.addItem = () => {addItem();} // Dev Tool!!!

// POPUP Functions
window.showPopup = () => {
  document.getElementById("popup").style.display = "block";
}

window.hidePopup = () => {
  document.getElementById("popup").style.display = "none";
} 



// Initialize client with default backend URL: http://localhost:1111.
const manifest = new Manifest();

// Get all items.
// const items = await manifest.from('items').find();

// console.log(items.data);

// for (let item of items.data) {
//   console.log(item.name);
// }

