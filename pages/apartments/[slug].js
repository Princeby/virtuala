import BulletPoints from "@/components/apartment/bulletpoints"
import Property from "@/components/apartment/properties"
import Modal from "@/components/apartment/modal"
import PropertyHero from "@/components/apartment/hero"
import Layout from "@/components/layout"



export default function Apartment() {

    return (
        <Layout>
            <PropertyHero />
            <BulletPoints />
            <Property />
            <Modal />
        </Layout>
    )
}