import React from 'react';
import Session from './Session.js';
import { 
    BrowserRouter as Router, 
    Route, 
    Link 
} from 'react-router-dom';
import Resources from './Resources';

let Agenda = ({sessions, openFeedbackModal, feedback}) => <>
    <div>{sessions.length} sessions.</div>
    <div>
      {sessions.map((session) => {
        var sessionFeedback = feedback.find((entry) => entry.code === session.code);

         return <Session key={session.code} 
            openFeedbackModal={function () { return openFeedbackModal(session.code)}} 
            feedback={sessionFeedback}
            {...session} />
        })}
    </div>
    <div>
        <ul>
      {sessions.map((session) => {
          return <li><Link to={`/session/${session.code}`} > {session.title} </Link></li>
        })}
        </ul>
    </div>
  </>

export default Agenda