import React, { useCallback, useState } from 'react'
import { Text, Box, Center, VStack, useColorModeValue } from 'native-base'
import ThemeToggle from '../componentes/theme-toggle'
import AnimatedCheckBox from '../componentes/animated-checkbox'
import { Pressable } from 'react-native'
import TaskItem from '../componentes/task-item'

const AboutScreen = () => {
  return (
    <VStack flex={1}>
      <Box flex={1}>
        <Text>About</Text>
      </Box>
    </VStack>
  )
}

export default AboutScreen
