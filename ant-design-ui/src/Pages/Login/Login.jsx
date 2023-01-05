import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

    return (
        <>
            <main id="main" className="main m-3">
                <div className="pagetitle">
                    <h1>Login</h1>
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to={'/Home'}>Home</Link></li>
                            <li className="breadcrumb-item active">Login</li>
                        </ol>
                    </nav>
                </div>
            </main>
        </>
    )
}

export default Login