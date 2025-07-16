import foodPanda from "../assets/images/Logo/FP.png"
export default function FoodpandaButton() {
  return (
    <button
      className="fixed bottom-6 right-6 z-50 bg-white shadow-lg rounded-full p-3 hover:scale-105 transition-transform duration-300"
      onClick={() => window.open("https://www.foodpanda.com", "_blank")}
    >
    
      <img
        src={foodPanda}
        alt="Foodpanda"
        className="w-16 h-16 object-contain"
      />
    </button>
  );
}
