import React from 'react';
import Session from './Session.js';


let Agenda = ({sessions}) => <div>
    <div>{sessions.length} sessions.</div>
    <div>
      {sessions.map((session) => {
         return <Session key={session.code} title={session.title} description={session.description} />
        })}
    </div>
  </div>

export default Agenda