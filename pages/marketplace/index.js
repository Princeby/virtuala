import { useState, useEffect } from "react"
import InfoWallet from "@/components/infowallet"
import { getAllProperty } from "@/content/fetcher"
import Items from "@/components/items"
import Button from "@/components/button"
import Layout from "@/components/layout"
import 'react-toastify/dist/ReactToastify.css';
import { ethers } from 'ethers';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import abi from 'Marketplace.json';





export default function Marketplace({properties}) {
    // const [provider, setProvider] = useState(null);
    const [selectedAddress, setSelectedAddress] = useState(null);

    // useEffect(() => {
    //     //Check if MetaMask is available
    //     if (window.ethereum) {
    //       const provider = new ethers.providers.Web3Provider(window.ethereum);
    //       setProvider(provider);
    
    //       // Get the user's Ethereum address
    //       provider.getSigner().getAddress().then((address) => {
    //         setSelectedAddress(address);
    //       });
    //     } else {
    //       console.log('MetaMask not detected.');
    //     }
    //   }, []);

    //   const purchaseProperty = async (property) => {
    //     if (!provider) {
    //       console.log('No Ethereum provider available.');
    //       return;
    //     }
    
    //     // const signer = provider.getSigner();
    
    //     try {
    //       const contractAddress = '0xe78A74F2701d07B8393e02a93EA0292F8D947e2D';
    //       const contractABI = abi.abi; // Replace with your contract ABI
    
    //       const contract = new ethers.Contract(contractAddress, contractABI, signer);
    
    //       const transaction = await contract.executeSale(property.tokenId, {
    //         value: ethers.utils.parseEther(property.price.toString()), // Convert price to Wei
    //       });
    
    //       await transaction.wait();
    
    //       toast.success('Property purchased successfully!');
    //     } catch (error) {
    //       console.error('Error purchasing property:', error);
    //       toast.error('Error purchasing property.');
    //     }
    //   },[]);
    return (
        <>
            <Layout>
                <section className="lg:2/6 my-40 text-center">
                    <div className="text-6xl font-bold text-gray-900 leading-none">
                        Marketplace
                    </div>
                </section>
                <Items
                    properties={properties}
                    Footer={({ property }) => 
                        <div className="mt-4">
                            <Button onClick={() => purchaseProperty(property)}>
                                {`${property.price} ETH`}
                            </Button>
                        </div>
                    }
                />
            </Layout>
        </>
    )
}

export async function getStaticProps() {
    const { data } = getAllProperty()
    return {
      props: {
        properties: data,
      }
    }
  }