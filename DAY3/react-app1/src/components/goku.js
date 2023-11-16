import {useState} from 'react'
export function StateProps()
{
    let [name,setName]=useState("Super Saiyan");
    let [count,setCount]=useState(1);
    let [img,setImage]=useState("https://media.tenor.com/bWkE0Y8JaBgAAAAC/dragon-ball-super-saiyan.gif")
    return(
        <>
            <h1>Current mode : {name}</h1>
            <img src={img}  alt='goku'/><br/>
            <button style={{Padding:"50%"}}onClick={()=>{
                if(count===4)
                {
                    setName((name==="Super Saiyan")?"Kaioken":"Super Saiyan");
                    setImage((name==="Super Saiyan")?"https://media.tenor.com/D8pXKkRdTWwAAAAC/super-saiyan-goku.gif":"https://media.tenor.com/bWkE0Y8JaBgAAAAC/dragon-ball-super-saiyan.gif")
                    setCount(1);
                }
                else{
                    setCount(++count);
                }

            }}>Transform</button>
        </>
    )
}