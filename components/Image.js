import NextImage from 'next/image';
import styles from '../styles/Image.module.css';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';

const Image = ({ width, maxWidth, ...rest }) => {
  const theme = useTheme();
  const mobileSize = useMediaQuery(theme.breakpoints.down('md'));

  let widths = {};
  width ? (widths['width'] = width) : '100%';
  maxWidth ? (widths['maxWidth'] = maxWidth) : '100%';

  if (mobileSize) {
    widths['width'] = '100%';
    widths['maxWidth'] = '100%';
  }

  return (
    <div className={styles.imageContainer} style={widths}>
      <NextImage className={styles.image} {...rest} />
    </div>
  );
};

export default Image;
