// Importing flat icon images
import coffee from '../assets/images/Flaticons/coffee.png';
import icelatte from '../assets/images/Flaticons/iced-latte.png';
import fries from '../assets/images/Flaticons/french-fries.png';
import pizza from '../assets/images/Flaticons/pizza.png';
import breakfast from '../assets/images/Flaticons/english-breakfast.png';
import noodles from '../assets/images/Flaticons/noodles.png';

// Importing menu item images
import latte from '../assets/images/Cafe/coffee/latte.png';
import Flatwhite from '../assets/images/Cafe/coffee/Flatwhite.png';
import americano from '../assets/images/Cafe/coffee/americano.png';
import mocha from '../assets/images/Cafe/coffee/mocha.png';
import cappuccino from '../assets/images/Cafe/coffee/cappuccino.png';
import vanilla from '../assets/images/Cafe/coffee/vanilla.png';


const flatIconImages = [
  { src: coffee, alt: 'Coffee' },
  { src: icelatte, alt: 'Iced Latte' },
  { src: fries, alt: 'French Fries' },
  { src: pizza, alt: 'Pizza' },
  { src: breakfast, alt: 'English Breakfast' },
  { src: noodles, alt: 'Noodles' },
];

import React, { useState } from 'react';

const Menu = () => {
  const [selectedIcon, setSelectedIcon] = useState(null);
  const menuItems = [
    { name: 'Latte', price: 'P120' },
    { name: 'Flat White', price: 'P130' },
    { name: 'Americano', price: 'P120' },
    { name: 'Mocha', price: 'P130' },
    { name: 'Cappuccino', price: 'P140' },
    { name: 'Vanilla Twilight Latte', price: 'P150' },
  ];

  return (
    <section className="min-h-screen bg-beige-100 py-10 px-4 font-poppins">
      <h2 className="text-4xl md:text-5xl  text-center text-stone-800 mb-4 ">Our Menu</h2>
      <p className="text-center text-gray-600 mb-8">
        Discover our most beloved creations, crafted with premium ingredients and endless passion
      </p>
      <div className="flex justify-center mb-4 gap-5 mt-20">
        {flatIconImages.map((Icon, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setSelectedIcon(idx)}
            className={`w-16 h-16 flex items-center justify-center rounded-full text-black text-2xl shadow transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#b4580c] hover:bg-[#ffffff] hover:text-[#CDAC81] active:scale-95 ${selectedIcon === idx ? 'bg-white text-[#CDAC81]' : 'bg-[#CDAC81]'}`}
          >
            <img src={Icon.src} alt={Icon.alt} className="w-8 h-8" />
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto h-160 mt-20">
        {menuItems.map((item, index) => {
          // Map menu item to the correct imported image by index
          const images = [latte, Flatwhite, americano, mocha, cappuccino, vanilla];
          return (
            <div key={index} className="bg-[#A8B5A2] p-4 rounded-lg text-start">
              <img src={images[index]} alt={item.name} className="w-full h-48 object-fill rounded-md mb-2" />
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p className="text-gray-700">{item.price}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Menu;