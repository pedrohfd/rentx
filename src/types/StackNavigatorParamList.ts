import { StackNavigationProp } from '@react-navigation/stack'

export type StackNavigatorParamList = {
  Home: undefined
}

export type StackScreenNavigationProps = StackNavigationProp<
  StackNavigatorParamList,
  'Home'
>
