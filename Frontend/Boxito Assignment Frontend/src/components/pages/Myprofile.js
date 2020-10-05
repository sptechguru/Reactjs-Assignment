import React from 'react';
import { NavLink } from 'react-router-dom';

export default class Myprofile extends React.Component {
    constructor() {
        super();
    this.state = {
        hasErrors:false,
        Customer_Estimate_Flow:null

        }; 
    }

    componentDidMount(){
        fetch('http://localhost:5000/Customer_Estimate_Flow')
        .then(res => res.json())
        .then(res => this.setState({Customer_Estimate_Flow: res}))
        .catch(() => this.setState({ hasErrors: true }));
    }

    render() {
     
        return(
            <div className="container-fluid">
       <h3 className="text-center font-weight-bold">My Moves</h3>
<br/>
            {
                this.state.Customer_Estimate_Flow ? 
                this.state.Customer_Estimate_Flow.map((item,i) => 
            
     <div className="container mr-5"> 
    <br/>


<section className="mr-5">
<div className="row">

<div className="col-md-3">
<h5 className="mr-3 font-weight-bold">From</h5>
<p>{item.moving_from}</p>
</div>

<div className="col-md-3">
<h5 className="mr-3 font-weight-bold"><i class="fa fa-arrow-circle-right fa-2x c2"></i></h5>
</div>

<div className="col-md-3">
<h5 className="mr-3 font-weight-bold">To</h5>
<p>{item.moving_to}</p></div>
<div className="col-md-3">
<h5 className="mr-3 font-weight-bold">Request#</h5>
<p className="c2">{item.estimate_id}</p></div>

</div>
</section>


<section className="container">
<table className="table table- fbs">
    <tr>
      <th scope=""> <i class="fa fa-home ml-2"></i> {item.property_size}</th>
      <td><i className="fa fa fa-cubes  ml-2"></i>  {item.total_items}</td>
      <td><i className="fa fa fa-road  ml-2"></i> {item.distance} </td>
      <td><i className="fa fa fa-calendar  ml-3"></i> {item.moving_on}</td>
      <td><i className="fa fa-pencil  ml-2"></i> {item.email}</td>
      <td><i className="fa fa fa-check-square  ml-2"></i> isflexible</td>
      <td>  <NavLink type="button"  className="btn btn-outline-danger" to="/view">View More details</NavLink></td>
      <td><button type="button" class="sp2 btn btn-danger">Quotes Awaiting</button></td>
    </tr>
</table>
</section>  

<div className="ml-5">
<p> <i class="fa fa-exclamation-triangle fa-2x c2"></i> <b className="ml-3">Disclaimer: </b>  Plese update your Move date before two days of shifting</p>
</div>
<hr/>
       
       
                
                
                </div>
                
                )
                :
                null
                }

            </div>
        );
     
    }

}


