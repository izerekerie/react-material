import React from 'react'
import useForm from './useForm'
import validate from './validateInfo'
function FormSignup() {

    const {handleChange,values,handleSubmit,errors} = useForm(validate)
    return (
        <div>
           <form onSubmit={handleSubmit}>
               <h1>Get started with us today ! create your account</h1>
               <div>
                   <label htmlFor="username">Uername</label>
                       <input type="text" 
                       name='username'
                        placeholder='enter your username'
                        value={values.username}
                        onChange={handleChange}/>
                        {errors.username && <p>{errors.username }</p>}
                    
               </div>
               <div>
                   <label htmlFor="email">Email </label>
                       <input type="text"
                        name='email' 
                        placeholder='enter your email'
                        value={values.email}
                        onChange={handleChange}/>
                   {errors.email && <p>{errors.email }</p>}
               </div>
               <div>
                   <label htmlFor="email">Password </label>
                       <input type="password"
                        name='password'
                         placeholder='enter your password'
                         value={values.password}
                         onChange={handleChange}
                         />
                  {errors.password && <p>{errors.password }</p>}
               </div>
               <div>
                   <label htmlFor="email">Confirm Password </label>
                       <input type="password" 
                       name='password2' 
                       placeholder='confirm your password'
                       value={values.password2}
                       onChange={handleChange}/>
                  {errors.password2 && <p>{errors.password2 }</p>}
               </div>
                <button>Sign up</button>
                <span>Already Have account? login
                    <a href="#">here</a></span>
           </form>
        </div>

    )
}

export default FormSignup
