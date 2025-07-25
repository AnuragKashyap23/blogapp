import React, { useState } from 'react'

const Signup = () => {
  const [formData, setFormData] = useState({
    firstname:'',
    lastname:'',
    username:'',
    password:'',
    email:''
  })

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:[e.target.value]
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`${formData.username} - ${formData.password}`)
    setFormData({
      username:'',
      password:'',
      firstname:'',
      email:'',
      lastname:''
    })
  }


  return (
    <div>
      <h1>Signup</h1>
      <div>
        <form onSubmit={(e)=>handleSubmit(e)}>
          <input name='firstname' type='text' placeholder='firstname' value={formData.firstname}  onChange={(e)=>{handleFormChange(e)}}/>
          <input name='lastname' type='text' placeholder='lastname' value={formData.lastname}  onChange={(e)=>{handleFormChange(e)}}/>
          <input name='username' type='text' placeholder='username' value={formData.username}  onChange={(e)=>{handleFormChange(e)}}/>
          <input name='password' type='password' placeholder='password' value={formData.password}  onChange={(e)=>{handleFormChange(e)}}/>
          <input name='email' type='email' placeholder='email' value={formData.email}  onChange={(e)=>{handleFormChange(e)}}/>
          <input type='submit' value='submit' placeholder='submit' />
        </form>
      </div>
    </div>
  )
}

export default Signup