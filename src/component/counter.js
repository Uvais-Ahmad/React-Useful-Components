import React, { useEffect } from 'react'
import useCounter from '../hooks/useCounter';

export default function Counter() {
    const counterHooksParams = useCounter(500);

    return (
        <>
            <div>
                <h1>Delay Timer</h1>
                <input type="range" min='10' max='2000' onChange={counterHooksParams?.onchange} value={counterHooksParams?.value} />
            </div>
            <div style={{marginLeft:'30px', marginTop: '50px'}}>
                <div>counter</div>
                <h1>{counterHooksParams.count}</h1>
            </div>
        </>
    )
}
