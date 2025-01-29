import Manifest from '@mnfst/sdk';
import './style.css';


// POPUP Functions
window.showPopup = () => {
  document.getElementById("popup").style.display = "block";
}

window.hidePopup = () => {
  document.getElementById("popup").style.display = "none";
} 

const itemList = document.getElementById("item-list");

// Initialize client with default backend URL: http://localhost:1111.
const manifest = new Manifest();

// Get all items.
// const items = await manifest.from('items').find();

// console.log(items.data);

// for (let item of items.data) {
//   console.log(item.name);
// }

