import React from 'react';
import PropTypes from 'prop-types';

const UserCard = ({ name, email, avatar }) => {
    return (
    <div style={styles.card}>
        <img src={avatar} alt={name} style={styles.avatar} />
        <h2>{name}</h2>
        <p>{email}</p>
    </div>
    );
};

UserCard.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
};

const styles = {
    card: {
    border: '1px solid #ccc',
    padding: '16px',
    borderRadius: '8px',
    width: '220px',
    textAlign: 'center',
    margin: '10px',
    boxShadow: '2px 2px 10px rgba(0,0,0,0.1)',
    },
    avatar: {
    width: '80px',
    borderRadius: '50%',
    marginBottom: '10px',
    },
};

export default UserCard;