import React from 'react'
import authContext from '../config/context1'
import ChildContext from './childContext';

function ParentContext() {
  console.log('ParentContext : ', authContext);
  return (
    <>
      <div>Parent Context value </div>
      {/* <authContext.Consumer> */}
        <ChildContext/>
      {/* </authContext.Consumer> */}
    </>
  )
}

export default ParentContext