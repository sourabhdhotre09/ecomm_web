import React from 'react';
import Hero from '../components/Hero/Hero';
import Popular from '../components/popular/Popular';
import NewCollection from '../components/new_collections/NewCollection';

const Home = () => {
  
  return (
   <>
    <div className='container-fluid hero-section mb-5'>
      <Hero/>    
    </div>
    <div className="container popular-section mb-5">
      <Popular/>
    </div>
    <div className="container new_collection_section mb-5" id='newCollection' style={{scrollMarginTop: '120px'}}>
      <NewCollection/>
    </div>
    </>
  );
};

export default Home;