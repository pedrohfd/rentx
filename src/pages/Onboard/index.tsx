import { MotiImage, MotiView } from 'moti'
import React from 'react'

import Logo from '../../assets/icons/logo.svg'

import {
  AnimatedContainer,
  Button,
  ButtonIcon,
  CarIcon,
  Container,
  Content,
  OnboardIcon,
  Subtitle,
  Title,
} from './styles'
import { Dimensions } from 'react-native'
import { useOnboardController } from './controller'

export const Onboard = () => {
  const { handleNavigationHome } = useOnboardController()

  return (
    <Container>
      <MotiView
        from={{
          zIndex: 1,
        }}
        animate={{
          zIndex: 0,
        }}
        delay={8800}
        style={{
          position: 'absolute',

          width: '100%',
          height: '100%',
        }}
      >
        <AnimatedContainer
          from={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ type: 'timing', duration: 2000 }}
          delay={6500}
        >
          <MotiView
            from={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ type: 'timing', duration: 1000 }}
            delay={5000}
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {/* Logo */}
            <MotiView
              from={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ type: 'timing', duration: 500 }}
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              delay={3000}
            >
              <Logo />
            </MotiView>
            {/* X Icon */}
            <MotiView
              from={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ type: 'timing', duration: 500 }}
              style={{
                position: 'absolute',
                top: Dimensions.get('window').height / 2 - 25,
                left: Dimensions.get('window').width / 2 - 40,
              }}
            >
              <MotiImage
                from={{ width: 80, height: 50, translateX: 0, translateY: 0 }}
                animate={{
                  width: 31,
                  height: 20,
                  translateX: 99,
                  translateY: 15,
                }}
                transition={{ type: 'timing', duration: 1000 }}
                source={require('../../assets/icons/X.png')}
                delay={2000}
              />
            </MotiView>
          </MotiView>
        </AnimatedContainer>
      </MotiView>
      <Content>
        <CarIcon width={66} height={60} />

        <OnboardIcon width={'100%'} />

        <Title>
          Alugue {'\n'} um carro de {'\n'} maneira simples e fácil
        </Title>

        <Subtitle>
          Vários modelos para você dirigir {'\n'} seguro, com conforto e
          segurança.
        </Subtitle>

        <Button onPress={handleNavigationHome}>
          <ButtonIcon width={8} height={13} />
        </Button>
      </Content>
    </Container>
  )
}
