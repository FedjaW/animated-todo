import * as React from 'react'
import { Text, Box, Center, VStack, useColorModeValue } from 'native-base'
import ThemeToggle from '../componentes/theme-toggle'

const MainScreen = () => {
  return (
    <Center
      _dark={{ bg: 'blueGray.900' }}
      _light={{ bg: 'blueGray.100' }}
      px={4}
      flex={1}
    >
      <VStack space={5} alignItems="center">
        <Box p={10} bg={useColorModeValue('red.500', 'yellow.500')}>
          <Text>Hello</Text>
        </Box>
        <ThemeToggle />
      </VStack>
    </Center>
  )
}

export default MainScreen
