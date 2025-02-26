import { useState } from 'react';

import Icon from '@/components/Icon';

type Props = {
  src: string;
  isEdit?: boolean;
  onChangeImage?: (file: File, url: string) => void;
};

const ProfileImageCard = ({ src, isEdit, onChangeImage }: Props) => {
  const [imageSrc, setImageSrc] = useState(src);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0] && onChangeImage) {
      const file = event.target.files[0];
      const newImageUrl = URL.createObjectURL(file);
      setImageSrc(newImageUrl);
      onChangeImage(file, newImageUrl);
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url(${imageSrc ?? src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className={`w-20 h-20 rounded-full bg-red-500 relative ${isEdit ? 'cursor-pointer' : 'cursor-default'}`}
      onClick={() => isEdit && document.getElementById('fileInput')?.click()}
    >
      {isEdit && (
        <div className="w-6 h-6 rounded-full bg-gray-light absolute right-0 bottom-0 text-placeholder flex items-center justify-center">
          <Icon icon="PENCEL" />
        </div>
      )}
      <input
        id="fileInput"
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleImageChange}
      />
    </div>
  );
};

export default ProfileImageCard;
