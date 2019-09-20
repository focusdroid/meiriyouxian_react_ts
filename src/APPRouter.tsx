import * as React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import App from './App'

import Admin from './Admin'
import Test from './components/Test/Test' // 这个一个测试的路由组件
import './static/icon/iconfont.css'
/*首页底部导航的页面start */
import Index from './components/index/Index'
import Classification from './components/classification/Classification';
import Find from './components/find/Find'
import ShopCar from './components/shopcar/ShopCar';
import Me from './components/me/Me'
/*首页底部导航的页面end */
import Search from './pages/search/Search'

export default class APPRouter extends React.Component{
    public render(){
        return(<Router>
            <App>
                <Switch>
                    <Route path='/test' component={Test}/>
                    <Route path='/searchs' component={Search}/>
                    <Route render={() =>(
                        <Admin>
                            <Route path='/' exact={true} component={Index}/>
                            <Route path='/classification' component={Classification}/>
                            <Route path='/find' component={Find}/>
                            <Route path='/shopcar' component={ShopCar}/>
                            <Route path='/me' component={Me}/>
                        </Admin>
                    )}/>
                </Switch>
            </App>
            </Router>
        )
    }
}
