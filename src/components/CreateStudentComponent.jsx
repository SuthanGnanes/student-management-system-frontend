import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import StudentsService from "../services/StudentsService";
import GradeService from "../services/GradeService";

const CreateStudentComponent = () => {
  const [name, setName] = useState("");
  const [eMail, setEmail] = useState("");
  const [grades, setGrades] = useState([]);
  const [grade, setGrade] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    GradeService.getGrades().then((res) => {
      setGrades(res.data);
    });
  }, []);

  const changeNameHandler = (event) => {
    name = setName(event.target.value);
  };

  const changeEmailHandler = (event) => {
    eMail = setEmail(event.target.value);
  };

  const selectGradeHandler = (event) => {
    console.log(event.target.value);
    setGrade(event.target.value);
  };

  const submit = (event) => {
    event.preventDefault();
    let student = { name: name, email: eMail, gradeId: grade };
    console.log("student =>" + JSON.stringify(student));
    StudentsService.createStudent(student).then((res) => navigate("/students"));
  };

  const cancel = () => {
    navigate("/students");
  };

  return (
    <div>
      <div className="container spacing">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            <h3 className="text-center">Create Student</h3>
            <div className="card-body">
              <form>
                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    Name :{" "}
                  </span>
                  <input
                    placeholder="Name"
                    name="name"
                    className="form-control"
                    value={name}
                    onChange={changeNameHandler}
                  />
                </div>

                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    E-mail :{" "}
                  </span>
                  <input
                    placeholder="E-mail"
                    name="email"
                    className="form-control"
                    value={eMail}
                    onChange={changeEmailHandler}
                  />
                </div>

                <div className="input-group mb-3">
                  <span className="input-group-text" id="select-grade">
                    Grade :
                  </span>
                  <select
                    className="form-control"
                    id="inputGradeSelect"
                    onChange={selectGradeHandler}
                  >
                    <option defaultValue={0} key={0}>
                      Select Grade
                    </option>
                    {grades.map((result) => (
                      <option
                        text={result.id}
                        value={result.id}
                        key={result.id}
                      >
                        {result.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div align="Center">
                  <button
                    type="button"
                    className="btn btn-success btn-space"
                    onClick={submit}
                  >
                    Submit
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger btn-space"
                    onClick={cancel}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateStudentComponent;
