import React from "react"


class ErrorBoundry extends React.Component{

    constructor(props){
        super()

        this.state = {
            hasError : false
        };
    }
    render(){
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return <h1>Something went wrong.</h1>;
        }
        return this.props.children;
    }

    componentDidCatch(error, info){
        console.error(error, info);
    }

    static getDerivedStateFromError(error)
    {
        return { hasError: true };
    }
}

export default ErrorBoundry