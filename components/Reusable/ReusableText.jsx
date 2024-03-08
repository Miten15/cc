import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ReusableText = ({ text, family, size, color, align , paddingLeft }) => {
  return (
    <Text style={styles.textStyle(family, size, color, align, paddingLeft)}>{text}</Text>
  )
}

export default ReusableText

const styles = StyleSheet.create({
  textStyle: (family, size, color, align, paddingLeft) => ({
    fontFamily: family,
    fontSize: size,
    color: color,
    textAlign: align,
    paddingLeft: paddingLeft
    
  })
})
