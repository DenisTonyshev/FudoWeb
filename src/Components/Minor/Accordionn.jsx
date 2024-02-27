import * as React from 'react';
import MuiAccordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function CustomAccordion({ data={} }) {
    // Destructure the object within the component
    const { question, answer } = data;
  return (
    <MuiAccordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
      {question}
      </AccordionSummary>
      <AccordionDetails sx={{backgroundColor:"#d3d3d3"}}>
      {answer}
      </AccordionDetails>
  </MuiAccordion>
    );
}
