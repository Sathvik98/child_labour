import React, {Component} from 'react';
import '../css/login.css'; 
import '../css/complaint.css';
import {scroller} from 'react-scroll'; 
import {Link} from 'react-router-dom'; 
// import Scrol from './Scrol';
import Complaint from './Complaint';
import data from '../json/data.json'; 
import {withRouter} from 'react-router-dom'; 
import Register from './Register';
// import {Element} from 'react-scroll';


const scrollToElement = (element) => {
    scroller.scrollTo(element, {
        duration: 1500, 
        delay: 100, 
        smooth: true
    }); 
}

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { loginError: false };
    }

    submitHandler = (event) => {
        event.preventDefault();
        var username = event.target.username.value; 
        console.log(this.props.history); 
        if (data.hasOwnProperty(username) && data[username].password == event.target.password.value)
        {
            if (username[0]== 'A')
                this.props.history.push('/anganwadi1st'); 
            else if(username[0]== 'S')
            this.props.history.push('/school1st');
            else if(username[0]=='O')
            this.props.history.push('/orphanage');
            else if(username[0]=='G')
                this.props.history.push('/govern');
            else
                this.props.history.push('/hospital'); 
        }
        else
            this.setState({loginError: true}); 
    }

    render() {
        var errormsg = undefined; 

        if (this.state.loginError)
            errormsg = <p>Invalid Username or Password</p>
        else
            errormsg = <p></p>
        return (
            <div className="login">
                <div className="loginbox">
                    <button id="complaint-box" onClick={()=>scrollToElement('Complaint')}>Report us<br />Save a child</button>
                    <div className="loginbox2">
                        <img src={require('../img/images.png')} alt="backgroud" className="avatar1"/>
                        <h1 id="heading">User login</h1>
                        <form onSubmit={this.submitHandler}>
                            {/* /<p >Username</p> */}
                            <input id="lu" type="text" name="username"placeholder="Enter Username" required/>
                            {/* <p >Password</p> */}
                            <input id="lu" type="password" name="password" placeholder="Enter Password" required/>
                            <input type="submit" name="button" value="Login"/>
                            { errormsg }
                            <Link to="/Forgot password"><p id="pf">Forgot password</p></Link><br />
                            <Link to="/register"><p id="pf">Register</p></Link>
                        </form>
                    </div>
                </div>
                <div id="Complaint" className="Complaint">
                    <Complaint />
                </div>    
            </div>
        );
    }
}

export default Login;