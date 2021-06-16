import React from 'react';
import styled from 'styled-components';
import PropTypes from "prop-types";

const ImageEle = styled.img`
    width: 100%;
    max-width: ${(props) => props.maxwidth};
    height: ${(props) => props.maxwidth};
`;

export const Image = ({ imageUrl, maxwidth, height }) => {
    return (
        <>
            <ImageEle src={imageUrl} maxwidth={maxwidth} height={height} />
        </>
    )
}

Image.prototype = {
    imageUrl: PropTypes.string,
    maxwidth: PropTypes.string,
    height: PropTypes.string,
}

export default Image;
