import React from 'react';
import DisplayCard from './displayCard';

export default class MainContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            courses: null
        };
    }
    componentWillMount() {
        this.renderMyData();
    }
    renderMyData() {
        fetch('http://34.71.56.116:8080/courses/user/1')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({ courses: responseJson })
            })
            .catch((error) => {
                console.log("Error")
                console.error(error);
            });
    }
    render() {
        return (
            <div>
                {this.state.courses && this.state.courses.map((course, idx) => <DisplayCard course={course} key={idx} />)}
            </div>
        );
    }
}







