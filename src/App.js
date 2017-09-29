import React, { Component } from 'react';
import Namelist from './components/namelist';
import Search from './components/Search';
import './App.css';

class App extends Component {
  
  constructor(props){
    super(props)
    this.state ={
      filterText: '',
      filtercheck: ''
    }
  }  

  filterUpdate(value){
    this.setState({
      filterText: value
    })
  }
  filterUpdateoncheck(val){
    this.setState({
      filtercheck: val
    })
  }

  render() {
    
      return(
        <div>
          <Search filterText={this.state.filterText} filterUpdate={this.filterUpdate.bind(this)}
          filtercheck={this.state.filtercheck} filterUpdateoncheck={this.filterUpdateoncheck.bind(this)}/>
          <Namelist data={this.props.data} filterText={this.state.filterText} filtercheck={this.state.filtercheck}/>
        </div>
      )
  }
}

export default App;
