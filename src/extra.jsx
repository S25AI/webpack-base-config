import React, {Fragment} from 'react';

export default ({title, descr}) => (
  <Fragment>
    <h2>{title}</h2>
    <p className='descr'>{descr}</p>
  </Fragment>
);