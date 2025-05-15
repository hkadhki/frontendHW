import {Icon, Box, Text, Flex, Image} from "@chakra-ui/react"
import { Link } from 'react-router-dom';
import {SlClock} from "react-icons/sl";
import {CiStar} from "react-icons/ci";
import {FaStar} from "react-icons/fa6";
import {useState} from "react";
import {useNavigate} from "react-router-dom";


export default function FilmCard({
                                     id,
                                     image ,
                                     title ,
                                     type ,
                                     duration,
                                     isFavorite = Boolean,
                                     clickeFavorite
                                 })
{
    const [isFavoriteState, setIsFavoriteState] = useState(isFavorite);
    const navigate = useNavigate();
    const handleClickStar = (isFav) => {
        if (isFav) {
            return <Icon color='#F9A62B' fontSize='20px'><FaStar/></Icon>
        } else {
            return <Icon color='#F9A62B' fontSize='20px'><CiStar/></Icon>
        }
    }
    const colorsGenre = (type) => {
        if (type === 'Боевик') {
            return <Text bg={'#EA92631F'} borderRadius={'24px'} p='0px 12px' color='#E26C2D'>{type}</Text>
        }
        if (type === 'Драма') {
            return <Text bg={'#958F8F1F'} borderRadius={'24px'} p='0px 12px' color='#958F8F'>{type}</Text>
        }
        if (type === 'Триллер') {
            return <Text bg={'#49B64E1F'} borderRadius={'24px'} p='0px 12px' color='#49B64E'>{type}</Text>
        }
        return console.log('' +
            ''
        )
    }

    return (
        <Box maxW="350px" borderWidth="1px" rounded="10px" minH="325px"  >
            <Image src={`data:image/png;base64,${image}`} alt={title} rounded="8px 8px 0 0 " />
            <Flex p='30px 40px 30px 20px' direction='column' gap='10px'>
                <Text fontSize="24px" fontWeight="bold" onClick={() => navigate("/details/" + id)}>{title}</Text>
                <Flex justify={"space-between"} align={'center'}>
                    <Text bg={'#EA92631F'} borderRadius={'24px'} p='0px 12px' color='#E26C2D'
                          onClick={colorsGenre}>{type}</Text>
                    <Flex align={'center'} gap="8px"><SlClock/>{duration} мин.</Flex>
                    <Icon color='#F9A62B' fontSize='20px' onClick={() => {
                        clickeFavorite(id)
                        setIsFavoriteState(!isFavoriteState)
                     }}>{handleClickStar(isFavoriteState)}</Icon>
                </Flex>
            </Flex>
        </Box>
    )
}
  