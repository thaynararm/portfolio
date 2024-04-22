import React from 'react';
import './topicsName.css';
import '../../../css/body.css';


export function TopicName({name}) {
    return (
        <div>
            <h5 className="h5">{name}</h5>
        </div>
    );
  };


export function TitleName({name}) {
    return (
        <div>
            <h4 class="h4">{name}</h4>
        </div>
    );
};
