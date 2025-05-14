import { Icon, Box, Text, Flex, Image, Link } from "@chakra-ui/react"
import { SlClock } from "react-icons/sl";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";


export default function FilmCard(data) {

  const handleClickStar = () => {

    if (data.star) {
      return <Icon color='#F9A62B' fontSize='20px'><FaStar /></Icon>
    } else {
      return <Icon color='#F9A62B' fontSize='20px'><CiStar /></Icon>
    }
  }
const colorsGenre = (data) => {
    if (data.type === 'Боевик') {
  return <Text bg={'#EA92631F'} borderRadius={'24px'} p='0px 12px' color='#E26C2D'>{data.type}</Text>
}
  if (data.type === 'Драма') {
    return <Text bg={'#958F8F1F'} borderRadius={'24px'} p='0px 12px' color='#958F8F'>{data.type}</Text>
  }
  if (data.type === 'Триллер') {
    return <Text bg={'#49B64E1F'} borderRadius={'24px'} p='0px 12px' color='#49B64E'>{data.type}</Text>
  }
  return console.log('' +
      ''
  )}

  return (
    <Box maxW="350px" borderWidth="1px" rounded="10px" minH="325px">
    <Image src={data.imageUrl} alt={data.imageAlt} rounded="8px 8px 0 0 "/>
    <Flex p='30px 40px 30px 20px' direction='column' gap='10px'>
      <Link fontSize="24px" fontWeight="bold">{data.title}</Link>
      <Flex justify={"space-between"} align={'center'}>
        <Text bg={'#EA92631F'} borderRadius={'24px'} p='0px 12px' color='#E26C2D' onClick={colorsGenre}>{data.type}</Text>
        <Flex align={'center'} gap="8px"><SlClock />{data.duration} мин.</Flex>
        <Icon color='#F9A62B' fontSize='20px' onClick={handleClickStar}><FaStar /></Icon>
      </Flex>
    </Flex>
    </Box>
  )
}
  