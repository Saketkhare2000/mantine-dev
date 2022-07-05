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
  Divider,
  Checkbox,
  Select,
} from '@mantine/core';
import { ChevronDownIcon, MinusIcon, PlusIcon } from '@modulz/radix-icons';
import React, { useRef, useState } from 'react';
import { SiBuymeacoffee, SiEthereum } from 'react-icons/si';
import { MdOutlinePolymer, MdPolymer } from 'react-icons/md';
import styles from './style.module.css';

const Ownership = () => {
  const amountRef = useRef<HTMLInputElement>(null);
  const [inputVal, setInputVal] = useState(1);
  const [value, setValue] = useState('');
  const [checked, setChecked] = useState(false);

  return (
    <>
      <Group>
        <Avatar color={'violet'} size={'lg'} radius="xl">
          <SiBuymeacoffee size={'32px'} />
        </Avatar>
        <h1 className="heading">Order Summary</h1>
      </Group>
      <Group direction="column">
        <Accordion mt={'md'} className={styles.accordion} iconPosition="right">
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
            <Select
              label=""
              required
              searchable
              value={value}
              onChange={() => setValue}
              placeholder="Choose your chain"
              data={[
                { value: 'Ethereum', label: 'Ethereum' },
                { value: 'W ETH', label: 'W ETH' },
                { value: 'Matic', label: 'Matic' },
              ]}
            />
          </InputWrapper>
          <InputWrapper id="Price" size="md" label="Price">
            <Select
              label=""
              icon={<MdPolymer />}
              placeholder="Price"
              data={[
                { value: '12 Matic', label: '12 Matic' },
                { value: '25 Eth', label: '25 Eth' },
              ]}
            />
          </InputWrapper>
          =
        </Group>
        <Group grow direction="row">
          <InputWrapper size="md" id="input-demo" label="Amount">
            <Group>
              <Input
                value={inputVal}
                ref={amountRef}
                style={{ flexGrow: 1 }}
                size="md"
                id="input-demo"
                placeholder="Number of NFTs"
                invalid={inputVal < 0 ? true : false}
              />
              <ActionIcon
                onClick={() => setInputVal(inputVal - 1)}
                size={'xl'}
                radius={'md'}
                color={'gray'}
                variant="outline"
              >
                <MinusIcon />
              </ActionIcon>
              <ActionIcon
                onClick={() => setInputVal(inputVal + 1)}
                size={'xl'}
                radius={'md'}
                color={'gray'}
                variant="outline"
              >
                <PlusIcon />
              </ActionIcon>
            </Group>
          </InputWrapper>
        </Group>
        <Group mt={'md'} position="apart" style={{ width: '50%', alignItems: 'flex-start' }}>
          <Text className={styles.priceTotal}>TOTAL</Text>
          <Group direction="column">
            <Text className="body">Matic 12.35</Text>
            <Text className="body">$1500</Text>
          </Group>
        </Group>
      </Group>
      <Divider my="sm" />
      <Group>
        <Checkbox
          checked={checked}
          onChange={(event) => setChecked(event.currentTarget.checked)}
          label="I have read and confirmed the Terms of Sale"
          color="grape"
        />
        <Button color={'grape'} disabled={checked ? false : true}>
          Buy with {value}
        </Button>
      </Group>
    </>
  );
};

export default Ownership;
