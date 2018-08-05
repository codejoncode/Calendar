import React, { Component } from 'react';
import PropTypes from 'prop-types';
// Complete this Carousel 

import styled  from 'styled-components'; 

const CarouselStyled = styled.div`
  border: 2px solid black;
  width: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  height: 80px;
  position: relative;
  overflow: hidden;
  margin-top: 16px;
  margin-bottom: 10px;
  button:hover {
    color: #333;
    background-color: #fff;
    border: 2px solid #333;
  }
  img {
    width: 800px;
    max-width: 100%;
    
  }
  
`;
const LeftButton = styled.button `
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  color: #fff;
  background-color: #333;
  font-size: 40px;
  border-radius: 50%;
  position: absolute;
  width: 25px;
  height: 50px;
  cursor: pointer;
  top: 50%;
  left: 0;
  transform: translate(0, -50%);
`;

const RightButton = styled.button `
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  color: #fff;
  background-color: #333;
  font-size: 40px;
  border-radius: 50%;
  position: absolute;
  width: 25px;
  height: 50px;
  cursor: pointer;
  top: 50%;
  right: 0px;
  transform: translate(0, -50%);
`;


class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      activeImg: 0,
      images: []

    }
  }
  
  
  render(){
    return (
      
      <CarouselStyled>
        <LeftButton onClick={this.props.leftClick}> {"<"}</LeftButton>
        <div>{this.props.selectedImage()}</div>
        <RightButton onClick={this.props.rightClick}>{">"}</RightButton>
      </CarouselStyled>
    )
  }
}

export default Carousel;

Carousel.propTypes = {
    month: PropTypes.string,
    rightClick: PropTypes.func,
    leftClick: PropTypes.func

  }

