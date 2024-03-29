import React, { Component } from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import List from './List';

class FilteredList extends Component {
  constructor(props) {
    super(props);

    //The state is just a list of key/value pairs (like a hashmap)
    //TODO (FilteredList): Add an additional state variable within this.state called "type" and set it to a default value
    this.state = {
      search: "",
      type: "All"
    };
  }

  //Sets the state whenever the user types on the search bar
  onSearch = (event) => {
    this.setState({ search: event.target.value.trim().toLowerCase() });
  }

  //TODO (FilteredList): Set the state of the "type" state variable depending on what is passed in
  onFilter = (eventKey) => {
    this.setState({ type: eventKey });

  }

  //TODO (FilteredList): Change filterItem to take into account the "type" state variable when filtering
  filterItem = (item) => {
    const searchProduce = item.name.toLowerCase().includes(this.state.search);
    const typeProduce = this.state.type === "All" || item.type === this.state.type;
    return searchProduce && typeProduce;
  }

  //Using the Dropdown.Item instead of MenuItem as its no longetr available on bootstrap

  render() {
    return (
      <div className="filter-list">

        <h1>Produce</h1>
        

    
        <DropdownButton title={"Type"} id="typeDropdown" onSelect={this.onFilter}>

            <Dropdown.Item eventKey="All">All</Dropdown.Item>
            <Dropdown.Item eventKey="Fruit">Fruit</Dropdown.Item>
            <Dropdown.Item eventKey="Vegetable">Vegetable</Dropdown.Item>

        </DropdownButton>

        <br></br>

        <br></br>
        <input type="text" placeholder="Search" onChange={this.onSearch} />
        <List items={this.props.items.filter(this.filterItem)} />
      </div>
    );
  }
}

export default FilteredList;



