import React, {Component} from 'react';
import '../css/hospital.css'; 
// import Firebase from './Firebase'; 
import { withFirebase } from './context'; 

class Hospital extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    handleClick = () => {
        this.props.history.push("/"); 
    }
    anganwadiClick=(event)=>{
        // console.log("dob : " + event.target.income.value); 
        this.props.firebase.writeChildDetails(null, 
            null, 
            event.target.dob.value, 
            event.target.gender.value, 
            null,  
            event.target.city.value, 
            event.target.country.value, 
            event.target.district.value, 
            event.target.fatherAadhar.value, 
            event.target.fatherName.value, 
            null, 
            event.target.income.value, 
            event.target.motherAadhar.value, 
            event.target.motherName.value, 
            event.target.phoneNumber.value, 
            null, 
            event.target.state.value); 
        this.props.history.push("/hospital");
    }
    render() {
        return (
            <div className="hospital">
             <h1 id="heading2">Hospitals </h1>
                <button id="Signout" type="button" value="Signout" onClick={this.handleClick}>Signout</button>
                <div id="details5">
                   
                    {/* <form action="Hospital" method="POST"> */}
                    <form onSubmit={this.anganwadiClick}>
                        <br /><input id="hns" type="text" name="fatherName" placeholder="Father name" size="25"></input><br/>
                        <input id="hns" type="text" name="fatherAadhar" placeholder="Father Aadhar"></input><br />
                        <input id="hns" type="text" name="motherName" placeholder="Mother name" size="25"></input><br/>
                        <input id="hns" type="text" name="motherAadhar" placeholder="mother Aadhar"></input><br />
                        <input id="hns"  type="date" name="dob" placeholder="Date of Birth "></input><br />
                        <input id="hns" type="text" name="gender" placeholder="Gender"></input><br />
                        <input id="hns" type="number" name="phoneNumber" placeholder="PhoneNumber"></input><br />
                        <input id="hns" type="text" name="income" placeholder="income" />     
                        <input id="hns" type="text" name="street" placeholder="Street"></input><br />
                        <input id="hns" type="text" name="city" placeholder="Town/Village"></input><br />
                        <input id="hns" type="text" name="district" placeholder="District"></input><br />
                        <input id="hns" type="text" name="state" placeholder="State"></input><br />
                        <input id="hns" type="text" name="country" placeholder="Country"></input><br />
                        <input id="hns" type="number" name="pincode" placeholder="pincode"></input><br />
                        <div id="submit">  <br></br><button id="hcl" type="reset" value="cancel">cancel  </button>&nbsp;&nbsp;&nbsp;
                        <button  id="hsb"type="submit" value="Submit">Submit</button><br /></div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Hospital;