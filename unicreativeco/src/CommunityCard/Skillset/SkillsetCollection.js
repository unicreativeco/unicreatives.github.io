import React from 'react';

import * as colors from '../../Colors.js';

/**  props:
 *  skillset: {
 *    art,
 *    code,
 *    design,
 *    music,
 *    photo,
 *    video,
 *    write
 * }
 */
function SkillsetCollection(props) {

  return (
    <div style={{
      alignItems: 'center',
      backgroundColor: colors.gray.darkest,
      borderRadius: '18px',
      display: 'flex',
      padding: '10px 10px 10px 10px',
    }}>
      {
        props.skillset.art ? <div>art</div> : ''
      }
      {
        props.skillset.code ? <div>code</div> : ''
      }
      {
        props.skillset.design ? <div>design</div> : ''
      }
      {
        props.skillset.music ? <div>music</div> : ''
      }
      {
        props.skillset.photo ? <div>photo</div> : ''
      }
      {
        props.skillset.video ? <div>video</div> : ''
      }
      {
        props.skillset.write ? <div>write</div> : ''
      }
    </div>
  )
}

export default SkillsetCollection;