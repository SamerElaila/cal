import React, { Component } from 'react'

const Image = ({ image, removeImaage }) => {
  const objectUrl = window.URL.createObjectURL(image)

  return (
    <div className='dib w-50 relative'>
      <div className='w-100 h-100 absolute pa2'>
        <div
          className='w-100 h-100'
          style={{
            background: `url(${objectUrl}) 50% 50% no-repeat`
          }}
          ></div>
      </div>
      <div style={{ paddingBottom: '100%'}} ></div>
    </div>
  )
}
const ImageGallery = ({ images, removeImage }) =>
  images.map(image => <Image image={image} removeImage={removeImage} />)

class ImageUpload extends Component {
  constructor(props) {
    super(props)

    this.onChange = this.onChange.bind(this)
  }

  onChange(e) {
    const {
      name,
      value: images,
      onChange
    } = this.props

    const { files } = e.target
    const newFiles = []

    for (let i = 0; i < files.length; i++) {
      newFiles[i] = files[i]
    }

    onChange({
      target: {
        name: name,
        value: images.concat(newFiles)
      }
    })
  }

  render() {
    const {
      name,
      value: images
    } = this.props

    return (
      <div className='pa4 pb0'>
        <span
          className='f4 pa1 ttu'
          >
          Images
        </span>
        <div className='bw1 ba br-4 b--light-gray'>
          <label className='db' for={name}>create event</label>
          <input
            className='o-0'
            onChange={this.onChange}
            type='file'
            name={name}
            accept='image/*'
            multiple
            />
          <ImageGallery images={images} />
        </div>
      </div>
    )
  }
}

export default ImageUpload
