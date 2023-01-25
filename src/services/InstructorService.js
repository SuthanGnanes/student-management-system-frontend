import axios from "axios"

const INSTRUCTOR_BASE_API_URL = "http://localhost:8080/student-management/api/v1/instructors"

class InstructorService{

    getInstructors(){
        return axios.get(INSTRUCTOR_BASE_API_URL);
    }
}
export default new InstructorService()