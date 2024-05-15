import React from 'react';
import './topicsName.css';
import '../../../css/body.css';



export function TitleName({name}) {
    return (
        <h5>{name}</h5>
    );
};


export function TopicName({name}) {
    return (
        <h6>{name}</h6>
    );
  };