import * as React from 'react'

interface IProps{
    name:string;
    age: number;
}


function ShopCar ({name = '属性默认值'}:IProps){
    return(<div>
            购物车--->{name}
        </div>)
}

export default ShopCar;