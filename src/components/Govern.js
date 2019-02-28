import React,{Component} from 'react';
import '../css/Govern.css';
class Govern extends Component{
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

render()
{
    return(
        <header className="headers">
        <button className="buttons" onClick={this.hospitalClick}>Hospital</button>
        <button className="buttons" onClick={this.anganwadiClick}>Anganwadi</button>
        <button className="buttons" onClick={this.schoolClick}>Schools</button>
        <button className="buttons" onClick={this.OrphanClick}>Orphanage</button>

        </header>
    );
}

}
export default Govern
