import React, { Component } from 'react'
import axios from 'axios';
// import covidImage from '../images/covid-image-removebg-preview.png';
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
      axios.get('https://disease.sh/v3/covid-19/states?sort=United%20States&yesterday=United%20States&allowNull=United%20States').then(res =>{
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
          {newValue.length > 0 ? <p>{newValue[0].active}</p> : <p></p>}

        </div>
     
      </div>
    )
  }
}

export default Home
