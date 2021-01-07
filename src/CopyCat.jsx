import React from 'react';
import styles from './styles';
import PropTypes from 'prop-types';

const CopyCat = (props) => {
  const { copying, toggleTape, images, input, handleChange, name } = props;
  return (
    <div style={styles.divStyles}>
      <h1 style={{ marginBottom: 80 }}>Copy Cat {name || 'Tom'}</h1>
      <h2>
        Type in the box below and click on the cat image to show/hide response
      </h2>
      <input type="text" value={input} onChange={handleChange} />
      <img
        alt="cat"
        src={copying ? images.copycat : images.quietcat}
        onClick={toggleTape}
        style={styles.imgStyles}
      />
      <p>{copying ? input : null}</p>
    </div>
  );
};

CopyCat.propTypes = {
  copying: PropTypes.bool.isRequired,
  toggleTape: PropTypes.func.isRequired,
  input: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default CopyCat;
