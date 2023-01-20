import axios from 'axios';

const STUDENTS_BASE_API_URL = "http://localhost:8080/student-management/api/v1/students"

class StudentsService{
    getStudents(){
        return axios.get(STUDENTS_BASE_API_URL);
    }
}

export default new StudentsService()