import React, { Component } from 'react'

class ImageUpload extends Component {
  constructor(props) {
    super(props)

    this.onChange = this.onChange.bind(this)
  }

  onChange(e) {
    console.log(this);
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
      <div className='mt2'>
        <input
          className='upload_icon contain db center'
          onChange={this.onChange}
          type='file'
          name={name}
          accept='image/*'
          multiple
        />
        {(images).map(image =>
          <div>
            {image.name}
          </div>
        )}
        <span className='center db tc f6'> Upload from device </span>
      </div>
    )
  }
}

export default ImageUpload
