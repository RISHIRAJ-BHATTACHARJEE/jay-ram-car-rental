import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import { About } from "./About"
// import { Categories } from "./Categories"
import { CtaBanner } from "./CtaBanner"
import { Faq } from "./Faq"
import { Fleet } from "./Fleet"
import { Hero } from "./Hero"
import { HowItWorks } from "./HowItWorks"
import { Services } from "./Services"
import { Testimonials } from "./Testimonials"
import { WhyChoose } from "./WhyChooseUs"

export const Home = () => {
    return (
        <div>
            <Header />
            <Hero />
            <About />
            <Services />
            <Fleet />
            {/* <Categories /> */}
            <HowItWorks />
            <WhyChoose />
            <Faq />
            <Testimonials />
            <CtaBanner />
            <Footer />
        </div>
    )
}