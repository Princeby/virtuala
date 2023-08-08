import PropertyHero from "./hero"
import BulletPoints from "./bulletpoints"
import Property from "./properties"
import Modal from "./modal"
import { Modal } from "./modal"


export default function Apartment() {

    return (
        <div className="relative max-w-7xl mx-auto px-4">
            <PropertyHero />
            <BulletPoints />
            <Property />
            <Modal />
        </div>
    )
}