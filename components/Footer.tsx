import {
    Box,
    chakra,
    Container,
    Link,
    SimpleGrid,
    Stack,
    Text,
    VisuallyHidden,
    Input,
    IconButton,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { ReactNode } from 'react';
  import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
 
  
  
  const SocialButton = ({
    children,
    label,
    href,
  }: {
    children: ReactNode;
    label: string;
    href: string;
  }) => {
    return (
      <chakra.button
        bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
        rounded={'full'}
        w={8}
        h={8}
        cursor={'pointer'}
        as={'a'}
        href={href}
        display={'inline-flex'}
        alignItems={'center'}
        justifyContent={'center'}
        transition={'background 0.3s ease'}
        _hover={{
          bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
        }}>
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    );
  };
  
  const ListHeader = ({ children }: { children: ReactNode }) => {
    return (
      <Text fontWeight={'500'} fontSize={'lg'} mb={2} color={'##082854'}>
        {children}
      </Text>
    );
  };
  
  export default function Footer() {
    return (
      <Box
        bg={useColorModeValue('gray.50', 'gray.900')}
        color={useColorModeValue('gray.700', 'gray.200')}>
        <Container as={Stack} maxW={"8xl"} minH={'50vh'} py={10}>
          <SimpleGrid
            templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 2fr' }}
            spacing={8}>
            <Stack spacing={6}>
             <Text fontSize={'md'}>
                Rahisi
              </Text>
              <Text fontSize={'14px'}>Open an account in minutes, get full financial control for much longer.</Text>
              <Stack direction={'row'} spacing={6}>
                <SocialButton label={'Twitter'} href={'#'}>
                  <FaTwitter />
                </SocialButton>
                <SocialButton label={'YouTube'} href={'#'}>
                  <FaYoutube />
                </SocialButton>
                <SocialButton label={'Instagram'} href={'#'}>
                  <FaInstagram />
                </SocialButton>
              </Stack>
            </Stack>
            <Stack ml={'180px'} align={'flex-start'}>
              <ListHeader>Product</ListHeader>


              <Link href={'#'}>Features</Link>
              <Link href={'#'}>Security</Link>
              <Link href={'#'}>Get App</Link>
              <Link href={'#'}>Nightly</Link>
            </Stack>
            <Stack ml={'60px'} align={'flex-start'}>
              <ListHeader>Status</ListHeader>

              <Link href={'#'}> Get Involved</Link>
              <Link href={'#'}>About</Link>
              <Link href={'#'}>Media Kit</Link>
              <Link href={'#'}>Blog</Link>
            </Stack>
            <Stack ml={'120px'} align={'flex-start'}>
              <ListHeader>About</ListHeader>
              <Link href={'#'}>Jobs</Link>
              <Link href={'#'}>Terms of Service</Link>
              <Link href={'#'}>Affiliate</Link>
              <Link href={'#'}>Kontist Foundation</Link>
            </Stack>
          </SimpleGrid>
          <Text pt={6} fontSize={'sm'} textAlign={'center'}>
          © 2023 Rahisi Technologies. All rights reserved
        </Text>
        </Container>
      </Box>
    );
  }
