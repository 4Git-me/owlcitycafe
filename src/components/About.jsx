import cafeambiance from '../assets/images/Cafe/cafe2.jpg'
import { FaMugHot, FaHeart, FaUsers } from 'react-icons/fa';
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="py-24 ">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-poppins text-stone-800 mb-8">
                            Our Story
                        </h2>
                        
                        <div className="space-y-6 text-lg text-stone-600 leading-relaxed">
                            <p>
                                Founded in 2018 by coffee enthusiasts Samantha and Jake, Owl City Cafe started with a simple idea: to be a welcoming spot where night owls and early birds could meet, relax, and enjoy great coffee any time of day.
                                From the start, we’ve believed that good coffee brings people together. That’s why we carefully source quality beans and craft each cup with care and consistency.
                            </p>
                            
                            <p>
                               More than just a café, we’ve become a cozy corner for students pulling late-night study sessions, early risers catching the first light, and friends sharing stories over a warm brew.
                            </p>
                            
                            <p>
                                For six years, our passion has stayed the same - to serve comfort, connection, and community, one cup at a time.
                                We invite you to come by, find your favorite spot, and feel right at home at Owl City Cafe.
                            </p>
                        </div>

                        {/* Values */}
                        <div className="grid md:grid-cols-3 gap-6 mt-12">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <FaMugHot className="w-8 h-8 text-amber-600" />
                                </div>
                                <h3 className="font-semibold text-stone-800 mb-2">Quality First</h3>
                                <p className="text-sm text-stone-600">Premium beans, expert roasting</p>
                            </div>
                            
                            <div className="text-center">
                                <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <FaHeart className="w-8 h-8 text-rose-600" />
                                </div>
                                <h3 className="font-semibold text-stone-800 mb-2">Made with Love</h3>
                                <p className="text-sm text-stone-600">Every cup crafted with care</p>
                            </div>
                            
                            <div className="text-center">
                                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <FaUsers className="w-8 h-8 text-emerald-600" />
                                </div>
                                <h3 className="font-semibold text-stone-800 mb-2">Community Hub</h3>
                                <p className="text-sm text-stone-600">Where friendships bloom</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                            <img 
                                src={cafeambiance}
                                alt="Cafe Ambiance"
                                className="w-full h-[600px] object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        </div>
                        
                        {/* Floating Stats */}
                        <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 border border-stone-100">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-amber-600 mb-1">5K+</div>
                                <div className="text-sm text-stone-600">Happy Customers</div>
                            </div>
                        </div>
                        
                        <div className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl p-6 border border-stone-100">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-[#00303F] mb-1">6</div>
                                <div className="text-sm text-stone-600">Years Serving</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
  );
}
