import React, { Component } from 'react';

class Search extends Component {

	filterUpdate(){
		const val = this.myvalue.value;
		this.props.filterUpdate(val)
	}

	filterUpdateoncheck(){
		const checkval = this.myval.checked;
		console.log(checkval);
		this.props.filterUpdateoncheck(checkval)
	}  

    render() {
      return(
      	<div>
        <form className="info">
           <input ref={(value)=>{this.myvalue=value}} type="text" placeholder="Type to filter..." onChange={this.filterUpdate.bind(this)} />
           <div className="toggleWrapper">
              <div className="fml"><strong >Female</strong></div>{"   "}
			  <input ref={(value)=>{this.myval=value}} type="checkbox" name="toggle2" className="mobileToggle" id="toggle2" onChange={this.filterUpdateoncheck.bind(this)}/>
			  <label htmlFor="toggle2"></label>
			</div>
        </form>
        </div>
      )
    }
}

export default Search;
