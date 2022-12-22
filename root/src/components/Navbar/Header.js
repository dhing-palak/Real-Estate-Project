import React from 'react';
import "../../style/Header.css";
// import Button from 'react-bootstrap/Button';
// // import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Dropdown from 'react-bootstrap/Dropdown';
import 'font-awesome/css/font-awesome.min.css';


import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavbarElements';


// const cititesList = [
// 	{
// 		id: 1,
// 		value: 'Hyderabad'
// 	}, {
// 		id: 2,
// 		value: 'Kolkata'
// 	}, {
// 		id: 3,
// 		value: 'Chennai'
// 	}, {
// 		id: 4,
// 		value: 'Pune'
// 	},{
// 		id: 5,
// 		value: 'Gujarat'
// 	},{
// 		id: 6,
// 		value: 'Noida'
// 	},{
// 		id: 7,
// 		value: 'Kerala'
// 	},{
// 		id: 8,
// 		value: 'Goa'
// 	},{
// 		id: 9,
// 		value: 'Bangalore'
// 	},{
// 		id: 10,
// 		value: 'Mumbai'
// 	}
// 	];
	
	// function Options({ options }) {
	// 	return (
	// 		options.map(option => 
	// 					<option key={option.id} value={option.value}>                                   
	// 					{option.value}
	// 					</option>)
						
	// 				   );
					   
	// };
	
const Navbar = () => {
	

  

return (
	<>
	<Nav>
        
		<Bars />

		<NavMenu>
        <div className='logo' >
            <h2>
			<NavLink to='/' activestyle='true'>
				<span>R</span>eal-
                <span>E</span>state
			</NavLink>
            </h2>
		
        </div>
		
		{/* <NavLink to='/about' activestyle='true'>
			About
		</NavLink> */}
		
		<div>
		<div className="dropdown">
		{/* <select
		name="Cities" className='dropbtn2'>

		<Options  options={cititesList} />


		</select> */}

     <button class="dropbtn"> Cities <i class="fa fa-angle-down"></i>
    </button>

    <div class="dropdown-content">
	
       <a href="/location/city">Mumbai</a>
      <a href="/location/city">Kolkata</a>
	  <a href="/location/city">Delhi</a>
	  <a href="/location/city">Pune</a>
	  <a href="/location/city">Bangalore</a>
	  <a href="/location/city">Hyderbad</a>
	  <a href="/location/city">Pune</a>
	  <a href="/location/city">Bangalore</a>
	  <a href="/location/city">Hyderbad</a>  

      
    </div>
	</div>
	</div>
	
		


		
		
		
		
		
		{/* <NavLink to='/sign-up' activestyle='true'>
			Sign Up
		</NavLink> */}
		{/* Second Nav */}
		
		</NavMenu>

		<NavBtn>
		<NavBtnLink to='/user/register'>Register</NavBtnLink>
		<NavBtnLink to='/user/login'>Login</NavBtnLink>
		<NavBtnLink to='/about'><i className="fas fa-home"></i> Post Property </NavBtnLink>
		
		</NavBtn>

		
		
		
		

	</Nav>
	<div className='subheader'>
		<div className="dropdown1">
			<button className="dropbtn1"> Buy <i className="fa fa-angle-down" style={{color:'#d8282a',fontWeight:'bold'}}></i>
			</button>
			<div className="dropdown-content1">
			<a href="/about">Ready to Move</a>
			<a href="/about">Budget Homes</a>
			<a href="/about">Premium Homes</a>
			<a href="/about">Newly Launched</a>
			

			{/* <a href="#">Link 3</a> */}
			</div>
		</div>
		<div className="dropdown1">
			<button className="dropbtn1"> Rent <i className="fa fa-angle-down" style={{color:'#d8282a',fontWeight:'bold'}}></i>
			</button>
			<div className="dropdown-content1">
			<a href="/about">Owner Properties</a>
			<a href="/about">Verified Properties</a>
			<a href="/about">Furnished Homes</a>
			<a href="/about">Immediately Homes</a>
			

			{/* <a href="#">Link 3</a> */}
			</div>
		</div>
		<div className="dropdown1">
			<button className="dropbtn1"> Sell <i className="fa fa-angle-down" style={{color:'#d8282a',fontWeight:'bold'}}></i>
			</button>
			<div className="dropdown-content1">
				For Owner
			<a href="/about">Sell Properties</a>
			<a href="/about">My Dashboard</a>
			For Agents & Builder
			<a href="/about">Sales Enquiry</a>
			<a href="/about">My Dashboard</a>

			

			{/* <a href="#">Link 3</a> */}
			</div>
		</div>
		<div className="dropdown1">
			<button className="dropbtn1"> Help <i className="fa fa-angle-down" style={{color:'#d8282a',fontWeight:'bold'}}></i>
			</button>
			<div className="dropdown-content1">
			<a href="/about">Help Center</a>
			<a href="/about">Sales Enquiry</a>
			
			

			{/* <a href="#">Link 3</a> */}
			</div>
		</div>

	</div>
		
		
	
	
	</>
);
};

export default Navbar;