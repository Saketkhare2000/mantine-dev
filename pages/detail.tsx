import { Group, Image, MantineProvider, Tabs } from '@mantine/core';
import React from 'react';
import ArtDetail from '../components/ArtDetail';
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
      <Image
        width={'500px'}
        radius="md"
        src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=745&q=80"
        alt="Random unsplash image"
      />

      <Tabs style={{ flexGrow: 1, fontFamily: 'Plus Jakarta Sans' }} ml={'xl'} color="grape">
        <Tabs.Tab label="Details">
          <ArtDetail />
        </Tabs.Tab>
        <Tabs.Tab label="Ownership Status">Messages tab content</Tabs.Tab>
      </Tabs>
    </div>
  );
};

export default Detail;
