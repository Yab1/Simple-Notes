import { useSelector } from "react-redux";
import { AvatarSelector } from "../widgets";

function Profile() {
  const user = useSelector((state) => state.auth.user);

  return (
    <div className="grid gap-5 px-5 py-10">
      <form action="" className="grid grid-cols-5 grid-rows-2">
        <div className="avatar row-span-2 col-span-1 place-self-center">
          <div className="w-32 rounded">
            <img src={user.avatar} />
          </div>
        </div>

        <input
          type="text"
          placeholder="Username"
          value={user.username}
          onChange={() => console.log("Typing...")}
          className="input input-bordered w-full col-span-3 row-span-2 place-self-center"
        />

        <button
          type="submit"
          className="btn btn-neutral row-span-2 w-fit place-self-center bg-gray-800 hover:bg-gray-700"
        >
          Save Changes
        </button>
      </form>

      <AvatarSelector />
    </div>
  );
}

export default Profile;
