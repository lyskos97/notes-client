import * as React from 'react';
import { Card, Button, Input, TextArea, Form, Icon, Container } from 'semantic-ui-react';
import { format } from 'date-fns';

const NoteEditForm = ({ loading, onCancel, onChange, onSave, ...note }) => {
  const { title, details, updatedAt, extra } = note;

  return (
    <Card fluid>
      <Card.Content>
        <Card.Header>
          <Input onChange={onChange} icon={<Icon name="edit" />} name="title" fluid value={title} />
        </Card.Header>
      </Card.Content>
      <Card.Content>
        <Form>
          <TextArea autoHeight onChange={onChange} name="details" value={details} />
        </Form>
      </Card.Content>
      <Card.Content extra>
        <Input onChange={onChange} icon={<Icon name="edit" />} name="extra" fluid value={extra} />
      </Card.Content>
      <Card.Content extra>Last updated: {format(updatedAt, 'HH:mm, DD MMM YYYY')}</Card.Content>
      <Card.Content>
        <Button onClick={onSave} loading={loading} basic color="teal" floated="right">
          Save
        </Button>
        <Button onClick={onCancel} basic color="red" floated="right">
          Cancel
        </Button>
      </Card.Content>
    </Card>
  );
};

export default NoteEditForm;
