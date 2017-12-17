import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import _ from 'lodash'

import { setRatings } from '../modules/hotels'

import { StarsFilterWrapper } from './styled/RatingFilterStyled'

import starOutlined from '../assets/img/star-outline.svg'
import starFilled from '../assets/img/star-filled.svg'

const mapDispatchToProps = dispatch => bindActionCreators({
  setRatings
}, dispatch)

const mapStateToProps = state => {
  const { ratings } = state.hotels
  return { ratings }
}

class StarsFilter extends Component {
  render() {
    const { ratings } = this.props
    const stars = _.range(5)
    return (
      <StarsFilterWrapper starOutlined={starOutlined} starFilled={starFilled} >
        <h1 className='label' > Stars rating </h1>
        <div className='stars'>
          {stars.map((star, index) => 
            <div 
              onClick={() => this.props.setRatings(index + 1)}
              className={(index + 1) <= ratings ? 'star filled' : 'star' } 
              key={index} />)}
        </div>
      </StarsFilterWrapper>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StarsFilter)
