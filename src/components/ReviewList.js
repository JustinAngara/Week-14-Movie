import React from 'react'

export default class ReviewList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          value:""
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event) {
        this.setState({value: event.target.value});
    }
    
    handleSubmit(event) {
        alert('An essay was submitted: ' + this.state.value);
        event.preventDefault();
    }
    appendData() {
        this.displayData.push(<div  id="display-data"><pre>{this.state.value}</pre></div>);
        this.setState({
           value : this.displayData,
        });
    }
    render() {
       
        return (
          <form onSubmit={this.appendData}>
            <label>
              <p>ADD REVIEW:</p>
              <textarea value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />

               
          </form>
        );
    }
}
/*



<div>
        
<button onClick={() => setArr((oldArray) => oldArray.concat("foo"))}>
add
</button>
<div>
    {arr.map((a, i) => (
        <p key={i}>{a}</p>
    ))}
</div>
</div>*/