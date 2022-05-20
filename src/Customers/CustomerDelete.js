import React from "react";

class CustomerDelete extends React.Component {

    deleteCustomer(id) {
        
        const url = '/api/customers/' + id;
        fetch(url, {
            method: 'DELETE'
        })
        .then(() => {this.props.stateRefresh();})
    }

    render() {
        return (
            <button onClick={(e) => {this.deleteCustomer(this.props.id)}} class=" rounded-2xl bg-indigo-600 text-white w-24 ">삭제</button>
        )
    }
}

export default CustomerDelete;