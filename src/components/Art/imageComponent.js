import './index.scss'
import { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import artData from './artData.js'

const ImageComponent = ({ imgFilename, titleHtml }) => {
  const [isOpen, setIsOpen] = useState(false)
  const handleClose = () => setIsOpen(false)
  const handleShow = () => setIsOpen(true)
  var title = titleHtml.replaceAll('<br/>', '')
  var description = artData
    .filter((v) => v.title == title)
    .map((m) => m.description)

  return (
    <div>
      <img
        alt={title}
        src={require('../../assets/images/art/' + imgFilename)}
        onClick={handleShow}
      />
      <div
        class="art-titles"
        dangerouslySetInnerHTML={{ __html: titleHtml }}
        onClick={handleShow}
      />

      <Modal
        show={isOpen}
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <div className="modal-title">{title}</div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            style={{ width: '100%' }}
            alt={title}
            src={require('../../assets/images/art/' + imgFilename)}
          />
        </Modal.Body>
        <Modal.Footer>
          <div
            class="art-desc"
            dangerouslySetInnerHTML={{ __html: description }}
            onClick={handleShow}
          />
          {title == 'Liminal Space (zine)' ? (
            <div>
              <img
                style={{ width: '100%' }}
                src={require('../../assets/images/art/Liminal_2.PNG')}
              />
              <img
                style={{ width: '100%' }}
                src={require('../../assets/images/art/Liminal_3.PNG')}
              />
              <img
                style={{ width: '100%' }}
                src={require('../../assets/images/art/Liminal_4.PNG')}
              />
              <img
                style={{ width: '100%' }}
                src={require('../../assets/images/art/Liminal_5.PNG')}
              />
              <img
                style={{ width: '100%' }}
                src={require('../../assets/images/art/Liminal_6.PNG')}
              />
              <img
                style={{ width: '100%' }}
                src={require('../../assets/images/art/Liminal_7.PNG')}
              />
              <img
                style={{ width: '100%' }}
                src={require('../../assets/images/art/Liminal_draft.PNG')}
              />
            </div>
          ) : (
            <></>
          )}
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default ImageComponent
