import React from 'react'
import discover from '../Frame 1410085960.png';
import map from "../Frame 1410085965.png"
const Discover = () => {
  return (
    <div>
        <div className='find_'>
            <h1>Discover The  <span>Benefits</span> Of  <br/>Renting With Us</h1>
            <p >Beautifully curated rental homes that perfectly match your style and needs. making your <br/> search for the ideal living space effortless and enjoyable</p>
         </div>
         <nav class="navbar navbar-expand-lg ">
  <div class="container-fluid navbar_">
    
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Renters</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Landlords/Property Manager</a>    
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Agents</a>    
        </li>
        
         
         
      </ul>
      
    </div>
  </div>
</nav>
{/* ***************** */}
<div className='card_flex'>
<div class="card_1" >
  <img src={discover} class="card-img-top" alt="..." />
</div>
<div class="card_1" >
  <img src={discover} class="card-img-top" alt="..." />
   
</div>
<div class="card_1" >
  <img src={discover} class="card-img-top" alt="..." />
   
</div>
</div>
{/* ************ */}
<div className='lead_'>
<div className='find_'>
<h1>Leading <span>Localities</span> To Explore</h1>
<p >Beautifully curated rental homes that perfectly match your style and needs. making your <br/> search for the ideal living space effortless and enjoyable</p>
</div>
<nav class="navbar navbar-expand-lg ">
  <div class="container-fluid navbar_">
    
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Popular</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Invesment </a>    
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Affordable</a>    
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Great  </a>    
        </li>
        
         
         
      </ul>
      
    </div>
  </div>
</nav>


<div className=' flex_sec'>
    
     
      <div className="flex_item">
       <h6>Mira Road</h6>
        <p>₹9.6k/sq.ft</p>
        <h5 className='text-danger'>1.57%</h5>
    
      
    </div>
    <hr/>
      
     <br/>
     
    
    <div>
    <img src={map} alt="" />
    </div>
</div>

<div className=' flex_sec_1'>
    
     
      <div className="flex_item">
       <h6>Mira Road</h6>
        <p>₹9.6k/sq.ft</p>
        <h5 className='text-success'>1.37%</h5>
       
      
    </div>
    
      
     <br/>
     
    
    
</div>
<div className=' flex_sec_1'>
    
     
      <div className="flex_item">
       <h6>Mira Road</h6>
        <p>₹9.6k/sq.ft</p>
        <h5 className='text-danger'>1.57%</h5>
       
      
    </div>
    
      
     <br/>
     
    
    
</div>



</div>
    </div>


  )
}

export default Discover