import React, { Component } from 'react';
import axios from 'axios';

import {Row,Col,Card,} from 'react-bootstrap';


class CovidNews extends Component {


  constructor(props) {
    super(props)

    this.state = {
       newsData:[],
       images: []
    }
  }
  

  componentDidMount(){
    var options = {
      method: 'GET',
      url: 'https://coronavirus-smartable.p.rapidapi.com/news/v1/US/',
      headers: {
        'x-rapidapi-host': 'coronavirus-smartable.p.rapidapi.com',
        'x-rapidapi-key': '00b956d7c8msh458ab8d1c20369dp182f31jsn413e2da1e3e2'
      }
    };
    axios.request(options).then(response => {
      // console.log(response.data.news[0].images[0].url);
     
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
        })
        
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
      // const dog = newsData.map(d => )

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
          <a href={d.webUrl} target="_blank">  <Card.Text>
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
: <p>no data</p>}

      {/* <NewsCards news = {newsData} img = {images} /> */}
      </div>
    )
  }
}

export default CovidNews
