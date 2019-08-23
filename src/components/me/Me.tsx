import * as React from 'react'


interface IProps{
    name: string;
}
function Me ({name = '属性值'}:IProps){
    return  (<div>
            我的
        </div>);
}

export default Me;