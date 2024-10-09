/* eslint-disable @next/next/no-img-element */
import React from 'react';

const ProtectImages: React.FC = () => {
    return (
        <div style={{ position: 'relative', display: 'inline-block' }}>
            <img src="" alt="" />
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                zIndex: 49,
                width: '100%',
                height: '100%'
            }}></div>
        </div>
    );
};

export default ProtectImages;
