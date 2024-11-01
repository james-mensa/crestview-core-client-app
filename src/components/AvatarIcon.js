import React from 'react';
import { Box} from '@mui/material';
import PropTypes from 'prop-types';
import { Label } from './Label';
import { grey } from '@mui/material/colors';

const styles = {
    authAvatar: {
        borderRadius: 20,
        backgroundColor: grey[100],
        height: '40px',
        width: '40px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        overflow:'hidden',
        

    },
    img: {
        objectFit: 'contain',
        cursor: 'pointer',
        transition: 'transform 0.3s'
    },
    initials: {
     fontWeight:'600'
    },
};

const AvatarIcon = ({ icon, alias, onClick }) => {
    const hasIcon = Boolean(icon);
    return (
        <Box sx={styles.authAvatar} onClick={onClick}>
            {hasIcon ? (
                <img src={icon} alt="avatar" style={styles.img} />
            ) : (
                <Label sx={styles.initials}>{alias}</Label>
            )}
        </Box>
    );
};

// PropTypes 
AvatarIcon.propTypes = {
    icon: PropTypes.string,
    alias: PropTypes.string.isRequired,
    onClick: PropTypes.func,
};

AvatarIcon.defaultProps = {
    icon: null,
    onClick: () => {},
};

export default AvatarIcon;
