import React from 'react'
import { FormProvider , useForm } from 'react-hook-form'
import style from './login.module.css'
const Login = () => {
  const methods = useForm()
  console.log(style)
  return (
    <>
     <FormProvider {...methods}>
        <form className={style.login_form} action="#">
          <div className="input-field">
            <label htmlFor=""></label>
              
          </div>
        </form>
     </FormProvider>
    </>
  )
}

export default Login