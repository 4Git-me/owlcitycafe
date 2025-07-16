 import { motion } from "framer-motion";
import herocover from '../assets/images/Cafe/herocover.jpg';
 export default function Herotest() {
   return (
     <>
      
 <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img 
                    src={herocover} 
                    alt="Chill Brew Café Interior"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-5xl md:text-7xl font-poppin mb-6 leading-tight">
                        Welcome to
                        <span className="block text-amber-200 font-light italic">Owl City Café</span>
                    </h1>
                    
                    <p className="text-xl md:text-2xl mb-8 font-light leading-relaxed max-w-2xl mx-auto">
                        Where Night Owls and Early Birds Meet
                    </p>

                    <div className="flex flex-wrap justify-center gap-6 mb-12 text-sm md:text-base">
                        <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                            
                            <span>Open 24/6</span>
                        </div>
                        <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                         
                            <span>Zara St Bacolod City</span>
                        </div>
                        <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                          
                            <span>4.9/5 Rating</span>
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        {/* <Button 
                            onClick={onBookingClick}
                            size="lg"
                            className="bg-amber-600 hover:bg-amber-700 text-white px-12 py-6 text-lg font-semibold rounded-full shadow-2xl hover:shadow-amber-500/25 transform hover:scale-105 transition-all duration-300"
                        >
                            Book Your Table
                        </Button> */}
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div 
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
            >
                <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
                </div>
            </motion.div>
        </div>
     </>
   );
 }
 

