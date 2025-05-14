import { HStack, Checkbox } from '@chakra-ui/react'
import React from 'react'

export const CheckboxGenre = ({selectedGenres = [String], setSelectedGenres = () => {}}) => {
    const genres = [
        { name: "Боевик", color: "orange" },
        { name: "Триллер", color: "green" },
        { name: "Комедия", color: "blue" },
        { name: "Драма", color: "red" }
    ]

    // Обработчик изменения состояния чекбокса
    const handleGenreChange = (genre, isChecked) => {
        if (isChecked) {
            setSelectedGenres([...selectedGenres ,genre ])
            console.log(selectedGenres)
        } else {
            setSelectedGenres([...selectedGenres.filter(g => g !== genre)])
            console.log(selectedGenres)
        }
    }

    return (
        <HStack align={"center"}>
            {genres.map(({name, color}) => (
                <Checkbox.Root
                    key={name}  // Added unique key prop
                    colorPalette={color}
                    onChange={(e) => handleGenreChange(name, e.target.checked)}
                >
                    <Checkbox.HiddenInput />
                    <Checkbox.Control rounded={"full"} borderColor={color} />
                    <Checkbox.Label>{name}</Checkbox.Label>
                </Checkbox.Root>
            ))}
        </HStack>
    )
}