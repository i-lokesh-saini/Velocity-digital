import Navbar from '../component/layout/Navbar';
import Home from '../sections/landingPage/Home';
import About from '../sections/landingPage/About';
import Services from '../sections/landingPage/Services';
import TrustedBy from '../sections/landingPage/TrustedBy';
import WorkFlow from '../sections/landingPage/WorkFlow';
import Field from '../sections/landingPage/Field';
import Team from '../sections/landingPage/Team';
import OurWork from '../sections/landingPage/OurWork';
import Testimonial from '../sections/landingPage/Testimonial';
import Questions from '../sections/landingPage/Questions';
import Contact from '../sections/landingPage/Contact';
import Footer from '../component/layout/Footer';



function LandingPage() {
    return (
        <>
            <Navbar />
            <Home />
            <TrustedBy />
            <About />
            <Services />
            <WorkFlow />
            <OurWork />
            <Field />
            <Team />
            <Testimonial />
            <Questions />
            <Contact />
            <Footer />
        </>
    );
}

export default LandingPage;