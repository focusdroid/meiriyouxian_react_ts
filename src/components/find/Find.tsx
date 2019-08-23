import * as React from 'react'

export interface IProps{
    name:string;
}

function Find({name = '无状态组件的属性默认值'}:IProps){
    return (
        <div>无状态组件的例子---->{name}</div>
    );
}

export default Find;