import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardSubTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple
} from 'mdb-react-ui-kit';

export default function Card({ movie }) {
  return (
    <MDBCard>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>

        <MDBCardImage src={movie.image} fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>{movie.title}</MDBCardTitle>
        <MDBCardSubTitle className='fst-italic'>{movie.director}</MDBCardSubTitle>
        <MDBCardText>
          {movie.abstract}
        </MDBCardText>
        <MDBBtn href='#'>Leggi di più</MDBBtn>
      </MDBCardBody>
    </MDBCard>
  );
}