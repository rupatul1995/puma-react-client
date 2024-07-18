import { useState } from "react";
import "./style/singleproduct.css";


function SingleProduct(){
    const [singleproduct ,setSingleProduct] = useState([{youmayimg:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/680000/01/mod01/fnd/IND/fmt/png/LOVE-WINS-Men's-T-shirt", title:"PUMA x Palm Tree Crew Men's Graphic T-shirt", color:"1 COLOR", price_1:"₹1,999"},
        {youmayimg:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/680000/01/mod02/fnd/IND/fmt/png/LOVE-WINS-Men's-T-shirt", title:"SEASONS Men's Short Sleeve Trail Running T-shirt, Turquoise Surf, extralarge-IND", price_1:"₹999",  color:"2 COLORS"},
        {youmayimg:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/680000/01/mod03/fnd/IND/fmt/png/LOVE-WINS-Men's-T-shirt", title:"PUMA x Palm Tree Crew Men's Graphic T-shirt", price_1:"₹1,399", color:"1 COLOR"},
        {youmayimg:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/680000/01/fnd/IND/fmt/png/LOVE-WINS-Men's-T-shirt", title:"PUMA x Palm Tree Crew Men's Graphic T-shirt", price_1:"₹1,199",  color:"2 COLORs"},
        {youmayimg:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/680000/01/bv/fnd/IND/fmt/png/LOVE-WINS-Men's-T-shirt", title:"PUMA x Palm Tree Crew Men's Graphic T-shirt", price_1:"₹1,199",  color:"2 COLORs"},
   
    ]);


return (
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

     <div  className="pumasingleproudcttext">
        <p>HOME</p>
        <p>PUMA PROWL FEST</p>
        <p>T-SHIRTS UNDER ₹2,499</p>
        <p>LOVE WINS MENS T-SHIRT</p>
     </div>


<div  className="pumasingleproudctmaindiv">
<div className="pumasingleproudctimg" >
   
       {singleproduct.map((single) =>(
        
        <div className="pumasingleproudctimg1">
          
            <img src={single.youmayimg}/>

        </div>
       ))};
</div>


<div className="pumasingleproudctprice">
    <div className="pumasingleproudctprice1">
        <p>LOVE WINS Men's T-shirt</p>
    </div>
    <div className="pumasingleproudctprice2">
        <p>₹1,309</p>
    </div>

    <div className="pumasingleproudctprice3">
        <p><s>₹2,299</s></p>
    </div>
    
    <div className="pumasingleproudctprice4">
        <p>Prices include GST</p>
    </div>

    <div className="pumasingleproudctprice5">
        <p>Color</p>
    </div>

    <div className="pumasingleproudctprice6">
        <p>PUMA Black</p>
    </div>

    <div className="pumasingleproudctprice7">
    <div className="pumasingleproudctprice8">
        <p></p>
        <p></p>
        <p></p>
        </div>
    </div>

    <div className="pumasingleproudctprice9">
        <p>Size</p>
    </div>

    <div className="pumasingleproudctprice10">
        <p>MODEL IS 6'2", SIZE M UK</p>
    </div>

    <div className="pumasingleproudctprice11">
        <p>S</p>
    </div>

    <div className="pumasingleproudctprice12">
        <p>FIND MY SIZE</p>
    </div>

    <div className="pumasingleproudctprice13">
        <p><u>SIZE GUIDE</u></p>
    </div>

    <div className="pumasingleproudctprice14">
        <div  className="pumasingleproudctaddtocard">
            <p>1</p> 
            <i class="fa-solid fa-angle-down"></i>
            </div>
        <div  className="pumasingleproudctaddtocard1">
            <h5>ADD TO CARD</h5>
        </div>
    </div>


    <div  className="pumasingleproudctcardtowish">
             <i class="fa-regular fa-heart"></i>
            <h5>CARD TO WISHLIST</h5>
        </div>


        <div className="pumasingleproudctprice15">
        <p>Fee returns on all qualifying orders.</p>
    </div>

    
    <div className="pumasingleproudctprice16">
        <p>Please enter PIN code to check delivery time</p>
    </div>


    <div className="pumasingleproudctprice17">
        <p>PIN CODE</p>
    </div>


    <div className="pumasingleproudctprice18">
        <div  className="pumasingleproudctpincode">
            <input placeholder="PIN code"/>
            </div>

        <div   className="pumasingleproudctpincode1">
            <h5>CHECK</h5>
        </div>
    </div>

<div className="pumasingleproudctprice19">
        <p>Description</p>
    </div>



    <div className="pumasingleproudctprice20">
        <p>We've taken our essential styles and levelled them up with our ESS+ collection.
             For this tee, we want to remind you that love always wins</p>
    </div>


    <div className="pumasingleproudctprice21">
        <p><ul>
            <li>Style: 680000_01</li>
            <li>Color: PUMA Black</li>
            </ul></p>
    </div>

    <div className="pumasingleproudctprice22">
        <p><u>READ MORE</u></p>
    </div>

    <div className="pumasingleproudctprice23">
        <p>Shipping and Returns</p>
    </div>

    <div className="pumasingleproudctprice24">
        <p>Free return for all qualifying orders within <b>14 days of your order delivery date.</b>
             Visit our Return Policy for more information.
          </p>
    </div>

    <div className="pumasingleproudctprice25">
        <p>For any queries, please contact Customer Service at 080-35353535 or via customercareindia@puma.com .
          </p>
    </div>
</div>
</div>



<div className="singleproductstory">
   
<div className="singleproductstory1">
        <p>PRODUCT STORY</p>
    </div>

    <div className="singleproductstory2">
        <p>We've taken our essential styles and levelled them up with our ESS+ collection. For this tee, we want to remind you that love always wins and decked it out with some romantic PUMA insignia and colours, 
            in addition to the standard athletic fit that keeps your look both casual and sporty.
          </p>
    </div>

<div className="singleproductstory3">
   <div className="singleproductstory4">
    <h5>DETAILS</h5>
    <ul>
            <li>Regular fit</li>
            <li>160 gsm, Jersey</li>
            <li>Crew Neck</li>
            <li>Short sleeves</li>
            <li>Regular Length</li>
            </ul>
   </div>
    <div className="singleproductstory5">
    <h5>Material Information</h5>
    <ul>
            <li>Shell: 100% cotton</li>
            <li>Rib: 80% cotton, 20% polyester</li>
            
            </ul>
    </div>
</div>



<div className="singleproductstory6">
   <div className="singleproductstory7">
    <h5>Care Instructions</h5>
    <ul>
            <li>Do not iron print</li>
            <li>Use detergent for colours</li>
            <li>Do not iron accessories/trims</li>
            <li>Wash and iron inside out</li>
            <li>Exclusive of Decoration</li>
            <li>Wash with similar colours</li>
            <li>Do not dry clean</li>
            </ul>
   </div>
    <div className="singleproductstory8">
    <h5>Manufacturer's Address</h5>
    <ul>
            <li>SQUARE FASHIONS</li>
            <li>LIMITED (UNIT 2)</li>
            <li>TBDSJ</li>
            <li>Dhaka</li>
            <li>Chandona,Bashon Union,</li>
            <li>Wash with similar colours</li>
            <li>Joydevpu</li>
            <li>J1702 Gazipur</li>
            
            </ul>
    </div>
</div>

<div className="singleproductstory9">
        <p>Country Of Origin</p>
    </div>

    <div className="singleproductstory10">
        <p>Bangladesh</p>
    </div>

</div>


<div className="singleproductstory11">
<p>YOU MAY ALSO LIKE</p>
</div>
<div  className="divspotlight211">
                    <div  className="spotlightCard111">
                        <div className="shoescard111">
                        <div className="redcard211" >
                        <p>-53%</p>
                         </div>
                        </div>
                        <div className="cardprice111">
                            <div className="pricedetail111">
                            <h6>PUMA Court Shatter Low Men's Sneakers</h6>
                            </div>
                            <div className="price111">
                             <p>₹2,819</p>
                             </div>
                        </div>
                    </div>

                    <div className="spotlightCard211">
                    <div className="shoescard211">
                    <div className="redcard211" >
                    <p>-40%</p>
                    </div>
                    </div>
                    <div className="cardprice211">
                    <div className="pricedetail211">
                            <h6>Rider Future Vintage Unisex Sneakers</h6>
                            </div>
                            <div className="price211">
                             <p>₹5,399</p>
                             </div>
                    </div>
                    </div>

                    <div className="spotlightCard311">
                    <div className="shoescard311">
                    <div className="redcard211" >
                    <p>-50%</p>
                    </div>
                    </div>
                    <div className="cardprice311">
                    <div className="pricedetail311">
                            <h6>Cricket Square Men's Shoes</h6>
                            </div>
                            <div className="price311">
                             <p>₹2,499</p>
                             </div>
                    </div>
                    </div>

                    <div className="spotlightCard411">
                    <div className="shoescard411">
                    <div className="redcard211" >
                    <p>-55%</p>
                    </div>
                    </div>
                    <div className="cardprice411">
                    <div className="pricedetail411">
                            <h6>Hybrid NX Men's Running Shoes</h6>
                            </div>
                            <div className="price411">
                             <p>₹3,369</p>
                             </div>
                    </div>
                    </div>
                    </div>
                



                    <div className="lastdiv">    
            </div>
              


    


     </div>
);
}
export default SingleProduct;