import { useState, useEffect } from "react";
import { createAvatar } from "@dicebear/core";
import { bottts } from "@dicebear/collection";

const AvatarSelector = () => {
  const [avatars, setAvatars] = useState([]);

  useEffect(() => {
    const generateAvatars = () => {
      const newAvatars = [];
      for (let i = 0; i < 36; i++) {
        const seed = Math.random().toString(3);
        const avatar = createAvatar(bottts, {
          seed: seed,
          size: 70,
        }).toDataUriSync();
        newAvatars.push(avatar);
      }
      setAvatars(newAvatars);
    };

    generateAvatars();
  }, []);

  const handleAvatarSelect = (avatar) => {
    console.log("Selected avatar:", avatar);
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="font-medium text-xl capitalize">Change your avatar</h2>
      <div className="grid grid-cols-9 gap-y-8">
        {avatars.map((avatar, index) => (
          <div
            key={index}
            className="btn btn-link"
            onClick={() => handleAvatarSelect(avatar)}
          >
            <img src={avatar} alt={`Avatar ${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AvatarSelector;
