import * as React from 'react';
import Box from '@mui/material/Box';
import q1 from '../../Assets/1a.jpg'
import q2 from '../../Assets/1b.jpg'
import q3 from '../../Assets/1c.jpg'

export default function SimplePaper({ data }) {
  return (
    <Box
        sx={{
        justifyContent: 'center',
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 128,
          height: 128,
        },
      }}
    >
      <img
        src={q2}
        alt="fighter"
        style={{borderRadius: '25px'}}
      />
      <img
        src={q1}
        alt="fighter"
        style={{borderRadius: '25px' , backgroundColor: '#d3d3d3'}}
      />
      <img
        src={q3}
        alt="fighter"
        style={{borderRadius: '25px'}}
    />
    </Box>
  );
}