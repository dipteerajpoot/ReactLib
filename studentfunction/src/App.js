import { useRef, useState } from "react";
import Data from "./Components/Data";
function App() {
  const [student, setStudentList] = useState(Data);
  const [branch, setBranchList] = useState(["CS", "IT", "EC", "CV", "MECH",])
  const [defaultBranch , setDefaultBranch] = useState("All")
  let branchref = useRef(null); //useRef{ current: <initialValue> }
  let rollref = useRef(null);
  let nameref = useRef(null);
  let contactref = useRef(null);

  const handelSubmit = (event) =>{
    event.preventDefault();   //sythetic event object 
    let roll = rollref.current.value;
    let name = nameref.current.value;
    let contact = contactref.current.value;
    let branch = branchref.current.value
    let newStudent = {roll,name,contact,branch}
    setStudentList([...student,newStudent])
  } 

  const handleRemove = (roll) => {
    if(window.confirm("Do you wnat to delete this student")){
      // setStudentList((student) => student.filter((stu) => stu.roll !== roll))
        setStudentList((student) => {
          const idx = student.findIndex((stu) => stu.roll === roll);
          if(idx === -1) return student

          const updateList = [...student]
            updateList.splice(idx , 1);
            return updateList;
        })

    }

  }
  return <>
    <div className="bg-danger d-flex justify-content-center p-1 text-white" >
      <h3>Student App</h3>
    </div>

    <div className="continer mt-3 mb-3 ml-2">
      <form onSubmit={handelSubmit}>
        <div className="row">
          <div className="col-md-6">
            <input type="text" placeholder="Enter roll number here" className="form-control" ref={rollref} />
          </div>
          <div className="col-md-6">
            <input className="form-control" type="text" placeholder="Enter name here" ref={nameref}/>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-md-6">
            <select ref={branchref} className="form-control">
              <option >Select Branch</option>
              {branch.map((branch, index) => { return <option key={index} value={branch}>{branch}</option> })}
            </select>
          </div>
          <div className="col-md-6">
            <input className="form-control" type="text" placeholder="Enter your contact-number" ref={contactref}/>
          </div>
        </div>

        <div className="row mt-3 mb-3">
          <div className="col-md-6">
            <button className=" btn btn-success border-none m-2 " type="submit">Add</button>
          </div>
          <div>
            <button type = "button"className="btn btn-primary ml-2" onClick={()=>setDefaultBranch("IT")}>IT ({student.filter((student)=> { return student.branch==="IT"}).length})</button>
            <button type = "button" className="btn btn-danger ml-2" onClick={()=>setDefaultBranch("CS")}>CS ({student.filter((student)=>{return student.branch==="CS"}).length})</button>
            <button type="button" className="btn btn-dark ml-2" onClick={()=>setDefaultBranch("EC")}>EC ({student.filter((student)=>{return student.branch==="EC"}).length})</button>
            <button type="button" className="btn btn-secondary ml-2" onClick={()=>setDefaultBranch("CV")}>CV ({student.filter((student)=>{return student.branch==="CV"}).length})</button>
            <button type="button" className="btn btn-info ml-2" onClick={()=>setDefaultBranch("MECH")}> MECH ({student.filter((student)=>{return student.branch==="MECH"}).length})</button>
            <button type="button" className="btn btn-warning ml-2" onClick={()=>setDefaultBranch("All")}>TOTAL ({student.length})</button>
          </div>
        </div>

      </form>
    </div>

    <div className="container mt-3">
      <table className="table table-stripted">
        <thead>
          <tr>
            <th>Roll</th>
            <th>Name</th>
            <th>Branch</th>
            <th>Contact</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {student.filter((student) =>{return student.branch === defaultBranch || defaultBranch === "All"}).map((student, index) => {
            return <tr key={index}> 
              <td>{student.roll}</td>
              <td>{student.name}</td>
              <td>{student.branch}</td>
              <td>{student.contact}</td>
              <td><button className="btn btn-outline-danger " onClick={() => handleRemove(student.roll)}>Remove</button></td>
            </tr>
          })}
        </tbody>
      </table>
    </div>
  </>

}
export default App;