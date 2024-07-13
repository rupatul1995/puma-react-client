import  {  useNavigate } from "react-router-dom";
import "./home.css";


function PumaHome() {
    const router=useNavigate();

function Gotologin(){
    router("/page-login");
}
    return (
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
                    <i class="fa-regular fa-user" onClick={Gotologin}>
                        {/* <div className="content">
                            <a>MY ACCOUND</a>
                            <a>WISHLIST</a>
                            <a>CHECK ORDER</a>
                            <a>LOGIN/REGISTER</a>
                        </div>
                     */}
                    </i>
                   
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
                <div className="coolstyles3">
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                </div>
                </div>

                <div className="divindian">
                  <div className="seasonindian">
                    <div className="seasonindian1" >
                        <h1>SEE THE GAME LIKE WE DO</h1>
                    </div>
                    <div className="seasonindian2">
                        <p>PUMA x INDIAN OLYMPIC ASSOCITION</p>
                    </div>
                    <div className="seasonindian3">
                        <p>
                        Offical footwear Partner
                        </p>
                    </div>
                    <div className="seasonindian4">
                        <p>LEARN MORE</p>
                        
                    </div>
                  </div>
                </div>

                <div className="playloud">
                  <div className="seasonplay">
                    <div className="seasonplay1" >
                        <h1>PLAY LOUD</h1>
                    </div>
                    <div className="seasonplay2">
                        <p>BREAK IT DOWN</p>
                    </div>
                    
                    <div className="seasonplay4">
                        <p>SHOP NOW </p>
                        
                    </div>
                  </div>
                </div>


                <div className="azzura">
                  <div className="seasonazzura">
                    <div className="seasonazzura1" >
                        <h1>BACK TO AZZURRO</h1>
                    </div>
                    <div className="seasonazzura2">
                        <p>SCUDERIA FERRARI MIAMI LIMITED EDITION</p>
                    </div>
                    
                    <div className="seasonazzura4">
                        <p>SHOP NOW</p>
                        
                    </div>
                  </div>
                </div>


                <div className="divcarrot">
                  <div className="seasoncarrot">
                    <div className="seasoncarrot1" >
                        <h1>PUMA X CARROTS</h1>
                    </div>
                    <div className="seasoncarrot2">
                        <p>BY ANWAR CARROTS</p>
                    </div>
                    <div className="seasoncarrot3">
                        <p>
                     ORIGANIC XL CARROTS
                        </p>
                    </div>
                    <div className="seasoncarrot4">
                        <p>SHOP NOW </p>
                        
                    </div>
                  </div>
                </div>


                <div className="divpalm">
                  <div className="seasonpalm">
                    <div className="seasonpalm1" >
                        <h1>PUMA x PALM</h1>
                    </div>
                    <div className="seasonpalm2">
                        <h1>TREE CREW</h1>
                    </div>
                    <div className="seasonpalm3">
                        <p>
                    CLASSIC SPORT STYLE
                        </p>
                    </div>
                    <div className="seasonpalm4">
                        <p>SHOP NOW </p>
                        
                    </div>
                  </div>
                </div>

                <div className="divvideo">
                <video autoplay="autoplay" muted loop>
                            <source src="https://cdn.sanity.io/files/qa41whrn/prod/41abad3662b8524f819e624d4ae4c6c5f6f38239.mp4" type="video/mp4"/>
                        </video>
                </div>



                <div className="divfuture">
                  <div className="seasonfuture">
                    <div className="seasonfuture1" >
                        <h1>THE FUTURE IS NOW</h1>
                    </div>
                    <div className="seasonfuture2">
                        <p>THE NEXT GEN OF PUMA</p>
                    </div>
                    <div className="seasonfuture3">
                        <p>
                    RIYAN PARAG & NITISH KUMAR REDDY
                        </p>
                    </div>
                    <div className="seasonfuture4">
                        <p>SHOP NOW </p>
                        
                    </div>
                  </div>
                </div>

                <div className="kisdstyles">
                    <p>KIDS' MUST-HAVE STYLES</p>
                </div>

                <div className="kisdstyles1">
                    <div className="card1">
                        <h3>SCHOOL STORE</h3>
                        <p> One Stop Shop</p>

                    </div>

                    <div className="card2">
                    <h3> CASUAL WEAR</h3>
                    <p> Wardrobe Staples</p>
                    </div>

                    <div className="card3">
                    <h3>SOFTRIDE SHOES</h3>
                    <p>Everyday Comfort </p>
                    </div>

                    <div className="card4">
                    <h3>SETS</h3>
                    <p>Make Statement</p>
                    </div>
                </div>

             {/* <div className="velocitynitro">
                    <div className="velocitynitrocolor"></div>
                    <div className="velocitynitrotext1">
                        <p>VELOCITY NITRO™ 3</p>
                    </div>
                    <div className="velocitynitrotext2">
                        <p>THE WAY RUNNING SHOULD FEEL</p></div>
                    <div className="velocitynitroshop">
                        <div className="velocityshopnow">
                            <p>SHOP NOW</p>
                        </div>
                        <div className="velocityshopnitro">
                            <p>SHOP NITRO COLLECTION</p>
                        </div>
                    </div>
                    <div className="running">
                        <div className="runningshoes">
                        <video autoplay="autoplay" muted loop>
                                <source src="https://cdn.sanity.io/files/qa41whrn/prod/4a3026279df3bdb8eac79fcd2d37c6df1a4313e1.mp4" type="video/mp4"/>
                            </video>
                        </div>
                    </div>
                    </div>
                 */}


                <div className="divmanchester">
                  <div className="seasonmanchester">
                    <div className="seasonmanchester1" >
                        <h1>MANCHESTER CALLING</h1>
                    </div>
                    <div className="seasonmanchester2">
                        <p>24/25 MAN CITY HOME KIT</p>
                    </div>
                    
                    <div className="seasonmanchester3">
                        <p>SHOP NOW </p>
                        <p>SHOP COLLECTON </p>
                        
                    </div>
                  </div>
                </div>

                 
                <div className="divsneakerhead">
                  <div className="seasonsneakerhead">
                    <div className="seasonsneakerhead1" >
                        <h2>FOR ALL THE </h2>
                    </div>
                    <div className="seasonsneakerhead2">
                        <h2>SNEAKERHEADS</h2>
                    </div>
                    <div className="seasonsneakerhead3">
                        <p>
                            YOUR ONE+STEP SNEAKER SHOP
                        </p>
                    </div>
                    <div className="seasonsneakerhead4">
                        <p>SHOP NOW</p>
                        <p>EXPLORE MORE</p>
                    </div>
                  </div>
                </div>

                <div className="divspotlight">
                    <div className="divspotlight1">
                        <h2>PUMA SPOTLIGHT</h2>
                    </div>
                    
                    <div  className="divspotlight2">
                    <div  className="spotlightCard1">
                        <div className="shoescard1">
                        <div className="redcard2" >
                        <p>-53%</p>
                         </div>
                        </div>
                        <div className="cardprice1">
                            <div className="pricedetail1">
                            <h6>PUMA Court Shatter Low Men's Sneakers</h6>
                            </div>
                            <div className="price1">
                             <p>₹2,819</p>
                             </div>
                        </div>
                    </div>

                    <div className="spotlightCard2">
                    <div className="shoescard2">
                    <div className="redcard2" >
                    <p>-40%</p>
                    </div>
                    </div>
                    <div className="cardprice2">
                    <div className="pricedetail2">
                            <h6>Rider Future Vintage Unisex Sneakers</h6>
                            </div>
                            <div className="price2">
                             <p>₹5,399</p>
                             </div>
                    </div>
                    </div>

                    <div className="spotlightCard3">
                    <div className="shoescard3">
                    <div className="redcard2" >
                    <p>-50%</p>
                    </div>
                    </div>
                    <div className="cardprice3">
                    <div className="pricedetail3">
                            <h6>Cricket Square Men's Shoes</h6>
                            </div>
                            <div className="price3">
                             <p>₹2,499</p>
                             </div>
                    </div>
                    </div>

                    <div className="spotlightCard4">
                    <div className="shoescard4">
                    <div className="redcard2" >
                    <p>-55%</p>
                    </div>
                    </div>
                    <div className="cardprice4">
                    <div className="pricedetail4">
                            <h6>Hybrid NX Men's Running Shoes</h6>
                            </div>
                            <div className="price4">
                             <p>₹3,369</p>
                             </div>
                    </div>
                    </div>
                    </div>
                </div>


                <div className="divatlastic">
                  <div className="seasonatlastic">
                    <div className="seasonatlastic1" >
                        <h1>PUMA x ATHLETICS</h1>
                    </div>
                    <div className="seasonatlastic2">
                        <p>FEDERATION OF INDIA</p>
                    </div>
                    <div className="seasonatlastic3">
                        <p>
                   A NEW ERA OF SPEED, STRENGTH & SPIRIT
                        </p>
                    </div>
                    <div className="seasonatlastic4">
                        <p>LEARN MORE </p>
                        
                    </div>
                  </div>
                </div>


                <div className="secondlastdiv">
                  <h2>AS WORN BY PUMA FAM</h2>
                  <p>Click to shop & mention us on instagram @pumaindia to be featured</p>
                </div>


                <div  className="divsfam">
                    <div className="famimg">
                    </div>

                    <div className="famimg1">
                    </div>

                    <div className="famimg2">
                    </div>

                    <div className="famimg3">
                    </div>

                    <div className="famimg4">
                     </div>

                       <div className="famimg5">
                    </div>

                    <div className="famimg6">
                    </div>

                    <div className="famimg7">
                    </div>

                    <div className="famimg8">
                    </div>

                    <div className="famimg9">
                    </div>

                    <div className="famimg10">
                    </div>

                    <div className="famimg11">
                    </div>
                </div>

                <div className="divspotlight">
                    <div className="divspotlight11">
                        <h2>RECOMMENDED FOR YOU</h2>
                    </div>
                    
                    <div  className="divspotlight12">
                    <div  className="spotlightCard11">
                        <div className="shoescard11">
                        </div>
                        <div className="cardprice11">
                            <div className="pricedetail11">
                            <h6>PUMA Court Shatter Low Men's Sneakers</h6>
                            </div>
                            <div className="price11">
                             <p>₹2,819</p>
                             </div>
                        </div>
                    </div>

                    <div className="spotlightCard12">
                    <div className="shoescard12">
                    <div className="redcard12" >
                    <p>-40%</p>
                    </div>
                    </div>
                    <div className="cardprice12">
                    <div className="pricedetail12">
                            <h6>Rider Future Vintage Unisex Sneakers</h6>
                            </div>
                            <div className="price12">
                             <p>₹5,399</p>
                             </div>
                    </div>
                    </div>

                    <div className="spotlightCard13">
                    <div className="shoescard13">
                    <div className="redcard12" >
                    <p>-50%</p>
                    </div>
                    </div>
                    <div className="cardprice13">
                    <div className="pricedetail13">
                            <h6>Cricket Square Men's Shoes</h6>
                            </div>
                            <div className="price13">
                             <p>₹2,499</p>
                             </div>
                    </div>
                    </div>

                    <div className="spotlightCard14">
                    <div className="shoescard14">
                    <div className="redcard12" >
                    <p>-10%</p>
                    </div>
                    </div>
                    <div className="cardprice14">
                    <div className="pricedetail14">
                            <h6>Hybrid NX Men's Running Shoes</h6>
                            </div>
                            <div className="price14">
                             <p>₹3,369</p>
                             </div>
                    </div>
                    </div>
                    </div>
                </div>


        
                <div className="lastdiv">    
            </div>
              

    </div>
        </div>
    );
}
export default PumaHome;