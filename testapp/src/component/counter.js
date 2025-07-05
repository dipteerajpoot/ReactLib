import { Component } from "react"

class Counter extends Component {
    constructor() {
        // console.log('Its constructor time');
        super();
        this.state = {
            regularCounter: 1
        };
    }
    increementRegular = () => {
        // this.state.ragularCounter = this.state.ragularCounter+1;
        this.setState({regularCounter: this.state.regularCounter + 1 });
        console.log(this.state.regularCounter);
    }

    render() {
        return <>
            <button onClick = {this.increementRegular} >Click : {this.state.regularCounter}</button>
        </>

    }
}
export default Counter;