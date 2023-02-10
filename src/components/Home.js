import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import CubeIcon from 'mdi-react/CubeIcon';
import { Link } from 'react-router-dom';


const Home = () => (
    <Fragment>
        <Helmet><title>Quiz-App - Home</title></Helmet>
        <div id='home'>
            <section>
                <div style={{textAlign: 'center'}}>
                <CubeIcon className="mdi-cube" size={80} />
                </div>
                <h1 style={{margintop:'40px' }}>Quiz App</h1>
                <div className='play-button-container'>
                    <ul>
                        <li><Link  className='play-button' to="/play/instructions">Start Test </Link></li>
                    </ul>
                </div>
                <div className="auth-conatiner">
                    <Link to='/login' className='auth-buttons' id='login-button'>Login</Link>
                    <Link to='/register' className='auth-buttons' id='signup-button'>Sign Up</Link>
                </div>
                
            </section>
        </div>    
    </Fragment>
);
  

export default Home
