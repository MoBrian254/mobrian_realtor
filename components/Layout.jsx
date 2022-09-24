import Head from 'next/head';
import { Box, Container } from '@chakra-ui/react';

import Footer from './Footer';
import Navbar from './Navbar';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>MOBRealtor Demo</title>
      </Head>
      <Box maxWidth='1280px' m='auto'>
        <header>
          <Navbar />
        </header>
		<Container maxW='full' bg='white.600' centerContent>
        <main>{children}</main>
		</Container>
        <footer>
          <Footer />
        </footer>
      </Box>
    </>
  );
}
