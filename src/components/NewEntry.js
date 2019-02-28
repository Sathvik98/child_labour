import React,{Component} from 'react';
import '../css/Schools.css';
import Scrol from './Scrol'
import data from '../Cookedfiles/childData.json'; 
class NewEntry extends Component {
    handleClick = () => {
        this.props.history.push("/"); 
    }
    anganwadiClick=()=>{
        this.props.history.push("/school1st");
    }

    render() {
        return (
            <div className="school">
                <button id="sign_out" type="button" value="Signout" onClick={this.handleClick}>Signout</button>
            <div id="details1">
            <h1 id="heading5">STUDENT INFO</h1>
            <form>
                <br /><input id="sns" type="text" name="ChildId" placeholder="Enter Child Id"></input><br />
                <input id="sns" type="text" name="ChildName" placeholder="Enter child name"></input><br />
                <input id="sns" type="text" name="ChildAadhar" placeholder="Enter child aadhar" size="25"></input><br />
                <input id="sns" type="text" name="Parent name" placeholder="Enter Father Name" size="25"></input><br/>
                <input id="sns" type="text" name="Aadhar" placeholder="Enter Father Aadhar"></input><br />
                <input id="sns" type="text" name="Parent name" placeholder="Enter Mother Name" size="25"></input><br/>
                <input id="sns" type="text" name="Aadhar" placeholder="Enter Mother Aadhar"></input><br />
                <input id="sns" type="number" name="Number" placeholder="Enter phone number"></input><br />
                <input id="sns" type="text" name="street" placeholder="Enter street"></input><br />
                <input id="sns" type="text" name="Town" placeholder="town"></input><br />
                <input id="sns" type="number" name="pincode" placeholder="Enter Pincode"></input><br />
                <input id="sns" type="text" name="Schoolname" placeholder="Enter School Name"></input><br />
                <input id="sns" type="text" name="Status" placeholder="Enter child status"></input><br />
                <Scrol/>
            <br></br><button id="scl" type="reset" value="cancel">cancel  </button>&nbsp;&nbsp;
            <button id="ssb" type="submit" value="Submit" onClick={this.anganwadiClick}>Submit</button><br />
            </form>
            </div>
            </div>
        );
    }
}

export default NewEntry;