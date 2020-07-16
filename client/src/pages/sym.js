import React, { Component } from "react";
import API from "../api/api";

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
    
    <button class="bg-red-600 hover:bg-red-700 text-white text-sm px-4 py-2  border rounded-full"
    key={symptom.ID}
    onClick={() => this.handleClick(symptom.ID) }
    >
        {symptom.Name}
        </button>

    )
    
    }

    <h1 className="mt-6 text-2xl font-bold text-gray-900 leading-tight sm:mt-8 sm:text-4xl lg:text-3xl xl:text-4xl"> Get your diagnosis  </h1>
    <button class="bg-red-600 hover:bg-red-700 text-white text-sm px-4 py-2  border rounded-full"
           
    onClick={() => this.handleDiagn(this.state.diagnosis)}
    >
        Search
    
    </button>

    <h1 className="mt-6 text-2xl font-bold text-gray-900 leading-tight sm:mt-8 sm:text-4xl lg:text-3xl xl:text-4xl"> Get your issue info</h1>
    <button class="bg-red-600 hover:bg-red-700 text-white text-sm px-4 py-2  border rounded-full"
           
    onClick={() => this.handleDiagn(this.state.diagnosis)}
    >
        Search
    
    </button>
    <h2>{this.state.issue.Name}</h2>
    <p>{this.state.issue.DescriptionShort}</p>
    <p>{this.state.issue.MedicalCondition}</p>
    <p>{this.state.issue.TreatmentDescription}</p>

</div>
)}



}
export {Sym};