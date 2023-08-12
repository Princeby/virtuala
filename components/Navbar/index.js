import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import abi from '../../Marketplace.json'

const navigation = [
  { name: "Home", href: "/" },
  { name: "Marketplace", href: "/marketplace" },
  { name: "Sell Property", href: "/sellpage" },
];


const notification = () =>  toast.success('Wallet is connected', {
  position: "top-center",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
  });

const noMetamask = () => toast.error('Please install Metamask!', {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });

    


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentAccount, setCurrentAccount] = useState("");

  const connectWallet = async () => {
    // This function connects the user's MetaMask wallet to the application.
  
    const { ethereum } = window;
  
    if (!ethereum) {
      // Check if the user has MetaMask installed.
      console.log("please install MetaMask");
      noMetamask();
      return
    }
  
    const accounts = await ethereum.request({
      // Request the user's accounts from MetaMask.
      method: 'eth_requestAccounts'
    });
  
    // Set the current account to the first account in the list.
    setCurrentAccount(accounts[0]);
  
    // Display a notification to the user that their wallet has been connected.
    notification();
    console.log(currentAccount)
  };

  return (
    <>
      {/* <div className="bg-white"> */}
      <ToastContainer
              position="top-center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
        <header className="absolute inset-x-0 top-0 z-50 max-w-9xl mx-auto mb-1 ">
          <nav
            className="flex items-center justify-between p-6 lg:px-8"
            aria-label="Global"
          >
            <div className="flex lg:flex-1">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">virtuala</span>
                <Image
                  className="h-32 w-auto"
                  src="/assets/logo/logo_transparent.png"
                  alt=""
                  width="128"
                  height="128"
                />
              </a>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                onClick={() => setIsOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <a
                href="#"
                className="text-sm px-2 py-2 font-medium leading-6 border rounded-md text-white bg-orange-600 hover:bg-orange-700"
                onClick={(event) => {
                  event.preventDefault();
                  connectWallet();
                }}
              >
                Connect Wallet <span aria-hidden="true"></span>
              </a>
            </div>
          </nav>
          <Dialog
            as="div"
            className="lg:hidden"
            open={isOpen}
            onClose={setIsOpen}
          >
            <div className="fixed inset-0 z-50" />
            <Dialog.Panel
              className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
            >
              <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">
                    virtuala
                  </span>
                  <img
                    className="h-32 w-auto"
                    src="/assets/logo/logo_transparent.png"
                    alt=""
                  />
                </a>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="sr-only">
                    Close menu
                  </span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                  <div className="py-6">
                    <a
                      href="#"
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Connect Wallet
                    </a>
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
        </header>
      {/* </div> */}
    </>
  );
}
