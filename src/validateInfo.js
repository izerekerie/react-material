export default function  validateInfo(values){
    let errors={}
    //username
        if(!values.username.trim()){
            errors.username="Username is required"
        }
        //email
        if(!values.email.trim()){
            errors.email="Email is required"
        }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9._]+\.[A-Z]{2,}$/i.test(values.email)){
            errors.email="Email address is invalid"
        }
        //password
        if(!values.password){
            errors.password=' Password is required'
        }else if(values.password.length<5){
            errors.password=' Password length need to 6 or more '
        }
        if(!values.password2){
            errors.password2=' Password is required'
        }else if(values.password2 !==values.password ){
            errors.password=' Passwords do not match '
        }
        return errors;
    }

 
