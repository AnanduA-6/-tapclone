import React from 'react'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import './Section.css'
function Section() {
  return (
<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
<ol class="carousel-indicators">
  <span className='slideBtn'  data-target="#carouselExampleIndicators" data-slide-to="0" ><FiberManualRecordIcon/></span>
  <span  className='slideBtn' data-target="#carouselExampleIndicators" data-slide-to="1"><FiberManualRecordIcon/></span>
  <span  className='slideBtn' data-target="#carouselExampleIndicators" data-slide-to="2"><FiberManualRecordIcon/></span>
</ol>
<div class="carousel-inner">
  <div class="carousel-item active">
  <div className='heroBannerMain'>
            <h1>My Home is Almost Put Together, But I could really use a new rug</h1>
            <a href="">Check Our Services</a>   
    </div>
  </div>
  <div class="carousel-item">
  <div className='heroBannerMain'>
            <h1>My Home is Almost Put Together, But I could really use a new rug</h1>
            <a href="">Check Our Services</a>  
    </div>
  </div>
  <div class="carousel-item">
  <div className='heroBannerMain'>
            <h1>My Home is Almost Put Together, But I could really use a new rug</h1>
            <a href="">Check Our Services</a>     
    </div>
  </div>
</div>
{/* <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
  <span class="sr-only">Previous</span>
</a>
<a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
  <span class="carousel-control-next-icon" aria-hidden="true"></span>
  <span class="sr-only">Next</span>
</a> */}
</div>
  )
}

export default Section