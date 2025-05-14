import { Text } from "@chakra-ui/react"; 

export default function FilterItem({children}) {
  return (
    <Text fontSize="16px" fontWeight={"medium"} p={"0px 10px"}>
      {children}
    </Text>
  );
}