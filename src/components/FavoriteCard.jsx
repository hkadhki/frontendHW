import {Icon, Box, Text, Flex, Image, Link, HStack, Avatar, Button} from "@chakra-ui/react"
import {SlClock} from "react-icons/sl";
import {CiStar} from "react-icons/ci";
import {FaStar} from "react-icons/fa6";


export const FavoriteCard = ({
                                         id,
                                         image,
                                         title,
                                         duration,
                                         clickeFavorite
                                     }) => {

    return (
        <Flex
            align="center"
            justify="space-between"
            p={4}
            borderRadius="md"
            bg="white"
            boxShadow="sm"
            w={"600px"}

        >
            <Image
                src={`data:image/png;base64,${image}`}
                borderRadius="full"
                boxSize="100px"
                objectFit="cover"
                mr="40px"
            />
           <Flex align="center" gap={4} flexDirection="row" justifyContent="space-between" w={"500px"}>
                <Box>
                    <Text fontWeight="bold">{title}</Text>
                    <Flex align="center" gap={1}>
                        <Icon as={SlClock} boxSize={4} />
                        <Text fontSize="sm" color="gray.600">
                            {duration} мин.
                        </Text>
                    </Flex>
                </Box>
            </Flex>
            <Button variant="ghost" color="gray.500" fontSize="sm" onClick={() => clickeFavorite(id)}>
                Удалить
            </Button>
        </Flex>
    )
}
