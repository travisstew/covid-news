import React, { Component } from 'react'
import axios from 'axios';
import Form from 'react-bootstrap/Form';


class Home extends Component {
      

    constructor(props) {
      super(props)
    
      this.state = {
         covidData:[],
         errorMsg:'',
         state: '',
         info: '',
      }
    }

    componentDidMount(){
      axios.get('http://localhost:5000/api/stats').then(res =>{
        console.log(res.data);
        this.setState({
          covidData: res.data,
        })
      }).catch(err=>{
        console.log(err);
        this.setState({
          errorMsg: "error has occured retreving data"
        })
      })
    }

    selectChange = (event) =>{
      const selectedState = event.target.value;    
      this.setState({
        state: selectedState,
      });
    }



  render() {
      const {covidData,state} = this.state;

      const newValue = covidData.filter(d => d.state === state);
     
     
    
    return (
      <div>
      
        <Form.Select value={state} onChange={this.selectChange} size="sm">
          <option value="null">PICK A STATE</option>
          {
            covidData.map(data => <option key={data.state} value={data.state}>{data.state} </option>)
          }
        </Form.Select>

        <div>
          {newValue.length > 0 ?
          
         <div className="statistics">
           <ul>
            <li><b>Active:</b> {newValue[0].active}</li> 
            <li><b>Cases:</b>   {newValue[0].cases}</li> 
            <li><b>Today Cases:</b>   {newValue[0].todayCases}</li> 
            <li><b>Deaths:</b>  {newValue[0].deaths}</li> 
            <li><b>tests:</b> {newValue[0].tests}</li>
           </ul>
      
         </div>
           : <p></p>}

        </div>
        
      </div>
    )
  }
}

export default Home
