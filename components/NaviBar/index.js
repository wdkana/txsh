import { Box, Button, Flex, HStack, useColorModeValue } from "@chakra-ui/react"
import NextLink from "next/link"
import axios from "axios"
import { useEffect, useState } from "react"
export default function NaviBar() {
  const [getUtils, setUtils] = useState([])
  useEffect(() => {
    axios.get("/api/utils").then((result) => {
      setUtils(result.data)
    })
  }, [])
  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <HStack spacing={8} alignItems={"center"}>
            <Box>
              <NextLink href={`${getUtils.homeUrl}`} passHref>
                <Button>{getUtils.navigation1}</Button>
              </NextLink>
            </Box>
            <Box>
              <NextLink href={`${getUtils.showCaseUrl}`} passHref>
                <Button>{getUtils.navigation2}</Button>
              </NextLink>
            </Box>
          </HStack>
        </Flex>
      </Box>
    </>
  )
}
