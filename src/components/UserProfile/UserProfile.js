import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import userImg from '../../images/user.png';
import './UserProfile.css';
const UserProfile = () => {
    const user = {
        name: 'Imtyaz Ahmed',
        image: userImg,
        location: 'Dhaka, Bangladesh',
        bio: [{ weight: 75, height: 5.4, age: 24 }]
    };
    return (
        <div>
            <div className='user-profile'>
                <div className='user-img'>
                    <img src={user.image} alt="" />
                </div>
                <div className="user-info">
                    <h3>{user.name}</h3>
                    <small> <FontAwesomeIcon className='location-icon' icon={faLocationDot}></FontAwesomeIcon> {user.location}</small>
                </div>
            </div>
            <div className="bio-container">
                <div className='user-bio-item'>
                    <h2>
                        <span>{user.bio[0].weight}<small>kg</small></span>
                    </h2>
                    <p>Weight</p>
                </div>
                <div className='user-bio-item'>
                    <h2>
                        <span >{user.bio[0].height}</span>
                    </h2>
                    <p>Height</p>
                </div>
                <div className='user-bio-item'>
                    <h2>
                        <span>{user.bio[0].age}<small>yrs</small></span>
                    </h2>
                    <p>Age</p>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;