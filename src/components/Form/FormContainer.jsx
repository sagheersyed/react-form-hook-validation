import React from 'react'
import style from './FormContainer.module.css'
import { Route , Routes } from 'react-router-dom'
import Signup from './SignupForm/Signup'
import Login from './LoginForm/Login'

const FormContainer = () => {
  return (
    <div className={style.wrapper}>
        <div className={style.form_container}>
            <Routes>
                <Route path='/' element={<Signup/>}/>
                <Route path='login' element={<Login/>}/>
            </Routes>
        </div>
    </div>
  )
}


export default FormContainer