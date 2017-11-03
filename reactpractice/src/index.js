import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
//import App from './App';
import registerServiceWorker from './registerServiceWorker';
class App extends React.Component{
    constructor(props){
        super(props);
        this.state={val:0,count:10};
    }
    counterAdd5 = (incrementVal) =>{
        this.setState((prevState)=>({
            val:prevState.val + incrementVal
        }));
        console.log(this.state);
        console.log(incrementVal);
    }
    render(){
        return(
            <div>
                {2+2+ `${this.state.count}`}
                <div> 
                    <Header valFunc={this.state.val}/> 
                    <Count onClick={this.counterAdd5} incrementVal={5}/>
                    <Count onClick={this.counterAdd5} incrementVal={15}/>
                    <Count onClick={this.counterAdd5} incrementVal={25}/>
                    <Count onClick={this.counterAdd5} incrementVal={35}/>
                </div>
                <div>{this.state.val}</div>
            </div>
        )
    }
}

class Count extends React.Component{
    // constructor(){
    //     super();
    //     this.state = {}
    // }
    handleClick = () =>{
        this.props.onClick(this.props.incrementVal);
    }
    render(){
        return(
            <button onClick={this.handleClick}>+{this.props.incrementVal}</button>
        );
    }
}

class Header extends React.Component{
    constructor(props){
        super(props);
        this.state={val:0};

    }
    headerhandler = ()=>{
        this.setState((prevState)=>({
            val:prevState.val +1
        }));
        console.log(this.state);
    }
    render(){
        return (
            <div> Value: {this.state.val} 
                <button onClick={this.headerhandler}>+1</button>
                
            </div>
        )
    }
}




// state forward functions
const myFooterClass = {
    height: 20,
    backgroundColor:"#ccc",
    marginTop:20,
    padding:10
}

const FullName = function(obj){
    console.log(obj.args);
    obj=obj.args;
    return (
        <strong>Mr.{obj.fName+" "+obj.lName}</strong>
    );
}
let count=0;
var clickHandle = ()=>{
    count++;
    //alert(count);
    let props={count:count};
    Counter(props);
};

let Counter = function(props){
    //console.log(props);
    return (
        <span>{props.count}</span>
    )
}

const Footer = function(args){
    //console.log(args);
    return (
        <div style={myFooterClass} onClick={clickHandle}>{ args.text} 
            <FullName args={args}/> Total Count: <Counter count={count}/> {new Date().toLocaleDateString()}
        </div>
    );
};
//setInterval(Footer,1000);
var hello=document.getElementById("hello");
ReactDOM.render(<h1>Hello, World!!!</h1>,hello);
ReactDOM.render(<App />, document.getElementById('app'));
ReactDOM.render(<Footer text="Copyright @ 2017 " fName="Manoj" lName="Chaurasiya"/>, document.getElementById('footer'));
registerServiceWorker();
