import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';

export function TooltipOption({Icon, title}) {
    return (
        <Tooltip className="toolbar" title={title}>
            <IconButton >
                {Icon && <Icon />}
            </IconButton>
        </Tooltip>
    )
}
