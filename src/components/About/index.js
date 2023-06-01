import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faFileLines, faBookmark } from '@fortawesome/free-solid-svg-icons'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const About = () => {
  return (
    <div>
      <Row style={{ paddingTop: '22px' }}>
        <Col sm={3} className="hello">
          <img
            className="hello-gif"
            src={require('../../assets/images/hello.gif')}
            alt="Gloria gif"
          />
        </Col>
        <Col sm={9} className="bio">
          <div className="name">Gloria Lin</div>
          <div className="description">
            developer + artist <br />
            <a
              href="https://docs.google.com/document/d/e/2PACX-1vSJGgs0_UH7CC01KH_KTiMkbFOIOwqxuA7Ptk7p9NMqN7WYtWNWJM0mxco3iMJZM9Kl2ec2jtPfvR17/pub"
              target="res"
            >
              <FontAwesomeIcon
                icon={faFileLines}
                size="lg"
                className="fa-icon"
              />
            </a>
            <a href="https://igloramus.substack.com" target="ss">
              <FontAwesomeIcon
                icon={faBookmark}
                size="lg"
                className="fa-icon"
              />
            </a>
            <a href="https://github.com/gzlin7" target="gh">
              <FontAwesomeIcon
                icon={faGithubSquare}
                size="lg"
                className="fa-icon"
              />
            </a>
            <a href="https://www.instagram.com/igloramus/" target="ig">
              <FontAwesomeIcon
                icon={faInstagram}
                size="lg"
                className="fa-icon"
              />
            </a>
          </div>
        </Col>
      </Row>
      <br />
      <hr />

      {/* ABOUT */}
      <p style={{ textAlign: 'justify' }}>
        <a style={{ textDecoration: 'none', color: '#FA7268' }}> hello!</a> I’m
        Gloria, a software engineer in New York City. I graduated from MIT in
        2022. In my free time, I like to make art, write blogs, and work on
        personal projects, so I made this site to archive and share my hobbies
        and musings.
      </p>
      <div id="section-top"></div>
      <br />
      <hr />
    </div>
  )
}

export default About
