import {
  Accordion,
  Avatar,
  Button,
  Box,
  Group,
  Input,
  InputWrapper,
  List,
  Text,
  ActionIcon,
} from '@mantine/core';
import { ChevronDownIcon, MinusIcon, PlusIcon } from '@modulz/radix-icons';
import React, { useRef, useState } from 'react';
import { SiBuymeacoffee } from 'react-icons/si';
import { MdOutlinePolymer } from 'react-icons/md';
import styles from './style.module.css';

const Ownership = () => {
  const amountRef = useRef();
  const [inputVal, setInputVal] = useState(1);
  return (
    <>
      <Group>
        <Avatar color={'violet'} size={'lg'} radius="xl">
          <SiBuymeacoffee size={'32px'} />
        </Avatar>
        <h1 className="heading">Order Summary</h1>
      </Group>
      <Group direction="column">
        <Accordion
          mt={'md'}
          initialState={true}
          state={true}
          className={styles.accordion}
          iconPosition="right"
        >
          <Accordion.Item className={styles.accordianLabel} label="Important Points">
            <List type="ordered">
              <List.Item>Mint up to 50 ArtFi NFTs at a time.</List.Item>
              <List.Item>Please wait 60 seconds between each request.</List.Item>
              <List.Item>
                If you get an error message, please wait 60 seconds before trying again.
              </List.Item>
              <List.Item>
                You may experience issues minting with WETH.e. If the error persists, please swap
                WETH.e to MATIC here.
              </List.Item>
            </List>
          </Accordion.Item>
        </Accordion>
        <Group mt={'md'} direction="column" grow className={styles.inputGroup}>
          <InputWrapper id="wallet-add" size="sm" label="METAMASK WALLET">
            <Input radius={'md'} size={'md'} id="wallet-add" placeholder="0x16c0...3223" />
          </InputWrapper>
          <InputWrapper id="email" size="sm" label="EMAIL ADDRESS">
            <Input radius={'md'} type={'email'} size={'md'} id="email" placeholder="Your email" />
          </InputWrapper>
        </Group>
        <Group direction="row">
          <InputWrapper id="Price" size="md" label="PRICE (PER ARTFI NFT)">
            <Input component="select" size="md">
              <option value="Matic">Matic</option>
              <option value="Ethereum">Eth</option>
            </Input>
          </InputWrapper>
          <InputWrapper id="Price" size="md" label="Price">
            <Input component="select" size="md">
              <option value="Matic">12 Matic</option>
              <option value="Ethereum">23 Eth</option>
            </Input>
          </InputWrapper>
          =
        </Group>
        <Group grow direction="row">
          <InputWrapper size="md" id="input-demo" label="Amount">
            <Group>
              <Input
                value={inputVal}
                ref={amountRef}
                style={{ flexGrow: '1' }}
                size="md"
                id="input-demo"
                placeholder="Number of NFTs"
                invalid={inputVal < 0 ? true : false}
                error="Your credit card expired"
              />
              <ActionIcon
                onClick={() => setInputVal(inputVal - 1)}
                size={'xl'}
                color={'gray'}
                variant="outline"
              >
                <MinusIcon />
              </ActionIcon>
              <ActionIcon
                onClick={() => setInputVal(inputVal + 1)}
                size={'xl'}
                color={'gray'}
                variant="outline"
              >
                <PlusIcon />
              </ActionIcon>
            </Group>
          </InputWrapper>
        </Group>
      </Group>
    </>
  );
};

export default Ownership;
