import React from 'react'
import { useFormContext } from 'react-hook-form'
import styles from './Input.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';


const Input = ({fieldName , type, label , placeholder , validation , errors }) => {

    const {register } = useFormContext()
    // console.log(errors)
  return (
    <div className={styles.input_area}>
        <div className={styles.label_message}>
        <label htmlFor="label">{fieldName}</label> 
        <div className={styles.message}>
        {errors && <>
        <FontAwesomeIcon color='#c5441c' icon={faCircleExclamation} />
        <p>{errors}</p></>}
        </div>
        </div>
        <input type={type}
            placeholder={placeholder}
            autoComplete='off'
            name={fieldName}
            {...register(fieldName , validation)}
        />
    </div>
  )
}

export default Input