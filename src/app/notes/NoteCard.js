import * as React from 'react';
import { Card, Button, Input, TextArea, Form, Icon, Container } from 'semantic-ui-react';
import { format } from 'date-fns';

const NoteCard = ({ title, details, extra, updatedAt, onEdit }) => {
  return (
    <Card fluid color="violet" raised>
      <Card.Content>
        <Card.Header>
          {title}
          <Button onClick={onEdit} basic floated="right">
            Edit
          </Button>
        </Card.Header>
      </Card.Content>
      <Card.Content>
        <Card.Description>{details}</Card.Description>
      </Card.Content>
      {extra && <Card.Content extra>{extra}</Card.Content>}
      <Card.Content extra>Last updated: {format(updatedAt, 'HH:mm, DD MMM YYYY')}</Card.Content>
    </Card>
  );
};

export default NoteCard;
