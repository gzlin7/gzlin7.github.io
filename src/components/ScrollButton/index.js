import './index.scss'
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'

const ScrollButton = () => {
  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop
    if (scrolled > 100) {
      setVisible(true)
    } else if (scrolled <= 100) {
      setVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  window.addEventListener('scroll', toggleVisible)

  return (
    <Button
      variant="primary"
      className="rounded-pill"
      size="lg"
      onClick={scrollToTop}
      style={{ display: visible ? 'inline' : 'none' }}
    >
      back to top
    </Button>
  )
}

export default ScrollButton
