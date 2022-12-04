import { useNavigation } from '@react-navigation/native'
import { StackScreenNavigationProps } from '../../types/StackNavigatorParamList'

export const useOnboardController = () => {
  const navigation = useNavigation<StackScreenNavigationProps>()

  const handleNavigationHome = () => {
    navigation.navigate('Home')
  }

  return { handleNavigationHome }
}
