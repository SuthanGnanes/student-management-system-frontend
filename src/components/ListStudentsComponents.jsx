import React from "react";
import StudentsService from "../services/StudentsService";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ListStudentsComponents = () => {
  const [students, setstudents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    StudentsService.getStudents().then((res) => {
      setstudents(res.data);
    });
  }, []);

  const addStudent = () => {
    navigate("/add-student");
  };

  const addClass = () => {
    navigate("/add-class");
  };

  return (
    <div>
      <h2 align="center"> Manage Students </h2>
      <div className="p-4" align="right">
        <button
          type="button"
          className="btn btn-primary btn-space"
          onClick={addStudent}
        >
          Add Student
        </button>
        <button
          type="button"
          className="btn btn-primary btn-space "
          onClick={addClass}
        >
          Add Class
        </button>
      </div>
      <div className="row">
        <table className="table table-striped table-bordered">
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
            {students.map((student) => (
              <tr key={student.id}>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.gradeName}</td>
                <td>{student.classesName}</td>
                <td>{student.instructorName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListStudentsComponents;
