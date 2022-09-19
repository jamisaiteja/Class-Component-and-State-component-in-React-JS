import {Component} from 'react'

class Welcome extends Component {
  render() {
    const {name} = this.props
    //render() class component returns the JSX element
    return <h1>Hii, {name}!</h1>
  }
}

export default Welcome
