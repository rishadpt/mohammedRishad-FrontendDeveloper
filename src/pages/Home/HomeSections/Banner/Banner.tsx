import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLayoutEffect, useState } from 'react';
import SelectInput from '../../../../components/InputFields/SelectInput/SelectInput';
import { capsuleStatusList, originalLaunchList,capsuleTypeList } from './banner.data';
import bannerImage1 from '../../../../assets/images/Home/banner image 1.png';
import bannerImage2 from '../../../../assets/images/Home/banner image 2.png';
import bannerImage3 from '../../../../assets/images/Home/banner image 3.png';
import bannerImage4 from '../../../../assets/images/Home/banner image 4.png';
import bannerImage5 from '../../../../assets/images/Home/banner image 5.png';

const bannerLength = 8;
const bannerImagesDesktop = [
  bannerImage1,
  bannerImage2,
  bannerImage3,
  bannerImage4,
  bannerImage5,
  bannerImage4,
  bannerImage2,
];
const bannerTitle: string[] = [
  'Capsules',
  'Rockets',
];

const AnimatedBox = motion(Box);

export default function Banner() {
  const navigate = useNavigate();
  const [bannerIndex, setBannerIndex] = useState<number>(0);

  const { register, handleSubmit } = useForm({ mode: 'onChange' });

  const onBannerSubmission = (data) => {
    console.log({ data });
    const { location, service } = data;
    if (location || service) {
      navigate(`/search?location=${location}&service=${service}`);
    }
  };

  useLayoutEffect(() => {
    const bannerInterval = setInterval(() => {
      setBannerIndex((prev: number) =>
        prev < bannerLength - 1 ? prev + 1 : 0
      );
    }, 4000);

    return () => clearInterval(bannerInterval);
  }, []);

  return (
    <Box
      h={{ base: 'max-content' }}
      w='100%'
      h={{lg:'100vh'}}

    >
 

      <Flex w='100%' pos='relative' h='100%' rounded='xl'   >
        <Box
          w='100%'
          h='100%'
          pos='absolute'
          rounded='xl'
          overflow='hidden'
          _after={{
            content: '""',
            w: '100%',
            h: '100%',
            bg: 'rgba(0,0,0,0.6)',
            pos: 'absolute',
            top: 0,
            left: 0,
            zIndex: 10,
          }}
        >
          <Image
            src={bannerImagesDesktop[bannerIndex]}
            w='100%'
            h='100%'
            objectFit='cover'
            objectPosition='center'
          />
        </Box>
        <Flex
          alignItems='center'
          flexDir={{ base: 'column', lg: 'row' }}
          gap={{ base: 5, md: 20 }}
          px={{ base: 4, sm: 16 }}
          py={{ base: 4, lg: 0 }}
        >
          <VStack
            alignItems='flex-start'
            justifyContent='center'
            h='100%'
            pos='static'
            zIndex={20}
            flexShrink={2}
            textAlign={{ base: 'center', md: 'left' }}
          >
            <Heading variant='primary' w='100%'>
              Wanna get the Details <br /> About Rocket & Capsules?
            </Heading>
            <Text variant='description' color='white'>
            Embark on a thrilling space journey with our curated selection of rockets, capsules, and SpaceX missions. Experience awe-inspiring launches, Discover the captivating realm beyond Earth's atmosphere.
              <br />
              <strong>
          EXPLORE NOW
              </strong>
              <br />

            </Text>
          </VStack>

          {/* Search Form */}
          <VStack
            w={{ base: '100%', md: '30rem', xl: '40rem' }}
            gap={{ base: 1, sm: 4 }}
            py={{ base: 3, sm: 6 }}
            px={{ base: 4, sm: 8 }}
            bg='white'
            rounded='xl'
            alignItems='flex-start'
            pos='static'
            zIndex={20}
            height='max-content'
            my={{ base: 0, md: 4, lg: 8 }}
          >
            <VStack alignItems='flex-start' gap={{ base: 0, sm: 1 }} w='100%'>
              <Heading variant='tertiary' display='flex' overflow='hidden'>
                Find the{' '}
                <AnimatedBox
                  initial={{
                    y: '-100%',
                  }}
                  animate={{
                    y: ['100%', '0%', '0%', '0%', '-100%'],
                  }}
                  transition={{
                    duration: 4,
                    ease: 'easeInOut',
                    repeat: Infinity,
                  }}
                  color='brand.primary.300'
                  ml='0.5rem'
                >
                  {bannerTitle[bannerIndex]}
                </AnimatedBox>
              </Heading>
              <Heading variant='tertiary'>you need in 1 minute</Heading>
            </VStack>

            <SelectInput
              label='status?'
              list={capsuleStatusList}
              register={register('status')}
            />
            <SelectInput
              label='OriginalLaunch?'
              list={originalLaunchList}
              register={register('original_launch')}
            />
                 <SelectInput
              label='Type?'
              list={capsuleTypeList}
              register={register('type')}
            />

            <Button
              variant='solid'
              ml={0}
              onClick={handleSubmit(onBannerSubmission)}
            >
              Search
            </Button>
          </VStack>
        </Flex>
      </Flex>
    </Box>
  );
}
