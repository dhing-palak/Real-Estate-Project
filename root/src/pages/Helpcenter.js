import React from 'react'
import '../styles/Helpcenter.css';

function Helpcenter() {
  return (
    <>
    <helpcenter>
    <div className='helpcenter-container'>
      <div className='row'>
            <h2>Frequently Asked Questions</h2>

            <div className='text-align-left p-3' style={{ backgroundColor: '#f3efe0' }}>
             <h5> 1.  How to Register?</h5>        
            </div>                       
              <p>To create your account, follow these steps:</p>

              <li>Step 1: Enter your Correct name, mobile number and Email id.</li>
              <li>Step 2: Enter a strong password and Re-enter it to confirm Password.</li>
              <li>click 'Confirm'.
                  Your account will be created.</li>

             <div className='text-align-left p-3' style={{ backgroundColor: '#f3efe0' }}>
             <h5>2.  How to Login?</h5>        
            </div>                       
              <p>To login your account, follow these steps:</p>
              <li>Step 1: Enter your Username and Password.</li>
              <li>click 'Confirm'.
                  Your account will be Login to your account.</li>     

            <div className='text-align-left p-3' style={{ backgroundColor: '#f3efe0' }}>
             <h5>3.  How do I Deactivate my account?</h5>        
            </div>                       
              <p>To de-activate your account, follow these steps:</p>

               <li> Step 1: Login into your Magicbricks account with your username & password.</li>
              <li>Step 2: On the top banner, click on 'My Activity / My Dashboard' and select 'Manage Profile'.</li>
              <li>Step 3: Proceed to 'Profile Details' section. Here, click on 'Deactivate account'.</li>
              <li>Step 4: You will get a Verification Code on your registered mobile no. & email id.</li>
              <li>Enter the 3 digit verification code sent and click 'Confirm'.
                  Your account will be de-activated.</li>
              
              <div className='text-align-left p-3' style={{ backgroundColor: '#f3efe0' }}>
                <h5>4.  When will my Property become visible on the site?</h5>        
               </div>                       
              <p>It takes maximum 24hours for a property to get screened and become visible on search.</p>

        </div>
      </div>
    </helpcenter>
   </>
  )
}

export default Helpcenter;