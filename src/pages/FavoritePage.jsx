import {Flex, Box, Heading, Grid, HStack, VStack} from '@chakra-ui/react'
import { FavoriteCard } from "../components/FavoriteCard";
import {useEffect, useState} from "react";
import axios from "axios";

export default function FavoritePage({clickeFavorite}) {

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/films/favorite');
                setData(response.data);
            } catch (err) {
                console.log(err.message);
            }
        };

        fetchData();
    }, [data]);

    return (
        <Box ml="20px" mr="20px">
            <Heading as='h1' size={'4xl'} fontWeight='bold' ml={'50px'}>
                Избранное
            </Heading>
            <VStack align="start" spacing="20px" p="25px 0 140px 0">
                {data.map((film) => (
                    <FavoriteCard key={film.id} id={film.id} title={film.title} duration={film.duration} image={film.imageBytes} clickeFavorite={clickeFavorite}/>
                ))}
            </VStack>
        </Box>
    )
}