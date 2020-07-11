import React, {Component} from 'react';
import { Button, FormGroup, Label, Input} from 'reactstrap';
class Login extends Component{
    render() {
        return(
            <div style= {{padding: 20}}>
                <h3> Sign in to your account</h3>
                <hr/>
                <FormGroup>
                    <Label>Email</Label>
                    <Input name='email' type='email' placeholder='someone@example.com'/>
                </FormGroup>
                <FormGroup>
                    <Label>Password</Label>
                    <Input name='password' type='password' placeholder='Enter Your Password'/>
                </FormGroup>
                <Button color= 'primary' block>Sign In</Button>
            </div>
        )
    }

}

export {Login};