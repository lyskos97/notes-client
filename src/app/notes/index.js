import * as React from 'react';
import { Message, Divider } from 'semantic-ui-react';
import axios from 'axios';

import Note from './Note';
import NoteListLoader from './NoteListLoader';
import NoteList from './NoteList';

const NOTES_QUERY = `
  {
    notes {
    id
    title
    details
    extra
    updatedAt
    }
  }
`;

class Notes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      error: null,
      notes: null
    };
  }

  componentDidMount() {
    this.fetchNotes();
  }

  fetchNotes = async () => {
    try {
      const res = await axios.post('', { query: NOTES_QUERY });
      const { notes } = res.data.data;

      console.log('notes', notes);

      this.setState({ notes, loading: false });
    } catch (e) {
      this.setState({ loading: false, error: true });
    }
  };

  render() {
    const { loading, error, notes } = this.state;

    if (error)
      return (
        <Message negative>
          <Message.Header>Something went wrong!</Message.Header>
          <p>We couldn't load your notes</p>
        </Message>
      );

    if (loading)
      return (
        <React.Fragment>
          <h1>Your Notes</h1>
          <Divider />
          <NoteListLoader />
          <NoteListLoader />
          <NoteListLoader />
        </React.Fragment>
      );

    return (
      <NoteList>
        {notes.map(note => <Note key={note.id} note={note} refetchNotes={this.fetchNotes} />)}
      </NoteList>
    );
  }
}

export default Notes;
