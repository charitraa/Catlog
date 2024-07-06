import React from 'react';
import './Campaign.css';

function Campaign() {
  return (
    <>
      <div className='campaign'>
        <div className='campaign-container'>
          <div className='campaign-heading'>Campaigns</div>
          <div className='campaign-paragraph'>
            We aim to stop public funds siphoning off and we have a plan that
            will help. We are working at the national and EU levels to advance.
          </div>
          <div className='card'>
            <div className='directive'>
              <div className='image1'></div>
              <div className='content'>
                <div className='content-heading'>Open Data Directive</div>
                <div className='content-paragraph'>In view of Russia’s military action against the Ukrainian people, being concerned about ensuring that European funds are used effectively and transparently.</div>
                <div className='contentbtn'>Learn More <i className='fa-solid fa-arrow-right'></i></div>
              </div>
            </div>
            <div className='ownership'>
              <div className='image2'></div>
              <div className='content'>
                <div className='content-heading'>Beneficial Ownership</div>
                <div className='content-paragraph'>In view of Russia’s military action against the Ukrainian people, being concerned about ensuring that European funds are used effectively and transparently.</div>
                <div className='contentbtn'>Learn More <i className='fa-solid fa-arrow-right'></i></div>
              </div>
            </div>
            <div className='recovery'>
              <div className='image3'></div>
              <div className='content'>
                <div className='content-heading'>EU Recovery Transparency</div>
                <div className='content-paragraph'>In view of Russia’s military action against the Ukrainian people, being concerned about ensuring that European funds are used effectively and transparently.</div>
                <div className='contentbtn'>Learn More <i className='fa-solid fa-arrow-right'></i></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Campaign;
