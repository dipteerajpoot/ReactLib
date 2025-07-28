import { useState } from "react";
import Data from "./Component/TodoData";

function App() {
  const [taskList, setTaskList] = useState(Data);
  const [priorityList, setPriority] = useState([{ priorityId: 1, priorityValue: "low" }, { priorityId: 2, priorityValue: "Normal" }, { priorityId: 3, priorityValue: "High" }]);
  const [defaultStatus, setDeafaultStatus] = useState("active");
  const [title, setTitle] = useState("");
  const [pid, setPid] = useState(0);

  const changeTaskStatus = (t, status) => {
    let index = taskList.findIndex((task) => { return task.title === t.title })
    t.status = status;
    taskList.splice(index, 1, t);
    setTaskList([...taskList]);
  }
  const handleAdd = () => {
    let status = "active";
    let date = new Date();
    date = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
    let newTask = { title, pid, status, date };
    setTaskList([...taskList, newTask]);
  }
  return <>
    <div className="bg-danger p-2 text-white d-flex justify-content-center">
      <span className="heading">Student App</span>
    </div>
    <div className="container mt-3 mb-3">
      <div className="row">
        <div className="col-md-6">
          <input onChange={(event) => setTitle(event.target.value)} type="text" className="form-control" placeholder="Enter task title" />
        </div>
        <div className="col-md-6">
          <select onChange={(event) => setPid(Number(event.target.value))} className="form-control">
            <option value="0">Select Priority</option>
            {priorityList.map((priorityobject, Index) => { return <option key={Index} value={priorityobject.priorityId}> {priorityobject.priorityValue}</option> })}
          </select>
        </div>
      </div>

      <div className="row mt-3 mb-3">
        <div className="col-md-6">
          <button onClick={handleAdd} className="btn btn-secondary">ADD</button>
        </div>
      </div>
    </div>
    <div className="container mt-3 ">
      <button onClick={() => setDeafaultStatus("active")} disabled={defaultStatus == "active" ? true : false} className="btn btn-success">Active({taskList.filter((task) => { return task.status == "active" }).length})</button>
      <button onClick={() => setDeafaultStatus("deactive")} disabled={defaultStatus == "disactive" ? true : false} className="btn btn-primary ml-2">Deactive({taskList.filter((task) => { return task.status == "deactive" }).length})</button>
      
    </div>

  
    <div className="container   mt-3 mb-3">
      <div className="table table-striped">
        <thead className="table">
          <tr>
            <th>S.no</th>
            <th>Title</th>
            <th>Date</th>
            <th>Priority</th>
            <th>Change Status</th>
          </tr>
        </thead>
        <tbody>
          {taskList.filter((task) => { return task.status == defaultStatus }).sort((a, b) => { return b.pid - a.pid}).map((task, Index) => {
            return <tr key={Index}>
              <td>{Index + 1}</td>
              <td>{task.title}</td>
              <td>{task.date}</td>
              <td>{priorityList.find((value) => { return value.priorityId === task.pid }).priorityValue}</td>
              <td>{task.status === "active" ? <button onClick={() => changeTaskStatus(task, "deactive")} className="btn button-size  btn-outline-warning"> Deactive </button> : <button onClick={() => changeTaskStatus(task, "active")} className="btn button-size btn-outline-warning">Active</button>}</td>
            </tr>
          })}
        </tbody>
      </div>
    </div>
  </>
}
export default App;