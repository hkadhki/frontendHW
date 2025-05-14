import { Center, Box } from '@chakra-ui/react'
import { Outlet } from "react-router-dom";
import {Header} from "./components/Header.jsx";
import {Footer} from "./components/Footer.jsx";

function App() {
  return (
    <Center>
    <Box w="1170px">
      <Header />
      <Outlet />
      <Footer />
    </Box>
    </Center>
  )
}

export default App
