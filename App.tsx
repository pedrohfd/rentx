import { StatusBar } from 'expo-status-bar'
import React from 'react'

import { Routes } from './src/routes'

export function App() {
  return (
    <>
      <Routes />
      <StatusBar style='auto' translucent />
    </>
  )
}
