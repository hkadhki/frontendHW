import { Flex, Box } from '@chakra-ui/react'
import { useState } from 'react'
import { CheckboxGenre } from "../components/CheckboxGenre.jsx"
import { FilmList } from "../components/FilmList.jsx"

export default function HomePage() {
    const [selectedGenres, setSelectedGenres] = useState([])


    return (
        <Box ml="20px" mr="20px">
            <Flex justify="flex-end" align="center">
                <CheckboxGenre
                    selectedGenres={selectedGenres}
                    setSelectedGenres={setSelectedGenres}
                />
            </Flex>
            <FilmList selectedGenres={selectedGenres} />
        </Box>
    )
}