import React, { useCallback, useState } from 'react'
import { Text, Box, Center, VStack, useColorModeValue } from 'native-base'
import ThemeToggle from '../componentes/theme-toggle'
import AnimatedCheckBox from '../componentes/animated-checkbox'
import { Pressable } from 'react-native'

const MainScreen = () => {
  const [checked, setChecked] = useState(false)
  const handlePressCheckBox = useCallback(() => {
    setChecked(prev => !prev)
  }, [])

  return (
    <Center
      _dark={{ bg: 'blueGray.900' }}
      _light={{ bg: 'blueGray.100' }}
      px={4}
      flex={1}
    >
      <VStack space={5} alignItems="center">
        <Box w="100px" h="100px">
          <Pressable onPress={handlePressCheckBox}>
            <AnimatedCheckBox checked={checked} />
          </Pressable>
        </Box>
        <Box p={10} bg={useColorModeValue('red.500', 'yellow.500')}>
          <Text>Hello</Text>
        </Box>
        <ThemeToggle />
      </VStack>
    </Center>
  )
}

export default MainScreen
