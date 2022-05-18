import React from "react";

function Customer(props) {
    return(
      
          <tr>
        
        <td class="bg-gray-400">{props.id}</td>
        <td class="flex justify-center items-center"><img src={props.image} alt="profile"/></td>
        <td class="px-6 py-4 ">{props.name}</td>
        <td class="px-6 py-4 ">{props.birthdey}</td>
        <td class="px-6 py-4 ">{props.gender}</td>
        <td class="px-6 py-4 ">{props.job}</td>
          </tr>
    
    )
}



export default Customer;