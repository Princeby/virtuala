import { useState, useEffect } from "react";

export default function InfoWallet() {
  const [ethPrice, setEthPrice] = useState(0);
  const [apartmentPrice, setApartmentPrice] = useState(109.54);
  const [conversionRate, setConversionRate] = useState(0);

  useEffect(() => {
    // Fetch the ETH price from an API
    fetch('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd')
      .then(response => response.json())
      .then(data => {
        setEthPrice(data.ethereum.usd);
      })
      .catch(error => {
        console.error('Error fetching ETH price:', error);
      });
  }, []);

  useEffect(() => {
    setConversionRate(apartmentPrice * ethPrice);
  }, [ethPrice, apartmentPrice]);

    return (
            <div className="grid grid-cols-4 mb-5">
                <div className="flex flex-1 items-stretch text-center">
                    <div className="p-10 border drop-shadow rounded-md">
                        <div>
                            <span className="text-2xl font-bold">ETH = ${ethPrice.toFixed(2)}</span>
                        </div>
                        <p className="text-xl text-gray-500">Current ETH Price</p>
                    </div>
                </div>
                <div className="flex flex-1 items-stretch text-center">
                    <div className="p-10 border drop-shadow rounded-md">
                        <div>
                            <span className="text-2xl font-bold">{apartmentPrice.toFixed(6)} ETH = ${conversionRate.toFixed(2)}</span>
                        </div>
                        <p className="text-xl text-gray-500">Property price</p>
                    </div>
                </div>
            </div>
    );
}