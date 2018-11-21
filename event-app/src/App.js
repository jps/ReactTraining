import { getEvent } from './EventData';
import React, { Component } from 'react';
import Modal from 'react-modal'
import { 
    BrowserRouter as Router, 
    Route, 
    Link 
} from 'react-router-dom';
import Resources from './Resources';

import Agenda from './Agenda';
import FeedbackForm from './FeedbackForm'

import './App.css';
import Session2 from './Session2';

const styles = {
  nav:{
    borderBottom: "2px solid #0078D7"
  },
  link: {
      display: "inline-block",
      textDecoration: "none",
      color: "#0078D7",
      backgroundColor: "#fff",
      padding: 10,
      margin: "0px 6px"
  }
}

class App extends Component {

  constructor() {
    super();
    this.state = {
      modalIsOpen: false,
      feedback: {
        currentSession: '',
        entries: []
      }
    };

    this.state.feedback.currentSession = ''

    console.log(this.state);

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.event = getEvent();

  }



  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  submitFeedbackForm(rating, comment) {
    alert(`Feedback submitted ${rating} - ${comment} - ${this.state.feedback.currentSession}`)
  }

  submitFeedback(rating, comment) {
    const feedbackEntries = this.state.feedback.entries;
    const idx = feedbackEntries.findIndex((entry) => entry.code === this.state.feedback.currentSession);
    const newFeedback = { code: this.state.feedback.currentSession, rating, comment };
    let newEntries;

    if (idx === -1) {
      newEntries = feedbackEntries.concat(newFeedback);
    } else {
      newEntries = [].concat(feedbackEntries);
      newEntries[idx] = newFeedback;
    }

    const newState = Object.assign(
      {},
      this.state,
      { feedback: { currentSession: this.state.feedback.currentSession, entries: newEntries } });

    this.setState(newState);

    this.closeModal();
  }

  openModal(sessionCode) {
    console.log(sessionCode, 'opened with ')
    const newState = Object.assign(
      {},
      this.state,
      {
        modalIsOpen: true,
        feedback: {
          currentSession: sessionCode,
          entries: this.state.feedback.entries
        }
      });

    this.setState(newState);
  }



  render() {
    let currentSession = this.event.sessions.find((session) => session.code === this.state.feedback.currentSession);
    let feedback = this.state.feedback.entries.find((entry) => entry.code === this.state.feedback.currentSession)

    currentSession = currentSession ? currentSession : "";
    feedback = feedback ? feedback : { rating: "5", comment: "" };

    return (
      
      <Router>
      <div>
      <header>
          <h1>{this.event.title}</h1>
          <p>{this.event.subtitle}</p>
          <nav style={styles.nav}>
            <Link style={styles.link} to="/">Agenda</Link>
            <Link style={styles.link} to="/resources">Resources</Link>
          </nav>
        </header>
        <Route exact path="/" render={() => (
          <div>
            <Modal
              isOpen={this.state.modalIsOpen}
              onRequestClose={this.closeModal}>
              <h2>Feedback for {currentSession.title}</h2>
              <FeedbackForm
                rating={feedback.rating}
                comment={feedback.comment}
                onDismiss={this.closeModal}
                onSubmit={this.submitFeedback.bind(this)} />
            </Modal>
            <Agenda
              sessions={this.event.sessions}
              feedback={this.state.feedback.entries}
              openFeedbackModal={this.openModal} />
          </div>
        )} />
        <Route path="/resources" component={Resources}/>
        <Route
          path="/session/:code"
          component={Session2} />
      </div>
      </Router>
    );
  }
}

export default App;

