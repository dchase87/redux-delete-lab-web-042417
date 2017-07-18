import React, { Component } from 'react'
import Band from './Band'

class Bands extends Component {
  render () {
    return (
      <ul>
        {this.props.store.getState().bands.map((band, index) => {
          return <Band id={band.id} key={index} band={band} store={this.props.store} />
        })}
      </ul>
    )
  }
}

export default Bands
