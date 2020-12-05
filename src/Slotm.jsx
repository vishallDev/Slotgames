import React from 'react';

const Slotm =(props)=>{
let{x, y, z}=props

if ((x===y) && (y===z)){
return(
    <>
    <div className="container text-center ">
{x} {y} {z}
<hr className="w-25 mx-auto my-2"/>
<h3>This Is Matching</h3>
    </div>
    </>
)
}else{
    return(
        <>
        <div className="container text-center ">
    {x} {y} {z}
    <hr className="w-25 mx-auto my-2"/>
    <h3>This Is Not Matching</h3>
        </div>
        </>
    )
}



}


const Slots =()=>{
    return(<>
        <Slotm x='😋' y='😋' z='😋' />
        <hr className="my-1"/>
        <Slotm x='😜' y='😍' z='😍' />
        <hr  className="my-1"/>
        <Slotm x='🥱' y='🤣' z='😋' />
        <hr  className="my-1"/>
        <Slotm x='🍕' y='🍕' z='🍕' />
        <hr  className="my-1"/>
        </>
    )
}



export default Slots;