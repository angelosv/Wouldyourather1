
import React, {Component} from 'react'
import { Tabs, Tab, Sonnet } from 'react-bootstrap'
import Unanswered from './Unanswered'
import Answered from './Answered'

class ControlledTabs extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      key: 'unansweredQuestions',
    };
  }

  render() {
    return (
      <Tabs
        defaultActiveKey="unansweredQuestions"
        id="controlled-tab-example"
        activeKey={this.state.key}
        onSelect={key => this.setState({ key })}
      >
        <Tab eventKey="answeredQuestions" title="Answered Questions">
          <Answered />

        </Tab>  
      <Tab eventKey="unansweredQuestions" title="Unanswered Questions">
          <Unanswered/>
        </Tab>
        
      </Tabs>
    );
  }
}

export default ControlledTabs