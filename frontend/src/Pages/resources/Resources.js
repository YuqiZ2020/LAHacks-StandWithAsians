import React from 'react';
import Collapsible from 'react-collapsible';
import "./Resources.css"

export default class Resources extends React.Component {
    render() {
        return (
            <div className="resources">
                <h2>The community is SUPPORTIVE</h2>
                <Collapsible trigger="COVID INFORMATION">
                </Collapsible>
                <Collapsible trigger="SUPPORT">
                </Collapsible>
                <Collapsible trigger="EMERGENCY REPORT">
                </Collapsible>
            </div>        
        )
    }
}
