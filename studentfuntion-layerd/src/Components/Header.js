function Header({data}){
    return<>
        <div className="bg-danger d-flex justify-content-center p-1 text-white" >
        <span style={{fontSize:"20px",fontWeight:"bolder"}}>{data}</span>
    </div>
    </>
}
export default Header;