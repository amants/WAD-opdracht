import React, { Component } from 'react';

class OrderItem extends Component {

    constructor(props) {
        super(props);
        this.state = { ordered: false };
    }

    handleClickItem = (e) => {
        //this.setState({ordered : this.state.ordered?false:true});
        this.setState((prevState, props) => ({ ordered: !prevState.ordered }));
    }

    render = () => {
        const { aantal, bestelling } = this.props;
        const { ordered } = this.state;
        return (
            <li 
                onClick={this.handleClickItem} 
                className={ordered ? 'ordered-style' : ''} >{aantal} keer {bestelling}</li>);
    }
}
export default OrderItem;