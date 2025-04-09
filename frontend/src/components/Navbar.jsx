import { PlusSquareIcon } from "@chakra-ui/icons";
import {
  Button,
  Container,
  Flex,
  HStack,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { MdLocalGroceryStore } from "react-icons/md";
import { Link } from "react-router-dom";
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container maxW="1140px" px={4}>
      <Flex
        h={16}
        alignItems="center"
        justifyContent="space-between"
        flexDir={{ base: "column", sm: "row" }}
      >
        <Link to="/">
          <Flex align="center" gap={2}>
            <Text
              fontSize={{ base: "23px", sm: "28px" }}
              fontWeight="bold"
              textTransform="uppercase"
              bgGradient="linear(to-tr, orange.300, red.400)"
              bgClip="text"
            >
              Product Store
            </Text>
            <MdLocalGroceryStore size={28} color="#F56565" /> {/* red.400 */}
          </Flex>
        </Link>

        <HStack spacing={2} alignItems="center">
          <Link to="/create">
            <Button>
              <PlusSquareIcon fontSize={20} />
            </Button>
          </Link>
          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? <IoMoon /> : <LuSun size={"20"} />}
          </Button>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Navbar;
