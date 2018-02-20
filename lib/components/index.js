import React from 'react';
import ReactDOM from 'react-dom';


export default class App extends React.Component{
    state = {
        answer: 43
    };

    asyncFunc = () => {
        return  Promise.resolve(37);
    }

    async componentDidMount(){
        this.setState({answer: await this.asyncFunc()});
    }

    render(){
        return (<p>Lonwabo React -- {this.state.answer}</p>);
    }
}

ReactDOM.render(<App />, document.getElementById('root'));