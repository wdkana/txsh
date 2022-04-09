import {
  Text,
  Flex,
  Box,
  Image,
  Button,
  useColorModeValue,
} from "@chakra-ui/react"
import NextLink from "next/link"

const ProfilCard = ({ utils, profile }) => {
  const bg = useColorModeValue("tomato", "gray.600")
  return (
    <div>
      <Flex alignItems={"center"} bg={bg}>
        <Box padding={5}>
          <Text
            fontSize="2xl"
            color={"white"}
            fontWeight="bold"
            letterSpacing={1.5}
            textDecorationLine={"overline"}
          >
            {profile.greeting}
          </Text>
          <NextLink href={`${utils.showCaseUrl}`} passHref>
            <Button mt={4} isFullWidth size={"sm"}>
              {utils.showCaseButtonText}
            </Button>
          </NextLink>
        </Box>
        <Box>
          <Image src={profile.photo} width={450} height="auto" alt="test" />
        </Box>
      </Flex>
    </div>
  )
}

export default ProfilCard
