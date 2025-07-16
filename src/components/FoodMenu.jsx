import { useState } from 'react';
import { motion } from "framer-motion";
import { FiCoffee } from 'react-icons/fi';
import { GiNoodles, GiFullPizza, GiFrenchFries, GiIceCube } from 'react-icons/gi';
import { MdFreeBreakfast } from 'react-icons/md';


//Import food Menu images
//Coffee Images
import americano from '../assets/images/Cafe/coffee/americano.png';
import latte from '../assets/images/Cafe/coffee/latte.png';
import Flatwhite from '../assets/images/Cafe/coffee/Flatwhite.png';
import mocha from '../assets/images/Cafe/coffee/mocha.png';
import cappuccino from '../assets/images/Cafe/coffee/cappuccino.png';
import vanilla from '../assets/images/Cafe/coffee/vanilla.png';
//Cold Drinks Images
import crumble from '../assets/images/Cafe/coldrinks/crumbleFantasy.jpg';
import eclipse from '../assets/images/Cafe/coldrinks/EclipseDelight.jpg';
import midnight from '../assets/images/Cafe/coldrinks/MidnightCocoa.jpg';
import Oreo from '../assets/images/Cafe/coldrinks/OreoTwilight.jpg';
import crumbleFantasy from '../assets/images/Cafe/coldrinks/SilkenChocolate.jpg';
import velvit from '../assets/images/Cafe/coldrinks/VelvetBliss.jpg';
//Fries Images
import fries1 from '../assets/images/Cafe/Fries/regular.jpg';
import fries2 from '../assets/images/Cafe/Fries/friesnugget.jpg';
import fries3 from '../assets/images/Cafe/Fries/winkfries.jpg';
// Pizza Images
import pizza1 from '../assets/images/Cafe/Pizza/margherita.jpg';
import pizza2 from '../assets/images/Cafe/Pizza/pepperoni.jpg';
import pizza3 from '../assets/images/Cafe/Pizza/presciutto.jpg';

// Breakfast Images
import breakfast1 from '../assets/images/Cafe/Breakfast/eggsandwich.jpg';
import breakfast2 from '../assets/images/Cafe/Breakfast/strawpancake.jpg';
import breakfast3 from '../assets/images/Cafe/Breakfast/omletbacon.jpg';

// Noodles Images
import noodles1 from '../assets/images/Cafe/Noodles/ramenegg.jpg';
import noodles2 from '../assets/images/Cafe/Noodles/beffegg.jpg';
import noodles3 from '../assets/images/Cafe/Noodles/regularwegg.jpg';
import noodles4 from '../assets/images/Cafe/Noodles/shrimpegg.jpg';
import noodles5 from '../assets/images/Cafe/Noodles/spicyegg.jpg';
import noodles6 from '../assets/images/Cafe/Noodles/whitenoodle.jpg';


// Lazy load the FoodMenu component

// Data with imported images
const allMenuItems = {
  'Hot Drinks': [
    { name: 'Americano', image: americano, price: 100 },
    { name: 'Latte', image: latte, price: 120 },
    { name: 'Flat White', image: Flatwhite, price: 130 },
    { name: 'Mocha', image: mocha, price: 130 },
    { name: 'Cappuccino', image: cappuccino, price: 140 },
    { name: 'Vanilla Twilight Latte', image: vanilla, price: 150 },
  ],
  'Cold Drinks': [
    { name: 'Crumble Fantasy', image: crumble, price: 120 },
    { name: 'Eclipse Delight', image: eclipse, price: 130 },
    { name: 'Midnight Cocoa', image: midnight, price: 130 },
    { name: 'Oreo Twilight', image: Oreo, price: 140 },
    { name: 'Silken Chocolate', image: crumbleFantasy, price: 140 },
    { name: 'Velvet Bliss', image: velvit, price: 150 },
  ],
  Fries: [
    { name: 'Regular Fries', image: fries1, price: 60 },
    { name: 'Fries Nugget', image: fries2, price: 80 },
    { name: 'Wink Fries', image: fries3, price: 90 },
  ],
  Pizza: [
    { name: 'Margherita', image: pizza1, price: 200 },
    { name: 'Pepperoni', image: pizza2, price: 220 },
    { name: 'Presciutto', image: pizza3, price: 250 },
  ],
  'Break Fast': [
    { name: 'Egg Sandwich', image: breakfast1, price: 120 },
    { name: 'Strawberry Pancake', image: breakfast2, price: 140 },
    { name: 'Omelet Bacon', image: breakfast3, price: 150 },
  ],
  Noodles: [
    { name: 'Ramen Egg', image: noodles1, price: 120 },
    { name: 'Beef Egg', image: noodles2, price: 130 },
    { name: 'Regular w/ Egg', image: noodles3, price: 110 },
    { name: 'Shrimp Egg', image: noodles4, price: 140 },
    { name: 'Spicy Egg', image: noodles5, price: 135 },
    { name: 'White Noodle', image: noodles6, price: 125 },
  ],
};

