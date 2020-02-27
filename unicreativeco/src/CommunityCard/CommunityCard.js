import React from 'react';

import CommunityCardTextContent from './CommunityCardTextContent';
import LinkCollection from './Links/LinkCollection';
import SkillsetCollection from './Skillset/SkillsetCollection';

/**  props: 
 * image, 
 * name, 
 * username,
 * description, 
 * url, 
 * social: {
 *    facebook, 
 *    github, 
 *    instagram, 
 *    linkedin,
 *    medium,
 *    twitter, 
 *    youtube, 
 * },
 * skillset: {
 *    art,
 *    code,
 *    design,
 *    music,
 *    photo,
 *    video,
 *    write
 */
function CommunityCard(props) {

  return (
    <div style={{ width: '273px' }}>
      <div style={{ position: 'relative' }}>
        <div style={{
          margin: '12px 12px 12px 12px',
          position: 'absolute',
          right: '0px',
          top: '0px',
          zIndex: 10,
        }}>
          <SkillsetCollection skillset={props.skillset} />
        </div>

        <img
          src={props.image}
          style={{
            height: '277px',
            width: '273px',
            objectFit: 'fill',
            borderTopLeftRadius: '10px',
            borderTopRightRadius: '10px'
          }}>
        </img>
      </div>
      <CommunityCardTextContent description={props.description} name={props.name} username={props.username} />
      <LinkCollection url={props.url} social={props.social} />
    </div >
  )
}

export default CommunityCard;