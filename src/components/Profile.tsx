type option = {
  name: string;
  imageId: string;
};

const Profile = ({ name, imageId }: option) => {
  const imageUrl = `https://i.imgur.com/${imageId}s.jpg`;
  return <img className="avatar" src={imageUrl} alt={name} />;
};

export { Profile };
