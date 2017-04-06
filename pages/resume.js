import React from 'react'
import { css, style } from 'next/css'

import { theme, _tag } from '../components/layout/Theme'
import HeadBloc from '../components/layout/HeadBloc'
import Timeline from '../components/Timeline'
import ParallaxBlock from '../components/ParallaxBlock'
import Particles from 'react-particles-js'

import config from '../data/config'
import particles from '../data/particles'
import { experiences, projects, education } from '../data/resume'


export default class extends React.Component {

  static getInitialProps () {
    return {
      experiences:  experiences,
      projects:     projects,
      education:    education,
      config:       config,
      particles:    particles
    }
  }

  renderSkills() {
    return (
      <p className={skillBlock}>
        Highly skilled in creating performant
        &nbsp;<strong className={_tag}>Html</strong>, <strong className={_tag}>Css</strong>,
        &nbsp;<strong className={_tag}>React components</strong>,
        I play a lot since over than one year with <strong className={_tag}>Meteor</strong>.
        I experienced a lot <strong className={_tag}>Ruby On Rails</strong>.
        I'm passionate about the 'MERN' stack (<strong className={_tag}>MongoDb</strong>,
        <strong className={_tag}>ExpressJs</strong>, <strong className={_tag}>ReactJs</strong>,
        &thinsp;<strong className={_tag}>NodeJs</strong>).
        Experienced with design, I'm playing a lot with
        <strong className={_tag}>Illustrator</strong> and <strong className={_tag}>Photoshop</strong>.
        Skilled with css pre-processors and frameworks, like
        <strong className={_tag}>Bootstrap</strong>, <strong className={_tag}>Semantic-ui</strong>,
        <strong className={_tag}>Stylus</strong>, <strong className={_tag}>Sass</strong>, <strong className={_tag}>Haml</strong>.
        I also play a lot with templating like
        <strong className={_tag}>Jade</strong> or <strong className={_tag}>Blaze </strong>
        with my Meteor apps. I'm fluent with Sql (
        <strong className={_tag}>MySql</strong> / <strong className={_tag}>PostgreSql</strong>)
        and noSql (<strong className={_tag}>MongoDb</strong> ).
        I believe <strong className={_tag}>code has to clean</strong>, like a design has to be
        <strong className={_tag}>responsive</strong> and <strong className={_tag}>accessible</strong>.
        I'm fan of <strong className={_tag}>Git</strong> and use <strong className={_tag}>Github</strong> and
        <strong className={_tag}>Bitbucket</strong>. Recently, I learned to playing with
        <strong className={_tag}>Redux</strong>, <strong className={_tag}>Webpack</strong>, and
        <strong className={_tag}>GraphQl</strong> and love it!
        <br/><br/>
        I'm <strong className={css(_tag, yellow)}>French native</strong> and I'm <strong className={css(_tag, yellow)}>fluent in English</strong>.
      </p>
    )
  }

  renderTimeline(items) {
    return <Timeline items={items} style={timelineStyle} />
  }

  getParallaxBg() {
    return <Particles height="100vh" width="100vw" params={particles} />
  }

  renderParallaxBlock(title, content) {
    return (
      <ParallaxBlock  title={title}
                      background={this.getParallaxBg()}
                      style={ParallaxBlockStyle}>
        {content}
      </ParallaxBlock>
    )
  }

  render() {
    const { config, experiences, projects, education } = this.props
    const meta = config.meta.resume

    return (
      <div>
        <HeadBloc title={meta.title} description={meta.description} keywords={meta.keywords} />
        {this.renderParallaxBlock("01 . Skills", this.renderSkills())}
        {this.renderParallaxBlock("02 . Work Experiences", this.renderTimeline(experiences))}
        {this.renderParallaxBlock("03 . Personal Projects", this.renderTimeline(projects))}
        {this.renderParallaxBlock("04 . Education", this.renderTimeline(education))}
      </div>
    )
  }
}

const ParallaxBlockStyle = {
  parallax: style({
    height: '200px',
    width: '100%',
    borderTop: '1px solid #ddd',
  }),
  title: style({
    textAlign: 'center',
    fontFamily: "'Roboto', sans-serif",
    textTransform: 'uppercase',
    fontSize: '2.3em',
    paddingTop: '70px'
  }),
  content: style({
    margin: '5% auto'
  })
}

const skillBlock = css({
  width: '50%',
  margin: '60px auto',
  textAlign: 'center',
  lineHeight: '1.8em',
  fontSize: '1.1em',
  color: theme.colors.text,
})

const yellow = css({
  backgroundColor: theme.colors.trans_secondary,
  ':hover': { backgroundColor: theme.colors.secondary }
})

const timelineStyle = {
  marker: { background: theme.colors.primary },
  title: { color: theme.colors.time_line_title },
  subtitle: { color: theme.colors.light_text },
  description: { color: theme.colors.text },
  containerBefore: { backgroundColor: theme.colors.time_line }
}
