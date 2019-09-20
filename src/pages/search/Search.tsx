import * as React from 'react'

// import OrdiNavBar from '../navBar/ordinNavBar/OrdiNavBar'
import SearchNavBar from '../navBar/searchNavBar/SearchNavBar' // 搜索页面的搜索栏
import SearchResult from '../searchResult/SearchResult'

export default class Search extends React.Component<any, any>{
    constructor(props: any) {
        super(props);
        this.state = {
            name: 'focusdroid', // 测试属性传递
            historyList: [{
                title: '历史搜索',
                list: [{
                    id: 1,
                    data: '大闸蟹'
                },{
                    id: 2,
                    data: '水果'
                },{
                    id: 3,
                    data: '红柚'
                }]
            }, {
                title: '历史搜索22',
                list: [{
                    id: 1,
                    data: '柚子',
                    active: 'active'
                    },
                    {
                        id: 2,
                        data: '番茄',
                        active: 'active'
                    },
                    {
                        id: 3,
                        data: '牛奶',
                        active: 'active'
                    },
                    {
                        id: 4,
                        data: '小龙虾'
                    },
                    {
                        id: 5,
                        data: '鸡蛋'
                    },
                    {
                        id: 6,
                        data: '酸奶'
                    },
                    {
                        id: 7,
                        data: '啤酒'
                    },{
                        id: 8,
                        data: '啤酒'
                    },{
                        id: 9,
                        data: '啤酒'
                    },{
                        id: 10,
                        data: '啤酒'
                    },{
                        id: 11,
                        data: '啤酒'
                    }]
            }]
        }
    }
    public render(){
        return (<div>
            {/*<OrdiNavBar/>*/}
            <SearchNavBar name={this.state.name}/>
            <SearchResult
                historyList={...this.state.historyList}
            />
        </div>);
    }
    public componentDidMount () {
        // console.log(this.props)
    }
}
