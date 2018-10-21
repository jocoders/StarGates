import React, { Component } from 'react'
import { View, ScrollView } from 'react-native'
import { Header, ImageCard, Layout } from '../components/uikit'

const url = 'http://api.tvmaze.com/search/shows?q=stargate'

export default class HomeScreen extends Component {
state = {
  title: 'STAR GATE',
  data: []
}

componentDidMount = async () => {
  try {
    const response = await fetch(url)
    const data = await response.json()
    this.setState({data})
  } catch (e) {
    throw e
  }
}

render() {
  const { data, title } = this.state
  const { navigation } = this.props
  console.log('this.props', this.props)
  return (
    <View>
      <Header title={title} />
      <ScrollView>
        <Layout>
          { data.map(item => (
            <ImageCard
              data={item.show}
              key={item.show.id}
              onPress={() => navigation.navigate(STARGATE_DETAILS, (item.show))}
            />
          ))
          }
        </Layout>
      </ScrollView>
    </View>
  )
}
}
