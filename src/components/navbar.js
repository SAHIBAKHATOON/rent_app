import React from 'react';
 import '../components/main.css';
const navbar = () => {
  return (
    <div> 
         <div className='find_'>
            <h1>Find Your Perfect <span>Rental Home</span></h1>
            <p >Beautifully curated rental homes that perfectly match your style and needs. making your <br/> search for the ideal living space effortless and enjoyable</p>
         </div>
         {/* **************** */}
         <nav class="navbar navbar-expand-lg ">
  <div class="container-fluid navbar_1">
    <a class="navbar-brand" href="#">Goa</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Mumbai</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Kolkata</a>    
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Jaipur</a>    
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Banglore</a>    
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Kerala</a>    
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Pune</a>    
        </li>
         
         
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Find your city" aria-label="Search" />
        
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

export default navbar