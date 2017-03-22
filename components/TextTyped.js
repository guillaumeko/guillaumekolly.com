import React, { PropTypes } from 'react'
import css from 'next/css'
import Typist from 'react-typist'

export default class TextTyped extends React.Component {

  static propTypes = {
    children: PropTypes.array.isRequired,
  }

  render() {
    const { style, children } = this.props

    return (
      <div className={style}>
        <Typist
          className="Typist"
          avgTypingSpeed={5}
          startDelay={1000}
          cursor={{ hideWhenDone: true }}>

          {children}

        </Typist>
      </div>
    )
  }
}
