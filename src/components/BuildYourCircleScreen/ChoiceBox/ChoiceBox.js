import React from 'react'


class ChoiceBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: false
    }
  }

  render() {
    const { image, title, text, disabled } = this.props
    const { selected } = this.state
    return (
      <a
        href=""
        className={selected ? 'choice-box is-selected' : 'choice-box'}
        style={{ cursor: disabled ? 'default' : 'pointer', opacity: disabled ? 0.8 : 1 }}
        onClick={(e) => {
          e.preventDefault()
          if (disabled) return
          this.setState({ selected: !selected })
          this.props.onClick(title)
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
