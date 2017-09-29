import React, { Component } from 'react';

class Namelist extends Component {
  

  render() {

    function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1); 
    } 

    const {data, filterText, filtercheck} = this.props; 
    console.log(filtercheck);
    var namelist = data
    .filter(people => {
      if(filtercheck===true){
        var str=people.name.title+' '+people.name.first+' '+people.name.last;
      return str.toLowerCase().indexOf(filterText.toLowerCase()) >= 0
        && people.gender.indexOf('female') >= 0
      }
      else{
      var str=people.name.title+' '+people.name.first+' '+people.name.last;
      return str.toLowerCase().indexOf(filterText.toLowerCase()) >= 0
     }
    })
    .map(people =>{
      return(
        
        <div className="container-button">
          <div className="toggle-button">
            <div className="cubeshape cube">
                <div className ="first_cube" className={people.gender}>
                  <li className="peop"><img className="pic" src={people.picture.thumbnail}/>
                  <div className="peopledetails1">
                  <span>
                  {capitalizeFirstLetter(people.name.title)+' '
                  +capitalizeFirstLetter(people.name.first)+' '+people.name.last+' ('+
                  people.gender+')'}
                  </span><br/>
                  <span><strong>Contact no.-</strong> {people.phone}</span>
                  </div>
                  </li>
                </div>
              <div className="second_cube">
                <div className="peopledetails2">
                  <span><strong>Email-</strong> {people.email}</span><br/>
                  <span><strong>Dob-</strong> {people.dob}</span><br/>
                  <span><strong>Place-</strong> {people.location.city+' ,'+people.location.state}</span>
                </div>
              </div>
            </div>
          </div>
        </div> 
      )
    })
    
    return (
      <div className="App">
        <ul>
          {namelist}
        </ul>
      </div>
    );
  }
}

export default Namelist;
