import { Grid } from '@chakra-ui/react'
import FilmCard from './FilmCard.jsx'


export const FilmList = ({ selectedGenres = [] , films = [], clickeFavorite}) => {

    const filteredMovies = selectedGenres.length === 0
        ? films
        : films.filter(movie => selectedGenres.includes(movie.type))

    return (
        <Grid templateColumns="repeat(3, 348.4px)" justifyContent="center" gap="60px 50px" p="25px 0 140px 0">
            {filteredMovies.map(movie => (
                <FilmCard
                    key={movie.id}
                    id={movie.id}
                    image={movie.imageBytes}
                    title={movie.title}
                    type={movie.type}
                    duration={movie.duration}
                    isFavorite={movie.isFavorite}
                    clickeFavorite = {clickeFavorite}
                />
            ))}
        </Grid>
    )
}