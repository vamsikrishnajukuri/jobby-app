import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {randomNumber: 0}

  onGenerate = () => {
    const number = Math.random()
    const number1 = number * 100
    const ham = Math.ceil(number1)
    this.setState({randomNumber: ham})
  }

  render() {
    const {randomNumber} = this.state
    return (
      <div className="Hello">
        <div className="card-container">
          <h1 className="man">Random Number</h1>
          <p className="little-para">
            Generate a random number in the range of 0 to 100
          </p>
          <div>
            <button type="button" className="button" onClick={this.onGenerate}>
              Generate
            </button>
          </div>
          <p className="Manners">{randomNumber}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
