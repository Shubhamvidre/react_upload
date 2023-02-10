import React from 'react';
import StuddentsTable from './StudentsTable';

class StudentData extends React.Component{
    render(){
        return(
            <table style={{marginTop:'30px' ,width:'200%', textAlign:'center'
            }}>
                <thead>
                    <tr>
                        <th>At</th>
                        <th>Author</th>
                        <th>Like</th>
                        <th>Reply</th>
                        <th>Text</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        StuddentsTable.map((studata, index) => {
                            const filterPass = this.props.filterPass;
                            const filterValue = this.props.filterValue;
                            const stuname = studata.author;
                            const stunmae = studata.text;
                            if( ((!filterPass) || (filterPass && filterPass==
                                studata.Pass)) && ((!filterValue) || (stuname.indexOf(filterValue)!==-1))
                                && ((!filterValue) || (stunmae.indexOf(filterValue)!==-1))){
                            return(
                                <tr>
                                    <td>{studata.at}</td>
                                    <td>{studata.author}</td>
                                    <td>{studata.like}</td>
                                    <td>{studata.reply}</td>
                                    <td>{studata.text}</td>
                                </tr>
                                )
                            }
                                
                    
                         })
                        
                    }
                </tbody>
            </table>
        )
    }
}

export default StudentData;