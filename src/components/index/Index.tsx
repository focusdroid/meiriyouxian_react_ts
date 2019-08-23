import * as React from 'react'

interface IProps{
    name: string;
}
export default class Index extends React.Component<IProps>{
    public constructor(props:IProps){
        super(props)
    }
    public render(){
        return(
            <div>
                首页
            </div>
        );
    }
}