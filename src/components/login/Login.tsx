import React from 'react'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';

export default function Login() {
  return (
    <MDBContainer fluid className="p-3 my-5 h-custom">
      <MDBRow style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
        <MDBCol col='10' md='6'>
          <img src="https://wallpapercave.com/wp/wp2153329.jpg" className="img-fluid" alt="Sample image" />
        </MDBCol>

        <MDBCol col='4' md='6'>

          <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg"/>
          <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg"/>

          <div className="d-flex justify-content-between mb-4">
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
            <a href="#!">Forgot password?</a>
          </div>

          <div className='text-center text-md-start mt-4 pt-2'>
            <MDBBtn className="mb-0 px-5" size='lg'>Login</MDBBtn>
            
            <p className="small fw-bold mt-2 pt-1 mb-2">______________________________________________or____________________________________________________________ <a href="#!" className="link-danger">
              <br />

            <MDBBtn className="mb-0 px-5 none " size='lg'>Register now</MDBBtn></a></p>

          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
