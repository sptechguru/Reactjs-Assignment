import React from 'react';
import { NavLink } from 'react-router-dom';

export default class View extends React.Component {
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
            <br/>
       <h3 className="text-center font-weight-bold">View More Details </h3>
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
      <td><i className="fa fa-pencil  ml-2"></i></td>
      <td><i className="fa fa fa-check-square  ml-2"></i> {item.first_name} </td>
      <td>  <NavLink type="button"  className="btn btn-outline-danger" to="/view">View More details</NavLink></td>
      <td><button type="button" class="sp2 btn btn-danger">Quotes Awaiting</button></td>
    </tr>
</table>
</section>  

<div className="ml-5">
<p> <i class="fa fa-exclamation-triangle fa-2x c2"></i> <b className="ml-3">Disclaimer: </b>  Plese update your Move date before two days of shifting</p>
</div>
<br/>
<hr/>

<section className="container ">

<h3><b>Inventory Details </b> <button type="button" data-toggle="collapse" data-target="#sp{item.user_id}" aria-expanded="false" aria-controls="collapseExample"  class="ml-3 btn btn-dark">Edit Inventory </button>  </h3>


<div class="collapse" id="sp{item.user_id}">
  <div class="">
  {
    this.state.Customer_Estimate_Flow ?
        this.state.Customer_Estimate_Flow.map((item, i) => <div key={i}>
            {item.items.rooms.map((data) =>
                <div>
                    {console.log(data.categories)}

                    <h4 className="bg-light p-3"><span className="badge badge-pill badge-danger text-uppercase">{data.id}</span></h4>

                  
                </div>
            )}
        </div>
        )
        :
        null
}

   
  </div>
</div>



<br/>
<br/>
<h3><b>House Details </b> <button type="button" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample" class="ml-3 btn btn-dark">Edit House Details </button>  </h3>
<br/>

<section className="collapse mr-4" id="collapseExample">

<h4 className="c2"><b>Existing House Details </b></h4>
<br/>
<br/>
<div className="row">

<div className="col-md-4">
<h5 className="mr-3 font-weight-bold">Floor No</h5>
<p>{item.old_floor_no}</p>
</div>

<div className="col-md-4">
<h5 className="mr-3 font-weight-bold">Elevator Avilable</h5>
<p>{item.old_elevator_availability}</p></div>

<div className="col-md-3">
<h5 className="mr-3 font-weight-bold">Packing Required</h5>
<p className="">{item.packing_service}</p></div>
</div>
<br/>
<div className="continer">
<h5 className="mr-3 font-weight-bold">Additional information</h5>
<p className="">No additional info</p>
</div>



<hr/>
<h4 className="c2"><b>New House Details </b></h4>
<br/>
<br/>

<div className="row">

<div className="col-md-4">
<h5 className="mr-3 font-weight-bold">Floor No</h5>
<p>{item.new_floor_no}</p>
</div>

<div className="col-md-4">
<h5 className="mr-3 font-weight-bold">Elevator Avilable</h5>
<p>{item.new_elevator_availability}</p></div>

<div className="col-md-3">
<h5 className="mr-3 font-weight-bold">Packing Required</h5>
<p className="">{item.packing_service}</p></div>
</div>
<br/>
<div className="continer">
<h5 className="mr-3 font-weight-bold">Additional information</h5>
<p className="">No additional info</p>

</div>
</section>

<br/>




</section>
       
       
                
                
                </div>
                
                )
                :
                null
                }


            </div>


            
        );
     
    }

}


