import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import {Box} from '@chakra-ui/react';


export default function MainLayout() {

  const { pathname } = useLocation();



  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);


  return (
    <>
      <Box>
      <Outlet />
      </Box>
    </>
  );
}
