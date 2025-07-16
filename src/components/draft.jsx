<div className="max-w-6xl mx-auto px-4 mt-15">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
          
          {/* Feature 1 */}
          <div className="flex flex-col items-center">
            <div className="bg-[#FBE8B3] p-6 rounded-full mb-4">
              <FaMugHot className="text-[#FF6A00] text-3xl" />
            </div>
            <h3 className="font-semibold text-lg">Quality First</h3>
            <p className="text-sm text-gray-700">Premium beans, expert roasting</p>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-center">
            <div className="bg-[#FAD8D8] p-6 rounded-full mb-4">
              <FaHeart className="text-red-600 text-3xl" />
            </div>
            <h3 className="font-semibold text-lg">Made with Love</h3>
            <p className="text-sm text-gray-700">Every cup crafted with care</p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-center">
            <div className="bg-[#D6F4CE] p-6 rounded-full mb-4">
              <FaUsers className="text-green-600 text-3xl" />
            </div>
            <h3 className="font-semibold text-lg">Community Hub</h3>
            <p className="text-sm text-gray-700">Where friendships bloom</p>
          </div>

        </div>
      </div>




 <div className="md:col-span-6 relative w-full">
  <div className="p-3 h-full flex justify-center relative">
    
      {/* Overlapping Box at Top-Right */}
    <div className="absolute -top-4 right-2 sm:-top-4 sm:right-6 lg:-top-4 lg:right-6  xl:-top-4 xl:right-14 2xl:-top-4 2xl:right-25 bg-white shadow-lg rounded-md w-30 h-30 flex flex-col items-center justify-center text-center font-poppins z-10">
      <p className="text-[20px] font-bold text-[#00303F]">6</p>
      <p className="text-[12px]">Years Serving</p>
    </div>
    
    {/* Image */}
    <img
      className="object-cover object-center h-160 w-full max-w-[640px] rounded-md"
      src={cafeambiance}
      alt="Cafe Ambiance"
    />

     {/* Overlapping Box at Bottom-Left */}
    <div className="absolute bottom-2 lg:left-6 bg-white shadow-lg rounded-md w-40 h-28 flex flex-col items-center justify-center text-center font-poppins">
      <p className="text-[20px] font-bold text-[#FF9000]">5k +</p>
      <p className="text-[12px]">Happy Customers</p>
    </div>




  </div>
</div>
