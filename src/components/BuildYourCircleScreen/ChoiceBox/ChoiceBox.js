import React from 'react'


class ChoiceBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: false
    }
  }

  render() {
    const { image, title, text } = this.props
    const { selected } = this.state
    return (
      <a
        href=""
        className={ selected ? 'choice-box is-selected' : 'choice-box'}
        onClick={(e) => {
          e.preventDefault()
          this.setState({ selected: !selected })
        }}
      >
        <div className="choice-box__header">
          <img src={image} alt={title} />
          <h2 className="choice-box__title">{title}</h2>
          <div className="pretty-checkbox__container">
            <input type="checkbox" name="service" checked={selected} value={title} style={{ display: 'none' }} />
            <span className="ion-android-checkmark-circle pretty-checkbox" />
          </div>
        </div>
        <div className="choice-box__body">
          {text}
        </div>
      </a>
    )
  }
}


export { ChoiceBox }
