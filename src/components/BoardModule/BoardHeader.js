import React from 'react';
import '../../styles/Main.css';
import { Button } from '@material-ui/core';


function BoardHeader( { canBeAdded, boardName, boardId, type, colorBg, form_preview } ) {
    return (
        <div className="boardheader">
            <div className="boardheader__body">
                <div className="titlebody">
                    <Button onClick = {()=>{form_preview(true); }}>Form</Button>
                    <Button onClick = {()=>{form_preview(false); }}>Preview</Button>
                </div>
            </div>

        </div>
    );
}

export default BoardHeader;
