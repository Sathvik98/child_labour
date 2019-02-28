import React,{Component} from 'react';
import '../css/Schools.css';
import Scrol from './Scrol'
import data from '../Cookedfiles/childData.json'; 
class School extends Component {
    handleClick = () => {
        this.props.history.push("/"); 
    }
    anganwadiClick=()=>{
        this.props.history.push("/school1st");
    }

    render() {
        var id = this.props.match.params.id;
        console.log(id); 
        var childName = data[id].ChildName || "Enter Child Name"; 
        var childAadhar = data[id].ChildAadhar || "Enter Child Aadhar"; 
        var phoneNumber = data[id].PhoneNumber || "Enter phone number"; 
        var town = data[id].City || "Enter city"; 
        var pincode = "Enter pincode"; 
        var childStatus = data[id].Child_Status; 
        return (
            <div className="school">
                <button id="sign_out" type="button" value="Signout" onClick={this.handleClick}>Signout</button>
            <div id="details1">
            <h1 id="heading5">STUDENT INFO</h1>
            <form>
                <br />Child Id : <input id="sns" type="text" name="ChildId" placeholder={id}></input><br />
                Child Name : <input id="sns" type="text" name="ChildName" placeholder={childName}></input><br />
                Child Aadhar : <input id="sns" type="text" name="ChildAadhar" placeholder={childAadhar} size="25"></input><br />
                Father Name : <input id="sns" type="text" name="Parent name" placeholder={data[id].Father_name} size="25" disabled></input><br/>
                Father Aadhar : <input id="sns" type="text" name="Aadhar" placeholder={data[id].FatherAadhar} disabled></input><br />
                Mother Name : <input id="sns" type="text" name="Parent name" placeholder={data[id].Mother_name} disabled size="25"></input><br/>
                Mother Aadhar : <input id="sns" type="text" name="Aadhar" placeholder={data[id].MotherAadhar} disabled></input><br />
                Phone Number : <input id="sns" type="number" name="Number" placeholder={phoneNumber}></input><br />
                Street : <input id="sns" type="text" name="street"></input><br />
                City : <input id="sns" type="text" name="Town" placeholder={town}></input><br />
                Pincode : <input id="sns" type="number" name="pincode"></input><br />
                Status : <input id="sns" type="text" name="Status" placeholder={childStatus}></input><br />
                <Scrol/>
            <br></br><button id="scl" type="reset" value="cancel">cancel  </button>&nbsp;&nbsp;
            <button id="ssb" type="submit" value="Submit" onClick={this.anganwadiClick}>Submit</button><br />
            </form>
            </div>
            </div>
        );
    }
}

export default School;