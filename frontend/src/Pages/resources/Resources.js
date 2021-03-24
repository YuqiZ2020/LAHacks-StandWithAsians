import React from 'react';
import Collapsible from 'react-collapsible';
import "./Resources.css"

export default class Resources extends React.Component {
    render() {
        return (
            <div className="resources">
                <h2>The community is SUPPORTIVE</h2>
                <Collapsible trigger="COVID INFORMATION">
                  <p>
                    COVID News around the world
                  </p>
                  <p>
                    COVID Map here.
                  </p>
                </Collapsible>
                <Collapsible trigger="SUPPORT">
                  <p>
                    Mental support
                  </p>
                </Collapsible>
                <Collapsible trigger="EMERGENCY REPORT">
                  <p>
                    If you encounter emergency situation, please post and notify people around.
                  </p>
                </Collapsible>
            </div>        
        );
 }
