
import { Component } from 'react';
import './App.css';
import Customer from './Customers/Customer';

class App extends Component {
  state = {
    customers: ""
  }
 
  componentDidMount() {
   this.callApi()
   .then(res => this.setState({customers: res}))
   .catch(err => console.log(err));
  }
 
  callApi = async () => {
    const response =await fetch('/api/customers');
    const body = await response.json();
    return body;
  }

  render() {
  return (
    <div className="App shadow-xl w-full mt-4 overflow-auto" >
      <table className="min-w-full divide-y divide-gray-200 ">
        <thead>
          <tr>
            <td>번호</td>
            <td>프로필</td>
            <td>이름</td>
            <td>생년월일</td>
            <td>성별</td>
            <td>직업</td>
          </tr>
        </thead>
        <tbody className='min-w-full divide-y'>
          {this.state.customers ? this.state.customers.map(c => 
          {return(<Customer key={c.id} id={c.id} image={c.image} name={c.name} birthdey={c.birthdey} gender={c.gender} job={c.job}/>)})
        :""}
        </tbody>
     </table>
    </div>
  );
}
}
export default App;