const categories = [
  { name: 'Hot Drinks', icon: <FiCoffee size={20} /> },
  { name: 'Cold Drinks', icon: <GiIceCube size={20} /> },
  { name: 'Fries', icon: <GiFrenchFries size={20} /> },
  { name: 'Pizza', icon: <GiFullPizza size={20} /> },
  { name: 'Break Fast', icon: <MdFreeBreakfast size={20} /> },
  { name: 'Noodles', icon: <GiNoodles size={20} /> },
];

export default function FoodMenu() {
  const [selectedCategory, setSelectedCategory] = useState('Hot Drinks');
  const [searchTerm, setSearchTerm] = useState('');

  // Combine all items into one array
  const allItems = Object.values(allMenuItems).flat();

  // Search logic: global
  const filteredItems = searchTerm
    ? allItems.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : allMenuItems[selectedCategory];

  return (
    <div className="p-6 max-w-7xl mx-auto font-poppins mt-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-5xl text-center font-poppins text-stone-800 mb-20">
          Our Menu
        </h2>
        {/* Categories Scrollable Pills */}
        <div className="flex gap-3 overflow-x-auto pb-2 mb-6 justify-start sm:justify-center scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => {
                setSelectedCategory(cat.name);
                setSearchTerm("");
              }}
              className={`flex items-center gap-2 px-4 py-2 whitespace-nowrap rounded-full transition-all shrink-0 ${
                selectedCategory === cat.name && !searchTerm
                  ? "bg-orange-500 text-white"
                  : "bg-white text-gray-700 hover:bg-orange-100"
              } shadow`}
            >
              {cat.icon}
              {cat.name}
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="flex justify-center mb-6">
          <input
            type="text"
            placeholder="Search any food or drink..."
            className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Mobile: Horizontal Scroll */}
        <div className="sm:hidden overflow-x-auto space-x-4 flex pb-4 -mx-2 px-2">
          {filteredItems.map((item, idx) => (
           
            <div
              key={idx}
              className="min-w-[250px] bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105"
            >
              <img
                src={item.image}
                alt={item.name}
                loading="lazy"
                className="w-full h-40 object-fill"
              />
              <div className="px-4 py-3">
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-600 mt-1">₱{item.price}.00</p>
              </div>
            </div>
         
          ))}
        </div>

        {/* Desktop: Grid Layout */}
        <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        
          {filteredItems.map((item, idx) => (
           
           <div
              key={idx}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105"
            >
              <img
                src={item.image}
                alt={item.name}
                 loading="lazy"
                className="w-full h-48 object-cover"
              />
              <div className="px-4 py-3">
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-600 mt-1">₱{item.price}.00</p>
              </div>
            </div>
          ))}
         
        </div>
      </motion.div>
      {/* Empty State */}
      {filteredItems.length === 0 && (
        <div className="text-center text-gray-400 text-lg mt-10">
          No items found.
        </div>
      )}
    </div>
  );
}
