import * as React from 'react'

interface IProps{
    name:string;
}


function ShopCar ({name = '属性默认值'}:IProps){
    // tslint:disable-next-line: jsx-no-bind
    return(<div>
            购物车--->{name}
        </div>)
}

export default ShopCar;