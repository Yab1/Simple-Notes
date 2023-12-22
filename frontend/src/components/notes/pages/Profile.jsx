import { AvatarSelector } from "../widgets";

function Profile() {
  return (
    <div className="grid gap-5">
      <form action="" className="grid grid-cols-5 grid-rows-2">
        <div className="avatar row-span-2 col-span-1 place-self-center">
          <div className="w-32 rounded">
            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>

        <input
          type="text"
          placeholder="Username"
          className="input input-bordered w-full col-span-3"
        />
        <input
          type="text"
          placeholder="Password"
          className="input input-bordered w-full row-start-2 col-span-3 col-start-2"
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
