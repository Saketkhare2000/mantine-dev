import { Tabs } from '@mantine/core';
import React, { useContext, useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import ArtDetail from '../components/ArtDetail';
import Ownership from '../components/Ownership/index';
import { ethers } from "ethers";

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { web3Modal } from '../lib/Web3Modal';
import { web3Context } from '../context';
import { FormDataInterface } from '../types';

const pageStyle = {
  maxWidth: '1350px',
  margin: 'auto',
  fontFamily: 'Plus Jakarta Sans',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  height: '100vh',
  marginTop: '10vh',
};

const Detail = () => {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormDataInterface>({
    address: undefined,
    contactSigned: false,
    ammount: 1,
    email: undefined,
    chain: 'Matic'
  });

  const { web3Data, setWeb3Data } = useContext(web3Context)

  const connectWallet = async () => {
    const instance = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(instance);
    const signer = provider.getSigner();

    setWeb3Data({ provider: provider, signer: signer })
    setLoggedIn(true)
  }

  const disconnectWallet = () => {
    setWeb3Data(null)
    setLoggedIn(false)


    web3Modal.clearCachedProvider();
  }

  const getData = async () => {
    console.log(web3Data)

    console.log(await web3Data?.signer.getAddress())
    console.log(await web3Data?.signer.getGasPrice())
    console.log(await web3Data?.signer.getBalance())
    console.log(await web3Data?.signer.getChainId())

    console.log(await web3Data?.provider.getGasPrice())
    console.log(await web3Data?.provider.listAccounts())
    // console.log(await provider.getAvatar(await signer.getAddress()))

    web3Data?.signer.getAddress().then((res) => {
      setFormData({ ...formData, address: res })
    })
  }


  useEffect(() => {
    if (web3Data?.provider?.on) {
      getData()

      // Subscribe to accounts change
      web3Data.provider.on("accountsChanged", (accounts: string[]) => {
        console.log(accounts);
      });

      // Subscribe to chainId change
      web3Data.provider.on("chainChanged", (chainId: number) => {
        console.log(chainId);
      });

      // Subscribe to provider connection
      web3Data.provider.on("connect", (info: { chainId: number }) => {
        console.log(info);
      });

      // Subscribe to provider disconnection
      web3Data.provider.on("disconnect", (error: { code: number; message: string }) => {
        console.log(error);
      });
    }
  }, [web3Data])



  return (
    <div style={pageStyle}>
      <Carousel width={'500px'} emulateTouch={true} infiniteLoop={true}>
        <div>
          <img src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=745&q=80" />
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=745&q=80" />
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=745&q=80" />
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=745&q=80" />
        </div>
      </Carousel>

      <Tabs style={{ flexGrow: 1, fontFamily: 'Plus Jakarta Sans' }} ml={'xl'} color="grape">
        <Tabs.Tab label="Details">
          <ArtDetail />
        </Tabs.Tab>
        <Tabs.Tab label="Ownership Status">
          {
            loggedIn
              ? (
                <div>
                  <button onClick={disconnectWallet}>Disconnect Wallet</button>
                  <button onClick={getData}>Get Data</button>
                  <Ownership formData={formData} setFormData={setFormData} />
                </div>
              )
              : (
                <div>
                  <button onClick={connectWallet}>Connect Wallet</button>
                </div>
              )
          }
        </Tabs.Tab>
      </Tabs>
    </div>
  );
};

export default Detail;
