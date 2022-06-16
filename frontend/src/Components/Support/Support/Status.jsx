import {React, useState, useEffect} from 'react'
import "./Support.css"

const getDatafromLS=()=>{
    const data = localStorage.getItem('tickets');
    if(data){
        return JSON.parse(data);
    }
    else{
        return []
    }
}


export default function Status() {

    const [tickets, setTickets] = useState(getDatafromLS);

    console.log("tickets", tickets)
     
    const tb_data=  tickets.map((data, id) => {
        return(
        <tr className='table-data'>
            <td>{data.date}</td>
            <td>{data.title}</td>
            <td>{data.type}</td>
            <td>{data.description}</td>
            <td><label>
                  <img src={data.image} className="img-document" style={{ height: "50px", width: "50px"}}  alt="dummy"  />
                </label>
            </td>
            <td>{data.status}</td>
        </tr>
        )
    })

  return (
    <div className='status-menu'>
        <table class="table">
            <thead class="thead-box">
                <tr>
                <th scope="col">Date</th>
                <th scope="col">Title</th>
                <th scope="col">Type</th>
                <th scope="col">Description</th>
                <th scope="col">Documents</th>
                <th scope="col">Status</th>
                
                </tr>
            </thead>
            <tbody className='tbody'>
                {tb_data}
            </tbody>
           
        </table>
    </div>
  )
}
