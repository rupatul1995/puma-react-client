import { useState } from "react";
import "./style/menstshirt.css";
function MensTshirt() {
    const [productimg ,setProductimg] = useState([{youmayimg:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_300,h_300/global/524901/22/mod01/fnd/IND/fmt/png/SEASONS-Men's-Short-Sleeve-Trail-Running-T-shirt", title:"PUMA x Palm Tree Crew Men's Graphic T-shirt", color:"1 COLOR", price_1:"₹1,999"},
        {youmayimg:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_300,h_300/global/680000/01/mod01/fnd/IND/fmt/png/LOVE-WINS-Men's-T-shirt", title:"SEASONS Men's Short Sleeve Trail Running T-shirt, Turquoise Surf, extralarge-IND", price_1:"₹999",  color:"2 COLORS"},
        {youmayimg:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_300,h_300/global/624726/22/mod01/fnd/IND/fmt/png/PUMA-x-Palm-Tree-Crew-Men's-Graphic-T-shirt", title:"PUMA x Palm Tree Crew Men's Graphic T-shirt", price_1:"₹1,399", color:"1 COLOR"},
        {youmayimg:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_300,h_300/global/680000/36/mod01/fnd/IND/fmt/png/LOVE-WINS-Men's-T-shirt", title:"PUMA x Palm Tree Crew Men's Graphic T-shirt", price_1:"₹1,199",  color:"2 COLORs"},

        {youmayimg:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_300,h_300/global/624726/87/mod01/fnd/IND/fmt/png/PUMA-x-Palm-Tree-Crew-Men's-Graphic-T-shirt", title:"PUMA x Palm Tree Crew Men's Graphic T-shirt", color:"1 COLOR", price_1:"₹2,099"},
        {youmayimg:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_300,h_300/global/680817/49/mod01/fnd/IND/fmt/png/Men's-Slim-Fit-Polo-T-shirt", title:"Men's Slim Fit Polo T-shirt", price_1:"₹959",  color:"9 COLORS"},
        {youmayimg:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_300,h_300/global/680817/64/mod01/fnd/IND/fmt/png/Men's-Slim-Fit-Polo-T-shirt", title:"PUMA POWER Men's T-shirt", price_1:"₹1,399",  color:"1 COLOR"},
        {youmayimg:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_300,h_300/global/680817/43/mod01/fnd/IND/fmt/png/Men's-Slim-Fit-Polo-T-shirt", title:"PUMA x Palm Tree Crew Men's Graphic T-shirt", price_1:"₹1,199",  color:"2 COLORS"},

        {youmayimg:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_300,h_300/global/680817/06/mod01/fnd/IND/fmt/png/Men's-Slim-Fit-Polo-T-shirt", title:"PUMA x Palm Tree Crew Men's Graphic T-shirt", color:"2 COLOR", price_1:"₹1,099"},
        {youmayimg:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_300,h_300/global/680817/40/mod01/fnd/IND/fmt/png/Men's-Slim-Fit-Polo-T-shirt", title:"Men's Slim Fit Polo T-shirt", price_1:"₹2,059",  color:"4 COLORS"},
        {youmayimg:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_300,h_300/global/678938/01/mod01/fnd/IND/fmt/png/PUMA-POWER-Men's-T-shirt", title:"PUMA POWER Men's T-shirt", price_1:"₹1,999",  color:"1 COLOR"},
        {youmayimg:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_300,h_300/global/678938/46/fnd/IND/fmt/png/PUMA-POWER-Men's-T-shirt", title:"PUMA x Palm Tree Crew Men's Graphic T-shirt", price_1:"₹2,299",  color:"2 COLORS"},


        {youmayimg:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_300,h_300/global/626547/47/mod01/fnd/IND/fmt/png/GRAPHICS-%22Autobahn%22-Men's-Relaxed-Fit-Tee", title:"GRAPHICS Autobahn Men's Relaxed Fit Tee", color:"5 COLOR", price_1:"₹3,499"},
        {youmayimg:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_300,h_300/global/628186/43/mod01/fnd/IND/fmt/png/GRAPHICS-%22Back-up-Team%22-Men's-Relaxed-Fit-Tee", title:"Men's Slim Fit Polo T-shirt", price_1:"₹2,059",  color:"2 COLORS"},
        {youmayimg:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_300,h_300/global/628185/01/mod01/fnd/IND/fmt/png/GRAPHICS-%22Football-Expert%22-Men's-Relaxed-Fit-Tee", title:"PUMA POWER Men's T-shirt", price_1:"₹2,499",  color:"1 COLOR"},
        {youmayimg:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_300,h_300/global/628185/04/mod01/fnd/IND/fmt/png/GRAPHICS-%22Football-Expert%22-Men's-Relaxed-Fit-Tee", title:"PUMA x Palm Tree Crew Men's Graphic T-shirt", price_1:"₹3,299",  color:"2 COLORS"},


        

        {youmayimg:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_300,h_300/global/626547/02/mod03/fnd/IND/fmt/png/GRAPHICS-%22Autobahn%22-Men's-Relaxed-Fit-Tee", title:"GRAPHICS Autobahn Men's Relaxed Fit Tee", color:"2 COLORS", price_1:"₹4,499"},
        {youmayimg:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_300,h_300/global/627443/01/mod01/fnd/IND/fmt/png/PUMA-x-Carrots-Men's-Relaxed-Fit-Graphic-Tee", title:"Men's Slim Fit Polo T-shirt", price_1:"₹2,959",  color:"2 COLORS"},
        {youmayimg:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_300,h_300/global/627444/86/mod01/fnd/IND/fmt/png/PUMA-x-Carrots-Men's-Relaxed-Fit-Jersey", title:"PUMA x Carrots Men's Relaxed Fit Graphic Tee" , price_1:"₹1,499",  color:"1 COLOR"},
        {youmayimg:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_300,h_300/global/627444/45/mod01/fnd/IND/fmt/png/PUMA-x-Carrots-Men's-Relaxed-Fit-Jersey", title:"PUMA x Palm Tree Crew Men's Graphic T-shirt", price_1:"₹1,299",  color:"2 COLORS"},


        {youmayimg:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_300,h_300/global/627443/02/mod01/fnd/IND/fmt/png/PUMA-x-Carrots-Men's-Relaxed-Fit-Graphic-Tee", title:"PUMA x Carrots Men's Relaxed Fit Graphic Tee", color:"8 COLORS", price_1:"₹1,699"},
        {youmayimg:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_300,h_300/global/627443/45/mod01/fnd/IND/fmt/png/PUMA-x-Carrots-Men's-Relaxed-Fit-Graphic-Tee", title:"Men's Slim Fit Polo T-shirt", price_1:"₹2,959",  color:"1 COLOR"},
        {youmayimg:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_300,h_300/global/687224/22/mod01/fnd/IND/fmt/png/PUMA-SQUAD-Big-Graphic-Men's-Tee", title:"PUMA x Carrots Men's Relaxed Fit Graphic Tee" , price_1:"₹1,009",  color:"2 COLORS"},
        {youmayimg:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_300,h_300/global/624097/01/mod01/fnd/IND/fmt/png/PUMA-x-PLEASURES-Men's-Base-Layer", title:"PUMA x Palm Tree Crew Men's Graphic T-shirt", price_1:"₹2,399",  color:"2 COLORS"},


        {youmayimg:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_300,h_300/global/627057/04/bv/fnd/IND/fmt/png/Scuderia-Ferrari-Race-Tonal-Shield-Men's-Motorsport-Tee", title:"PUMA x Carrots Men's Relaxed Fit Graphic Tee", color:"8 COLORS", price_1:"₹1,699"},
        {youmayimg:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_300,h_300/global/687205/01/mod03/fnd/IND/fmt/png/HER-Graphic-Women's-Relaxed-Fit-Tee", title:"BETTER ESSENTIALS Men's Tee", price_1:"₹2,959",  color:"1 COLOR"},
        {youmayimg:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_300,h_300/global/687147/08/fnd/IND/fmt/png/Logo-Men's-Tee", title:"Scuderia Ferrari Race Tonal Shield Men's Motorsport Tee" , price_1:"₹1,009",  color:"2 COLORS"},
        {youmayimg:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_300,h_300/global/627247/02/mod01/fnd/IND/fmt/png/F1%C2%AE-Rugby-Men's-Motorsport-Polo", title:"PUMA x Palm Tree Crew Men's Graphic T-shirt", price_1:"₹2,399",  color:"2 COLORS"},


        
        {youmayimg:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_300,h_300/global/626383/03/mod01/fnd/IND/fmt/png/Porsche-Legacy-Men's-Oversized-Fit-Motorsport-Tee", title:"F1® Rugby Men's Motorsport Polo", color:"8 COLORS", price_1:"₹1,699"},
        {youmayimg:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_300,h_300/global/626767/02/mod02/fnd/IND/fmt/png/PLAY-LOUD-CLASSICS-Graphic-Men's-Relaxed-Fit-Tee", title:"PLAY LOUD CLASSICS Graphic Men's Relaxed Fit Tee", price_1:"₹2,959",  color:"1 COLOR"},
        {youmayimg:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_300,h_300/global/525819/21/mod01/fnd/IND/fmt/png/SEASONS-Men's-Running-Tee", title:"Scuderia Ferrari Race Tonal Shield Men's Motorsport Tee" , price_1:"₹1,009",  color:"2 COLORS"},
        {youmayimg:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_300,h_300/global/689512/99/mod02/fnd/IND/fmt/png/BETTER-ESSENTIALS-Men's-Tee", title:"Crowd Craze Men's Oversized Fit Basketball Tee", price_1:"₹2,399",  color:"2 COLORS"},


        {youmayimg:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_300,h_300/global/525610/18/mod01/fnd/IND/fmt/png/Train-All-Day-Big-Cat-Men's-Training-Tee", title:"Train All Day Big Cat Men's Training Tee", color:"8 COLORS", price_1:"₹2,699"},
        {youmayimg:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_300,h_300/global/627462/02/mod02/fnd/IND/fmt/png/BMW-M-Motorsport-Men's-Polo", title:"BMW M Motorsport Men's Polo", price_1:"₹4,959",  color:"1 COLOR"},
        {youmayimg:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_300,h_300/global/627486/01/mod01/fnd/IND/fmt/png/CLOUDSPUN-Bloom-Camo-Men's-Golf-Polo", title:"Scuderia Ferrari Race Tonal Shield Men's Motorsport Tee" , price_1:"₹1,509",  color:"2 COLORS"},
        {youmayimg:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_300,h_300/global/627291/01/mod01/fnd/IND/fmt/png/BMW-M-Motorsport-Statement-Logo-Men's-Relaxed-Fit-Tee", title:"Crowd Craze Men's Oversized Fit Basketball Tee", price_1:"₹1,399",  color:"2 COLORS"},


        {youmayimg:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_300,h_300/global/626367/02/mod01/fnd/IND/fmt/png/Porsche-Legacy-Statement-Logo-Unisex-Oversized-Fit-Motorsport-Tee", title:"Train All Day Big Cat Men's Training Tee", color:"8 COLORS", price_1:"₹2,699"},
        {youmayimg:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_300,h_300/global/627048/02/mod01/fnd/IND/fmt/png/Scuderia-Ferrari-Race-Men's-Motorsport-Polo", title:"BMW M Motorsport Men's Polo", price_1:"₹4,959",  color:"1 COLOR"},
        {youmayimg:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_300,h_300/global/525719/27/mod02/fnd/IND/fmt/png/CLOUDSPUN-Men's-Training-Tank", title:"Scuderia Ferrari Race Tonal Shield Men's Motorsport Tee" , price_1:"₹1,509",  color:"2 COLORS"},
        {youmayimg:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_300,h_300/global/627319/01/mod01/fnd/IND/fmt/png/Mercedes-AMG-Petronas-F1%C2%AE-MT7+-Men's-Motorsport-Tee", title:"Crowd Craze Men's Oversized Fit Basketball Tee", price_1:"₹1,399",  color:"2 COLORS"},


    ]);

console.log(productimg ,"productimg");


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

        <div className="redirecthome">
            <div  className="redirecthome1" >
               <p>HOME</p>
               <p>Men</p>     
            </div>
        </div>
      
        <div  className="hedingMen" >
          
               <p>Men</p>     
            </div>


            <div className="category100div">
            <div className="category">
                < div  class="categorymaindiv">
            <div  class="category1">
                <i class="fa-solid fa-bars-progress"></i>
          </div>
                  
            <div  class="category2">
                <p>Category</p>
                < i class="fa-solid fa-chevron-down"></i>
          </div>
               
                  
            <div  class="category3">
            <p>Product type</p>
            <i class="fa-solid fa-chevron-down"></i>
          </div>
            
                  
          <div  class="category4">
            <p>Price</p>
          <i class="fa-solid fa-chevron-down"></i>
          </div>
             
                  
            <div  class="category5">
                <p>Gender</p>
            <i class="fa-solid fa-chevron-down"></i>
          </div>
              
                  
            <div  class="category6">
                <p>Size</p>
            <i class="fa-solid fa-chevron-down"></i>
          </div>
                
                  <div  class="category7">
                    <p>Color</p>
                  <i class="fa-solid fa-chevron-down"></i>
                </div>
            
                  
                <div  class="category9">
                    <p>Discound</p>
                <i class="fa-solid fa-chevron-down"></i>
          </div>
               
                  
            <div  class="category10">
                <p>Activity</p>
            <i class="fa-solid fa-chevron-down"></i>
          </div>

                
          <div  class="category11">
                <a>Colabrations & aartnerships</a>
            <i class="fa-solid fa-chevron-down"></i>
          </div>
          </div>
          
          <div  class="category12">
                <p>Short by</p>
            <i class="fa-solid fa-chevron-down"></i>
      
        </div>
            </div>
            </div>

            <div className="productCount">
            
            <p>839 PRODUCTS</p>
            
            {/* <div className="productCountlast">
             <p>839 PRODUCTS</p>
            </div>  */}


            </div>
            
 <div className="productfulldiv">

    {productimg.map((product)=>(
        <div className="tshartproductimg">
        <div >
            
            <img  src ={product.youmayimg}/>
        </div>


        <div className="tshirtcolor">
            <p>{product.color}</p>
        </div>


         <div className="tshartdetails">

            <div className="tshartitle">
        <p>{product.title}</p>
        </div>

        <div className="tsharprice">
        <p>{product.price_1}</p>
        </div>

        </div>

        </div>
    ))}

    <div className="pumatshirtonline">
       <h5>Buy PUMA T-shirts For Men Online</h5>
    </div>

    <div className="pumatshirtonline1" >
        <p>Step up your game and experience the perfect blend of performance, comfort, and style with our PUMA 
            sports t-shirts for men. Embrace the confidence that comes with wearing high-quality activewear and seize 
            the day with unbeatable performance and impeccable style. We understand that freedom of movement is crucial for
             any athlete or active individual. That's why our men's t-shirts are designed with a focus on flexibility and range
              of motion. The fabrics used are lightweight and stretchable, enabling unrestricted movement so you can perform at
               your best. Whether 
            you're stretching, running, or engaging in dynamic movements, our t-shirts provide the flexibility you need to excel.</p>
    </div>

 <div className="pumatshirtonline2">
       <h5>Types Of Trendy Sports Tshirt Available At PUMA</h5>
    </div>

    
 <div className="pumatshirtonline3">
       <h5>Our selection of stylish sports t-shirts for men covers all versions of male sportswear including</h5>
    </div>

<div className="pumatshirtonline4">
<ul>
    <li>Running Sports t-shirts</li>
    <li>Rapid-dry sports t-shirts</li>
    <li>Graphic sports tees</li>
    <li>Graphic sports tees</li>
    <li>Short sleeves men’s slim-fit t-shirts</li>
    <li>Long sleeves men’s t-shirt</li>
    
</ul>
</div>

<div className="pumatshirtonline5">
       <h5>How To Style Men’s Sports T-shirts?</h5>
    </div>

    <div className="pumatshirtonline6">
<ul>
    <li>Blue denim and a pair of sneakers go well with all shapes and colours of trendy or fancy t-shirts for men. 
        Just ensure that the colour of the sneakers compliments the colour of the t-shirt.</li>
    <li>For a casual and unstated look, a pair of classic trousers,
         pair of slip-ons with contrast or a matching t-shirt for men can never go wrong. </li>
    <li>A slim-fit t-shirt under an unbuttoned shirt with a pair of chinos or jeans can easily make heads turn.
         The best time to try this look is in-between the seasons.</li>
    <li>For a cool winter look, a regular fit sports t-shirt for men can be donned under a blazer with complementing shade of
         denim and slip-on shoes.</li>
    <li>EVERFRESH Technology - A quattro-acting eco-friendly technology that maintains hygiene and 
        prevents the growth of any kind of microbes and deodorizes the fabric.</li>
    <li>FORMKNIT SEAMLESS Fit: A fine engineered knit framework to ensure perfect performance fit.</li>
    
</ul>
</div>






    </div>
    
<div className="lastdiv">    
            </div>
  </div>

         

    );
}
export default MensTshirt;
