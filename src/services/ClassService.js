import axios from "axios"

const CLASS_BASE_API_URL = "http://localhost:8080/student-management/api/v1/class"

class ClassesService{

        createClasses(student){
            return axios.post(CLASS_BASE_API_URL, student);
        }
}

export default new ClassesService();