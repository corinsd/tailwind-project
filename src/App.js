
import { Component } from 'react';
import './App.css';
import Customer from './Customers/Customer';
import Customeradd from './Customers/Customeradd';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      customers:'',
      completed: 0
    }
  }

  stateRefresh = () => {
    this.setState({
      customers:'',
      completed: 0
    });
    this.callApi()
   .then(res => this.setState({customers: res}))
   .catch(err => console.log(err));
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
    <div className='App'>
      <div class='box-border border-b rounded-3xl'>
        <div class="shadow-2xl w-full mt-4 overflow-auto" >
          <table class="min-w-full divide-y divide-gray-200 ">
            <thead>
              <tr>
                <td>번호</td>
                <td>프로필</td>
                <td>이름</td>
                <td>생년월일</td>
                <td>성별</td>
                <td>직업</td>
                <td>설정</td>
              </tr>
            </thead>
            <tbody class='min-w-full divide-y'>
              {this.state.customers ? this.state.customers.map(c => 
                {return(<Customer stateRefresh={this.stateRefresh} key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job}/>)})
                :""}
            </tbody>
        </table>
        </div>
      </div>
      <Customeradd stateRefresh={this.stateRefresh} />
    </div>
  );
}
}
export default App;
