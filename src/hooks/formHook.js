import React from 'react'

export default function useFormInput(init) {
    const [value, setValue] = React.useState(init);

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    return {
        value,
        onChange: handleChange
    }
}
