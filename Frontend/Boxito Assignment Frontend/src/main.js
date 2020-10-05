import React from 'react';
import './App.css';

class App extends React.Component {

    constructor() {
        super();
        this.state ={
         users:null
        }   
    }

    componentDidMount(){
        fetch('https://reqres.in/api/users').then((resp) => {
            resp.json().then((result) => {
            console.warn(result.data) 
            this.setState({users:result.data})   

            })
        })
    }

    render() {
        return (
            <>
            <div className="App">

            <h1 className="text-center text-white mb-4">API DATA FETCHING IN REACT JS</h1>

      {
          this.state.users ? 
          this.state.users.map((item,i) =>

 <div className="container"> 
<table class="table table-warning">
    <tr>
    <th scope="col">s.no</th>
    <th scope="col">Profile_pic</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">email</th>
    </tr>
    
    <tr>
      <th scope="row">{i}</th>
    <td className="sp"> <img className="img-thumbnail img-fluid img-circle " src={item.avatar}/></td>

      <td>{item.first_name} </td>
      <td>{item.last_name}</td>
      <td>{item.email}</td>

    </tr>

</table>



          </div>
       

          )
          :
          null
      }
            </div>
            </>
        )}
}

export default App;
