import * as React from 'react';
import { Segment, Loader, Dimmer, Image, SegmentGroup } from 'semantic-ui-react';

export default () => (
    <Segment>
      <Dimmer active inverted>
        <Loader> Loading your notes...</Loader>
      </Dimmer>
      <Image src="https://react.semantic-ui.com/assets/images/wireframe/short-paragraph.png" />
    </Segment>
);
