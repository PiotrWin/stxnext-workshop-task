import React from 'react';
import PropTypes from 'prop-types';

import classes from './Gallery.scss';

const gallery = (props) => {
  const galleryItems = props.links
    .map((link, id) => <img src={link} key={id} alt={`Animal ${id}`} />);
  return (
    <div className={classes.Gallery}>
      {galleryItems}
    </div>
  );
};

gallery.propTypes = {
  links: PropTypes.instanceOf(Array),
};

gallery.defaultProps = {
  links: [],
};

export default gallery;
