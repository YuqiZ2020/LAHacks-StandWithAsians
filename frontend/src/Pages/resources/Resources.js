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
                  <iframe width="650" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" title="2019-nCoV" src="//arcgis.com/apps/Embed/index.html?webmap=14aa9e5660cf42b5b4b546dec6ceec7c&extent=77.3846,11.535,163.5174,52.8632&zoom=true&previewImage=false&scale=true&disable_scroll=true&theme=light" ></iframe>                
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
 }
