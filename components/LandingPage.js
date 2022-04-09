import { Text, Flex, useColorModeValue } from "@chakra-ui/react"

const LandingPage = ({ profile }) => {
  const color = useColorModeValue("black", "black")
  return (
    <Flex direction={"column"} color={color}>
      <Text fontSize="4xl">
        {profile.job}
        <Text as="mark" style={{ marginLeft: 5, padding: 10 }}>
          {profile.name}
        </Text>
      </Text>
      <Text fontSize="sm">{profile.opening}</Text>
    </Flex>
  )
}

export default LandingPage
