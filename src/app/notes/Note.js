import * as React from 'react';
import axios from 'axios';

import NoteEditForm from './NoteEditForm';
import NoteCard from './NoteCard';

const EDIT_NOTE_MUTATION = `
  mutation EditNote($id: String!, $title: String!, $details: String!, $extra: String!) {
    updateNote(id: $id, title: $title, details: $details, extra: $extra) {
      id
      title
    }
  }
`;

class Note extends React.Component {
  constructor(props) {
    super(props);

    const { id, title, details, extra } = props.note;

    this.state = {
      edit: false,
      loading: false,
      error: false,
      note: {
        id,
        title,
        details: details || '',
        extra: extra || ''
      }
    };
  }

  onSave = () => {
    const { mutate } = this.props;
    const { note } = this.state;

    try {
      this.setState({ loading: true }, async () => {
        const res = await axios.post('', {
          query: EDIT_NOTE_MUTATION,
          variables: note
        });

        this.setState({ edit: false, loading: false }, () => {
          this.props.refetchNotes();
        });
      });
    } catch (e) {
      console.log(e);
    }
  };

  onEdit = () => {
    this.setState({ edit: true });
  };

  onCancel = () => {
    const {
      note: { id, title, details, extra }
    } = this.props;

    this.setState({
      edit: false,
      note: {
        id,
        title,
        details: details || '',
        extra: extra || ''
      }
    });
  };

  onChange = (e, { name, value }) => {
    this.setState({
      note: { ...this.state.note, [name]: value }
    });
  };

  render() {
    const { edit, note, loading } = this.state;

    return edit ? (
      <React.Fragment>
        <NoteEditForm
          {...note}
          loading={loading}
          updatedAt={this.props.note.updatedAt}
          onChange={this.onChange}
          onCancel={this.onCancel}
          onSave={this.onSave}
        />
      </React.Fragment>
    ) : (
      <NoteCard updatedAt={this.props.note.updatedAt} {...note} onEdit={this.onEdit} />
    );
  }
}

export default Note;
