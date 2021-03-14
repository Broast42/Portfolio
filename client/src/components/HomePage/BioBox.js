import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedinIn, faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { longBio } from "../../DyData";

const BioBox = (props) => {
    const {data, graphcolor, profile} = props;
    
    return (
    
        <div className="bio-box bio-themed">
            <div className="info-box">
                <h1>{data.name}</h1>
                <img src={data.avatar_url} alt="R Jarrett Dowd" />
                <p className="github-link gitlink-themed">
                    <a href={data.html_url}>
                        <FontAwesomeIcon className="github github-icon" icon={faGithubSquare} /> 
                        {" "}{data.login}
                    </a>
                </p>
                <p className="bio">{data.bio}</p>
                <p className="location">{data.location}</p>
                <div className="socal-links socal-themed">
                    {data.twitter_username === null ?
                        null
                    :
                        <p> 
                            <a href={`http://twitter.com/${data.twitter_username}`}>
                                <FontAwesomeIcon className="twitter" icon={faTwitter} /> 
                                {" "}@{data.twitter_username}
                            </a>
                        </p>
                    }
                    
                    {profile === 'Broast42' ? 
                        <p>
                            <a href="http://linkedin.com/in/rjarrettdowd">
                                <FontAwesomeIcon className="linkedin" icon={faLinkedinIn} />
                                {" "}rjarrettdowd
                            </a>
                        </p>
                    :
                        null
                    }
                    
                </div>
            </div>
            <div className="stat-box">
                
                <div>
                    <div className="contributions graph-themed">
                        <img src={`https://ghchart.rshah.org/${graphcolor}/${profile}`} alt={`${profile} Github chart`} />
                    </div>
                    <div className='stats'>
                        <p>Public Repos: {data.public_repos}</p>
                        <p>Followers:{data.followers}</p>
                        <p>Following:{data.following}</p>
                    </div>
                </div>
                {profile === 'Broast42' ?
                    <div className="long-bio">
                        <p>
                            {longBio}
                        </p>
                    </div>
                :
                    null
                }
                
               
            </div>
            
        </div>
    
    )
}

export default BioBox;
