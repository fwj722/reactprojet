# React

1.创建项目脚手架：

​	①	npm install -g create-react-app

​	②	 create-react-app reactproject

注：项目名称不能包含大写字母

2.注意点整理：

1所有模板要被一个根节点包裹起来

2模板元素不要加引号

3用{}来绑定数据

4绑定属性注意：

class要变成className

label的for要变成htmlFor

style属性和以前写法有些不同：

```react
<div style={{'color':'red','font-size':'12px'}}></div>
<div style={{'color':this.state.color}}></div>
```

循环数据要加key

组件的构造函数中一定要注意super

子类必须在constructor方法中调用super方法，否则新建实例时会报错。这是因为子类每一自己的this对象，而是继承父类的this对象，然后对其进行建工。如果不调用super方法，子类就得不到this对象。

```javascript
construtor(props){
	super(props)
}
```



