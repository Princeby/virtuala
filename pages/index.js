import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Hero from "@/components/hero"
import InfoWallet from "@/components/infowallet"
import Breadcrumbs from "@/components/breadcrumbs"
import WalletAddress from "@/components/walletaddress"

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Breadcrumbs />
      <WalletAddress />
      <InfoWallet />
      <Footer />
    </>
  )
}
