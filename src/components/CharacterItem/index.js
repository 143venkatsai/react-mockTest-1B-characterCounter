import './index.css'

const CharacterItem = props => {
  const {details} = props
  const {word} = details
  const wordLength = word.length

  return (
    <li className="character-item">
      <p className="character-name">
        {word} : {wordLength}
      </p>
    </li>
  )
}

export default CharacterItem
