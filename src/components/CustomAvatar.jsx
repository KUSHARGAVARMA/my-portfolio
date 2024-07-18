import React from 'react';
import Avatar from 'avataaars';

const CustomAvatar = ({ size = '100px' }) => {
  return (
    <Avatar
      style={{ width: size, height: size }}
      avatarStyle='Circle'
      topType='ShortHairShortFlat'
      accessoriesType='Blank'
      hairColor='Brown'
      facialHairType='Blank'
      clotheType='Hoodie'
      clotheColor='PastelBlue'
      eyeType='Default'
      eyebrowType='Default'
      mouthType='Smile'
      skinColor='Light'
    />
  );
};

export default CustomAvatar;
