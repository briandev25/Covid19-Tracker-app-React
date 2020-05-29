import React, { Component } from 'react';
import { Cards, Chart, ChooseCountry} from '../Component/index';
import { fetchData } from '../api/Fetch'



class CovidBuilder extends Component {
    state ={
        data : {}
    
    }
   async componentDidMount(){
    const response = await fetchData()
   
    this.setState({data : response})
   // console.log(data)
    }
    render()
    {
  return (
      <React.Fragment>
         <Cards data ={this.state}/>
         <ChooseCountry />
         <Chart />
      </React.Fragment>
   
  );
    }
}

export default CovidBuilder;
