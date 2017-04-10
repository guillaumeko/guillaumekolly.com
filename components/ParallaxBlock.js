import React, { PropTypes } from 'react'
import { Parallax, Background } from 'react-parallax'

const propTypes = {
  title:      PropTypes.string.isRequired,
  background: PropTypes.object.isRequired,
  strength:   PropTypes.number,
  style:      PropTypes.object
}

const ParallaxBlock = (props) =>
  <div>
    <Parallax strength={ props.strength ? props.strength : 600 }>
      <Background> {props.background} </Background>
      <div className={props.style.parallax}>
        <h2 className={props.style.title}> {props.title} </h2>
      </div>
    </Parallax>
    <div className={props.style.content}> {props.children} </div>
  </div>

ParallaxBlock.propTypes = propTypes
export default ParallaxBlock