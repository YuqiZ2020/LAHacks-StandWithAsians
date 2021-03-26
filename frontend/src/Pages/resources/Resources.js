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
        <p key={sites.id}>{sites.title}: <a href={sites.url}>{sites.abbreviation}</a>
        </p>
      );
    }    
);

export default class Resources extends React.Component {
  render() {
    return (
      <div className="resources">
        <h2>The community is SUPPORTIVE and strifing to change</h2>
        <Collapsible trigger="+ EVENTS" triggerWhenOpen="- EVENTS">
          <p>Updated protests and events information below.</p>
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
            <span>View the circumstances here.</span>
            <iframe className="map" width="650" height="400" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" title="2019-nCoV" src="//arcgis.com/apps/Embed/index.html?webmap=14aa9e5660cf42b5b4b546dec6ceec7c&extent=77.3846,11.535,163.5174,52.8632&zoom=true&previewImage=false&scale=true&disable_scroll=true&theme=light" ></iframe>
            <br />
            <span><small>Source:arcgis.com/apps/Embed/index.html?webmap=14aa9e5660cf42b5b4b546dec6ceec7c</small></span>
           </div>
        </Collapsible>
        <Collapsible trigger="+ SUPPORT" triggerWhenOpen="- SUPPORT">
          <p>
            Get Mental and Health Support from Asian communities and organizations:
            <br />
            {supports}
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
