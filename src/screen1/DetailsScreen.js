import React, { PureComponent } from 'react'
import { View, Text } from 'react-native'
import { Header } from '../components/uikit'
import Icon from 'react-native-vector-icons/FontAwesome'


class DetailsScreen extends PureComponent {
  render() {
    console.log('this.props', this.props)
    const { image, name, summary } = this.props.navigation.state.params
    const { navigation } = this.props
    const data = { image, name }

    return (
      <View>
        <Header
          title={name}
          onPress={() => navigation.goBack()}
          leftIcon="ios-arrow-back"
          leftColor="#fff"
        />
        <Text>Hello world</Text>
        <Icon name="rocket" size={30} color="#900" />

      </View>
    )
  }
}

export default DetailsScreen
