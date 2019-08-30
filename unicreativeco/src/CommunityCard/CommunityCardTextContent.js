import React from 'react';

import * as colors from '../Colors.js';
import * as fonts from '../Fonts.js';

/**  props: name, username, description */
function CommunityCardTextContent(props) {
  return (
    <div style={{ margin: '12px 0px 12px 0px' }}>
      <div style={Object.assign({ color: colors.white }, fonts.h3)}>
        {props.name}
      </div>
      <div style={Object.assign({ color: colors.red.light, marginBottom: '12px' }, fonts.body.normal)}>
        @{props.username}
      </div>
      <div style={Object.assign({ color: colors.gray.light }, fonts.body.normal)}>
        {props.description}
      </div>
    </div>
  )
}

export default CommunityCardTextContent;