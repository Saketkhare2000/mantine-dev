import { Tabs } from '@mantine/core';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import ArtDetail from '../components/ArtDetail';
import Ownership from '../components/Ownership/index';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

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
          <Ownership />
        </Tabs.Tab>
      </Tabs>
    </div>
  );
};

export default Detail;
