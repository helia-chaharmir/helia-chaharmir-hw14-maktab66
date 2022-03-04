
import React, { Component } from 'react'
import Button from './button';
export default class Counter extends Component {
    constructor() {
        super();
        this.state={
            count: 0
        }
        

    }
    increase=()=>{
        this.setState({count:this.state.count+1})
    }
    decrease=()=>{
        if(this.state.count>0){
             this.setState({count:this.state.count-1})
        }
    }
    reset=()=>{
        if(this.state.count!=0){
             this.setState({count:0})
        }
    }

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <Button title="increase" handelClick={this.increase}/>
                <Button title="decrease" handelClick={this.decrease}/>
                <Button title="reset" handelClick={this.reset}/>
            </div>
        )
    }
}