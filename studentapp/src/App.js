    import { Component } from "react";
    import Data from "./Data"
    class App extends Component {
        constructor() {
            super();
            this.state = {
                studentList: Data,
                branchList: ["CS", "IT", "EC", "CV", "MECH"],
                defaultBranch:"All",
                errorMessage:""
            }
        }
        // ading new student
        addStudent = () =>{
            let roll = this.rollInput.value;
            let name = this.nameInput.value;
            let branch = this.branchInput.value;
            let contact = this.contectInput.value;
            const exist = this.state.studentList.some(
                (student) => student.roll === roll
            );
            if(exist){
                this.setState({errorMessage:"Roll no. allready exist"});
                return;
            }

            let newStudent ={roll,name,branch,contact}
            this.setState({studentList:[...this.state.studentList,newStudent],errorMessage:""});

            this.rollInput.value ="";
            this.nameInput.value="";
            this.branchInput.value="";
            this.contectInput.value="";
        };
        clearError =() => {
            if(this.state.errorMessage){
                this.setState({errorMessage:""});
            }
        }

        removeStudent =(roll,name) =>{
            if(window.confirm("Do you want to delete it'"+name+"'")){
            let index =this.state.studentList.findIndex((student) =>{return student.roll === roll})
            this.state.studentList.splice(index,1);
            this.setState({studentList:[...this.state.studentList]});
            }
        }
        render() {

            return <>
                <div className="main-container ml-1 mr-1">
    {/* heading-------------------- */}
                    <div className="bg-info p-1 d-flex justify-content-center text-white ">
                        <span style={{ fontWeight: 'bloder' }}>Student App</span>
                    </div>
    {/* body p1------------------- */}
                    <div className="continer mt-3 mb-3">
                        <div className="row">
                            <div className="col-md-6">
                                <input ref={(rollObject)=>this.rollInput=rollObject} id="roll" type="text" className="form-control" placeholder="Enter your RollNO" onChange={this.clearError}/>
                                {(this.state.errorMessage && (
                                    <small className="text-dange d-block bg-danger">{this.state.errorMessage}</small>
                                ))}

                            </div>
                            <div className="col-md-6">
                                <input ref={(nameObject) => this.nameInput = nameObject}type="text" className="form-control" placeholder="Enter your Name" />
                            </div>
                        </div>
                         
                        <div className="row mt-3">
                            <div className="col-md-6">
                                <input ref={(contectObject)=>this.contectInput = contectObject}type="text" className="form-control" placeholder="Enter your contect" />
                            </div>
                            <div className="col-md-6">
                                <select ref={(branchObject)=>this.branchInput = branchObject}className="form-control">
                                <option>Select branch</option>
                                {this.state.branchList.map((branch,index) => {return <option key={index} value={branch}>{branch}</option>})}
                                </select></div>
                        </div>
                    </div>

                    <div className="row mt-3 mb-3 " >
                        <div className="col-md-6 ">

                            <button onClick={()=>this.setState({defaultBranch:"CS"})} className="btn btn-info">CS({this.state.studentList.filter((student)=>{return student.branch === "CS"}).length})</button>
                            <button onClick={()=>this.setState({defaultBranch:"IT"})} className="btn btn-info ml-1">IT({this.state.studentList.filter((student)=>{return student.branch === "IT"}).length})</button>
                            <button onClick={()=>this.setState({defaultBranch:"EC"})} className="btn btn-info ml-1">EC({this.state.studentList.filter((student)=>{return student.branch === "EC"}).length}) </button>
                            <button onClick={()=>this.setState({defaultBranch:"CV"})} className="btn btn-info ml-1">CV ({this.state.studentList.filter((student)=>{return student.branch === "CV"}).length})</button>
                            <button onClick={()=>this.setState({defaultBranch:"MECH"})} className="btn btn-info ml-1">MECH ({this.state.studentList.filter((student)=>{return student.branch === "MECH"}).length})</button>
                            <button onClick={()=>this.setState({defaultBranch:"All"})} className="btn btn-info ml-1">Total</button>
                        </div>
                        <div className="col-md-6">
                        <button onClick={this.addStudent} className="btn btn-success"style={{width:"70px"}}>Add</button>
                        </div>
                        
                    </div>
    {/* table----------------------------------- */}
                    <div className="continer mt-3">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>RollNo</th>
                                    <th>Name</th>
                                    <th>Branch</th>
                                    <th>Contact</th>
                                    <th>Remove</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.studentList.filter((student)=>{return student.branch === this.state.defaultBranch || this.state.defaultBranch === "All"}).map((student, index) => {return <tr key={index}>
                                        <td>{student.roll}</td>
                                        <td>{student.name}</td>
                                        <td>{student.branch}</td>
                                        <td>{student.contact}</td>
                                        <td><button onClick={()=>this.removeStudent(student.roll,student.name)} className="btn btn-outline-info"style={{background:"skyblue"}}>Remove</button></td>
                                    </tr>
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </>
        }
    }


    export default App;