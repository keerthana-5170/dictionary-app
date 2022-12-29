import React from 'react';
import { Box,Typography,FilledInput,IconButton,Button} from '@material-ui/core';
import { Search as SearchIcon, Bookmark as BookmarkIcon} from '@material-ui/icons';
const Home = () => {
  return (
    <Box>
      <img src="/assets/book.png" alt="book"/>
      <Typography>Dictionary</Typography>
      <Typography>Find meaning real quick</Typography>
      <FilledInput />
      <IconButton>
        <BookmarkIcon />
      </IconButton>  
    </Box>
  )
}

export default Home;