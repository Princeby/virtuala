import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Hero from "@/components/hero"
import InfoWallet from "@/components/infowallet"
import Breadcrumbs from "@/components/breadcrumbs"
import WalletAddress from "@/components/walletaddress"
import OrderHistory from "@/components/orderhistory"
import Items from "@/components/items"
import Layout from "@/components/layout"
import { getAllProperty } from "@/content/fetcher"


export default function Home({properties}) {
  return (
    <>
      <Layout>
            <Hero />
            <Breadcrumbs />
            <Items properties={properties} />
      </Layout>
    </>
  )
}



export async function getStaticProps() {
  const { data } = getAllProperty()
  return {
    props: {
      properties: data
    }
  }
}
