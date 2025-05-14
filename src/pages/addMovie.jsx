import { Button, Field, Fieldset, Input, Box, Center,
  Grid, GridItem, Textarea, FileUpload, Flex, Text, HStack, Checkbox } from "@chakra-ui/react"
import { HiUpload } from "react-icons/hi"

export default function AddMovie() {
  return (
    <Box p="0 0 100px 0">
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
                <Input name="name" />
              </GridItem>
  
              <GridItem>
                <Field.Root>
                <Field.Label>Жанр</Field.Label>
                </Field.Root>
              </GridItem>
              <GridItem>
                <HStack>

                <Checkbox.Root colorPalette={"orange"}>
                  <Checkbox.HiddenInput />
                  <Checkbox.Control rounded={"full"} borderColor={"orange"} />
                  <Checkbox.Label>Боевик</Checkbox.Label>
                </Checkbox.Root>

                <Checkbox.Root colorPalette={"green"}>
                  <Checkbox.HiddenInput />
                  <Checkbox.Control rounded={"full"} borderColor={"green"} />
                  <Checkbox.Label>Триллер</Checkbox.Label>
                </Checkbox.Root>

                <Checkbox.Root colorPalette={"blue"}>
                  <Checkbox.HiddenInput />
                  <Checkbox.Control rounded={"full"} borderColor={"blue"} />
                  <Checkbox.Label>Комедия</Checkbox.Label>
                </Checkbox.Root>

                <Checkbox.Root colorPalette={"black"}>
                  <Checkbox.HiddenInput />
                  <Checkbox.Control rounded={"full"} borderColor={"black"} />
                  <Checkbox.Label>Драма</Checkbox.Label>
                </Checkbox.Root>
                </HStack>
              </GridItem>

              <GridItem>
                <Field.Root>
                <Field.Label>Длительность</Field.Label>
                </Field.Root>
              </GridItem>
              <GridItem>
                <Flex gap="10px" align={"center"}>
                  <Input w="84px" name="duration" />
                  <Text>мин.</Text>
                </Flex>
              </GridItem>

              <GridItem>
                <Field.Root>
                <Field.Label>Описание</Field.Label>
                </Field.Root>
              </GridItem>
              <GridItem>
                <Input name="description" />
              </GridItem>

              <GridItem>
                <Field.Root>
                <Field.Label>Описание</Field.Label>
                </Field.Root>
              </GridItem>
              <GridItem>
                <Textarea variant="outline" h="184px" />
              </GridItem>

              <GridItem>
                <Field.Root>
                <Field.Label>Загрузить фото</Field.Label>
                </Field.Root>
              </GridItem>
              <GridItem inline="true">
              <FileUpload.Root accept={["image/png"]}>
                <FileUpload.HiddenInput />
                <Flex gap="30px" align={"center"}>
                <FileUpload.Trigger asChild>
                  <Button variant="outline">
                    <HiUpload /> Выбрать файл
                  </Button>
                </FileUpload.Trigger>
                <FileUpload.List />
                </Flex>
              </FileUpload.Root>
              </GridItem>
  
            </Grid>
          </Fieldset.Content>
          <Center p="20px 0 0 0">
          <Button type="submit" alignSelf="flex-start" bg="#4A61DDB2">Добавить фильм</Button>  
          </Center>
          </Fieldset.Root>
      </Box>
    </Center>
    </Box>
  )
}
