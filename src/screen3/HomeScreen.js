import React, {Component} from 'react'
import { View } from 'react-native'
import { Header, Layout, ImageCard } from '../components/uikit'
import {
  SPIDER_DETAILS
} from '../routes'
import { WHITE, BLUE } from '../../constants'

const url = 'https://api.tvmaze.com/search/shows?q=spider-man'

export default class Main extends Component {
  state = {
    title: 'SPIDERMAN',
    data: []
  }

  componentDidMount = async () => {
    try {
      const response = await fetch(url)
      const data = await response.json()
      this.setState({ data })
    } catch (e) {
      throw e
    }
  }

  onGoBack = (someDataFromChildren) => {
    console.log('someDataFromChildren', someDataFromChildren)
  }

  render() {
    const { title, data } = this.state
    const { navigation } = this.props
    console.log('this.state', this.state)
    return (
      <View>
        <Header
          title={title}
          //headerColor={BLUE}
          onPress={() => navigation.openDrawer()}
          leftIcon='ios-menu'
          leftColor='#fff'
        />
        <Layout>
          { data.map(item => (
            <ImageCard
              data={item.show}
              key={item.show.id}
              onPress={() => navigation.navigate(SPIDER_DETAILS, ({ show: item.show, onGoBack: this.onGoBack}))}
            />
          ))}
        </Layout>
      </View>
    )
  }
}
