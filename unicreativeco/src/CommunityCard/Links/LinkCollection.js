import React from 'react';

import IconCollection from './IconCollection.js';
import LinkLabel from './LinkLabel.js';

function LinkCollection(props) {

  return (
    <div style={{ margin: '12px 0px 12px 0px' }}>
      <LinkLabel url={props.url} />
      <div style={{ height: '12px' }}></div>
      <IconCollection social={props.social} />
    </div>
  )
}

export default LinkCollection;