import React, {Component} from 'react';
import { Button, FormGroup,FormFeedback, Label, Input, Alert} from 'reactstrap';
import {Link} from 'react-router-dom';
import {Formik} from 'formik';
import * as Yup from 'yup';

 class Login extends Component{
     _handleFormSubmit(values){
         console.log(values)
     }
    render() {
        return(
            <div style= {{padding: 20}}>
                <h3> Sign in to your account</h3>
                <hr/>
                <Formik
                initialValues={{email: '', password: ''}}
                onSubmit = {this._handleFormSubmit.bind(this)}
                validationSchema={Yup.object().shape({
                    email: Yup.string()
                      .email()
                      .required(),
                    password: Yup.string()
                      .min(8)
                      .required()
                    })}
 
                render={({
                    handleChange,
                    handleSubmit,
                    isValid,
                    isSubmitting,
                    handleBlur,
                    errors,
                    touched,

                }) => (
                    <div>
                  <FormGroup >
                    <Label>Email</Label>
                    <Input 
                      invalid={errors.email && touched.email}
                    name='email'
                     type='email' 
                     placeholder='someone@example.com'
                     onChange={handleChange}
                     onBlur={handleBlur}
                     />
                     
                  {errors.email && touched.email ? (
                  <FormFeedback>{errors.email}</FormFeedback>
                ) : null}   
                </FormGroup>
                <FormGroup>
                    <Label>Password</Label>
                    <Input 
                    invalid={errors.password && touched.password}

                    name='password' 
                    type='password' 
                    placeholder='Enter Your Password'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    />
                     {errors.password && touched.password ? (
                  <FormFeedback>{errors.password}</FormFeedback>
                ) : null}
                </FormGroup>
                <Button
                color='primary'
                block
                onClick={handleSubmit}
                disabled={!isValid || isSubmitting}
              >
                Sign In
              </Button>
                    </div>
                )}
                />
                <Link to= '/signup'>Do not have an account? Sign Up Now</Link>

               
            </div>
        )
    }

}

export {Login};