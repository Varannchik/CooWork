import React, { useState } from 'react';

export default function Base(props){
    return(
        <div>
            <span class="name"></span>
            <div class="chat-window"></div>
            <input type="text">
            <button type="button">Send</button>
        </div>
    );
}