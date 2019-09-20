import * as React from 'react';
import './ordiNavBar.scss';

interface IProps {
  history?: any
}

export default class OrdiNavBar extends React.Component<IProps>{
  constructor(props: IProps) {
    super(props)
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
            这是默认标题
          </div>
          <div className='navbar-right'>
            <div className='icon-shares'>
              <span className='share iconfont icon-fenxiang11'></span>
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
}
