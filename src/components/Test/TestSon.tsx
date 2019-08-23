import * as React from 'react'

export interface IProps{
    name: string;
    age: string | number | undefined;
}

const TestSon:React.SFC<IProps> = (props:IProps) => {
    const { name, age } = props
    return (<div>
            这是testson组件
        <div>姓名：{name}</div>
        <div>年龄：{age}</div>
        </div>)
}

export default TestSon;