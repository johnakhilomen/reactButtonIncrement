import React from 'react';
import IncrementButton from './increment-button';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
        this.handleIncrement = this.handleIncrement.bind(this);
    }

    handleIncrement()
    {
        //increment count by 1
        this.state.count++;
        //We update the count state with the new value 
        this.setState({
            count: this.state.count
        });
    } 
    render() {
        return (
            <div className="parent">
                <div className="count">
                    Number of clicks: {this.state.count}
                </div>
                <IncrementButton eventClickProp = {this.handleIncrement}/>
            </div>
        );
    }
}
