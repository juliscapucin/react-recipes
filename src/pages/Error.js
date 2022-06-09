import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className='section error-section'>
      <div className='error-container'>
        <h1>Oops! It's a dead end</h1>
        <Link className='btn btn-primary'>Back Home</Link>
      </div>
    </section>
  );
};

export default Error;
