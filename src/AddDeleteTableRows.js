import { useState } from "react"
import TableRows from "./TableRows"
function AddDeleteTableRows(){


    const [rowsData, setRowsData] = useState([]);
 
    const addTableRows = ()=>{
  
        const rowsInput={
            fullName:'',
            walletAddress:'',
            PatientReport:''  
        } 
        setRowsData([...rowsData, rowsInput])
      
    }
   const deleteTableRows = (index)=>{
        const rows = [...rowsData];
        rows.splice(index, 1);
        setRowsData(rows);
   }
 
   const handleChange = (index, evnt)=>{
    
    const { name, value } = evnt.target;
    const rowsInput = [...rowsData];
    rowsInput[index][name] = value;
    setRowsData(rowsInput);
  
 
 
}
    return(
        <div className="container1">
            <div className="row">
                <div className="col-sm-8">

                <table className="table">
                    <thead>
                      <tr>
                          <th>Name</th>
                          <th>Wallet</th>
                          <th>Report</th>
                          <th><button className="btn btn-outline-success" onClick={addTableRows} >+</button></th>
                      </tr>

                    </thead>
                   <tbody>

                   <TableRows rowsData={rowsData} deleteTableRows={deleteTableRows} handleChange={handleChange} />

                   </tbody> 
                </table>

                </div>
                <div className="col-sm-4">

                </div>
            </div>
        </div>
    )

}
export default AddDeleteTableRows