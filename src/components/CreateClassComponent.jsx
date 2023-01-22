import React, { Component, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateClassComponent = () => {

    const [name, setName] = useState('');
    const navigate = useNavigate();

    const changeNameHandler = (event) => {
        name = setName(event.target.value);
    }
    const addToClass =(event) => {

    }

    const removeFromClass = () => {

          
    }
    const submit = (event) => {

    }

    const cancel = () => {
        navigate("/students");
    }


    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='card col-md-6 offset-md-3 offset-md-3'>
                        <h3 className='text-center'>Create Student</h3>
                        <div className='card-body'>
                            <form >
                                
                                <div className='input-group mb-3' >     
                                    <span className="input-group-text" id="basic-addon1">Name : </span>
                                    <input placeholder='Name' name='name' className='form-control' value={name} onChange ={changeNameHandler}/>
                                </div>

                                <div className='input-group mb-3' >
                                    <span className="input-group-text" id="basic-addon1">Instructor :</span>
                                    <select className=" form-control" id="inputGradeSelect01">
                                        <option selected>Select Instructor</option>
                                        <option value="1">Instructor 1</option>
                                        <option value="2">Instructor 2</option>
                                        <option value="3">Instructor 3</option>
                                        <option value="4">Instructor 4</option>
                                        <option value="5">Instructor 5</option>
                                    </select>
                                </div>
                                
                                <h6>Add/Remove Students to this class</h6>


                                  
                                <div className="row">
                                    <div className="col-sm-5 ">
                                        <div className="card">
                                            <div className="card-body scroll">
                                                <ul className="list-unstyled" id="unassigned">
                                                    <li> <input type="checkbox"/> Item 1</li>
                                                    <li> <input type="checkbox"/> Item 2</li>
                                                    <li> <input type="checkbox"/> Item 3</li>
                                                    <li> <input type="checkbox"/> Item 4</li>

                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="col-sm-2">
                                        <div>
                                            <div>
                                                <br/> 
                                                <button type="button" class="btn " onClick={addToClass}><img src="right.png" height="30px" width="30px" alt="" /></button> 
                                                <button type="button" class="btn " onClick={removeFromClass}><img src="left.png" height="30px" width="30px" alt="" /></button>      
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-sm-5 ">
                                        <div className="card">
                                            <div className="card-body scroll">
                                                <ul className="list-unstyled" id="assigned">
                                                    <li> <input type="checkbox"/> Item 5</li>
                                                    <li> <input type="checkbox"/> Item 6</li>
                                                    <li> <input type="checkbox"/> Item 7</li>
                                                    <li> <input type="checkbox"/> Item 8</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='row'>
                                    <br/>
                                </div>

                                <div align = "Center">
                                    <button type="button" class="btn btn-success " onClick={submit}>Submit</button>
                                    <button type="button" class="btn btn-danger " onClick={cancel}>Cancel</button>
                                </div>

                            </form>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    );
}

export default CreateClassComponent;