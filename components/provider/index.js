
import { ethers } from "ethers";

import React, { createContext, useContext, useEffect, useState } from "react";

const MainContext = createContext()

const pageReload = () => {
    window.location.reload();
  };
  
  const handleAccount = (ethereum) => async () => {
    const isLocked = !(await ethereum._metamask.isUnlocked());
    if (isLocked) {
      pageReload();
    }
  };
  
  const setGlobalListeners = (ethereum) => {
    ethereum.on("chainChanged", pageReload);
    ethereum.on("accountsChanged", handleAccount(ethereum));
  };
  
  const removeGlobalListeners = (ethereum) => {
    ethereum?.removeListener("chainChanged", pageReload);
    ethereum?.removeListener("accountsChanged", handleAccount);
  };


const WebThreeProvider = ({ children }) => {
  const [web3Api, setWeb3Api] = useState(createDefaultState());

  useEffect(() => {
    async function initWeb3() {
      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        // const contract = await loadContract("Marketplace", provider);
        const contract = "";
        const signer = provider.getSigner();
        const signedContract = contract.connect(signer);

        setTimeout(() => setGlobalListeners(window.ethereum), 500);
        setWeb3Api(
          createWeb3State({
            ethereum: window.ethereum,
            provider,
            contract: signedContract,
            isLoading: false,
          })
        );
      } catch (e) {
        console.error("Please, install web3 wallet");
        setWeb3Api((api) =>
          createWeb3State({
            ...api,
            isLoading: false,
          })
        );
      }
    }

    initWeb3();
    return () => removeGlobalListeners(window.ethereum);
  }, []);

    return (
        <MainContext.Provider value={web3Api}>
            {children}
        </MainContext.Provider>
    )
}

export function useWebThree() {
    return useContext(MainContext);
  }





