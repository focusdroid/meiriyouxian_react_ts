import * as React from 'react'
import Header from '../../pages/index/indexHeader/Header'

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
                <Header/>
                首页
            </div>
        );
    }
}