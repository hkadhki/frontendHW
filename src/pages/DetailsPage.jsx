import {
    Badge,
    Box,
    Button,
    Flex,
    Heading,
    HStack,
    Icon,
    IconButton,
    Image,
    Spacer,
    Stack,
    Tag,
    Text,
    VStack
} from "@chakra-ui/react";
import ImageCard from '../../../../../WebstormProjects/untitled2/src/assets/card-img.png'
import {SlClock} from "react-icons/sl";
import {FaStar} from "react-icons/fa6";
import {useEffect, useState} from "react";
import axios from "axios";
import {Link, useParams} from "react-router-dom";
import {CiStar} from "react-icons/ci";


export const DetailsPage = ({clickeFavorite}) => {

    const {id} = useParams();
    const [data, setData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/films/' + id);
                setData(response.data);
                setIsFavoriteState(data.isFavorite);

            } catch (err) {
                console.log(err.message);
            }
        };
        fetchData();
    }, []);
    const [isFavoriteState, setIsFavoriteState] = useState(data.isFavorite);



    const handleClickStar = (isFav) => {
        if (isFav) {
            return <Icon color='#F9A62B' fontSize='20px'><FaStar/></Icon>
        } else {
            return <Icon color='#F9A62B' fontSize='20px'><CiStar/></Icon>
        }
    }

    return (
        <Box maxW="5xl" mx="auto" p={'0px 6px 6px 6px'} borderRadius="lg">
            <Stack direction={{base: "column", md: "row"}} spacing={6}>
                <Box flexShrink={0}>
                    <Image
                        src={`data:image/png;base64,${data.imageBytes}`}
                        alt={data.title}
                        borderRadius="lg"
                        boxSize="360px"
                        objectFit="cover"
                    />
                    <HStack justify="space-between" h="full"> </HStack>
                </Box>
                <VStack align="start" spacing={3} flex="1" ml={'30px'}>
                    <HStack justify="space-between" w="full" mb={'15px'}>
                        <Text fontSize="4xl" fontWeight="bold">
                            {data.title}
                        </Text>
                        <Icon color='#F9A62B' fontSize='20px' onClick={() => {
                            clickeFavorite(id)
                            setIsFavoriteState(!isFavoriteState)
                        }}>{handleClickStar(isFavoriteState)}</Icon>
                    </HStack>
                    <HStack spacing={3} mb={'10px'}>
                        <Text bg={'#EA92631F'} borderRadius={'24px'} p='0px 12px' color='#E26C2D'
                              mr={'15px'}>{data.type}</Text>
                        <HStack spacing={1}>
                            <SlClock/>
                            <Text fontSize="sm">{data.duration} минут</Text>
                        </HStack>
                    </HStack>
                    <Text fontSize="sm" mb={'40px'}>
                        {data.description}
                    </Text>
                    <HStack spacing={4} justify="flex-end" w="full">
                        <Button size="xs" p={'1px 10px'} fontSize="13px" color={'#4A61DD'} as={Link} to={`/edit/${id}`}>
                            Редактировать
                        </Button>
                        <Button size="xs" fontSize="13px" color={'#4A61DD'} onClick={() =>
                            axios.delete("http://localhost:8080/films/" + id)
                        }>
                            Удалить
                        </Button>
                    </HStack>
                </VStack>
            </Stack>

        </Box>
    );
}

