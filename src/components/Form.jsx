import React, { useState } from 'react'

const Form = ({setList, setControl2}) => {
    const [user, setUser] = useState([]);

    const handleInput = () => {
        const inputName = event.target.name;
        const inputValue = (event.target.value)
        setUser(prev => ({ ...prev, [inputName]: inputValue.replace(/[^\sa-zA-Z]/g, '')}));
        // setUser(prev => ({ ...prev, [inputName]: inputValue.replace(/[^a-zA-Z]/g, '')}));
    }
    const handleSubmit = async () => {
        event.preventDefault();
        setList(prev => [ {...user, name: user.name.toLowerCase()}]);
        setControl2(false);
    }
    return (
        <form className='flex gap-2' onSubmit={handleSubmit}>
            <input className='rounded border border-red-700 w-48 p-1 hover:border-red-900 outline-red-400' type="text" name='name' onChange={handleInput} value={user.name || ''} placeholder='Escribe tu primer nombre' />
            <input className='border p-1 rounded-md bg-red-50 hover:bg-red-400' type="submit" />
        </form>
    )
}

export default Form