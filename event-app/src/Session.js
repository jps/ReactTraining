import React from 'react';

let Session = function ({title, description, openFeedbackModal, feedback})  
{
    function handleOpenFeedbackModal(event)
    {
        event.preventDefault();
        openFeedbackModal();
    }

    return <div>
        <strong>{title}</strong>
        <span>{description}</span>
        <button onClick={handleOpenFeedbackModal}>Provide feedback for this session</button>
    </div>
}

export default Session