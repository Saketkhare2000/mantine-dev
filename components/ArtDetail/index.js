import React from 'react';
import styles from './style.module.css';
import { BiCoin, BiHeart, BiImage } from 'react-icons/bi';
import { BsBrush, BsCalendarDate, BsCheckCircle, BsSearch, BsShieldLock } from 'react-icons/bs';
import { Avatar, Group, Image, Text } from '@mantine/core';
const ArtDetail = () => {
  return (
    <>
      {/* Artwork name and likes */}
      <div className={styles.header}>
        <h1 className="heading">Floral Artwork</h1>
        <div className={styles.likes}>
          <div className={styles.heart}>
            <BiHeart />
          </div>
          <span className="sub-heading">18</span>
        </div>
      </div>
      {/* Artwork author and price */}
      <Group mt={'30px'}>
        <div className={styles.author}>
          <Avatar
            mr={'md'}
            size={'md'}
            src="http://bsmedia.business-standard.com/_media/bs/img/article/2013-12/27/full/1388141874-5622.jpg"
            alt="it's me"
            radius={'xl'}
          />
          <span className="sub-heading">VS GAITONDE</span>
        </div>
        <span>|</span>
        <div className={styles.price}>
          <BiCoin style={{ marginRight: '8px' }} size={'24px'} color={'#85858C'} />
          <span className="sub-heading">PRICE</span>
          <span className={styles.priceVal}>1.3ETH</span>
        </div>
      </Group>
      {/* Artwork Detail */}
      <Text className="body" mt={'30px'}>
        Love is in the Air is a quintessential Banksy painting: instantly recognizable, the image
        has become synonymous with the artist’s indelible graphic style, wry humor and galvanizing
        political commentary
      </Text>
      {/* Artwork Metadata */}
      <div className={styles.artData}>
        <Group mt={'40px'} position="apart">
          <Group className={styles.artDataDetail}>
            <Avatar color={'violet'} size={'lg'} radius="xl">
              <BiImage size={'32px'} />
            </Avatar>
            <Group direction="column" style={{ gap: '0px' }}>
              <span className="title">ORIGINAL SIZE</span>
              <span className="body">35 ⅜ by 36 ⅜ in. 90 by 90 cm</span>
            </Group>
          </Group>
          <Group className={styles.artDataDetail}>
            <Avatar color={'violet'} size={'lg'} radius="xl">
              <BsShieldLock size={'32px'} />
            </Avatar>
            <Group direction="column" style={{ gap: '0px' }}>
              <span className="title">SIGNATURE</span>
              <span className="body">Signed on the ownership</span>
            </Group>
          </Group>
        </Group>
        <Group mt={'40px'} position="apart">
          <Group className={styles.artDataDetail}>
            <Avatar color={'violet'} size={'lg'} radius="xl">
              <BsCalendarDate size={'32px'} />
            </Avatar>
            <Group direction="column" style={{ gap: '0px' }}>
              <span className="title">DATE</span>
              <span className="body">06/05/2005</span>
            </Group>
          </Group>
          <Group className={styles.artDataDetail}>
            <Avatar color={'violet'} size={'lg'} radius="xl">
              <BsBrush size={'32px'} />
            </Avatar>
            <Group direction="column" style={{ gap: '0px' }}>
              <span className="title">MEDIUM</span>
              <span className="body">Oil and spray paint on canvas.</span>
            </Group>
          </Group>
        </Group>
        <Group mt={'40px'} position="apart">
          <Group className={styles.artDataDetail}>
            <Avatar color={'violet'} size={'lg'} radius="xl">
              <BsCheckCircle size={'32px'} />
            </Avatar>
            <Group direction="column" style={{ gap: '0px' }}>
              <span className="title">AUTHENTICITY</span>
              <span className="body">Love is in the Air is accompanied by a ...</span>
            </Group>
          </Group>
          <Group className={styles.artDataDetail}>
            <Avatar color={'violet'} size={'lg'} radius="xl">
              <BsSearch size={'32px'} />
            </Avatar>
            <Group direction="column" style={{ gap: '0px' }}>
              <span className="title">PROVENENCE</span>
              <span className="body">From the collection of shahrukh khan</span>
            </Group>
          </Group>
        </Group>
      </div>
    </>
  );
};

export default ArtDetail;
