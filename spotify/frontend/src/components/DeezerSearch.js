import React, { useState } from 'react';
import { searchDeezer } from '../api';
import {
  Box,
  TextField,
  Button,
  Typography,
  List,
  ListItem,
  ListItemText,
  CircularProgress,
} from '@mui/material';

const DeezerSearch = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    try {
      const { data } = await searchDeezer(query);
      setResults(data.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: '#121212',
        color: '#fff',
        minHeight: '100vh',
        padding: 4,
        textAlign: 'center',
      }}
    >
      <Typography variant="h4" sx={{ marginBottom: 4 }}>
        Deezer Music Search
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 4 }}>
        <TextField
          variant="outlined"
          label="Search for a track"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          sx={{
            input: { color: '#fff' },
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: '#1DB954',
              },
              '&:hover fieldset': {
                borderColor: '#1DB954',
              },
            },
          }}
        />
        <Button
          variant="contained"
          onClick={handleSearch}
          sx={{
            backgroundColor: '#1DB954',
            color: '#fff',
            marginLeft: 2,
          }}
        >
          Search
        </Button>
      </Box>
      {loading ? (
        <CircularProgress sx={{ color: '#1DB954' }} />
      ) : (
        <List>
          {results.map((track) => (
            <ListItem key={track.id} sx={{ borderBottom: '1px solid #333' }}>
              <ListItemText
                primary={track.title}
                secondary={track.artist.name}
                sx={{ color: '#fff' }}
              />
            </ListItem>
          ))}
        </List>
      )}
    </Box>
  );
};

export default DeezerSearch;
