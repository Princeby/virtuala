import Web3Modal from "web3modal";
import {ethers} from "ethers"


const providerOptions = {

}

// export default async function connectWallet() {
//     try {
//       const web3Modal = new Web3Modal({
//         cacheProvider: false,
//         providerOptions,
//       });
//       const web3ModalInstance = await web3Modal.connect();
//       const web3ModalProvider = new ethers.providers.Web3Provider(web3ModalInstance.provider);
//       console.log(web3ModalProvider);
//     } catch (error) {
//       console.log(error);
//     }
//   }


export const connectWallet = async () => {
    try {
      const { ethereum } = window;
  
      if (!ethereum) {
        console.log("please install MetaMask");
        noMetamask();
        return
      }
  
      const accounts = await ethereum.request({
        method: 'eth_requestAccounts'
      });
  
      setCurrentAccount(accounts[0]);
      notification();
    } catch (error) {
      console.log(error);
    }
  }