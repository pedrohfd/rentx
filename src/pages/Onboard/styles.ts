import styled from 'styled-components/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { MotiView } from 'moti'

import Car from '../../assets/icons/car-onboard.svg'
import Onboard from '../../assets/icons/onboard.svg'
import Arrow from '../../assets/icons/arrow-right-onboard.svg'

import { colors } from '../../styles/colors'
import { fonts } from '../../styles/fonts'

export const Container = styled.View`
  height: 100%;
`

export const AnimatedContainer = styled(MotiView)`
  background-color: ${colors.black};

  position: absolute;

  width: 100%;
  height: 100%;
`

export const Content = styled(SafeAreaView)`
  flex: 1;
  background: ${colors.red};

  align-items: center;

  padding-top: 93px;
`

export const CarIcon = styled(Car)``

export const OnboardIcon = styled(Onboard)`
  margin-top: -70px;
`

export const Title = styled.Text`
  text-align: center;

  font-family: ${fonts.archivo_semibold};
  font-size: 40px;

  line-height: 40px;

  color: ${colors.white};

  width: 266px;

  margin-top: -80px;
`

export const Subtitle = styled.Text`
  text-align: center;

  font-family: ${fonts.inter_regular};
  font-size: 15px;

  line-height: 25px;

  color: ${colors.white};

  width: 260px;

  margin-top: 40px;
`

export const Button = styled.TouchableOpacity`
  margin-top: 112px;

  width: 30px;
  height: 30px;

  border-radius: 15px;

  align-items: center;
  justify-content: center;
`

export const ButtonIcon = styled(Arrow)``
