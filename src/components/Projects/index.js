import './index.scss'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Projects = () => {
  return (
    <div>
      <div style={{ textAlign: 'left' }}>
        <p>
          <span className="title">Projects | </span>Mostly code adjacent stuff.
        </p>
      </div>

      {/* SIPS CogSci */}
      <Row className="project-odd">
        <Col sm={6} xs={6}>
          <img
            style={{ width: '49%' }}
            src={require('../../assets/images/projects/bw.gif')}
            alt="Block Words Experiment"
          />
          <img
            style={{ width: '42%' }}
            src={require('../../assets/images/projects/dkg.gif')}
            alt="Doors Keys Gems Experiment"
          />
          <div className="proj-desc">
            <p>
              <b>Plans Stimuli</b>: Julia, PDDL <br />
              <b>Experiments</b>: AngularJS, Firebase, MTurk <br />
              <b>Data Analysis</b>: Python
            </p>
          </div>
        </Col>
        <Col sm={6} xs={6}>
          <div className="proj-title">
            Modeling Mistakes for Bayesian Theory-of-Mind
            <br />
            <a
              href="https://arxiv.org/abs/2106.13249"
              target="arXiv"
              className="btn"
            >
              arXiv
            </a>
            <a
              href="https://github.com/gzlin7/block-words-web"
              target="blockwords"
              className="btn"
            >
              Block Words
            </a>
            <a
              href="https://github.com/gzlin7/doors-keys-gems-web"
              target="dkg"
              className="btn"
            >
              Doors, Keys, & Gems
            </a>
          </div>
          <div className="proj-desc">
            <p>
              Modeled and studied the effect of planning mistakes on human and
              probabilistic goal inference of a sub-optimal planning agent via
              observations of the agent's actions in multiple planning domains.
              Extends{' '}
              <a
                href="https://papers.nips.cc/paper/2020/file/df3aebc649f9e3b674eeb790a4da224e-Paper.pdf"
                target="SIPSPaper"
              >
                {' '}
                prior work
              </a>{' '}
              on modeling boundedly-rational probabilistic planners and
              Sequential Monte Carlo methods for online goal inference. Accepted
              for talk at CogSci 2021. Read more about the project on my{' '}
              <a href="https://igloramus.substack.com/i/122713926/cogsci-paper">
                IAP blog
              </a>
              .{' '}
            </p>
            <p></p>
            <b>Mentor:</b> Tan Zhi-Xuan
            <br />
            <b>Collaborators:</b> Arwa Alanqary, Joie Le
            <br />
          </div>
        </Col>
      </Row>

      {/* Stainglass by Numbers */}
      <Row className="project-even">
        <Col sm={6} xs={6}>
          <div className="proj-title">
            Stainglass by Numbers
            <br />
          </div>
          <div className="proj-desc">
            <p>
              Variant of painterly image rendering using conical brushstrokes,
              inspired by{' '}
              <a
                href="https://dl.acm.org/doi/10.1145/97880.97902"
                target="haeberli"
              >
                this paper
              </a>{' '}
              on abstract image representations. Simulates placing brushstrokes
              onto a canvas based on importance-sampled pixels from a photograph
              (with color noise) to produce a stainglass-like rendering of the
              photo.
            </p>
            <p>
              Also implemented original extensions to create mosiac-like and
              color-constrained renderings using{' '}
              <a
                href="https://en.wikipedia.org/wiki/Difference_of_Gaussians"
                target="DoG"
              >
                Difference of Gaussians
              </a>{' '}
              filtering and{' '}
              <a
                href="https://en.wikipedia.org/wiki/CIELAB_color_space"
                target="colorspace"
              >
                CIELAB colorspace
              </a>{' '}
              conversion, respectively.{' '}
            </p>
          </div>
        </Col>
        <Col sm={6} xs={6}>
          <img
            style={{ width: '100%' }}
            src={require('../../assets/images/projects/massave.gif')}
            alt="Massachusetts Ave rendered with cones"
          />{' '}
          <br />
          <div className="proj-desc">
            <p>
              <a href="https://goo.gl/maps/LHyq9vaqEoEqCvsL9" target="massave">
                77 Massachusetts Avenue
              </a>{' '}
              rendered with cones. <br></br>Built with NumPy and OpenCV.
            </p>
          </div>
        </Col>
      </Row>

      {/* InforME */}
      <Row className="project-odd">
        <Col sm={6} xs={6}>
          <iframe
            src="https://www.youtube.com/embed/3-B18bfzjAY"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Col>
        <Col sm={6} xs={6}>
          <div className="proj-title">
            InforME &nbsp;{' '}
            <a
              href="https://devpost.com/software/informe"
              target="informe"
              class="btn"
              role="button"
            >
              Read Devpost
            </a>
          </div>
          <div className="proj-desc">
            <p>
              Serverless webapp using sentiment analysis to detect and visualize
              systematic biases in mainstream media coverage of 2020
              presidential candidates to help voters make more cognizant
              decisions.
            </p>
            <p>
              Used Google Cloud NLP API to perform sentiment analysis on 900+
              news articles scraped from 8 major media outlets. Used Firebase,
              Flask framework, and Google Charts to store, access, and visualize
              data in an easily accessible format. Built during HackMIT 2019.
            </p>
            <p>
              <b>Teammates:</b> Shushu Fang, Steven Qu, Sherry Xiao
              <br />
            </p>
          </div>
        </Col>
      </Row>

      {/* Tunnel66 */}
      <Row className="project-even">
        <Col sm={6} xs={6}>
          <div className="proj-title">
            Tunnel66 <br />{' '}
            <a
              href="http://tunnel.mit.edu/"
              target="tunnel66"
              class="btn"
              role="button"
            >
              Visit Site
            </a>
            <a
              href="http://news.mit.edu/2020/tunnel66-collaborative-art-connect-mit-community-0513"
              target="tunnel66News"
              class="btn"
              role="button"
            >
              Read Article
            </a>
          </div>
          <div className="proj-desc">
            <p>
              Built and maintained collaborative art site to connect the MIT
              community in isolation as a part of my club Borderline's project
              during a semester made remote by COVID-19.
            </p>
            <p>
              Read more about the project on{' '}
              <a href="http://borderline.mit.edu/projects.html" target="bl66">
                our site
              </a>
              . Tunnel66 was featured on{' '}
              <a
                href="https://www.instagram.com/p/CAJh4qtnA5P/?utm_source=ig_web_button_share_sheet"
                target="feat"
              >
                MIT's front page
              </a>
              ,{' '}
              <a
                href="http://news.mit.edu/2020/tunnel66-collaborative-art-connect-mit-community-0513"
                target="mitn"
              >
                MIT News
              </a>
              ,{' '}
              <a
                href="https://mitadmissions.org/blogs/entry/tunnel66/"
                target="admit"
              >
                MIT Admissions Blog
              </a>
              , and{' '}
              <a
                href="https://www.instagram.com/p/CAK_sRzgUcZ/?utm_source=ig_web_button_share_sheet"
                target="igfeat"
              >
                MIT's official Instagram
              </a>
              !
            </p>
          </div>
        </Col>
        <Col sm={6} xs={6}>
          <iframe
            src="https://www.youtube.com/embed/TdTBWN-yaMo"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Col>
      </Row>

      {/* Sprouts */}
      <Row className="project-odd">
        <Col sm={6} xs={6} className="art">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/M9LBuTSme_U"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <div className="proj-desc">
            <p>
              {' '}
              Built with Node.js, Express, Vue.js, SQLite DB. Populated with
              businesses from{' '}
              <a
                href="https://data.cambridgema.gov/Economic-Development/Open-and-Closed-Businesses-During-Covid-19-Pandemi/9q33-qjp4"
                target="cambridge"
              >
                {' '}
                Cambridge Open Data
              </a>
              .
            </p>
          </div>
        </Col>
        <Col sm={6} xs={6}>
          <div className="proj-title">
            Sprouts
            <br />
          </div>
          <div className="proj-desc">
            <p>
              Webapp for members of the Boston community to search for and rate
              local restaurants on their enforcement of COVID safety
              precautions. Sprouts provides an extensive set of COVID
              safety-related categories that a restaurant can be rated on. Upon
              signup, restaurants can choose which categories are applicable to
              their business. Businesses can also dispute unfair ratings, and
              customers can like ratings to indicate helpfulness.
            </p>
            <p>
              <b>Teammates:</b> Lisa Peng, Jenn Wang, Shushu Fang
              <br />
            </p>
          </div>
        </Col>
      </Row>

      {/* Borderline Site */}
      <Row className="project-even">
        <Col sm={6} xs={6}>
          <div className="proj-title">
            Borderline &nbsp;{' '}
            <a
              href="http://borderline.mit.edu"
              target="bdlsite"
              class="btn"
              role="button"
            >
              Visit Site
            </a>
          </div>
          <div className="proj-desc">
            As Borderline (MIT augmented reality murals club) president, I
            rebuilt the organization's website from scratch, allowing it to be
            hosted for free on the mit.edu domain. This included making the site
            responsive, redesigning key pages, and curating and updating years
            of content. Borderline had originally created and hosted the site
            using a paid template service for convenience, which was costly,
            restrictive, and hard to maintain.
          </div>
        </Col>
        <Col sm={6} xs={6}>
          <img
            style={{ width: '63%', paddingRight: '5px' }}
            src={require('../../assets/images/projects/borderline.PNG')}
            alt="Borderline website"
          />
          <img
            style={{ width: '35%', paddingLeft: '5px' }}
            src={require('../../assets/images/projects/borderline_splash.png')}
            alt="Borderline logo"
          />
        </Col>
      </Row>

      {/* Coexist */}
      <Row className="project-odd">
        <Col sm={6} xs={6}>
          <img
            style={{ width: '38%', paddingRight: '5px' }}
            src={require('../../assets/images/projects/coexist2.PNG')}
            alt="Coexist Splash"
          />
          <img
            style={{ width: '61%', paddingLeft: '5px' }}
            src={require('../../assets/images/projects/coexist1.PNG')}
            alt="Coexist Scheduler"
          />
          <div className="proj-desc">
            <p>
              Built with Node.js, Express, Passport, Mongoose, Bootstrap,
              jQuery, and Google Charts.
            </p>
          </div>
        </Col>
        <Col sm={6} xs={6}>
          <div className="proj-title">Coexist</div>
          <div className="proj-desc">
            <p>
              Responsive webapp to conveniently find people to gym, dine, and
              study with. We all do these things anyway, so why not do them
              together?
            </p>
            <p>
              Features include heatmap event timeline; user anonymity,
              accountability, and attendance system; filtering and organizing
              personal events; and responsive design across screen and device
              sizes.
            </p>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Projects
