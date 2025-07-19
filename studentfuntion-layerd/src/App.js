import { useState } from "react";
import Data from "./Components/Data"
import Header from "./Components/Header";
import DataTable from "./Components/DataTable";
import StudentForm from "./Components/StudentForm";
function App(){
  const[student , setstudentList] = useState(Data);
  const [branch, setBranchList] = useState(["CS", "IT", "EC", "CV", "MECH",]);
  const [defaultBranch , setDefaultBranch] = useState("All");
  
  const handleSubmit = (roll,name,contact,branch)=>{ // Synthetic event
  let newStudent = {roll,name,contact,branch};
    setstudentList([...student,newStudent]);
   }
 return <>
  <Header data= "Student App" />
  <StudentForm student={student} setstudentList={setstudentList} defaultBranch={defaultBranch} setDefaultBranch={setDefaultBranch} handleSubmit={handleSubmit} branch={branch}/>
  <DataTable student ={student} defaultBranch = {defaultBranch} setStudentList = {setstudentList}/>

 </> 
}
export default App;