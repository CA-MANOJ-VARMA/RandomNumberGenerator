// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {Number: 0}

  generateNumber = () => this.setState({Number: Math.ceil(Math.random() * 100)})

  render() {
    const {Number} = this.state
    return (
      <div className="css-bg-container">
        <h1>Random Number</h1>
        <p>Generate a random number in the range of 0 to 100</p>
        <button
          type="button"
          onClick={this.generateNumber}
          className="css-Random-generator-button"
        >
          Generate
        </button>
        <p className="css-number-para">{Number}</p>
      </div>
    )
  }
}

export default RandomNumberGenerator
