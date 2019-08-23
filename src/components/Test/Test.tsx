import * as React from 'react'
import TestSon from './TestSon'
// export default class Test extends React.Component{
//     public render(){
//         return(
//             <div>
//                 test admin
//             </div>
//         )
//     }
// }

const Test: React.SFC = () => {
    return (
      <div>
        这是无状态组件
        <TestSon name='南宫伯赏' age={30}/>
      </div>
    );
  };

export default Test;