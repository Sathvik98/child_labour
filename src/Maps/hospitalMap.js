import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import $ from 'jquery';
import './ReactMap.css'
import data from '../Cookedfiles/hospitaldetails.json'; 
class MapContainerH extends Component {
  state={
    loc:[0,0]
  };
  componentDidMount(){
    this.renderMap()
  }
  renderMap = () => {
    loadScript('https://maps.googleapis.com/maps/api/js?key=AIzaSyA30ITmKqiAmAb1KSXoyxL5U-7fUiKNHbU&callback=initMap')
    window.initMap=this.initMap
  }
 
  hospitalClick = () => {
    this.props.history.push("/hospitalmap"); 
}
anganwadiClick = () => {
    this.props.history.push("/anganwadimap"); 
}
OrphanClick = () => {
    this.props.history.push("/orphanagemap"); 
}
schoolClick = () => {
    this.props.history.push("/schoolmap"); 
}
  initMap = () => {
    var map = new window.google.maps.Map(document.getElementById("map"),{
    center:{lat:14.6805847,lng:77.6000775},
    zoom:15
  });
  var infowindow = new window.google.maps.InfoWindow()
  // this.state.loc.map(x => {
    Object.entries(data).forEach(([key, val]) => {
      var contentString=("<h3>"+val['Hospital_Name']+"</h3>"+"<p>"+val['Mobile']+"</p>"+"<p>"+val['Email']+"</p>"+"<p>"+val['Address']+"</p>");
  var marker = new window.google.maps.Marker({
    map: map,
    position: {lat:val['latitude'],lng:val['longitude']},
  })
  marker.addListener('click', function() {

    infowindow.setContent(contentString)
    infowindow.open(map, marker);
  });

  })
}
  
  render() {
    return (
      <main>
        <header className="headers">
        <button className="buttons" onClick={this.hospitalClick}>Hospital</button>
        <button className="buttons" onClick={this.anganwadiClick}>Anganwadi</button>
        <button className="buttons" onClick={this.schoolClick}>Schools</button>
        <button className="buttons" onClick={this.OrphanClick}>Orphanage</button>

        </header>
      <div id='map'></div>
      </main>
    );
  }
}
function loadScript(url) {
  var index=window.document.getElementsByTagName("script")[0]
  var script=window.document.createElement("script")
  script.src=url
  script.async=true
  script.defer=true
  index.parentNode.insertBefore(script,index)
}
export default MapContainerH
