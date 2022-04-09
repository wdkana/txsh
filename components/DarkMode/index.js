import { Switch, Box, DarkMode } from "@chakra-ui/react"
import { useColorMode } from "@chakra-ui/react"
const DarkButton = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Box>
      <Switch
        onChange={toggleColorMode}
        defaultChecked={colorMode == "light" ? false : true}
      >
        <i>darkmode {colorMode == "light" ? "off" : "on"}</i>
      </Switch>
    </Box>
  )
}

export default DarkButton
