type ProfileCorporateAvatarProps = {
  name: string;
};

export default function ProfileCorporateAvatar({ name }: ProfileCorporateAvatarProps) {
  const initial = name.trim().charAt(0).toUpperCase() || "?";

  return (
    <div className="profile__corporate-avatar" aria-hidden="true">
      <svg
        className="profile__corporate-avatar-icon"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="8" y="18" width="32" height="22" rx="3" fill="#0c4642" />
        <path
          d="M14 18V14C14 10.6863 16.6863 8 20 8H28C31.3137 8 34 10.6863 34 14V18"
          stroke="#a0ff27"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <rect x="21" y="28" width="6" height="12" rx="1" fill="#a0ff27" />
        <rect x="14" y="23" width="5" height="5" rx="1" fill="#a0ff27" opacity="0.85" />
        <rect x="29" y="23" width="5" height="5" rx="1" fill="#a0ff27" opacity="0.85" />
      </svg>
      <span className="profile__corporate-avatar-badge">{initial}</span>
    </div>
  );
}
