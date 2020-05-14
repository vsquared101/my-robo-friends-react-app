import React, { Component } from 'react';
import './App.css';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import CardList from '../components/CardList';

class App extends Component {
  constructor(){
    super();
    this.state = {
      robots: [],
      searchField: ''
    }

    this.onSearchChange = this.onSearchChange.bind(this);
  }

  onSearchChange(event){
    this.setState({ searchField: event.target.value });
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response =>  response.json())
      .then(users => this.setState({ robots: users }));
  }

  render(){
    const { robots, searchField } = this.state;
    const filteredRobotList = robots.filter(robot => robot.name.toLowerCase().includes(searchField.toLowerCase()));

    return (
      <div className="App">
        <h1>My Robofriends!</h1>
        <SearchBox onSearchChange={this.onSearchChange}/>
        <Scroll>
          <CardList robots={filteredRobotList}/>
        </Scroll>
      </div>
    );
  }
}

export default App;
