import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { motion } from "framer-motion";
const reviews = [
  {
    name: 'Sarah Mendoza',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    review:
      'Absolutely love the ambiance at Owlcity Cafe! Their cold brew is the best in town.',
  },
  {
    name: 'Carlos Santos',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    review:
      'Great coffee and even better customer service. A hidden gem in the city!',
  },
  {
    name: 'Alyssa Cruz',
    image: 'https://randomuser.me/api/portraits/women/65.jpg',
    review:
      'Every visit to Owlcity Cafe feels like a warm hug. Highly recommended for brunch lovers!',
  },
  {
    name: 'Mark Dela Cruz',
    image: 'https://randomuser.me/api/portraits/men/76.jpg',
    review:
      'Their matcha latte is unmatched. Cozy interiors and friendly staff make it perfect.',
  },
];

export default function Reviews() {
  const isSwiper = reviews.length > 3;

  return (
    
    <section className="mt-30 py-16">
      <motion.div
       initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >

     
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-amber-600 mb-10">
          What Our Customers Say
        </h2>

        {/* Mobile View: Swiper Carousel */}
        <div className="block lg:hidden">
          {isSwiper ? (
            <Swiper
              modules={[Pagination, Autoplay]}
              pagination={{ clickable: true }}
              spaceBetween={20}
              slidesPerView={1}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
              speed={700}
              breakpoints={{
                640: {
                  slidesPerView: 1.2,
                },
              }}
            >
              {reviews.map((review, index) => (
                <SwiperSlide key={index}>
                  <ReviewCard {...review} />
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <div className="flex flex-col gap-6">
              {reviews.map((review, index) => (
                <ReviewCard key={index} {...review} />
              ))}
            </div>
          )}
        </div>

        {/* Desktop View: Grid */}
        <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))}
        </div>
      </div>
       </motion.div>
    </section>

  );
}

// Reusable review card component
function ReviewCard({ name, image, review }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition-all duration-300 h-full">
      <div className="flex items-center mb-4">
        <img
          src={image}
          alt={name}
          className="w-14 h-14 rounded-full object-cover border-2 border-orange-400"
        />
        <div className="ml-4">
          <h3 className="text-md font-semibold text-gray-800">{name}</h3>
          <p className="text-sm text-orange-500">⭐️⭐️⭐️⭐️⭐️</p>
        </div>
      </div>
      <p className="text-gray-600 text-sm">{review}</p>
    </div>
  );
}
