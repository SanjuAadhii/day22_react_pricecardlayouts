 import "./App.css"

function Card(props){

    return (
    <div className='box'>
        <h6 style={{color:"gray"}}>{props.priceObj.plan}</h6>
        <h1><b>${props.priceObj.price}/month</b></h1>
        <ul>
            {
                props.priceObj.list.map((items,index)=>(
                    <li key={index}>{items}</li>
                ))
            }
            
        </ul>
        <button style={{backgroundColor:"lightskyblue",borderRadius:"10px",width:"80%"}}>Button</button>
         
    </div>
    )

}

export default Card