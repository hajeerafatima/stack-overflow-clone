import React, { useState } from 'react';

const UploadProfile = () => {
    const [file, setFile] = useState();
    const [labelVisible, setLabelVisible] = useState(true);

    const handleChange = (e) => {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
        setLabelVisible(false); 
    };

    return (
        <div>
            <div>
                <img
                    src={file}
                    alt='user'
                    style={{ height: '200px', width: '200px', borderRadius: '50%' }}
                />
            </div>
            {labelVisible && (
                <label htmlFor='profile-upload' style={{ cursor: 'pointer', fontSize: '25px', border:'2px solid black', borderRadius:'5px', backgroundColor:'pink', padding:'5px' }}>
                    Upload Profile
                    <input type='file' id='profile-upload' accept='/image' onChange={handleChange} style={{ display: 'none' }}/>
                </label>
            )}
        </div>
    );
};

export default UploadProfile;
