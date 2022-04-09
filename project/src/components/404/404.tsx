import React from 'react';
import Header from '../Layout/Header';
import {Link} from 'react-router-dom';

function NotFound() {
  return (
    <>
      <Header/>
      <main className="page__main page__main--index">
        <div className="container">
          <p>404 Error. There is nothing here!</p>
          <Link to="/"><p>Please redirect on main page</p></Link>
        </div>
      </main>
    </>
  );
}

export default NotFound;
