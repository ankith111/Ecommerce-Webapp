import React from 'react';
import "./Switch.scss";

export default function Switch({isToggled, onToggle}) {
  return (
    <>
         <label class="switch">
            <input type="checkbox"  checked={isToggled}  onChange={onToggle} />
            <span class="slider round"></span> 
        </label>
    </>
  )
}
