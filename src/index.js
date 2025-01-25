import Manifest from '@mnfst/sdk'
import './style.css';

// Initialize client with default backend URL: http://localhost:1111.
const manifest = new Manifest()

// Get all cats.
const cats = await manifest.from('cats').find()

console.log(cats);