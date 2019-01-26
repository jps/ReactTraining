import React from 'react';

const Resources = () => (
    <ul>
        <Launcher>
            {launchStuff =>
                <>
                    <li><button onClick={launchStuff} data-href="https://facebook.github.io/react/">React</button></li>
                    <li><button onClick={launchStuff} data-href="https://github.com/ReactTraining/react-router">React Router (master)</button></li>
                    <li><button onClick={launchStuff} data-href="https://github.com/ReactTraining/react-router/tree/v4">React Router (v4)</button></li>
                    <li><button onClick={launchStuff} data-href="https://github.com/facebookincubator/create-react-app">create-react-app</button></li>
                    <li><button onClick={launchStuff} data-href="https://webpack.js.org">Webpack</button></li>
                    <li><button onClick={launchStuff} data-href="https://facebook.github.io/jest/">Jest</button></li>
                </>
            }
        </Launcher>
    </ul>
);

class Launcher extends React.Component {
    launchStuff = (props) => {
        console.log(props.target.getAttribute("data-href"));
    }
    render = () => this.props.children(this.launchStuff)
}

export default Resources;