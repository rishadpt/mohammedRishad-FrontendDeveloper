import { VStack } from '@chakra-ui/react';
import Banner from './HomeSections/Banner/Banner';


export default function Home() {
  return (
    <VStack gap={{ base: '50px', sm: '80px', md: '150px' }}>
      <Banner />
    </VStack>
  );
}
