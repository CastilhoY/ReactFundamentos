import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import Button from '../Button';
import { ThemeContext } from '../../context/ThemeContext';

const Title = styled.h1`
    color: #637BF3;
`

export default function Header(props){
    const { onToggleTheme } = useContext(ThemeContext);

    return (
        <>
            <Title>{props.title}</Title>
            <Button onClick={onToggleTheme}>
                Mudar Tema
            </Button>
            {props.children}
        </>
    )
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
}

Header.defaultProps = {
    title: `JStack's Blog`
}