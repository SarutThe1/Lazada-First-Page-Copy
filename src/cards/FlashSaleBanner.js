import React from 'react'

const FlashSaleCard = () => {
  return (
    <>
    
    <div style={{backgroundColor:'white',width:'60%',display:'flex',flexDirection:'row'}}>
        <p style={{color:'red',paddingTop:'15px',textAlign:'left', paddingLeft:'20px'}}>On Sale Now</p>

        <p style={{paddingTop:'15px',paddingLeft:'60px'}}>Ending in </p>

        <div style={{paddingTop:'10px',paddingLeft:'20px'}}>
            <button style={{color:'white',backgroundColor:'red',border:'none',height:'35px',width:'40px'}}>02</button>
        </div>

        <p style={{paddingTop:'15px',paddingLeft:'10px'}}>:</p>

        <div style={{paddingTop:'10px',paddingLeft:'10px'}}>
            <button style={{color:'white',backgroundColor:'red',border:'none',height:'35px',width:'40px'}}>33</button>
        </div>

        <p style={{paddingTop:'15px',paddingLeft:'10px'}}>:</p>

        <div style={{paddingTop:'10px',paddingLeft:'10px'}}>
            <button style={{color:'white',backgroundColor:'red',border:'none',height:'35px',width:'40px'}}>14</button>
        </div>
        


        <span style={{position:'absolute',right:'23%',paddingTop:'13px'}}>
            <button style={{color:'#f47424',backgroundColor:'white',borderColor:'#f47424',height:'40px',width:'120%',fontSize:'15px'}}>SHOP ALL PRODUCTS</button>
        </span>
        
    </div>
    
    </>
  )
}

export default FlashSaleCard