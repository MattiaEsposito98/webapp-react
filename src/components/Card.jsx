// import React from 'react';
// import {
//   MDBCard,
//   MDBCardBody,
//   MDBCardTitle,
//   MDBCardSubTitle,
//   MDBCardText,
//   MDBCardImage,
//   MDBBtn,
//   MDBRipple
// } from 'mdb-react-ui-kit';

export default function Card({ movie }) {
  return (
    <>
      <div className="card ">
        <img src={movie.image} className="card-img-top img-fluid img-card" />
        <div className="card-body bg-body-secondary">
          <h5 className="card-title">{movie.title}</h5>
          <h6 className="card-subtitle mb-2 text-body-secondary fst-italic">{movie.director}</h6>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">Leggi di più</a>
        </div>
      </div>
    </>
  )
  //     <MDBCard>
  //       <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>

  //         <MDBCardImage className='' src={movie.image} fluid alt='...' />
  //         <a>
  //           <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
  //         </a>
  //       </MDBRipple>
  //       <MDBCardBody>
  //         <MDBCardTitle>{movie.title}</MDBCardTitle>
  //         <MDBCardSubTitle className='fst-italic'>{movie.director}</MDBCardSubTitle>
  //         <MDBCardText>
  //           {movie.abstract}
  //         </MDBCardText>
  //         <MDBBtn href='#'>Leggi di più</MDBBtn>
  //       </MDBCardBody>
  //     </MDBCard>




}