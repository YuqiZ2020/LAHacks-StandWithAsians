import React from 'react';
import Collapsible from 'react-collapsible';
import "./Resources.css"

export default class Resources extends React.Component {
  render() {
    return (
      <div className="resources">
        <h2>The community is SUPPORTIVE</h2>
        <Collapsible trigger="+ EVENTS" triggerWhenOpen="- EVENTS">
          <p>update protests and events here.</p>
          <table className="eventable">
            <tr>
              <th>DATE</th>
              <th>TIME</th>
              <th>STATE</th>
              <th>CITY</th>
              <th>LOCATION</th>
              <th>MAP</th>
            </tr>
            <tr>
              <td>SAT 03/27/2021</td>
              <td>11AM</td>
              <td>CA</td>
              <td>San Francisco</td>
              <td>Saratoga City Hall</td>
              <td><a href="https://www.google.com/maps/search/Saratoga+City+Hall/@34.3188346,-95.7084137,4z/data=!3m1!4b1">location</a></td>
            </tr>
            <tr>
              <td>SAT 03/27/2021</td>
              <td>12pM</td>
              <td>CA</td>
              <td>Los Angeles</td>
              <td>200 N Spring Street</td>
              <td><a href="https://www.google.com/maps/place/Los+Angeles+City+Hall,+200+N+Spring+St,+Los+Angeles,+CA+90012/@34.0535267,-118.2451203,17z/data=!3m1!4b1!4m5!3m4!1s0x80c2c64f395f4df1:0xa210ca08f4b2deda!8m2!3d34.0535267!4d-118.2429316">location</a></td>
            </tr>          
          </table>  
        </Collapsible>
        <Collapsible trigger="+ COVID INFORMATION" triggerWhenOpen="- COVID INFORMATION">
          <p>
            COVID News around the world
          </p>
          <iframe className="map" width="650" height="400" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" title="2019-nCoV" src="//arcgis.com/apps/Embed/index.html?webmap=14aa9e5660cf42b5b4b546dec6ceec7c&extent=77.3846,11.535,163.5174,52.8632&zoom=true&previewImage=false&scale=true&disable_scroll=true&theme=light" ></iframe>
          <br />
          <span><small>Source:arcgis.com/apps/Embed/index.html?webmap=14aa9e5660cf42b5b4b546dec6ceec7c</small></span>
        </Collapsible>
        <Collapsible trigger="+ SUPPORT" triggerWhenOpen="- SUPPORT">
          <p>
            Mental support
          </p>
        </Collapsible>
        <Collapsible trigger="+ EMERGENCY REPORT" triggerWhenOpen="- EMERGENCY REPORT">
          <p>
            If you encounter emergency situation, please post and notify people around.
          </p>
        </Collapsible>
      </div>
    );
  }
}
