import React from 'react';

export default function Header(props){
    return(
        <>
        <header className="header">
            <h1>Desafio ReactJS</h1>
            <h2>{props.title}</h2>
            <hr/>
        </header>
        </>
    );
}