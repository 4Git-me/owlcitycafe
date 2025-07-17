import { useState } from 'react';
import { motion } from "framer-motion";
import { FiCoffee } from 'react-icons/fi';
import { GiNoodles, GiFullPizza, GiFrenchFries, GiIceCube } from 'react-icons/gi';
import { MdFreeBreakfast } from 'react-icons/md';
const allMenuItems = {
  'Hot Drinks': [
    {
      name: 'Americano',
      image: 'https://images.unsplash.com/photo-1669872484166-e11b9638b50e?w=500&auto=format&fit=crop&q=60',
      price: 100,
    },
    {
      name: 'Latte',
      image: 'https://images.unsplash.com/photo-1632595508805-bd7b9ce74173?w=500&auto=format&fit=crop&q=60',
      price: 120,
    },
    {
      name: 'Flat White',
      image: 'https://images.unsplash.com/photo-1710400656915-51cddad11d35?w=500&auto=format&fit=crop&q=60',
      price: 130,
    },
    {
      name: 'Mocha',
      image: 'https://images.unsplash.com/photo-1506372023823-741c83b836fe?w=500&auto=format&fit=crop&q=60',
      price: 130,
    },
    {
      name: 'Cappuccino',
      image: 'https://images.unsplash.com/photo-1693645758592-207a36b28896?w=500&auto=format&fit=crop&q=60',
      price: 150,
    },
    {
      
      name: 'Vanilla Twilight Latte',
      image: 'https://images.unsplash.com/photo-1630040995437-80b01c5dd52d?w=500&auto=format&fit=crop&q=60',
      price: 150,
    },
  ],
  'Cold Drinks': [
    {
      name: 'Crumble Fantasy',
      image: 'https://images.unsplash.com/photo-1624781748172-7151704a42b5?w=500&auto=format&fit=crop&q=60',
      price: 120,
    },
    {
      name: 'Eclipse Delight',
      image: 'https://images.unsplash.com/photo-1648071597664-ffabc1e1c13b?w=500&auto=format&fit=crop&q=60',
      price: 130,
    },
    {
      name: 'Midnight Cocoa',
      image: 'https://images.unsplash.com/photo-1584680744830-465a1dcd78e1?w=500&auto=format&fit=crop&q=60',
      price: 130,
    },
    {

      name: 'Oreo Twilight',
      image: 'https://images.unsplash.com/photo-1627998691167-4dab0dfcae9f?w=500&auto=format&fit=crop&q=60',
      price: 140,
    },
    {
      name: 'Silken Chocolate',
      image: 'https://images.unsplash.com/photo-1577805947697-89e18249d767?w=500&auto=format&fit=crop&q=60',
      price: 140,
    },
    {
      name: 'Velvet Bliss',
      image: 'https://images.unsplash.com/photo-1587099417292-221f4fe59679?w=500&auto=format&fit=crop&q=60',
      price: 150,
    },
  ],
  Fries: [
    {
      name: 'Regular Fries',
      image: 'https://images.unsplash.com/photo-1574235059676-1eb6663f8ba6?w=500&auto=format&fit=crop&q=60',
      price: 60,
    },
    {
      name: 'Spicy Fries',
      image: 'https://images.unsplash.com/photo-1733907502022-3ec7de6dc86e?w=500&auto=format&fit=crop&q=60',
      price: 80,
    },
    {
      name: 'Wink Fries',
      image: 'https://images.unsplash.com/photo-1639744091981-2f826321fae6?w=500&auto=format&fit=crop&q=60',
      price: 90,
    },
  ],
  Pizza: [
    {
      name: 'Margherita',
      image: 'https://images.unsplash.com/photo-1585238342024-78d387f4a707?w=500&auto=format&fit=crop&q=60',
      price: 200,
    },
    {
      name: 'Pepperoni',
      image: 'https://images.unsplash.com/photo-1670757781705-9b6cb1ad0ca6?w=500&auto=format&fit=crop&q=60',
      price: 220,
    },
    {
      name: 'Presciutto',
      image: 'https://images.unsplash.com/photo-1700760934249-93efbb574d23?w=500&auto=format&fit=crop&q=60',
      price: 250,
    },
  ],
  'Break Fast': [
    {
      name: 'Egg Sandwich',
      image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=500&auto=format&fit=crop&q=60',
      price: 120,
    },
    {
      name: 'Strawberry Pancake',
      image: 'https://images.unsplash.com/photo-1600326145552-327f74b9c189?w=500&auto=format&fit=crop&q=60',
      price: 140,
    },
    {
      name: 'Omelet Bacon',
      image: 'https://images.unsplash.com/photo-1559394473-f5c8303a6d1f?w=500&auto=format&fit=crop&q=60',
      price: 150,
    },
  ],
  Noodles: [
    {
      name: 'Ramen W/Egg',
      image: 'https://images.unsplash.com/photo-1731460202531-bf8389d565f7?w=500&auto=format&fit=crop&q=60',
      price: 120,
    },
    {
      name: 'Beef W/Egg',
      image: 'https://images.unsplash.com/photo-1735187393519-2989ddc4c32c?w=500&auto=format&fit=crop&q=60',
      price: 130,
    },
    {
      name: 'Regular w/ Egg',
      image: 'https://images.unsplash.com/photo-1603033172872-c2525115c7b9?w=500&auto=format&fit=crop&q=60',
      price: 110,
    },
    {
      name: 'Shrimp W/Egg',
      image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=500&auto=format&fit=crop&q=60',
      price: 140,
    },
    {
      name: 'Spicy W/Egg',
      image: 'https://images.unsplash.com/photo-1597933593749-fba737c268c1?w=500&auto=format&fit=crop&q=60',
      price: 135,
    },
    {
      name: 'White Noodle',
      image: 'https://images.unsplash.com/photo-1733907557440-e8f8e179cd56?w=500&auto=format&fit=crop&q=60',
      price: 125,
    },
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
    <div className="p-6 max-w-7xl mx-auto font-poppins mt-20 mb-50">
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
