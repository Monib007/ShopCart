import React, { useState } from 'react'
import './Contact.css'

const Contact = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name] : value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        setFormData({
            name: '',
            email: '',
            message: '',
        })
    }

  return (
    <div className='contact'>
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit} className='contact-form'>
            <label htmlFor="name"> Name: </label>
            <input id='name' name='name' value={formData.name} type="text" onChange={handleChange} required/>

            <label htmlFor="email"> Email: </label>
            <input id='email' name='email' value={formData.email} type="email" onChange={handleChange} required/>

            <label htmlFor="message"> Message: </label>
            <textarea name="message" id="message" value={formData.message} onChange={handleChange} cols="30" rows="10"></textarea>

            <button type='submit'> Submit </button>
        </form>
    </div>
  )
}

export default Contact