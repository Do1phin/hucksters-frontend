// Core
import React from 'react';
import PropTypes from 'prop-types';

const AlbumPage = (props) => {

    const {album_id} = props;

    return(
        <span>Конкретный альбом № {album_id}</span>
    );
};

export {
    AlbumPage
};

AlbumPage.propTypes = {
    owner_id: PropTypes.number.isRequired,
    album_id: PropTypes.number.isRequired,
};
