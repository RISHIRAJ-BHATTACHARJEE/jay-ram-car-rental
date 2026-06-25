import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import { AboutHero } from "./AboutHero"
import { Values } from "./Values"
import { VisionMission } from "./VisionMission"

export const About = () => {
    return (
        <div>
            <Header/>
            <AboutHero/>
            <VisionMission/>
            <Values/>
            <Footer/>
        </div>
    )
}