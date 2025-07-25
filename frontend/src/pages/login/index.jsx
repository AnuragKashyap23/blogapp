import React, { useState } from 'react'

const Login = () => {
  const [formData, setFormData] = useState({
    username:'',
    password:''
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
      password:''
    })
  }

  return (
    <div>
      <div className='flex flex-row justify-center h-20 w-full bg-amber-400'>
        <form onSubmit={(e)=>handleSubmit(e)}>
          <input name='username' type='text' placeholder='username' value={formData.username}  onChange={(e)=>{handleFormChange(e)}}/>
          <input name='password' type='password' placeholder='password' value={formData.password}  onChange={(e)=>{handleFormChange(e)}}/>
          <input type='submit' value='submit' placeholder='submit' />
        </form>
      </div>
    </div>
  )
}

export default Login