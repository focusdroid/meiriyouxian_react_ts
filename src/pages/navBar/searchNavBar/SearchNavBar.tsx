/*
* 创建时间： 2019-09-19 14:42
* 作者：王旭
* 功能： 针对搜索功能的NavBar
* */
import * as React from 'react';
import './searchNavBar.scss';

interface IProps {
  history?: any
}
interface IState {
  searchValue?: any
}

export default class SearchNavBar extends React.Component<IProps, IState>{
  constructor(props: IProps) {
    super(props)
    this.state = {
      searchValue: ''
    }
  }
  public render() {
    return (<div className='navbar'>
      <div className='navbar-box'>
        <div className='navbar-box-first'>
          <div className='navbar-left'>
            <div className='icon-back'>
              <span onClick={this.goBack} className="back iconfont icon-fanhui5"></span>
            </div>
          </div>
          <div className='navbar-center'>
            <div className='navbar-input'>
              <div className='search-first'>
                <span onClick={this.search} className="search-icon iconfont icon-sousuo5"></span>
              </div>
              <div className='search-second'>
                <input onChange={(e) => this.setValue(e)} value={this.state.searchValue} className='input' type="input" placeholder='大闸蟹'/>
              </div>
              <div className='icon-delete'>
                <div className='delete'>
                  <span onClick={this.deleteValue} className='deleted iconfont icon-chuyidong'></span>
                </div>
              </div>
            </div>
          </div>
          <div className='navbar-right'>
            <div className='icon-shares'>
              <p className='search' onClick={this.search}>搜索</p>
              {/*<span className='share iconfont icon-fenxiang11'></span>*/}
            </div>
          </div>
        </div>
      </div>
      <div className='pt44'></div>
    </div>);
  }
  public goBack = () => {
    this.props.history.goBack()
  }
  public search = () => {
    alert('搜索内容为空')
  }
  public deleteValue = () => { // 清空输入框内容
    this.setState(() => ({
      searchValue: ''
    }))
  }
  public setValue (e:any) { //
    const value = e.target.value
    this.setState(() => ({
        searchValue: value
    }))
  }
}
