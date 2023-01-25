import axios from 'axios';

const STUDENTS_BASE_API_URL = "http://localhost:8080/student-management/api/v1/students"
const STUDENT_BASE_API_URL = "http://localhost:8080/student-management/api/v1/student"


class StudentsService{
    getStudents(){
        return axios.get(STUDENTS_BASE_API_URL);
    }

    createStudent(student){
        return axios.post(STUDENT_BASE_API_URL, student);
    }

    updateStudents(students){
        return axios.put(STUDENTS_BASE_API_URL, students);
    }
}

export default new StudentsService()