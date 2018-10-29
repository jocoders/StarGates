import React from 'react'
import { Image, View, StyleSheet } from 'react-native'
import { h, w } from '../../../constants'

const ImageBigCard = ({ data }) => {
  const { container, sub, cover } = styles
  const { image } = data
  const img = `https${image.medium.slice(4)}`
  return (
    <View style={container}>
      <View style={sub}>
       <Image style={cover} source={{uri: img}} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20
  },
  sub: {
    shadowColor: '#000',
    shadowRadius: 8,
    borderRadius: 10,
    backgroundColor: 'white',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.4
  },
  cover: {
    width: w / 1.67,
    height: h * 0.9,
    borderRadius: 10
  }
})

export { ImageBigCard }
