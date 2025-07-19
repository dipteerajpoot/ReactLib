import { useRef } from "react";

function StudentForm({student, setstudentList, defaultBranch,setDefaultBranch, handleSubmit,branch}) {
   let rollref = useRef(null); // rollRef = {current: 100}
    let nameref = useRef(null);
    let contactref = useRef(null);
    let branchref = useRef(null);
  const handleFormSubmission = (event) => {

    event.preventDefault();
    let roll = rollref.current.value;
    let name = nameref.current.value;
    let contact = contactref.current.value;
    let branch = branchref.current.value
    handleSubmit(roll, name, contact, branch);
  }

  return <>
    <div className="continer mt-3 mb-3 ml-2">
      <form onSubmit={handleFormSubmission}>
        <div className="row">
          <div className="col-md-6">
            <input type="text" placeholder="Enter roll number here" className="form-control" ref={rollref} />
          </div>
          <div className="col-md-6">
            <input className="form-control" type="text" placeholder="Enter name here" ref={nameref} />
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
            <input className="form-control" type="text" placeholder="Enter your contact-number" ref={contactref} />
          </div>
        </div>

        <div className="row mt-3 mb-3">
          <div className="col-md-6">
            <button className=" btn btn-success border-none m-2 " type="submit">Add</button>
          </div>
          <div>
            <button type="button" className="btn btn-primary ml-2" onClick={() => setDefaultBranch("IT")}>IT ({student.filter((student) => { return student.branch === "IT" }).length})</button>
            <button type="button" className="btn btn-danger ml-2" onClick={() => setDefaultBranch("CS")}>CS ({student.filter((student) => { return student.branch === "CS" }).length})</button>
            <button type="button" className="btn btn-dark ml-2" onClick={() => setDefaultBranch("EC")}>EC ({student.filter((student) => { return student.branch === "EC" }).length})</button>
            <button type="button" className="btn btn-secondary ml-2" onClick={() => setDefaultBranch("CV")}>CV ({student.filter((student) => { return student.branch === "CV" }).length})</button>
            <button type="button" className="btn btn-info ml-2" onClick={() => setDefaultBranch("MECH")}> MECH ({student.filter((student) => { return student.branch === "MECH" }).length})</button>
            <button type="button" className="btn btn-warning ml-2" onClick={() => setDefaultBranch("All")}>TOTAL ({student.length})</button>
          </div>
        </div>

      </form>
    </div>
  </>
}
export default StudentForm;