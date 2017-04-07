import React from 'react'
import { css, style } from 'next/css'
import Particles from 'react-particles-js'

import { theme, _tag } from '../components/layout/Theme'
import HeadBloc from '../components/layout/HeadBloc'
import ParallaxBlock from '../components/ParallaxBlock'
import Timeline from '../components/timeline/Timeline'
import ButtonLink from '../components/ButtonLink'
import Menu from '../components/Menu'

import config from '../data/config'
import particles from '../data/particles'
import { experiences, projects, education } from '../data/resume'
import socials from '../data/socials'

export default class extends React.Component {

  static getInitialProps () {
    return {
      experiences:  experiences,
      projects:     projects,
      education:    education,
      config:       config,
      particles:    particles,
      socials:      socials
    }
  }

  renderSkills() {
    return (
      <p className={skillBlock}>
        Highly skilled in creating performant
        &nbsp;<strong className={_tag}>Html</strong>, <strong className={_tag}>Css</strong>,
        &nbsp;<strong className={_tag}>React components</strong>,
        I play a lot since over than one year with <strong className={_tag}>Meteor</strong>.
        I'm passionate about the 'MERN' stack (<strong className={_tag}>MongoDb</strong>,
        <strong className={_tag}>ExpressJs</strong>, <strong className={_tag}>ReactJs</strong>,
        &thinsp;<strong className={_tag}>NodeJs</strong>).
        I also code some backend work using <strong className={_tag}>Ruby On Rails</strong>,
        and enjoy using the term, I know <strong className={_tag}>Shell scripting</strong> to
        make my life easier. Experienced with design, I'm playing a lot with&nbsp;
        <strong className={_tag}>Illustrator</strong> and <strong className={_tag}>Photoshop</strong>.
        Skilled with css pre-processors and frameworks, like&nbsp;
        <strong className={_tag}>Bootstrap</strong>, <strong className={_tag}>Semantic-ui</strong>,&nbsp;
        <strong className={_tag}>Stylus</strong>, <strong className={_tag}>Scss</strong>,&nbsp;
        <strong className={_tag}>Haml</strong>. I also play with templating like&nbsp;
        <strong className={_tag}>Jade</strong> / <strong className={_tag}>Blaze</strong>
        &nbsp;with my Meteor apps. I'm fluent with Sql (
        <strong className={_tag}>MySql</strong> / <strong className={_tag}>PostgreSql</strong>)
        and noSql (<strong className={_tag}>MongoDb</strong>).
        I believe <strong className={_tag}>code has to clean</strong>, like a design has to be&nbsp;
        <strong className={_tag}>responsive</strong> and <strong className={_tag}>accessible</strong>.
        I'm fan of <strong className={_tag}>Git</strong> and use <strong className={_tag}>Github</strong> and
        &nbsp;<strong className={_tag}>Bitbucket</strong>. Recently, I'm learning to play with&nbsp;
        <strong className={_tag}>Redux</strong>, <strong className={_tag}>Webpack</strong>, and&nbsp;
        <strong className={_tag}>GraphQl</strong> and I'm loving it!
        <br/><br/>
        I'm <strong className={css(_tag, yellow)}>French native</strong> and I'm <strong className={css(_tag, yellow)}>fluent in English</strong>.
      </p>
    )
  }

  renderFindMe() {
    return <Menu links={socials} style={social} />
  }

  renderTimeline(items) {
    return <Timeline items={items} style={timelineStyle} />
  }

  renderParallaxBackground() {
    return <Particles height="100vh" width="100vw" params={particles} />
  }

  renderParallaxBlock(title, content) {
    return (
      <ParallaxBlock title={title}
                     background={this.renderParallaxBackground()}
                     style={ParallaxBlockStyle}>
        {content}
      </ParallaxBlock>
    )
  }

  renderMenuIcons() {
    return (
      <div className={menu.block}>
        <ButtonLink style={menu.button}
          url={config.application.cv_pdf_url}
          title='Download CV'
          alt="Download PDF Resume"
          blank={true} />
        <ButtonLink style={menu.button}
          url="/contact"
          title="Contact"
          alt="Contact Me" />
      </div>
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
        {this.renderParallaxBlock("05 . Find Me", this.renderFindMe())}
        {this.renderMenuIcons()}
      </div>
    )
  }
}

const ParallaxBlockStyle = {
  parallax: style({
    height: '200px',
    width: '100%',
    borderTop: '1px solid #ddd',
    '@media(max-width: 640px)': { height: '100px' }
  }),
  title: style({
    textAlign: 'center',
    fontFamily: "'Roboto', sans-serif",
    textTransform: 'uppercase',
    fontSize: '2.3em',
    lineHeight: '2.5em',
    color: theme.colors.black,
    paddingTop: '30px',
    '@media(max-width: 640px)': { fontSize: '1.3em', lineHeight: '1.5em' }
  }),
  content: style({ margin: '5% auto' })
}

const skillBlock = css({
  width: '50%',
  margin: '60px auto',
  textAlign: 'center',
  lineHeight: '1.8em',
  fontSize: '1.1em',
  color: theme.colors.text,
  '@media(max-width: 640px)': {
    width: '90%',
    textAlign: 'justify',
    textJustify: 'inter-word',
  }
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

const menu = {
  block: css({
    zIndex: '999',
    position: 'fixed',
    top: '50%',
    left: '3%',
    width: '120px',
    height: '50px',
    '@media(max-width: 640px)': {
      top: 'auto',
      bottom: '2%',
      left: '1%',
      width: '100%',
    }
  }),
  button: css({
    width: '120px',
    border: "4px solid " + theme.colors.primary,
    fontSize: '0.6em',
    letterSpacing: '-0.04em',
    textAlign: 'center',
    backgroundColor: theme.colors.white,
    '@media(max-width: 640px)': { width: '47%', margin: '1%' },
    '> a': { color: theme.colors.black },
    ':hover': {
      backgroundColor: theme.colors.primary,
      color: theme.colors.white,
      '> a': { color: theme.colors.white }
    },
  })
}

const social = {
  component: style({
    textTransform: 'uppercase',
    zIndex: '999',
    position: 'relative',
    top: '50%',
    textAlign: 'center',
    display: 'block',
    margin: '10% auto',
    '@media(max-width: 640px)': {
      top: 'calc(80px / 2)',
      marginBottom: 'calc(5% + 80px)'
    }
  }),
  link: style({
    margin: '0 1% 0 1%',
    textDecoration: 'none',
    color: theme.colors.black,
    fontSize: '1.8em',
    fontWeight: 'bold',
    ':hover': { textDecoration: 'line-through' },
    '@media(max-width: 1240px)': {
      fontSize: '1.5em',
      display: 'list-item',
      margin: '20px auto'
    },
    '@media(max-width: 640px)': {
      fontSize: '1.3em',
      margin: '20px auto'
    }
  })
}
