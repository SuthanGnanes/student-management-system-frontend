import React, { Component } from 'react';
import StudentsService from '../services/StudentsService';
import History from '../uitil/History';

class ListStudentsComponents extends Component {
    constructor(props) {
        super(props);

        this.state = {
            students: []
        }
    }
    
    componentDidMount(){
        StudentsService.getStudents().then((res) =>{
            this.setState({students: res.data})
        })
    }

    addStudent(){
        History.push('/add-student')
    }

    render() {
        return (
            <div>
                <h2 align = "center"> Manage Students </h2>
                <div className='p-4' align = "right">
                <button type="button" class="btn btn-primary" onClick={this.addStudent}>Add Student</button>
                </div>
                <div className='row'>
                    <table className='table table-striped table-bordered'>
                        <thead>
                            <tr>
                                <th>Student Name</th>
                                <th>Email Address</th>
                                <th>Grade</th>
                                <th>Class Name</th>
                                <th>Instructor</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.students.map(
                                    student => 
                                    <tr key={student.id}>
                                        <td>{student.name}</td>
                                        <td>{student.eMail}</td>
                                        <td>{student.gradeName}</td>
                                        <td>{student.classesName}</td>
                                        <td>{student.instructorName}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>   
                </div>

            </div>
        );
    }
}

export default ListStudentsComponents;