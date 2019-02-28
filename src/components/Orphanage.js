import '../css/Orphanage.css'
import Scrol from './Scrol'
import React, { Component } from 'react';
class Orphanage extends Component {
    handleClick = () => {
        this.props.history.push("/"); 
    }
    render() {
        
        return (
            <div className='orph'>
                <button id="signout" type="button" value="Signout" onClick={this.handleClick}>Signout</button>
            <div id="details">
            <h1>ORPHANAGE</h1><br />
            <h3>CHILD DETAILS</h3>
            <form>
                <br /><input id="ons" type="text" name="ChildId" placeholder="Child Id"></input><br />
                <input id="ons" type="text" name="ChildName" placeholder="Child Name"></input><br />
                <br /><input id="ons" type="text" name="ChildAadhar" placeholder="Child Aadharcard number" size="25"></input><br />
                <input id="ons" type="date" name="DOB" placeholder="Child Date of Birth"></input><br />
                <input id="ons" type="text" name="OrphanageName" placeholder="Orphanage Name"></input><br></br>
                <input id="ons" type="number" name="Number" placeholder="PhoneNumber"></input>
                <br /><input id="ons" type="text" name="street" placeholder="Street"></input><br />
                <br /><input id="ons" type="text" name="Town" placeholder="Town/Village"></input><br />
                <br /><input id="ons" type="number" name="pincode" placeholder="pincode"></input><br />
                <div className="pic"><Scrol /></div>
        
            <br></br><button id="ocl" type="reset" value="cancel">cancel  </button>&nbsp;&nbsp;&nbsp;
            <button id="osb" type="submit" value="Submit">Submit</button><br />
            </form>
            </div>
            </div>
        );
    }
}

export default Orphanage;