import React from "react";

import { StatusBar } from 'react-native'

import Home from "./src/Pages/Home";

export default function App() {
  return (
  <>
  <StatusBar barStyle='light-content' />
  <Home/>
  </>)
}