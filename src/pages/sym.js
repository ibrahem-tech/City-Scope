import React, { Component } from "react";
import API from "../utils/api";

class Sym extends Component {

    state = {
        counter: 1,
        symp: [],
        diagnosis: [],
        issueID: 0,
        issue: []

    };

    componentDidMount(){
        this.startSym()
    }

startSym = () => {
API.getBodyLocations()
.then(res => this.setState({ symp: res.data}))
}

handleClick = (id) => {
  this.setState({counter:  this.state.counter + 1})
  if (this.state.counter === 1){
    API.getBodyLocation(id)
    .then(res => this.setState({ symp: res.data}))
  }
  if (this.state.counter === 2){
      API.getBodySymptoms(id)
      .then(res => this.setState({ symp: res.data}))
  }
  if (this.state.counter > 2 ) {
    const diagn = [...this.state.diagnosis, id] 
   this.setState({diagnosis: diagn})
}
  }

handleDiagn = (diagnosis) => {
    API.getDiagnosis(diagnosis) 
  
    .then(res => {
        this.setState({ issueID : res.data[0].Issue.ID})
        this.handleIssue(this.state.issueID)   } 
    )
    .catch(err => console.log(err));
}

handleIssue = (issueID) => {
    API.getIssue(issueID)
    .then(res => this.setState({issue: res.data}))
}

render() {       
return (
<div>
    {
 this.state.symp.map(symptom =>
    
    <button 
    key={symptom.ID}
    onClick={() => this.handleClick(symptom.ID) }
    >
        {symptom.Name}
        </button>

    )
    
    }

    <h1>Get your diagnosis button: </h1>
    <button 
    onClick={() => this.handleDiagn(this.state.diagnosis)}
    >
        Search
    
    </button>

    <h1> Get your issue info:</h1>
    <h2>{this.state.issue.Name}</h2>
    <p>{this.state.issue.DescriptionShort}</p>
    <p>{this.state.issue.MedicalCondition}</p>
    <p>{this.state.issue.TreatmentDescription}</p>

</div>
)}



}
export default Sym;