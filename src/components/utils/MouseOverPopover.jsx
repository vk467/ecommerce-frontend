import { Box, Button, Tooltip } from '@mui/material';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MouseOverPopover = ({label, list}) => {

  const [anchorEl, setAnchorEl] = useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const navigate = useNavigate();
  const handleItem = (event) => {
    navigate({
      pathname: '/products',
      search: '?category='+event.target.id,
    });
  }
  
  return (
    <div>
      <Button
        key={label}
        id={label}
        onMouseEnter={handlePopoverOpen}
        // onMouseLeave={handlePopoverClose}
        sx={{ my: 2, color: 'white', display: 'block' }}
      >
        {label}
      </Button>
      <Popover
        id="mouse-over-popover"
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        onClose={handlePopoverClose}
        
      >
        <Box m={2}>
        {
        list.map((item)=>(
          <Tooltip title={item} placement='right-end'>
          <Typography id={item} variant="subtitle2" sx={{pb:1, cursor:'pointer'}} onClick={handleItem}>{item}</Typography>
          </Tooltip>
        ))
        }
        </Box>
      </Popover>
    </div>
  );
}

export default MouseOverPopover;