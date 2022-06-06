import React from "react";

function ExtendedButton(prop){

    return (<button type="button" class="primary-btn">{prop.content}</button>);
}

function SmallButton(prop){
    
    return (
        <button type="button" class="secondary-btn">{prop.content}</button>
    );
}

export {ExtendedButton,SmallButton};