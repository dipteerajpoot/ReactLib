function DataTable({student,defaultBranch , setStudentList}){
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
export default DataTable;