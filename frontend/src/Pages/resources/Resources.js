import React from 'react';
import Collapsible from 'react-collapsible';
import data from '../../Components/fetchPetitions/events';
import sites from '../../Pages/resources/support';
import "./Resources.css"

const events = data.map( (data)=>{
    return(
          <tr>
            <td key={data.id}>{data.day_of_wk} {data.date}/{data.year}</td>
            <td key={data.id}>{data.time}</td>
            <td key={data.id}>{data.state}</td>
            <td key={data.id}>{data.city}</td>
            <td key={data.id}>{data.location}</td>
            <td key={data.id}><a href={data.location_link}>location</a></td>
          </tr>
    );
  }
);

const supports = sites.map( (sites)=>{
    return(
        <p key={sites.id} className="supports">{sites.title}: <a href={sites.url}>{sites.abbreviation}</a>
        </p>
      );
    }    
);

export default class Resources extends React.Component {
  render() {
    return (
      <div className="resources">
        <h2>The community is SUPPORTIVE and strifing to CHANGE</h2>
        <Collapsible trigger="+ EVENTS" triggerWhenOpen="- EVENTS">
          <p><b>Updated protests and events information below:</b></p>
          <table className="eventable">
            <thead>
                <tr>
                    <th>DATE</th>
                    <th>TIME</th>
                    <th>STATE</th>
                    <th>CITY</th>
                    <th>LOCATION</th>
                    <th>MAP</th>
                </tr>
            </thead> 
            <tbody>{events}</tbody>
          </table>
        </Collapsible>
        <Collapsible trigger="+ COVID INFORMATION" triggerWhenOpen="- COVID INFORMATION">
          <p>
            <b>Always remember to keep safe during the pandemic.</b>
          </p>
          <div>
            <span>View global statistics here:</span><br />
            <iframe className="map" width="650" height="400" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" title="2019-nCoV" src="//arcgis.com/apps/Embed/index.html?webmap=14aa9e5660cf42b5b4b546dec6ceec7c&extent=77.3846,11.535,163.5174,52.8632&zoom=true&previewImage=false&scale=true&disable_scroll=true&theme=light" ></iframe>
            <br />
            <span><small>Source:arcgis.com/apps/Embed/index.html?webmap=14aa9e5660cf42b5b4b546dec6ceec7c</small></span>
           </div>
        </Collapsible>
        <Collapsible trigger="+ SUPPORT" triggerWhenOpen="- SUPPORT">
          <p>
            <b>Get Mental and Health Support from Asian communities and organizations:</b>
          </p>
          <div>{supports}</div>
        </Collapsible>
        <Collapsible trigger="+ EMERGENCY REPORT" triggerWhenOpen="- EMERGENCY REPORT">
          <p>
            <b>If you encounter emergency situation, reach out.</b> <br />
            <span className="indent">Police: 911 <br /></span>
            <span className="indent">Asian Hospital and Medical Center EMERGENCY NUMBER: +(632)8-876-5739 </span>
          </p>
          <br /><br /><br />
          <p>
            <b>Report Asian Hate Incidents on our forum or other sites:</b> <br />
            <a href="https://stopaapihate.typeform.com/to/zhMP3fUx" className="indent">STOP AAPI HATE</a><br />
            <a href="https://www.standagainsthatred.org/" className="indent">STAND AGAINST HATRED</a><br />
            <a href="https://www.justice.gov/hatecrimes/get-help-now" className="indent">US DEPARTMENT OF JUSTICE</a>
          </p>
        </Collapsible>
      </div>
    );
  }
}
