import app from 'firebase/app'; 
import 'firebase/database'; 
import React from 'react'; 

const config =  {
    apiKey: "AIzaSyDd5-eKMRqyBwrEWmtgJ7xIrpVLtFYPXwg",
    authDomain: "child-labour-233104.firebaseapp.com",
    databaseURL: "https://child-labour-233104.firebaseio.com",
    projectId: "child-labour-233104",
    storageBucket: "child-labour-233104.appspot.com",
    messagingSenderId: "705536316412"
  };

class Firebase{
    constructor() {
        app.initializeApp(config); 
        this.db = app.database(); 
    }

    writeChildDetails = (childAadhar, childName, dob, gender, status, city, country, district, fatherAadhar, fatherName, hospitalId, income, motherAadhar, motherName, phoneNumber, schoolId, state) => {
        this.db.ref('children/').set({
            "0001": {
                'ChildAadhar': childAadhar, 
                'ChildName': childName, 
                'Child_DOB': dob, 
                'Child_Gender': gender, 
                'Child_Status': status, 
                'City': city, 
                'Country': country, 
                'District': district, 
                'FatherAadhar': fatherAadhar, 
                'Father_name': fatherName, 
                'Hospital_Id': hospitalId, 
                'Income': income, 
                'MotherAadhar': motherAadhar, 
                'Mother_name': motherName, 
                'PhoneNumber': phoneNumber, 
                'School_Id': schoolId, 
                'State': state
            }
        }); 
    }
}

export default Firebase; 