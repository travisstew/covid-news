import React, { Component } from 'react';
import axios from 'axios';

import {Row,Col,Card,} from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner'

// import date from 'date-and-time';

class CovidNews extends Component {


  constructor(props) {
    super(props)

    this.state = {
       newsData:[],
       images: []
    }
  }
  

  componentDidMount(){

    axios.get('http://localhost:5000/api/news').then(response=>{
           console.log(response);
      var articleImg = [];

        for(let i =0; i < response.data.news.length; i++){
            if(response.data.news[i].images === null ){
              articleImg.push('');
              
            }else{
          
              articleImg.push(response.data.news[i].images[0].url);
            }
          }
        // articleImg

        this.setState({
          newsData: response.data.news,
          images: articleImg
        });
        


    }).catch( error=> {
      console.error(error);
    });

  }

 ConvertUTCTimeToLocalTime = (UTCDateString)=>{
 var convertdLocalTime = new Date(UTCDateString);

      var hourOffset = convertdLocalTime.getTimezoneOffset() / 60;

      convertdLocalTime.setHours( convertdLocalTime.getHours() + hourOffset ); 

      return convertdLocalTime;
 };
  
     
  

  render() {
      const {newsData, images} = this.state;
      console.log(newsData);
      console.log(images);


    return (
      <div className="container">
          {     newsData.length ? 
          
     ( 
      <div>
      <Row xs={1} md={3} className="g-4">
  {Array.from(newsData).map((d, idx) => (
    <Col className="card-col">
      <Card>
        <Card.Img variant="top" src={images[idx]} />
        <Card.Body>
          <Card.Title>{d.title}</Card.Title>
          <a href={d.webUrl} target="_blank" rel="noreferrer" >  <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit longer.
              </Card.Text>
            </a> 
            <p className="article-time"><small>{ this.ConvertUTCTimeToLocalTime(d.publishedDateTime).toLocaleString()  }</small></p>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>
</div> )
: <p><Spinner animation="grow" /></p>}

      {/* <NewsCards news = {newsData} img = {images} /> */}
      </div>

    )
  }
}

export default CovidNews
