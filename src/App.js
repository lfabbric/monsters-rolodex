import './App.css';
import {CardList} from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import { Component } from 'react';

class App extends Component {
  constructor () {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };

    // method state
    // this.handleChange = this.handleChange.bind(this); // very verbose can use following below
    // handleChange = (e) => {}
    
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
      this.setState( {monsters: users} );
      console.log(users);
    });
  }

  handleChange = e => { // automatic laxicol scoping
    this.setState({ searchField: e.target.value });
  };

  render() {
    // on search change, do not change the monsters array
    const { monsters, searchField } = this.state;
    // same as 
    // const monsters = this.state.monsters;
    // const searchField = this.state.searchField
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox placehodler='Search Monsters' handleChange={this.handleChange} />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }

}

export default App;
