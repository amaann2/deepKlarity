import AboutMe from "../Components/AboutMe/AboutMe"
import Footer from "../Components/Footer/Footer"
import Hero from "../Components/Hero/Hero"
import MyProject from "../Components/MyProject/MyProject"
import Services from "../Components/Services/Services"
import Testimonial from "../Components/Testimonial/Testimonial"
import Contact from "../Components/contact/Contact"

const Home = () => {
    return (
        <>
            <div className="container">
                <Hero />
                <AboutMe />
                <Services />
                <MyProject />
            </div>
            <Testimonial />
            <div className="container">
                <Contact />
            </div>
            <Footer />
        </>
    )
}

export default Home