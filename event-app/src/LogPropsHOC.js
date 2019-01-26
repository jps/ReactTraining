import React from 'react';

const LogPropsHOC = (WrappedComponent) => {
 return class extends React.Component {
   render() {
     console.log(new Date(Date.now()).toLocaleString());
     console.log('Component: ' + WrappedComponent.name);
     console.log('the props being passed through to this  ', this.props);
     return <WrappedComponent {...this.props} />;
   }
 }
}

export default LogPropsHOC