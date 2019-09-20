import * as React from 'react'

// import OrdiNavBar from '../navBar/ordinNavBar/OrdiNavBar'
import SearchNavBar from '../navBar/searchNavBar/SearchNavBar'

export default class Search extends React.Component{
    public render(){
        return (<div>
            {/*<OrdiNavBar/>*/}
            <SearchNavBar />
            <h1>这是搜索页面</h1>
            <span className="iconfont icon-sousuo5"></span>
        </div>);
    }
    public componentDidMount () {
        console.log(this.props)
    }
}
