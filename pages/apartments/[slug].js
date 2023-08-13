import BulletPoints from "@/components/apartment/bulletpoints"
import Property from "@/components/apartment/properties"
import Modal from "@/components/apartment/modal"
import PropertyHero from "@/components/apartment/hero"
import Layout from "@/components/layout"
import { getAllProperty } from "@/content/fetcher"



export default function Apartment({property}) {

    return (
        <Layout>
            <PropertyHero
                title={property.title}
                description={property.description}
                image={property.coverImage}
            />
            <BulletPoints
                points={property.features}    
            />
            <Property status={true} />
            <Modal />
        </Layout>
    )
}

export function getStaticPaths() {
    const { data } = getAllProperty()

    return {
        paths: data.map(c => ({
            params: {
                slug: c.slug
            }
        })),
        fallback: false
    }
}

export async function getStaticProps({params}) {
    const { data } = getAllProperty()

    const property = data.filter(c => c.slug === params.slug)[0]

    return {
      props: {
        property
      }
    }
  }