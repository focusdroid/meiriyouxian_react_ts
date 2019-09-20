import * as React from 'react';
import {withRouter} from 'react-router-dom';
import './searchResult.scss'

interface IState {
    historyList?: any[]
}


class SearchResult extends React.Component<any, IState>{
    public render(){
        return (<div className='search-result'>
            {/*搜索结果回来之前的显示内容start*/}
            <div className='beforeSearchData'>
                {/*历史搜索start*/}
                <div className='historySearch'>
                    {this.props.historyList.map((item: any, i:number) => {
                        return (<div key={i}>
                            <div className='data-title'>{item.title}</div>
                            <ul className='data-ul'>
                                {item.list.map((item: any) => {
                                    return (<li
                                        key={item.id}
                                        className={item.active}
                                        onClick={() => {this.setSearch(item.data)}}
                                    >
                                        {item.data}
                                    </li>)
                                })}
                            </ul>
                        </div>)
                    })}
                </div>
                {/*历史搜索end*/}
                {/*热门搜索start*/}
                <div className='hotSearch'>

                </div>
                {/*热门搜索end*/}
            </div>
            {/*搜索结果回来之前的显示内容end*/}
            {/*    搜索结果start*/}
            <div className='afterSearchData'>

            </div>
            {/*    搜索结果end*/}
        </div>);
    }
    public setSearch = (data:string) => {
        console.log(data)
    }
}


export default withRouter(SearchResult)
