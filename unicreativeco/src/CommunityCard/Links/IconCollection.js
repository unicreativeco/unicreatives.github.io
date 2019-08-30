import React from 'react';

import * as colors from '../../Colors.js';
import * as fonts from '../../Fonts.js';

/**  props: 
 * social: {
 *    facebook, 
 *    github, 
 *    instagram, 
 *    linkedin,
 *    medium,
 *    twitter, 
 *    youtube, 
 * }
*/
function IconCollection(props) {
  return (
    <div style={{ alignItems: 'center', display: 'flex' }}>
      {
        props.social.youtube ? <div>youtube</div> : ''
      }
      {
        props.social.facebook ? <div>facebook</div> : ''
      }
      {
        props.social.github ? <div>github</div> : ''
      }
      {
        props.social.instagram ? <div>instagram</div> : ''
      }
      {
        props.social.linkedin ? <div>linkedin</div> : ''
      }
      {
        props.social.twitter ? <div>twitter</div> : ''
      }
      {
        props.social.medium ? <div>medium</div> : ''
      }
    </div>
  )
}

export default IconCollection;