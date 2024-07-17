import "../home/Home.css"
import Hero from "../../Components/hero/Hero";
import Features from "../../Components/features/Features";

const Home = () => {
    return (
        <div className="homeWrapper">
            <Hero />
            <Features />
        </div>
    );
  };
  
  export default Home