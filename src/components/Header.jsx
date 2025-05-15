import {Flex, Heading} from '@chakra-ui/react';
import MenuItem from './MenuItem.jsx';

export const Header = () =>  {
    return (
        <Heading as="h1" fontSize="40px" fontWeight={"bold"} mb={'40px'} ml={'20px'} >
            <Flex gap="28px" p="35px 50px 0px 0px">
                <MenuItem to="/"  >Все фильмы</MenuItem>
                <MenuItem to="/favourite" >Избранное</MenuItem>
                <MenuItem to="/addMovie" >Добавить фильм</MenuItem>
            </Flex>
        </Heading>
            );
  }
  