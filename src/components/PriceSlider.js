import React, { Component } from 'react'
import { RangeSlider } from 'reactrangeslider'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { PriceSliderStyled, PriceSliderRange } from './styled/PriceSliderStyled'

import { setRange } from '../modules/hotels'

const mapDispatchToProps = dispatch => bindActionCreators({
  setRange
}, dispatch)

const mapStateToProps = state => {
  const { range } = state.hotels
  return { range }
}

class PriceSlider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      range: {
        start: 0,
        end: 1000,
      }
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(range) {
    console.log('range', range)
    this.props.setRange({
      range
    })
  }

  componentWillMount() {
    const { range } = this.props
    this.setState({
      range
    })
  }

  render() {
    const { start, end } = this.props.range
    return (
      <PriceSliderStyled>
        <label className='label'>Price Range</label>
        <RangeSlider
          min={this.state.range.start}
          max={this.state.range.end}
          step={5}
          defaultValue={{ start: 0, end: end }}
          afterChange={this.handleChange}
          wrapperClassName='priceWrapper'
          handleClassName='priceHandler'
          trackClassName='priceTrack'
          highlightedTrackClassName='priceHighlightedTrack'
        />
        <PriceSliderRange>
          <div className='left'>
            <label className='label'>Min</label>
            <p className='price'>${start}</p>
          </div>
          <div className='right'>
            <label className='label'>Max</label>
            <p className='price'>${end}</p>
          </div>
        </PriceSliderRange>
      </PriceSliderStyled>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PriceSlider)
