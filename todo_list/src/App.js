function App(){
  return <>
  <div className="bg-danger d-flex justifyconten-center p-2 text-white">
    <span Heading>Student App</span>
  </div>
  {/* <div className="container mt-3 mb-3">
  <div className="row">
    <div className="col-md-6">
        
    </div>
  </div>
  </div> */}

<div className="container mt-3">
  <table className="table table-striped">
    <tr>
      <th>S.no</th>
      <th>Title</th>
      <th>Date</th>
      <th>Priority</th>
      <th>Cange-Status</th>
    </tr>
    <tbody>
      {Map((task,index) =>{return <tr key={index}>
        <td>{index+1}</td>
        <td>{task.title}</td>
        <td>{task.date}</td>
        <td>{priorityList.find((obj) =>{})</td>
        <td></td>
      </tr>})}
    </tbody>
  </table>
</div>

  </>
}
