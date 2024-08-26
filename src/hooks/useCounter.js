import React, { useEffect, useState } from 'react'

export default function useCounter(delayDuration = 1000) {
    const [count, setCount] = useState(0);
    const [delay, setDelay] = useState(delayDuration);

    const setUpCode = () => {
        console.log('setup code');
        const interval = setInterval(() => {
            setCount(count => count + 1);
        },delay);
        return interval;
    }

    const cleanupCode = (interval) => {
        console.log('cleanup code');
        clearInterval(interval);
    }

    useEffect(() => {
        const interval = setUpCode();
        return () => {
            cleanupCode(interval);
        }
    })

    const handleDelayChange = (e) => {
        console.log('delay', e.target.value);
        setDelay(e.target.value);
    }

    return {count, onchange: handleDelayChange,value: delay};
}
