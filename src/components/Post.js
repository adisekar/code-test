import React from 'react';
import './Post.css';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { apiData: null };
    }

    componentDidMount() {
        let data = fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json());

        data.then(data => this.setState({ apiData: data }));
    }


    render() {
        const { apiData } = this.state;
        if (apiData === null || apiData.length === 0) {
            return null;
        }
        return (
            <div className="grid-container">
                {apiData.map((item) => {
                    console.log(item);
                    return (<div className="grid-item">
                        <h5>{item.title}</h5>
                        <p>{item.body}</p>
                    </div>);
                })};
            </div>
        );
    }
}