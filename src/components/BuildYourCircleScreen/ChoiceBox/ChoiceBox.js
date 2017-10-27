import React from 'react'


const ChoiceBox = ({ image, title, text }) => (
  <a href="" className="choice-box">
    <div className="choice-box__header">
      <img src={image} alt={title} />
      <h2 className="choice-box__title">{title}</h2>
      <div className="pretty-checkbox__container">
        <input type="checkbox" name="service" />
        <span className="ion-android-checkmark-circle pretty-checkbox" />
      </div>
    </div>
    <div className="choice-box__body">
      {text}
    </div>
  </a>
)


export { ChoiceBox }
