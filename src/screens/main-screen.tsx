import React, { useCallback, useState } from 'react'
import { Center, VStack } from 'native-base'
import ThemeToggle from '../componentes/theme-toggle'

import TaskItem from '../componentes/task-item'

const MainScreen = () => {
  const [checked, setChecked] = useState(false)
  const [subject, setSubject] = useState('Task Item')
  const [isEditing, setEditing] = useState(false)

  const handlePressCheckBox = useCallback(() => {
    setChecked(prev => !prev)
  }, [])

  return (
    <Center
      _dark={{ bg: 'blueGray.900' }}
      _light={{ bg: 'blueGray.100' }}
      flex={1}
    >
      <VStack space={5} alignItems="center" w="full">
        <TaskItem
          isEditing={isEditing}
          isDone={checked}
          onToggleCheckbox={handlePressCheckBox}
          subject={subject}
          onPressLabel={() => setEditing(true)}
          onChangeSubject={setSubject}
          onFinishEditing={() => setEditing(false)}
        />
        <ThemeToggle />
      </VStack>
    </Center>
  )
}

export default MainScreen
