import { ProfileRowProps } from '@/app/(client)/reservation-detail/apis/getReservationDetail/types';

import ProfileImage from '@/components/Image/Profile';

const ProfileRow = ({ url, text }: ProfileRowProps) => {
  return (
    <div className="flex items-center gap-2">
      <ProfileImage url={url} className="border border-placeholder" />
      <span className="text-default">{text}</span>
    </div>
  );
};

export default ProfileRow;
