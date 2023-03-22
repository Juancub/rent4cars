import React, { useState } from 'react'
import images from "./../../store/images.json"
import "./imagenesProducto.css"
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'

const ImagenesProducto = ({id}) => {

  const [action, setAction] = useState(false)

  const openModal = () => setAction(true)

  const closeModal = () => setAction(false)

  const [index, setIndex] = useState(0)
  const [index2, setIndex2] = useState(0)

  const indexActual = (i) => (
    setIndex(i)
  );

  const index2Actual = (i) => (
    setIndex2(i)
  );

  return (
    <div className='imagenesProducto'>

      <ImageGallery
        items={images[id-1].urls}
        autoPlay={true}
        onSlide={indexActual}
        showFullscreenButton={false}
      />
      <p className='index'>{index + 1}/{images[id-1].urls.length}</p>
      <img src={images[id-1].urls[0].original} />
      <div className='imagenProducto'>
        {images[id-1].urls.slice(1, 5).map((imagen, index) => (
          <img key={index} src={imagen.original} alt={`imagen ${images[id-1].id}`} />
        ))}

        <p className='verMas' onClick={openModal}>Ver más</p>
      </div>

      <div className={`${action ? "openModal" : "closeModal"}`}>
        <FontAwesomeIcon className='close' onClick={closeModal} icon={faCircleXmark} />
        <ImageGallery items={images[id-1].urls} onSlide={index2Actual} />
        <p className='index2'>{index2 + 1}/{images[id-1].urls.length}</p>
      </div>

    </div>
  )
}

export default ImagenesProducto