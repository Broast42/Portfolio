import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {skills} from '../../DyData';

const BioBox = (props) => {
    const data = props.data;
    const graphcolor= '29648a';
    return (
        <div className="bio-box bio-themed">
            <div className="info-box">
                <h1>{data.name}</h1>
                <img src={data.avatar_url} alt="R Jarrett Dowd" />
                <p className="github-link gitlink-themed"><a href={data.html_url}>GitHub: {data.login}</a></p>
                <p className="bio">{data.bio}</p>
                <p className="location">From: {data.location}</p>
                <div className="socal-links gitlink-themed">
                    <p>Twitter: <a href={`http://twitter.com/${data.twitter_username}`}>@{data.twitter_username}</a></p>
                    <p>LinkedIn: <a href="http://linkedin.com/in/rjarrettdowd">rjarrettdowd</a></p>
                </div>
            </div>
            <div className="stat-box">
                <div>
                    <div className="contributions graph-themed">
                        <img src={`https://ghchart.rshah.org/${graphcolor}/Broast42`} alt="Broast42's Github chart" />
                    </div>
                    <div className='stats'>
                        <p>Public Repos: {data.public_repos}</p>
                        <p>Followers:{data.followers}</p>
                        <p>Following:{data.following}</p>
                    </div>
                </div>
                <div className="skills">
                    {/* <p>test</p>
                    <FontAwesomeIcon icon={skills[0].icon}/> */}
                    {skills.map((x, index) => (
                        <div key={index}>
                            <FontAwesomeIcon  icon={x.icon} />
                            <p>{x.name}</p>
                        </div>
                    ))}
                    
                    
                </div>
               
            </div>
            
        </div>
    )
}

export default BioBox;
