import {Flex, Box, Heading} from '@chakra-ui/react'
import {useEffect, useState} from 'react'
import {CheckboxGenre} from "../components/CheckboxGenre.jsx"
import {FilmList} from "../components/FilmList.jsx"
import axios from 'axios';

export default function HomePage({clickeFavorite}) {
    const [selectedGenres, setSelectedGenres] = useState([])

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/films');
                setData(response.data);
            } catch (err) {
                console.log(err.message);
            }
        };

        fetchData();
    }, []);

    return (
        <Box ml="20px" mr="20px">
            <Flex justify="flex-end" align="center">
                <CheckboxGenre
                    selectedGenres={selectedGenres}
                    setSelectedGenres={setSelectedGenres}
                />
            </Flex>
            <Heading as='h1' size={'4xl'} fontWeight='bold'>
                Фильмы
            </Heading>
            <FilmList selectedGenres={selectedGenres} films={data} clickeFavorite={clickeFavorite}/>
        </Box>
    )
}