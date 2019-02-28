import React, {Component} from 'react';
import '../css/Anganwadi1st.css';
//import Anganwadi from './Anganwadi'
class Anganwadi1st extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    handleClick = () => {
        this.props.history.push("/"); 
    }
    anganwadiClick=()=>{
        this.props.history.push("/anganwadi");
    }
    render() {
        return (
            <div className='angan1'>
                <h1 className="title2">COURTYARD SHELTERS</h1>
                <button id="signout0" type="button" onClick={this.handleClick}>Signout</button>
                <body className="body2">
                    <input id="an" type="text" name="Id" placeholder="Child Id"></input>
                    <button id="en" type="submit" value="Search" onClick={this.anganwadiClick}>Search</button><br /><br />
                    <button id="nwety" type="submit" value="New Entry" onClick={this.anganwadiClick}>New Entry</button><br />
                </body>
            </div> 
        );
    }
}

export default Anganwadi1st;