import React from 'react'
import '../../src/index.css'
import Home from './Home'

function Header() {
  return (
    <header className="main-header">
        <div className='container'> 
      <div className="row">  
          <div className="col-md-4  my-auto">
              <h1>Latest Statitics and Data on Covid-19 </h1>
              <p className="header-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis perspiciatis perferendis consectetur ipsam, repellendus ea molestiae eveniet aperiam accusamus animi nam dolores itaque vitae ex nemo debitis, quo officiis reiciendis?</p> 
             <Home />
              
          </div>
           <div className='col-md-8 text-center'>
              {/* <img src={covidImage} alt="covid cell " /> */}
              <img className="image-fluid" src="https://images.cnbctv18.com/wp-content/uploads/2021/04/covid-24-1019x573.jpg?impolicy=website&width=500px&height=300px" alt="" />
           </div>
        
      </div>    
          
        </div>
    </header>
  )
}

export default Header