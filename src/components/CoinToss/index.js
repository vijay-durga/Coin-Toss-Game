import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {
    isItHeads: true,
    totalScore: 0,
    totalHeads: 0,
    totalTails: 0,
  }

  getResult = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult !== 0) {
      this.setState(prevState => ({
        isItHeads: false,
        totalScore: prevState.totalScore + 1,
        totalTails: prevState.totalTails + 1,
      }))
    } else {
      this.setState(prevState => ({
        isItHeads: true,
        totalScore: prevState.totalScore + 1,
        totalHeads: prevState.totalHeads + 1,
      }))
    }
  }

  render() {
    const {isItHeads, totalHeads, totalScore, totalTails} = this.state

    const requiredImage = isItHeads
      ? 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

    return (
      <div className="main-background-container">
        <div className="background-container">
          <h1 className="head">Coin Toss Game</h1>
          <p className="para">Heads (or) Tails</p>
          <img src={requiredImage} alt="toss result" className="image" />
          <button type="button" className="btn" onClick={this.getResult}>
            Toss Coin
          </button>
          <div className="count">
            <p className="para1">Total: {totalScore}</p>
            <p className="para2">Heads: {totalHeads}</p>
            <p className="para3">Tails: {totalTails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
