import React from "react";
import { post } from "axios";


class Customeradd extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            file: null,
            userName: '',
            birthday: '',
            gender: '',
            job: '',
            fileName: ''
        }
        
    }

    addCustomer = () => {
        const url = '/api/customers';
        const formData = new FormData();
        formData.append('image', this.state.file);
        formData.append('name', this.state.userName);
        formData.append('birthday', this.state.birthday);
        formData.append('gender', this.state.gender);
        formData.append('job', this.state.job);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        
        return post(url, formData, config);
        

    }
    

    handleFormsubmit = (e) => {
        e.preventDefault()
        this.addCustomer()
        .then((response) => {
            console.log(response.data);
            this.props.stateRefresh();
        })
        this.setState({
            file: null,
            userName: '',
            birthday: '',
            gender: '',
            job: '',
            fileName: ''
        })
        
    }


    handlefileChange = (e) => {
        this.setState({
            file: e.target.files[0],
            fileName: e.target.value
        })
    }

    handleValueChange = (e) => {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }


    render() {
        return(
            <form onSubmit={this.handleFormsubmit}>
                <h1>고객 추가</h1>
                프로필이미지:<input type="file" name="file" file={this.state.file} value={this.state.fileName} onChange={this.handlefileChange}/><br/>
                이름:<input type="text" name="userName" value={this.state.userName} onChange={this.handleValueChange}/><br/>
                생년월일:<input type="text" name="birthday" value={this.state.birthday} onChange={this.handleValueChange} /><br/>
                성별:<input type="text" name="gender" value={this.state.gender} onChange={this.handleValueChange} /><br/>
                직업:<input type="text" name="job" value={this.state.job} onChange={this.handleValueChange} /><br/>
                <button type="submit" class="rounded-2xl bg-indigo-600 text-white w-24 mt-5 py-2 duration-500">추가 하기</button>
            </form>
        )
    }
}

export default Customeradd;