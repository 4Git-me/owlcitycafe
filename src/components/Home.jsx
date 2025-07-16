 import Hero from "./Hero";
import About from "./About";
import FoodMenu from "./FoodMenu";
import Reviews from "./Reviews";
import ContactUs from "./Contact";



export default function Home() {
  return (
    <>
     <div className="min-h-screen">
      <section >
        <Hero/>
      </section>

  

      <section className="" id="about">
        <About />
      </section>

      <section id="menu">
        <FoodMenu />
      </section>

      <section id="reviews">
        <Reviews />
      </section>

      <section id="contact">
        <ContactUs />
      </section>

        

            </div>
    </>
  );
}
