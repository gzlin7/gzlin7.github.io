import './index.scss'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ImageComponent from './imageComponent'

const Art = () => {
  return (
    <div>
      {/* ART */}
      <div style={{ textAlign: 'left' }}>
        <p>
          <span class="title">Art | </span> Art should tell a story. Click or
          double tap on a piece to read its story!{' '}
        </p>
      </div>
      <br />
      <Row>
        <Col sm={4} className="art" id="drawnTogether">
          <ImageComponent
            imgFilename={'DrawnTogether.jpg'}
            titleHtml={'MIT<br/> Drawn<br/> Together'}
          />
        </Col>
        <Col sm={4} className="art" id="craneDancer">
          <ImageComponent
            imgFilename={'craneDancer.gif'}
            titleHtml={'Crane<br/> Dancer'}
          />
        </Col>
        <Col sm={4} className="art" id="fishOutOfWater">
          <ImageComponent
            imgFilename={'fishSquare.jpg'}
            titleHtml={'Fish<br/> out of<br/> Water'}
          />
        </Col>
      </Row>

      <Row>
        <Col sm={4} className="art" id="liminalSpace">
          <ImageComponent
            imgFilename={'Liminal_1.PNG'}
            titleHtml={'Liminal Space<br/> (zine)'}
          />
        </Col>
        <Col sm={4} className="art" id="koiQueen">
          <ImageComponent imgFilename={'koiQueen.jpg'} titleHtml={'KoiQueen'} />
        </Col>
        <Col sm={4} className="art" id="incandescent">
          <ImageComponent
            imgFilename={'IncandescentSquare.gif'}
            titleHtml={'Incandescent'}
          />
        </Col>
      </Row>

      <Row>
        <Col sm={4} className="art" id="boston">
          <ImageComponent
            imgFilename={'Boston.gif'}
            titleHtml={'Fog<br/> on the<br/> Charles'}
          />
        </Col>
        <Col sm={4} className="art" id="dormspam">
          <ImageComponent
            imgFilename={'techxodus.png'}
            titleHtml={'Dormspam<br/> Comic'}
          />
        </Col>
        <Col sm={4} className="art" id="calligraphy">
          <ImageComponent
            imgFilename={'calligraphy.gif'}
            titleHtml={'Chinese<br/> Calligraphy'}
          />
        </Col>
      </Row>
    </div>
  )
}

export default Art
