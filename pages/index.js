import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Hero from "@/components/hero"
import InfoWallet from "@/components/infowallet"
import Breadcrumbs from "@/components/breadcrumbs"
import WalletAddress from "@/components/walletaddress"
import OrderHistory from "@/components/orderhistory"
import Items from "@/components/items"

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="relative bg-white overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="fit">
            <Hero />
            <Breadcrumbs />
            <WalletAddress />
            <InfoWallet />
            <OrderHistory />
            <Items />
            <Footer />
          </div>
        </div>
      </div>
    </>
  )
}
