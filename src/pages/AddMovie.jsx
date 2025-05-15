import {
    Button, Field, Fieldset, Input, Box, Center,
    Grid, GridItem, Textarea, FileUpload, Flex, Text, HStack, Checkbox, Heading
} from "@chakra-ui/react"
import {HiUpload} from "react-icons/hi"
import {useState} from "react";
import axios from "axios";

const genres = [
    {  value: "Боевик", color: "orange" },
    {  value: "Триллер", color: "green" },
    {  value: "Комедия", color: "blue" },
    {  value: "Драма", color: "black" },
];

export default function AddMovie() {
    const [formData, setFormData] = useState({
        title: "",
        type: "",
        duration: "",
        description: "",
        isFavorite: false,
        imageUrl: "",
    });

    const [selected, setSelected] = useState(null);

    const handleSubmit = async () => {
        const data = new FormData();
        data.append("title", formData.title);
        data.append("duration", formData.duration);
        data.append("description", formData.description);
        data.append("type", formData.type);
        data.append("isFavorite", formData.isFavorite);
        data.append("image", formData.imageUrl);

        try {
            const response = await axios.post("http://localhost:8080/films", data, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });
            console.log("Фильм успешно добавлен:", response.data);
        } catch (error) {
            console.error("Ошибка при добавлении фильма:", error);
        }
    };


    return (
        <Box p="0 0 100px 0">
            <Heading as='h1' size={'4xl'} fontWeight='bold' ml={'50px'}>
                Редактировать фильм
            </Heading>
            <Center>
                <Box w="770px" border={"1px solid #EEEEEE"} p={"50px"} borderRadius={"16px"}>
                    <Fieldset.Root>
                        <Fieldset.Content>
                            <Grid templateColumns="repeat(2, 1fr)" gap="20px">

                                <GridItem>
                                    <Field.Root>
                                        <Field.Label fontSize="16px" font="Inter">Название фильма</Field.Label>
                                    </Field.Root>
                                </GridItem>
                                <GridItem>
                                    <Input name="name" onChange={(e) => {
                                        formData.title = e.target.value;
                                        setFormData(formData);
                                    }}  />
                                </GridItem>

                                <GridItem>
                                    <Field.Root>
                                        <Field.Label>Жанр</Field.Label>
                                    </Field.Root>
                                </GridItem>
                                <GridItem>
                                    <HStack>
                                        {genres.map((genre) => (
                                            <Checkbox.Root
                                                key={genre.value}
                                                checked={selected === genre.value}
                                                onCheckedChange={() => {setSelected(genre.value)
                                                                        formData.type = genre.value}}
                                                colorPalette={genre.color}
                                            >
                                                <Checkbox.HiddenInput />
                                                <Checkbox.Control
                                                    rounded="full"
                                                    borderColor={genre.color}
                                                />
                                                <Checkbox.Label>{genre.value}</Checkbox.Label>
                                            </Checkbox.Root>
                                        ))}
                                    </HStack>
                                </GridItem>

                                <GridItem>
                                    <Field.Root>
                                        <Field.Label>Длительность</Field.Label>
                                    </Field.Root>
                                </GridItem>
                                <GridItem>
                                    <Flex gap="10px" align={"center"}>
                                        <Input w="84px" name="duration" onChange={(e) => {
                                            formData.duration = e.target.value;
                                            setFormData(formData);
                                        }}  />
                                        <Text>мин.</Text>
                                    </Flex>
                                </GridItem>


                                <GridItem>
                                    <Field.Root>
                                        <Field.Label>Описание</Field.Label>
                                    </Field.Root>
                                </GridItem>
                                <GridItem>
                                    <Textarea variant="outline" h="184px" onChange={(e) => {
                                        formData.description = e.target.value;
                                        setFormData(formData);
                                    }} />
                                </GridItem>

                                <GridItem>
                                    <Field.Root>
                                        <Field.Label>Загрузить фото</Field.Label>
                                    </Field.Root>
                                </GridItem>
                                <GridItem inline="true">
                                    <FileUpload.Root accept={["image/png"]}>
                                        <FileUpload.HiddenInput type="file"
                                                                accept="image/png"
                                                                onChange={(e) => {
                                                                    const file = e.target.files[0];
                                                                    if (file) {
                                                                        setFormData(prev => ({ ...prev, imageUrl: file }));
                                                                    }
                                                                }} />
                                        <Flex gap="30px" align={"center"}>
                                            <FileUpload.Trigger asChild>
                                                <Button variant="outline">
                                                    <HiUpload/> Выбрать файл
                                                </Button>
                                            </FileUpload.Trigger>
                                            <FileUpload.List/>
                                        </Flex>
                                    </FileUpload.Root>
                                </GridItem>

                            </Grid>
                        </Fieldset.Content>
                        <Center p="20px 0 0 0">
                            <Button type="submit" alignSelf="flex-start" bg="#4A61DDB2" onClick={() => {
                                handleSubmit()
                            }}>Добавить фильм</Button>
                        </Center>
                    </Fieldset.Root>
                </Box>
            </Center>
        </Box>
    )
}
