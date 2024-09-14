import React from 'react'
import { useContext } from 'react'
import authContext from '../config/context1'
function ChildContext() {

    const authContextConsumerData = useContext(authContext);
    console.log("authContextConsumerData : ", authContextConsumerData);
    return (
        <div>ChildContext {authContextConsumerData.name}</div>
    )
}

export default ChildContext