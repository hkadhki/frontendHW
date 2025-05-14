
import ImageCard from '../../../../../WebstormProjects/untitled2/src/assets/card-img.png'
import ImageCard1 from '../../../../../WebstormProjects/untitled2/src/assets/card-img-1.png'
import ImageCard2 from '../../../../../WebstormProjects/untitled2/src/assets/card-img-2.png'
import ImageCard3 from '../../../../../WebstormProjects/untitled2/src/assets/card-img-3.png'
import ImageCard4 from '../../../../../WebstormProjects/untitled2/src/assets/card-img-4.png'
import ImageCard5 from '../../../../../WebstormProjects/untitled2/src/assets/card-img-5.png'
import ImageCard6 from '../../../../../WebstormProjects/untitled2/src/assets/card-img-6.png'
import ImageCard7 from '../../../../../WebstormProjects/untitled2/src/assets/card-img-7.png'
import ImageCard8 from '../../../../../WebstormProjects/untitled2/src/assets/card-img-8.png'
import { Grid } from '@chakra-ui/react'
import FilmCard from './FilmCard.jsx'

// Создаем массив фильмов с данными
const moviesData = [
    { id: 1, imageUrl: ImageCard, title: "Матрица", type: "Боевик", duration: "136", star: true },
    { id: 2, imageUrl: ImageCard1, title: "Безумный макс", type: "Боевик", duration: "88" },
    { id: 3, imageUrl: ImageCard2, title: "Джентельмены", type: "Драма", duration: "113" },
    { id: 4, imageUrl: ImageCard3, title: "Отступники", type: "Триллер", duration: "151" },
    { id: 5, imageUrl: ImageCard4, title: "Гладиатор", type: "Боевик", duration: "155" },
    { id: 6, imageUrl: ImageCard5, title: "Однажды в Голливуде", type: "Драма", duration: "161", star: true },
    { id: 7, imageUrl: ImageCard6, title: "Предложение", type: "Комедия", duration: "108" },
    { id: 8, imageUrl: ImageCard7, title: "Малышка на миллион", type: "Драма", duration: "132", star: true },
    { id: 9, imageUrl: ImageCard8, title: "Ларри Краун", type: "Комедия", duration: "98" }
]



export const FilmList = ({ selectedGenres = [] }) => {
    const filteredMovies = selectedGenres.length === 0
        ? moviesData
        : moviesData.filter(movie => selectedGenres.includes(movie.type))

    return (
        <Grid templateColumns="repeat(3, 1fr)" gap="60px 50px" p="25px 0 140px 0">
            {filteredMovies.map(movie => (
                <FilmCard
                    key={movie.id}
                    imageAlt={movie.title}
                    imageUrl={movie.imageUrl}
                    title={movie.title}
                    type={movie.type}
                    duration={movie.duration}
                    star={movie.star || false}
                />
            ))}
        </Grid>
    )
}