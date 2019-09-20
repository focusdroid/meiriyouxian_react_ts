<!--
 * @Description: 南宫伯赏
 * @Author: 0.1
 * @Date: 2019-08-19 10:24:39
 * @LastEditTime: 2019-08-23 15:19:06
 * @LastEditors: Please set LastEditors
 -->
## 项目名称
  > 每日生鲜H5版本 [https://as-vip.missfresh.cn/ug/index.html?referrer=ug&fromSource=zhuye]
## 项目使用的技术栈
  > React + TS + React-Router + redux + react-redux + fetch&axios实现移动端页面
  > 项目使用TS实现,需要TS基础

## 项目文件分工（个人习惯）
  ```
    > components   ---> 主要目录组件 例如：底部导航tab都放在components
    > pages        ---> 主要的页面部分，例如，底部导航的一级页面
    > plugins      ---> 复用的组件
    > views        ---> 所有的二级页面三级页面的存放目录
  ```
## 项目中样式统一
  ```
    > 0. 顶部通栏切换的是calc(3.7vmin)
    > 1. 普通字体大小calc(3.3)
    > 2. 底部导航栏中的发现、购物车、我的使用无状态组件创建的，此外还有属性的使用，只是案例具体属性值没有用到，请注意！！！
  ```
##  可能遇到的问题
  ```
    > 0. 命令行报错信息 Import sources within a group must be alphabetized.
    > 0.1在tslint.json中配置一下, 然后重启命令行
      "rules": {
        "ordered-imports": false
      },
    > 1. 如果在使用以下代码报这个错:  Lambdas are forbidden in JSX attributes due to their rendering performance impact
      ```
        <Route path='/test' component={Admin} children={() =>(
          <Route path='/test' component={Test}/>
        )}/>
      ```
    > 1.1 解决的答案所在：[https://jonhilton.net/typescript-and-react-forbidden-lambdas/]
    > 1.2 处理方式如下：
      ```
        "rules": {
          "ordered-imports": false,
          "jsx-no-lambda": false // 加入这个，重启服务
        },
      ```
    > 2. JSX elements with no children must be self-closing (jsx-self-close)
    > 2.1 在tslint中添加 "jsx-self-close": false 重启即可解决
    > 2.2 如果标签没有文字或其他内容设置该标签为自闭和，
    ```
      "rules": {
        "jsx-self-close": false // 消除标签自闭和的提示
      },
    ```
  ``` 
  ## 安装scss模块
    > yarn add node-sass sass-loader
    ```
      > 在config/webpack.config.dev.js配置一下sass
      {
        test: /\.scss$/,
        include: [path.join(__dirname, './../', 'src')],
        use: [
            'style-loader',
            'css-loader',
            'sass-loader'
        ]
      },
      > 重启服务
    ```

## 个别页面的功能
```
同意的顶部搜索栏在 src/pages/navBar/searchNavBar/SearchNabBar.tsx

公共样式的顶部返回栏和显示title的在 src/pages/navBar/ordiNavBar/OrdiNavBar.tsx
这个里面分布是左中右结构的， 左边是返回按钮  中间是标题 右边是一个些功能键，可统一配置，在其他组件引用即可

搜索之后的结果页面 src/pages/searchResult/SearchResult.tsx 只是单纯显示搜索之后的结果页面显示
```
