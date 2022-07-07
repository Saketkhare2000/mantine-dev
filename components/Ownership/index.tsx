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
import { MinusIcon, PlusIcon } from '@modulz/radix-icons';
import React, { useContext, useRef } from 'react';
import { SiBuymeacoffee, SiEthereum } from 'react-icons/si';
import { MdOutlinePolymer, MdPolymer } from 'react-icons/md';
import styles from './style.module.css';
import { web3Context } from '../../context';
import { FormDataInterface } from '../../types';

const Ownership = ({ formData, setFormData }: { formData: FormDataInterface; setFormData: (data: FormDataInterface) => void }) => {
  const amountRef = useRef<HTMLInputElement>(null);
  const { web3Data } = useContext(web3Context)


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
                WETH to MATIC here.
              </List.Item>
            </List>
          </Accordion.Item>
        </Accordion>
        <Group mt={'md'} direction="column" grow className={styles.inputGroup}>
          <InputWrapper id="wallet-add" size="sm" label="METAMASK WALLET">
            <Input radius={'md'} size={'md'} id="wallet-add" disabled value={formData.address} placeholder="0x16c0...3223" />
          </InputWrapper>
          <InputWrapper id="email" size="sm" label="EMAIL ADDRESS">
            <Input radius={'md'} type={'email'} size={'md'} id="email" placeholder="Your email"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setFormData({ ...formData, email: e.target.value }) }}
              value={formData.email} />
          </InputWrapper>
        </Group>
        <Group direction="row">
          <InputWrapper id="Price" size="md" label="PRICE (PER ARTFI NFT)">
            <Select
              label=""
              required
              searchable
              value={formData.chain}
              onChange={(res) => { if (res) setFormData({ ...formData, chain: res }) }}
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
                value={formData.ammount}
                ref={amountRef}
                style={{ flexGrow: 1 }}
                size="md"
                id="input-demo"
                placeholder="Number of NFTs"
                invalid={formData.ammount < 0 ? true : false}
              />
              <ActionIcon
                onClick={() => setFormData({ ...formData, ammount: formData.ammount - 1 })}
                size={'xl'}
                radius={'md'}
                color={'gray'}
                variant="outline"
              >
                <MinusIcon />
              </ActionIcon>
              <ActionIcon
                onClick={() => setFormData({ ...formData, ammount: formData.ammount + 1 })}
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
          checked={formData.contactSigned}
          onChange={() => {
            if (!formData.contactSigned) {
              web3Data?.signer.signMessage("I have read and confirmed the Terms of Sale.").then((res: string) => {
                setFormData({ ...formData, contactSigned: true })
                console.log(res)
              }).catch((err) => {
                setFormData({ ...formData, contactSigned: false })
                console.log(err);
              })
            } else {
              setFormData({ ...formData, contactSigned: false })
            }
          }}
          label="I have read and confirmed the Terms of Sale"
          color="grape"
        />
        <Button color={'grape'} disabled={formData.contactSigned ? false : true}>
          Buy with {formData.chain}
        </Button>
      </Group>
    </>
  );
};

export default Ownership;
