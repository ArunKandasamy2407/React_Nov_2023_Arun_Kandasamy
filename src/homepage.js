import React from 'react'
import Button from '@mui/material/Button';
import NavScrollExample from './components/navbar'
import './homepage.css'
import UncontrolledExample from './components/carousel';
export default function Homepage() {
  return (
    <div>
      <NavScrollExample/>
      <UncontrolledExample />
      <div style={{marginTop:'20px',display:'flex',flexDirection:'row',flexFlow:'row wrap',justifyContent:'space-evenly'}}>
            <div><a href='#'> <img style={{width:'220px',height:'270px'}} src='https://www.netmeds.com/images/category/prod/thumb/face_wash_cleansers.png'/></a></div>
            <div><a href='#'> <img style={{width:'220px',height:'270px'}} src='https://www.netmeds.com/images/category/prod/thumb/pain_relief_application.png'/></a></div>
            <div><a href='#'> <img style={{width:'220px',height:'270px'}} src='https://www.netmeds.com/images/category/prod/thumb/family_nutrition.png'/></a></div>
            <div><a href='#'> <img style={{width:'220px',height:'270px'}} src='https://www.netmeds.com/images/category/v1/3971/thumb/petfood_3.png'/></a></div>
      </div>
      <h2>Shop By Category</h2>
      <div className='brandswefocus'>
                <div style={{borderRadius:'10px',margin:'10px',height:'350',width:'230px'}}>
                        <div className='cardimg' style={{height:'150px',width:'200px'}}>
                        <img style={{marginLeft:'10px',width:'150px',height:'150px'}} src='https://cdn01.pharmeasy.in/dam/discovery/categoryImages/ce48d6d71ace3892945f0b0a64c1f0e9.png?f=png?dim=360x0'/>
                        </div>
                        <div className='price'>
                          <b>Skin Care</b>
                          </div>                          
                </div>
                <div style={{borderRadius:'10px',margin:'10px',height:'350',width:'230px'}}>
                        <div className='cardimg' style={{height:'150px',width:'200px'}}>
                        <img style={{marginLeft:'10px',width:'200px',height:'150px'}} src='https://cdn01.pharmeasy.in/dam/discovery/categoryImages/fb48ce63ed45318b92689d84482d1111.jpg?f=jpg?dim=360x0'/>
                        </div>
                        <div className='price'>
                          <b>Mother and Baby care</b>
                          
                          </div>                          
                </div>
                <div style={{borderRadius:'10px',margin:'10px',height:'350',width:'230px'}}>
                        <div className='cardimg' style={{height:'150px',width:'200px'}}>
                        <img style={{marginLeft:'10px',width:'200px',height:'150px'}} src='https://cdn01.pharmeasy.in/dam/discovery/categoryImages/105ceca515ee30509f93309ae75306aa.png?f=png?dim=360x0'/>
                        </div>
                        <div className='price'>
                        <b>Diabetic care</b>
                          
                          </div>                          
                </div>
                <div style={{borderRadius:'10px',margin:'10px',height:'350',width:'230px'}}>
                        <div className='cardimg' style={{height:'150px',width:'200px'}}>
                        <img style={{marginLeft:'10px',width:'200px',height:'150px'}} src='https://cdn01.pharmeasy.in/dam/discovery/categoryImages/35d6d4e00e5d3058906cfa8b92ca799c.png?f=png?dim=360x0'/>
                        </div>
                        <div className='price'>
                        <b>Health condition</b>
                          
                          </div>                          
                </div>
      </div>

      <div className='Pcard'>
                <div className='pc' style={{boxShadow:'1px 1px 5px ',borderRadius:'10px',margin:'10px',height:'300',width:'230px'}}>
                        <div className='cardimg' style={{height:'200px',width:'200px'}}>
                        <img style={{marginTop:'5px',marginLeft:'5px',width:'220px'}} src='https://cms-contents.pharmeasy.in/carousel_item/215726c495b-Healthkart.jpg?dim=1440x0'/>
                        </div>
                        <div className='price'>
                          <ul style={{listStyleType:'none'}} >
                            <li><b> Hk Vitagen skin </b></li>
                            <li>Powder - Vanilla Flavour 1</li>
                            <li>Best price*<span style={{color:'red'}}> Rs. 1,950.40</span></li>
                            <Button style={{marginLeft:'-20px',marginTop:'25px',width:"150px"}} variant="contained">Add to Cart</Button>
                          </ul>
                          </div>                            
                  </div>
                <div className='pc' style={{boxShadow:'1px 1px 5px ',borderRadius:'10px',margin:'10px',height:'350',width:'230px'}}>
                        <div className='cardimg' style={{height:'200px',width:'200px'}}>
                        <img style={{marginTop:'5px',marginLeft:'10px',width:'200px'}} src='https://cms-contents.pharmeasy.in/carousel_item/0782f72ce2e-ZingaVita.png?dim=1440x0'/>
                        </div>
                        <div className='price'>
                          <ul style={{listStyleType:'none'}} >
                            <li><b>Volini spray 100gm </b></li>
                            <li>Powder - Vanilla Flavour 1</li>
                            <li>Best price*<span style={{color:'red'}}> Rs. 281.60</span></li>
                            <Button style={{marginLeft:'-20px',marginTop:'25px',width:"150px"}} variant="contained">Add to Cart</Button>
                          </ul>
                          </div>                            
                  </div>
                <div className='pc' style={{boxShadow:'1px 1px 5px ',borderRadius:'10px',margin:'10px',height:'350',width:'230px'}}>
                        <div className='cardimg' style={{height:'200px',width:'200px'}}>
                        <img style={{marginTop:'5px',marginLeft:'10px',width:'200px'}} src='https://cms-contents.pharmeasy.in/carousel_item/2f3e832e341-Everherb-min.png?dim=1440x0'/>
                        </div>
                        <div className='price'>
                          <ul style={{listStyleType:'none'}} >
                            <li><b>Ensure Diabetes Care</b></li>
                            <li>Powder - Vanilla Flavour 1</li>
                            <li>Best price*<span style={{color:'red'}}> Rs. 400.00</span></li>
                            <Button style={{marginLeft:'-20px',marginTop:'25px',width:"150px"}} variant="contained">Add to Cart</Button>
                          </ul>
                          </div>                            
                  </div>
                <div className='pc' style={{boxShadow:'1px 1px 5px ',borderRadius:'10px',margin:'10px',height:'350',width:'230px'}}>
                        <div className='cardimg' style={{height:'200px',width:'200px'}}>
                        <img style={{marginTop:'5px',marginLeft:'10px',width:'200px'}} src='https://cms-contents.pharmeasy.in/carousel_item/98de77fb574-Groviva.jpg?dim=1440x0'/>
                        </div>
                        <div className='price'>
                          <ul style={{listStyleType:'none'}} >
                            <li><b>Ensure Diabetes Care</b></li>
                            <li>Powder - Vanilla Flavour 1</li>
                            <li>Best price*<span style={{color:'red'}}> Rs. 700.40</span></li>
                            <Button style={{marginLeft:'-20px',marginTop:'25px',width:"150px"}} variant="contained">Add to Cart</Button>
                          </ul>
                          </div>                            
                  </div>
      </div>

      <div style={{width:'100%',height:'200px'}}>


      </div>

    <div className='foot'>
    <div className='mainfoter'>

      <div>
        <ul>
          <li><b>COMPANY</b></li>
          <li>About Netmeds</li>
          <li>Customers Speak</li>
          <li>In the News</li>
          <li>Terms and Conditions</li>
          <li>Privacy Policy</li>
          <li>Contact</li>
        </ul>
      </div>
      <div>
      <ul>
          <li><b>SHOPPING</b></li>
          <li>Browse by Manufacturers</li>
          <li>Health Articles</li>
          <li>Offers / Coupons</li>
          <li>FAQs</li>
         
        </ul>
      </div>
      <div>
      <ul>
          <li><b>BUSINESS</b></li>
          <li>Franchise</li>
        </ul>
      </div>
      <div>
      <ul>
          <li><b>CATEGORIES</b></li>
          <li>Ayush</li>
          <li>Devices</li>
          <li>Family Care</li>
          <li>Fitness</li>
          <li>Lifestyle</li>
          <li>Personal care</li>
        </ul>
      </div>
      <div>
      <ul>
          <li><b>SOCIAL</b></li>
          <li>Patients Alike</li>
          <li>Facebook</li>
          <li>Twitter</li>
          <li>LinkedIn</li>
          <li>Youtube</li>
          <li>Refer & Earn</li>
        </ul>
      </div>

    </div>
    <b style={{marginLeft:'-1030px',padding:'20px'}}>Our payment Partners</b>
    <div style={{marginLeft:'30px',display:'flex',flexDirection:'row',flexFlow:'row wrap',gap:'40px'}}>
          <div><img style={{width:'60px'}} src='https://assets.pharmeasy.in/apothecary/images/gpay.png?dim=1440x0'></img></div>
          <div><img  style={{width:'60px'}} src='https://assets.pharmeasy.in/apothecary/images/paytm.png?dim=1440x0'></img></div>
          <div><img  style={{width:'40px'}} src='https://assets.pharmeasy.in/apothecary/images/mastercard.png?dim=1440x0'></img></div>
          <div><img  style={{width:'60px'}} src='https://assets.pharmeasy.in/apothecary/images/rupay.png?dim=1440x0'></img></div>
          <div><img  style={{width:'40px'}} src='https://assets.pharmeasy.in/apothecary/images/olamoney.png?dim=1440x0'></img></div>
          <div><img  style={{width:'40px'}} src='https://assets.pharmeasy.in/apothecary/images/visa.png?dim=1440x0'></img></div>
          
    </div>
</div>
    </div>
  )
}
