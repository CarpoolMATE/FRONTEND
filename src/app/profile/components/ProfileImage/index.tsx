import Icon from '@/components/Icon';

type Props = {
  isEdit?: boolean;
  src: string;
};

const ProfileImageCard = ({ isEdit, src }: Props) => {
  return (
    <div
      style={{
        backgroundImage: `url(${src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className={`w-20 h-20 rounded-full bg-red-500 relative ${isEdit ? 'cursor-pointer' : 'cursor-default'}`}
    >
      {isEdit && (
        <div className="w-6 h-6 rounded-full bg-gray-light absolute right-0 bottom-0 text-placeholder flex items-center justify-center">
          <Icon icon="PENCEL" />
        </div>
      )}
    </div>
  );
};

export default ProfileImageCard;
