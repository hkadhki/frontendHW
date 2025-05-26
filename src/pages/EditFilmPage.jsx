import {
    Button, Field, Fieldset, Input, Box, Center,
    Grid, GridItem, Textarea, FileUpload, Flex, Text, HStack, Checkbox, Heading
} from "@chakra-ui/react"
import {HiUpload} from "react-icons/hi"
import {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";

const genres = [
    { value: "Боевик", color: "orange" },
    { value: "Триллер", color: "green" },
    { value: "Комедия", color: "blue" },
    { value: "Драма", color: "black" },
];

const base64ToFile = (base64String, filename, mimeType = 'image/png') => {
    try {
        const base64WithoutPrefix = base64String.includes('base64,')
            ? base64String.split(',')[1]
            : base64String;

        const byteCharacters = atob(base64WithoutPrefix);
        const byteNumbers = new Array(byteCharacters.length);

        for (let i = 0; i < byteCharacters.length; i++) {
            byteNumbers[i] = byteCharacters.charCodeAt(i);
        }

        const byteArray = new Uint8Array(byteNumbers);
        const blob = new Blob([byteArray], { type: mimeType });

        return new File([blob], filename, {
            type: mimeType,
            lastModified: Date.now()
        });
    } catch (error) {
        console.error('Ошибка преобразования Base64 в File:', error);
        return null;
    }
};

export default function EditFilmPage() {
    const {id} = useParams();
    const [data, setData] = useState(null);
    const [selected, setSelected] = useState(null);

    const [formData, setFormData] = useState({
        id: id,
        title: "",
        type: "",
        duration: "",
        description: "",
        isFavorite: false,
        image: null,
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/films/' + id);
                setData(response.data);

                setFormData({
                    id: id,
                    title: response.data.title || "",
                    type: response.data.type || "",
                    duration: response.data.duration || "",
                    description: response.data.description || "",
                    isFavorite: response.data.isFavorite || false,
                    image: response.data.imageBytes || null,
                });

                if (response.data.type) {
                    setSelected(response.data.type);
                }
            } catch (err) {
                console.log(err.message);
            }
        };
        fetchData();
    }, [id]);

    const handleSubmit = async () => {
        const data = new FormData();
        data.append("id", id)
        data.append("title", formData.title);
        data.append("duration", formData.duration);
        data.append("description", formData.description);
        data.append("type", formData.type);
        data.append("isFavorite", formData.isFavorite);
        data.append("image", base64ToFile(formData.image, "filename"));
        console.log(data.get("image"));

        try {
            const response = await axios.post("http://localhost:8080/films/update", data, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });
            console.log("Фильм успешно добавлен:", response.data);
        } catch (error) {
            console.error("Ошибка при добавлении фильма:", error);
        }
    };

    if (!data) {
        return <div>Загрузка...</div>;
    }

    return (
        <Box p="0 0 100px 0">
            <Heading as='h1' size={'4xl'} fontWeight='bold' ml={'200px'} mb={"20px"}>
                Редактировать
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
                                    <Input
                                        name="name"
                                        value={formData.title}
                                        onChange={(e) => setFormData({...formData, title: e.target.value})}
                                    />
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
                                                onCheckedChange={() => {
                                                    setSelected(genre.value);
                                                    setFormData({...formData, type: genre.value});
                                                }}
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
                                        <Input
                                            w="84px"
                                            name="duration"
                                            value={formData.duration}
                                            onChange={(e) => setFormData({...formData, duration: e.target.value})}
                                        />
                                        <Text>мин.</Text>
                                    </Flex>
                                </GridItem>

                                <GridItem>
                                    <Field.Root>
                                        <Field.Label>Описание</Field.Label>
                                    </Field.Root>
                                </GridItem>
                                <GridItem>
                                    <Textarea
                                        variant="outline"
                                        h="184px"
                                        value={formData.description}
                                        onChange={(e) => setFormData({...formData, description: e.target.value})}
                                    />
                                </GridItem>

                                <GridItem>
                                    <Field.Root>
                                        <Field.Label>Загрузить фото</Field.Label>
                                    </Field.Root>
                                </GridItem>
                                <GridItem inline="true">
                                    <FileUpload.Root accept={["image/png"]}>
                                        <FileUpload.HiddenInput
                                            type="file"
                                            accept="image/png"
                                            onChange={(e) => {
                                                const file = e.target.files[0];
                                                if (file) {
                                                    setFormData(prev => ({ ...prev, image: file }));
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
                            <Button
                                type="submit"
                                alignSelf="flex-start"
                                bg="#4A61DDB2"
                                onClick={handleSubmit}
                            >
                                Сохранить изменения
                            </Button>
                        </Center>
                    </Fieldset.Root>
                </Box>
            </Center>
        </Box>
    )
}

