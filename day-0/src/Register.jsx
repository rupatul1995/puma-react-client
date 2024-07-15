import "./style/register.css";


function Register(){
    return(
        <div>
        <div class="miandiv">
           <div class="extra">
          <p>FREE RETURN AND FREE EXCHANGE</p>
            </div>

            <div class="nav">
               <div class="nav1">
            <img  src="https://assets.turbologo.com/blog/en/2019/11/19084917/puma-logo-cover-958x575.png"  />
            </div>
      
            <div  class="nav2">
                <a>New</a>
                <a>Wonem</a>
                <a>Men</a>
                <a>Kids</a>
                <a>FentyxPuma</a>
                <a>Motorsport</a>
                <a>Collabration</a>
                <a>Sports</a>
                <a>Outlet</a>
            </div>
            
            
            <div class="nav3">
                <i class="fa-solid fa-magnifying-glass" ></i>
                <input class="input" placeholder="search" />

            </div>


            <div class="nav4">

                <i class="fa-regular fa-heart"></i>
                <i class="fa-solid fa-cart-shopping"></i>
                <i class="fa-regular fa-user">
                
                </i>
               
            </div>
             
      
            </div>

            <div class="lastbody"> 
                <h1> FLAT 40% OFF | END OF SEASON SALE</h1>
                <p>SHOP NOW</p>
                <p>+EXTRA 5% DISCOUNT FOR ALL ONLINE PAYMENTS</p>
            </div>



            <div className="account">
                <h1>My account</h1>
            </div>




            <div className="signup">
        <div class="registration">
            <div class="registration1">
                <p>Register</p>
            </div>
           
            <div className="inputfirst">
            <h6>FIRST NAME *</h6>
                <div>
                 <input type="email" id="typeemail" placeholder="FIRST NAME"/>
             </div>
          </div>

          <div className="inputfirst">
            <h6>LAST NAME *</h6>
                <div>
                 <input type="email" id="typeemail" placeholder="LAST NAME"/>
             </div>
          </div>


          <div className="inputfirst">
            <h6>PHONE *</h6>
                <div>
                 <input type="email" id="typeemail" placeholder="PHONE"/>
             </div>
          </div>
        
          <div className="inputfirst">
            <h6>EMAIL *</h6>
                <div>
                 <input type="email" id="typeemail" placeholder="EMAIL"/>
             </div>
          </div>


          <div className="inputfirst">
            <h6>PASSWORD *</h6>
                <div>
                 <input type="email" id="typeemail" placeholder="PASSWORD "/>
             </div>
          </div>
        
          
            <div class="submitbutton">
                <h6>CONTINUE</h6>
            </div>


            <div class="endtext4">
               <div class="endtext3">
                <input type="checkbox"  className="endtext15"/>
                <label  className="endtext6">Add me the PUMA mailing list </label>
               </div>

               <div class="endtext7">
                <input type="checkbox"  className="endtext8"/>
                <label  className="endtext9">I have read the terms and condition privacy police and review guidelines and agree to them</label>
               </div>
            </div>
        </div>
        </div>



        <div className="lastdiv2">
            
            </div>

</div>
</div>


    );
}
export default Register;
