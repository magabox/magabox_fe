import React from 'react'
import styled from 'styled-components'
import Button from '../Button/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { StPost, StBoxOf, StImg, StBtn } from './styled/BoCardStyled'

const BoCard = ({card}) => {
    console.log(card)
    const {imageUrl, totalHeartCount }= card

  return (
    <StPost>
        <StBoxOf>
            <StImg src={imageUrl}/>
            <StBtn>
                <Button theme="like"><FontAwesomeIcon icon={faHeart} size="lg" style={{marginRight : "5px"}}/>{totalHeartCount}</Button>
                <Button theme="reservation">예매</Button>
            </StBtn>
        </StBoxOf>
    </StPost>
  )
}

export default BoCard

