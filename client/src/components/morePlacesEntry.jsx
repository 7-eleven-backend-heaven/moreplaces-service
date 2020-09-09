import React from 'react';
import styled from 'styled-components';

let MorePlacesEntry = (props) => {
  switch(props.place.issuperhost) {
    case true:
      return (
        <Card>
          <ImageContainer>
            <SuperHost><SuperHostCon>SUPERHOST</SuperHostCon></SuperHost>
            <HeartImg src={heartImg} />
            <a href={`?propertyId=${props.place.propertyid}`}><Image src={props.place.imageurl} /></a>
          </ImageContainer>
          <div className="property-description">
            <div>{props.place.propertytype} • {props.place.numofrooms} beds</div>
            <div><StarImg src={starImg} /> {props.place.rating} <NumRatings>({props.place.numofratings})</NumRatings></div>
            <div>{props.place.description}</div>
            <div><Price>{props.place.price}</Price> / night</div>
          </div>
        </Card>
      )
      break;
    case false:
      return (
        <Card>
          <ImageContainer>
            <HeartImg src={heartImg} />
            <a href={`?propertyId=${props.place.propertyid}`}><Image src={props.place.imageurl} /></a>
          </ImageContainer>
          <div className="property-description">
            <div>{props.place.propertytype} • {props.place.numofrooms} beds</div>
            <div><StarImg src={starImg} /> {props.place.rating} <NumRatings>({props.place.numofratings})</NumRatings></div>
            <div>{props.place.description}</div>
            <div><Price>{props.place.price}</Price> / night</div>
          </div>
        </Card>
      )
      break;
    default:
      return null;
  }
}

let starImg = "https://hackreactor5erfliesmoreplaces.s3-us-west-1.amazonaws.com/Screen+Shot+2020-08-14+at+9.41.44+PM.png";
let heartImg = "https://hackreactor5erfliesmoreplaces.s3-us-west-1.amazonaws.com/airbnb-heart.png"

const Card = styled.div`
  display: flex;
  flex-direction: column;
  border-width: 0px 10px;
  flex: {
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: 33.333%;
  };
  max-width: 33.333%;
  font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif !important;
  font-weight: 400;
  font-size: 16px;
  margin: 0 10px 0 10px;
`;

const ImageContainer = styled.div`
  position: relative;
`

const Image = styled.img`
  height: 180px;
  width: 270px;
  border-radius: 8px;
  position: relative;
  z-index: 0;
`;

const SuperHost = styled.div`
  position: absolute;
  font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif !important;
  background-color: rgba(255, 255, 255, 0.95);
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  margin: 10px;
  color: rgb(34, 34, 34);
  z-index: 1;
`;

const SuperHostCon = styled.span`
  margin: 10px;
  font-weight: bold;
  font-size: 14px;
`

const HeartImg = styled.img`
  height: 14px;
  width: 16px;
  position: absolute;
  bottom: 88%;
  left: 92%;
  z-index: 1;
`
const StarImg = styled.img`
  height: 14px;
  width: 14px;
  line-height: 0px;
`;

const NumRatings = styled.span`
  color: grey
`
const Description = styled.div`
  display: flex;
  flex: {
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: 33.333%;
  };
  max-width: 33.33%;
`;
const Price = styled.span`
  font-weight: bold;
`;

export default MorePlacesEntry;