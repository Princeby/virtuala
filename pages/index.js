import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Hero from "@/components/hero"
import InfoWallet from "@/components/infowallet"
import Breadcrumbs from "@/components/breadcrumbs"
import WalletAddress from "@/components/walletaddress"
import OrderHistory from "@/components/orderhistory"
import Items from "@/components/items"
import Layout from "@/components/layout"

export default function Home() {
  return (
    <>
      <Layout>
            <Hero />
            <Breadcrumbs />
            <WalletAddress />
            <InfoWallet />
            <OrderHistory />
            <Items />
      </Layout>
    </>
  )
}
