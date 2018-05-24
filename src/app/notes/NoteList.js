import * as React from 'react';
import { Card, Divider, Segment } from 'semantic-ui-react';

import NoteListLoader from './NoteListLoader';

export default ({ children }) => (
  <React.Fragment>
    <h1>Your Notes</h1>
    <Divider />

    <Segment basic>
      {children ? <Card.Group>{children}</Card.Group> : <h2>No notes yet!</h2>}
    </Segment>
  </React.Fragment>
);
