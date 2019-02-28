import '../css/School1st.css';
import data from '../Cookedfiles/childData.json'; 
import React, {Component} from 'react';
class School1st extends Component {
    constructor(props) {
        super(props);
        this.state = { loginError:false };
    }
    submitHandler = (event) => {
        event.preventDefault();
        var id = event.target.Id.value; 
        if(data.hasOwnProperty(id))
        {
            const url = "/school/" + id; 
            this.props.history.push(url);
        }
        else
            this.setState({loginError: true}); 
    }


    handleClick = () => {
        this.props.history.push("/"); 
    }
    anganwadiClick=()=>{
        this.props.history.push("/school");
    }
    render() {
        var errormsg = undefined; 

        if (this.state.loginError)
            errormsg = <p id="colour">Invalid id</p>
        else
            errormsg = <p></p>
        return (
            <div className='sch' >
                <h1 id="sch1st">Schools</h1>
                <button id="signouT1" type="button" value="Signout" onClick={this.handleClick}>Signout</button>
                <body className="body2">
                <form onSubmit={this.submitHandler}>
                    <input id="na" type="text" name="Id" placeholder="Child Id"></input>
                    <button id="ne"type="submit" value="Search" >Search</button>{errormsg}<br /><br /></form>
                    <button id="ty"type="submit" value="New Entry" onClick={this.anganwadiClick}>New Entry</button><br />
                </body>
            </div> 
        );
    }
}

export default School1st;