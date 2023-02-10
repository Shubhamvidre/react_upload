import React from 'react';
import Searchbar from './Searchbar';
import StudentData from './StudentData';

class StudentsList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            pass: false,
            filterText : ''
        }
        this.inputPass= this.inputPass.bind(this);
        this.srchText= this.srchText.bind(this);
    }
    inputPass(){
        this.setState({pass: !this.state.pass})
    }
    srchText(srchValue){
        this.setState({filterText : srchValue});
    }
    render(){
        return(
            <div style={{maxWidth: '400px' ,padding:'40px',
             margin:'40px auto',
            fontFamily:'Arial' ,fontSize:'16px'}}>
                <Searchbar filterValue={this.state.filterText} onCheck={this.inputPass} filterText={this.srchText}></Searchbar>
                <StudentData filterValue={this.state.filterText} filterPass={this.state.pass}></StudentData>
                
            </div>

        )
    }
}

export default StudentsList;