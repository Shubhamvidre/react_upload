import React from 'react';

class Searchbar extends React.Component{
    constructor(props){
        super(props);
        this.inputChk = this.inputChk.bind(this);
        this.inputChg = this.inputChg.bind(this);
    }
    inputChk(){
        this.props.onCheck();
    }
    inputChg(event){
        this.props.filterText(event.target.value);
        
    }
    render(){

        return(
            <>
            <input type="text" value={this.props.filterValue} 
            placeholder='Search by Name....'
            onChange={this.inputChg}/>
            <br/><br/>
            <label><input type="checkbox" onChange={this.inputChk}/> Show Pass
            students list</label>
            
            </>
        )
    }
}

export default Searchbar;