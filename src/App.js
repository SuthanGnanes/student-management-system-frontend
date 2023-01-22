import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListStudentsComponents from './components/ListStudentsComponents';
import CreateStudentComponent from './components/CreateStudentComponent';
import CreateClassComponent from './components/CreateClassComponent';

function App() {
  return (
    
    <div>
      <Router>
        <HeaderComponent/>
          <div className="container">
            <Routes>
              <Route path ='/' element = {<ListStudentsComponents/>}/>
              <Route path ='/students' element = {<ListStudentsComponents/>}/>
              <Route path ='/add-student' element = {<CreateStudentComponent/>}/>
              <Route path ='/add-class' element = {<CreateClassComponent/>}/>
            </Routes>
          </div>
        <FooterComponent/>
      </Router>
    </div>
  );
}

export default App;
