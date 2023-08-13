import React , {useState} from 'react'
import {useForm , FormProvider} from 'react-hook-form'
import Input from './Input';
import style from './Signup.module.css'
import { NavLink } from 'react-router-dom';
import { confirm_password_validation, email_validation, lastName_validation, name_validation, password_validation } from '../../../utils/formValidation';
const Signup = () => {
    const  methods = useForm();
    const [checkbox , setCheckbox] = useState(false);
    const [formSubmit , setFormSubmit] = useState(false)
    const onSubmited = methods?.handleSubmit(data => {
        if(checkbox === true) {
            console.log(data)
            methods.reset()
            setCheckbox(false)
            setFormSubmit(false)
            console.log(methods.getFieldState('password'))
        }
        console.log('checkbox required')
    })
  return (
            <FormProvider {...methods}>
                <form className={style.signup_form} action="#" onSubmit={methods.handleSubmit(onSubmited)}>
                <h3>Create An Account</h3>
                    <Input {...name_validation} errors={methods.formState.errors.firstName?.message} />
                    <Input {...lastName_validation} errors={methods.formState.errors.lastName?.message}/>
                    <Input {...email_validation} errors={methods.formState.errors.email?.message}/>
                    <Input {...password_validation} errors={methods.formState.errors.password?.message} />
                    <Input {...confirm_password_validation} errors={methods.formState.errors?.confirm_password?.message}/>

                    <div className={style.send_email_option}>
                        <input {...methods.register('checkboxed')} type="checkbox" name="send-email" id="" value={checkbox} onClick={()=> setCheckbox(!checkbox)}/>
                        <p className={style.message}>(Optional) It’s okay to send me emails with Discord updates, tips, and special offers. You can opt out at any time.</p>
                    </div>
                    {!checkbox && formSubmit && <p className={style.checkbox_error}>checkbox is required</p>}    
                    <input className={style.submit} type='submit' onClick={()=> setFormSubmit(true)} value='Continue'/>
                <p className={style.message}>By registering, you agree to Discords </p>
                    <NavLink to={'#'} >Already have an Account</NavLink>
                </form>
            </FormProvider>
  )
}

export default Signup