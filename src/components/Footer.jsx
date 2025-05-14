import { Box, Center, Text }  from '@chakra-ui/react';

export const  Footer = () => {
    return (
        <Center height='91px' width='100%' axis='vertical'>
        <Box bg='#000000' height='91px' width='100%' alignContent={'center'} left='0px' position={'absolute'}>
            <Text color='#FFFFFF' fontSize='16px' font='Inter' p='0px 0px 0px 255px'>Фильмограф</Text>
        </Box>
        </Center>
    );
  }
  