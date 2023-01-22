import axios from "axios"

const GRADES_BASE_API_URL = "http://localhost:8080/student-management/api/v1/grades"

class GradeService{

    getGrades(){
        return axios.get(GRADES_BASE_API_URL);
    }
}
export default new GradeService()