import { Button, Container, Flex, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Container maxW={"container.lg"} my={4}>
      <Flex
        w={"full"}
        justifyContent={{ base: "center", sm: "space-between" }}
        alignItems={"center"}
      >
        {/* <Image src='/logo.png' h={20} display={{ base: "none", sm: "block" }} cursor={"pointer"} /> */}
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <Text
            textAlign={"left"}
            ml={20}
            cursor={"pointer"}
            fontSize={30}
            fontWeight={"bold"}
          >
            <Flex direction={"row"} alignItems={"center"} gap={"10px"}>
              <img
                style={{ height: "35px" }}
                src="https://img.icons8.com/?size=100&id=Kp6YDPLCRJIe&format=png&color=000000"
              />
              <span>
                Snap<span style={{ color: "skyblue" }}>io.</span>
              </span>
            </Flex>
          </Text>
        </Link>
        <Flex gap={4}>
          <Link to="/auth">
            <Button colorScheme={"blue"} size={"sm"}>
              Login
            </Button>
          </Link>
          <Link to="/auth">
            <Button variant={"outline"} size={"sm"}>
              Signup
            </Button>
          </Link>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Navbar;
