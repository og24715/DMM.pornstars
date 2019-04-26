import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import ViewComfyIcon from '@material-ui/icons/ViewComfy';

function ViewMode({ col, onToggle }) {
  return (
    <IconButton onClick={onToggle}>
      {col === 4 ? (
        <ViewModuleIcon />
      ) : (
        <ViewComfyIcon />
      )}
    </IconButton>
  );
}

export default ViewMode;
