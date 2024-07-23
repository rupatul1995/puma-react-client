import "./style/orderproduct.css";

function OrderProduct(){
    return(
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

         <i class="fa-regular fa-heart"> </i>
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



     <div  className="orderproduct" >
               <p>HOME</p>
               <p>May Account</p>     
     </div>

     <div  className="orderproduct1" >
               <p>Dashboard</p>  
     </div>


     <div  className="orderproduct2" >
               <p>My Account</p>  
     </div>


     <div  className="orderproduct3" >
               <p><u>LOGOUT</u></p>  
     </div>

     <div className="orderproduct4">
       <div className="orderproduct5">
        <div className="profile">
            <div className="profile1">
            <i class="fa-regular fa-user"></i>
            <h4>Profile</h4>
            </div>

            <div className="profile2">
                <h6><u>EDIT PROFILE</u></h6>
            </div>
        </div>

        <div className="profilesecond">
            <p><b>Name:</b> Rupali Marathe</p>
            <p><b>Email:</b> rupali@gmail.com</p>
        </div>
       </div>

       <div className="orderproduct6">
        <div className="bookaddress">
            <h6>Address Book</h6>
        </div>
        <div  className="bookaddress1">
            <p>ADD NEW</p>
        </div>
       </div>
     </div>




     <div className="orderproduct7">
     <div className="orderproduct8">
        <div className="profile3">
            <div className="profile4">
            <i class="fa-solid fa-bag-shopping"></i>
            <h4>Profile</h4>
            </div>

            <div className="profile5">
                <h6><u>CHANGE PASSWORD</u></h6>
            </div>
        </div>

        <div className="profilesecond1">
            <b>Password:</b> 
            <input /> 
          
        </div>
       </div>

       <div className="orderproduct9">
        <div className="bookaddress2">
            <h6>Address Book</h6>
        </div>
        <div  className="bookaddress3">
            <p>ADD NEW</p>
        </div>
       </div>
       </div>


     </div>

    );
}

export default OrderProduct;