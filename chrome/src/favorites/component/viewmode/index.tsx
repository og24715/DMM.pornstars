import React from 'react';
import IconButton from '@mui/material/IconButton';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ViewComfyIcon from '@mui/icons-material/ViewComfy';

interface ViewModeProps {
  col: number;
  onToggle: () => void;
}

function ViewMode({ col, onToggle }: ViewModeProps) {
  return (
    <IconButton onClick={onToggle}>
      {col === 4 ? <ViewModuleIcon /> : <ViewComfyIcon />}
    </IconButton>
  );
}

export default ViewMode;
