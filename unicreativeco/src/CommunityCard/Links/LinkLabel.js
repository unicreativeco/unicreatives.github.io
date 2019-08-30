import React from 'react';

import * as colors from '../../Colors.js';
import * as fonts from '../../Fonts';

function LinkLabel(props) {

  return (
    <a href={props.url} style={{ alignItems: 'center', display: 'flex', textDecoration: 'none' }} target='_blank'>
      <div style={{ marginRight: '8px' }}>
        linkIcon
      </div>
      <div style={Object.assign({ color: colors.red.light }, fonts.body.normal)}>
        {props.url}
      </div>
    </a>
  )
}

export default LinkLabel;