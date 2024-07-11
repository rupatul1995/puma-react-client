import "./home.css";


function PumaHome(){
    return(
        <div>
            <div class="miandiv">
               <div class="extra">
              <p>EXTRA 5% DISCOUNT FOR ALL ONLINE PAYMENTS</p>
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
                    <i class="fa-regular fa-user"></i>
                </div>
                 
          
                </div>

                {/* <div class="lastbody"> 
                    <p>EXTRA 15% OFF*</p>
                    <p> *ON CLOTHING ABOVE ₹1999 | *ON FOOTWEAR ABOVE ₹3999</p>
                    <p>Auto-appiled at checkout | "Exclusions apply</p>
                </div> */}

                <div className="divflat">
                  <div className="seasonsale">
                    <div className="seasonsale1" >
                        <h1>END OF SEASON SALE</h1>
                    </div>
                    <div className="seasonsale2">
                        <p>NEW STYLES ADDED</p>
                    </div>
                    <div className="seasonsale3">
                        <p>
                            +EXTRA 5% OF ALL ONLINE PAYMENTS
                        </p>
                    </div>
                    <div className="seasonsale4">
                        <p>FOR HIM</p>
                        <p>FOR HER</p>
                        <p>FOR KIDS</p>
                    </div>
                  </div>
                </div>

                <div className="coolstyles">
                <div className="coolstyles1">
                    <h1>COOL STYLES AT HOT DISCOUNTS</h1>
                </div>
                <div className="coolstyles2">
                    <p>FLAT 40% OFF | + EXTRA 5% OFF ON ALL ONLINE PAYMENTS</p>
                </div>
                <div className="coolstyles3"></div>
                </div>
    </div>
        </div>
    );
}
export default PumaHome;