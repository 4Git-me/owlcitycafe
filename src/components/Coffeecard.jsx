import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';


import coffee1 from '../assets/images/Cafe/coffee/cappuccino.png';
import coffee2 from '../assets/images/Cafe/coffee/latte_2.png';
import coffee3 from '../assets/images/Cafe/coffee/Flatwhite.png';

const coffeeData = [
  {
    image: coffee1,
    name: 'Cappuccino',
    price: 190,
  },
  {
    image: coffee2,
    name: 'Cinnamon Latte',
    price: 210,
  },
  {
    image: coffee3,
    name: 'Flat White',
    price: 200,
  },
];

const CoffeeCard = () => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg  ">
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        modules={[Pagination, Autoplay]}
        loop={true}
        className="h-full"
      >
        {coffeeData.map((coffee, index) => (
          <SwiperSlide key={index} className="relative">
            <img
              src={coffee.image}
              alt={coffee.name}
              className="w-full h-100 object-fill object-center"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-4 font-poppins">
              <span className="text-white text-lg font-semibold ">{coffee.name}</span>
              <br />
              <span className="text-white text-sm">₱ {coffee.price}</span>
            </div>
          </SwiperSlide>

          
        ))}
      </Swiper>
    </div>
  );
};

export default CoffeeCard;


  

