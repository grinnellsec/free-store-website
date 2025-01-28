import Manifest from '@mnfst/sdk';
import './style.css';

// Initialize client with default backend URL: http://localhost:1111.
const manifest = new Manifest();

// Get all items.
const items = await manifest.from('items').find();

// console.log(items.data);

for (let item of items.data) {
  console.log(item.name);
}

const itemList = document.getElementById("item-list");
