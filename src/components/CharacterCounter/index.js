import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import CharacterItem from '../CharacterItem'

import './index.css'

class CharacterCounter extends Component {
  state = {characterList: [], inputValue: ''}

  onChangeInputValue = event => {
    this.setState({inputValue: event.target.value})
  }

  onAddButton = event => {
    event.preventDefault()
    const {inputValue} = this.state
    const counterValue = {
      id: uuidv4(),
      word: inputValue,
    }
    this.setState(prevState => ({
      characterList: [...prevState.characterList, counterValue],
      inputValue: '',
    }))
  }

  renderCounterList = () => {
    const {characterList} = this.state
    const characterListLength = characterList.length > 0

    return (
      <div className="counter-container">
        <div className="counter-card">
          <h1 className="counter-heading">
            Count the characters like a Boss...
          </h1>
        </div>
        <div>
          {characterListLength ? (
            <ul className="counter-list">
              {characterList.map(eachCharacter => (
                <CharacterItem details={eachCharacter} key={eachCharacter.id} />
              ))}
            </ul>
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
              alt="no user inputs"
              className="counter-image"
            />
          )}
        </div>
      </div>
    )
  }

  renderCharacterInput = () => {
    const {inputValue} = this.state

    return (
      <div className="character-container">
        <h1 className="character-heading">Character Counter</h1>
        <form className="character-input" onSubmit={this.onAddButton}>
          <input
            type="text"
            value={inputValue}
            className="input-element"
            onChange={this.onChangeInputValue}
            placeholder="Enter the Characters here"
          />
          <button type="submit" className="add-button">
            Add
          </button>
        </form>
      </div>
    )
  }

  render() {
    return (
      <div className="character-counter-container">
        {this.renderCounterList()}
        {this.renderCharacterInput()}
      </div>
    )
  }
}

export default CharacterCounter
