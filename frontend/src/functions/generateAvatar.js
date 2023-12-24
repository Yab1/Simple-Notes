import { createAvatar } from "@dicebear/core";
import { bottts } from "@dicebear/collection";

const generateAvatar = () => {
  const seed = Math.random().toString(3);
  const avatar = createAvatar(bottts, {
    seed: seed,
    size: 70,
  }).toDataUriSync();

  return avatar;
};

export default generateAvatar;
