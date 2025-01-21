import { Accordion, AccordionDetails, AccordionSummary, TextField, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import style from './InputPanel.module.css'
import { CubeDimensions } from '../Types/CubeDimensions';

interface IInputPanel {
  onInputChanged: (cubeDimensions: CubeDimensions) => void;
}

const InputPanel: React.FC<IInputPanel> = ({ onInputChanged }) => {
  const [width, setWidth] = React.useState(3);
  const [height, setHeight] = React.useState(3);
  const [depth, setDepth] = React.useState(3);

  useEffect(() => {
    onInputChanged({width, height,depth} as CubeDimensions);
  }, [width,height,depth]);

  return (
    <Accordion defaultExpanded className={style.floatPanel} sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        <Typography component="span">Cube Dimensions</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <div>
          <TextField
            label="Width"
            type="number"
            variant="standard"
            slotProps={{
              inputLabel: {
                shrink: true,
              },
            }}
            value={width}
            onChange={(e) => setWidth(Number(e.target.value))}
          />
        </div>
        <div>
          <TextField
            label="Height"
            type="number"
            variant="standard"
            slotProps={{
              inputLabel: {
                shrink: true,
              },
            }}
            value={height}
            onChange={(e) => setHeight(Number(e.target.value))}
          />
        </div>
        <div>
          <TextField
            label="Depth"
            type="number"
            variant="standard"
            slotProps={{
              inputLabel: {
                shrink: true,
              },
            }}
            value={depth}
            onChange={(e) => setDepth(Number(e.target.value))}
          />
        </div>
      </AccordionDetails>
    </Accordion>
  );
};

export default InputPanel;
