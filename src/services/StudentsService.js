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
}

export default new StudentsService()