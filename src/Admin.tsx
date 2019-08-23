import * as React from 'react'
import FooterBar from './components/footerBar/FooterBar';

export default class Admin extends React.Component{
    public render(){
        return(
            <div>
                { this.props.children }
                <FooterBar/>
            </div>
        )
    }
}
