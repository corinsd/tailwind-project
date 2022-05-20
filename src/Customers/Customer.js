import React from "react";
import CustomerDelete from "./CustomerDelete";

class Customer extends React.Component{
  render() {
    return(
      
          <tr>
        
        <td class="table-cell bg-gray-400">{this.props.id}</td>
        <td class="table-cell justify-center items-center"><img src={this.props.image} alt="profile"/></td>
        <td class="table-cell px-6 py-4 ">{this.props.name}</td>
        <td class="table-cell px-6 py-4 ">{this.props.birthday}</td>
        <td class="table-cell px-6 py-4 ">{this.props.gender}</td>
        <td class="table-cell px-6 py-4 ">{this.props.job}</td>
        <td class="table-cell"><CustomerDelete stateRefresh={this.props.stateRefresh.bind(this)} id={this.props.id}/></td>
          </tr>
    
    )
}
}




export default Customer;