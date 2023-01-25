import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import InstructorService from "../services/InstructorService";
import StudentsService from "../services/StudentsService";
import { find } from "lodash";
import { Transfer } from "antd";
import ClassesService from "../services/ClassService";

const CreateClassComponent = () => {
  const [name, setName] = useState("");
  const [instructors, setInstructors] = useState([]);
  const [instructor, setInstructor] = useState("");
  const [students, setstudents] = useState([]);
  const [targetKeys, setTargetKeys] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    InstructorService.getInstructors().then((res) => {
      setInstructors(res.data);
    });
  }, []);

  useEffect(() => {
    StudentsService.getStudents().then((res) => {
      let convertData = res.data.map((post) => {
        return {
          ...post,
          key: post.id,
          allocated: post.classesName && post.instructorName ? true : false,
        };
      });
      console.log(convertData);
      setstudents(convertData);
    });
  }, []);

  const changeNameHandler = (event) => {
    setName(event.target.value);
  };

  const selectInstructorHandler = (event) => {
    setInstructor(event.target.value);
  };

  const submit = (event) => {
    ClassesService.createClasses({
      name: name,
      instructorId: instructor,
    }).then((res) => {
      let student = targetKeys.map((post) => {
        let stds = find(students, (res) => res.id === post);

        return {
          id: stds.id,
          name: stds.name,
          email: stds.email,
          gradeId: stds.gradeId,
          classesId: res.data.data,
          instructorId: instructor,
        };
      });

      StudentsService.updateStudents(student).then((res) =>
        navigate("/students")
      );
    });
  };

  const cancel = () => {
    navigate("/students");
  };

  const filterOption = (inputValue, option) =>
    option.name.indexOf(inputValue) > -1;

  const handleChange = (targetKeys, direction, moveKeys) => {
    console.log(targetKeys, direction, moveKeys);
    setTargetKeys(targetKeys);
  };

  const handleSearch = (dir, value) => {
    console.log("search:", dir, value);
  };

  return (
    <div>
      <div className="container spacing">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            <h3 className="text-center">Create Class</h3>
            <div className="card-body">
              <form>
                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    Name :
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
                    Instructor :
                  </span>
                  <select
                    className=" form-control"
                    id="inputGradeSelect"
                    onChange={selectInstructorHandler}
                  >
                    <option defaultValue={0} key={0}>
                      Select Instructor
                    </option>
                    {instructors.map((result) => (
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

                <h6>Add/Remove Students to this class</h6>

                <div>
                  <Transfer
                    dataSource={students.filter(
                      (student) =>
                        student.classesId == null &&
                        student.instructorId == null
                    )}
                    showSearch
                    filterOption={filterOption}
                    targetKeys={targetKeys}
                    onChange={handleChange}
                    onSearch={handleSearch}
                    render={(item) => item.name}
                  />
                </div>

                <div className="row">
                  <br />
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

export default CreateClassComponent;
