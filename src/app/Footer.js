import * as React from 'react';
import { Segment, Header, Icon, List, Container } from 'semantic-ui-react';

export default () => {
  return (
    <div className="ui segments" style={{ margin: 0, border: 'none' }}>
      <Segment inverted color="violet" textAlign="center">
        <Header content="Made by:" />
      </Segment>
      <div className="ui horizontal segments" style={{ margin: 0, border: 'none' }}>
        <Segment inverted color="violet" textAlign="center">
          <Header content="Valeriy Borodayev" />
          <a href="https://github.com/FrankAst" target="_blank" style={{ color: 'inherit' }}>
            <Icon name="github" size="large" link />
          </a>
          <a href="https://twitter.com/frankast_dev" target="_blank" style={{ color: 'inherit' }}>
            <Icon name="twitter" size="large" link />
          </a>
        </Segment>
        <Segment inverted color="violet" textAlign="center">
          <Header content="Konstantin Lyssenko" />
          <a href="https://github.com/lyskos97" target="_blank" style={{ color: 'inherit' }}>
            <Icon name="github" size="large" link />
          </a>
          <a href="https://twitter.com/lyskos97" target="_blank" style={{ color: 'inherit' }}>
            <Icon name="twitter" size="large" link />
          </a>
        </Segment>
      </div>
    </div>
  );
};
