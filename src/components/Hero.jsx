import { UserPlus } from "lucide-react";
import User from "./User";

const getData = async () => {
  const res = await fetch(process.env.Base_Url + "/api/users", { cache: "no-store" });
  const users = await res.json();
  return users.result;
}


const Hero = async () => {
  const users = await getData();

  return (
    <section className='py-10'>
      <div className="container">
        <div>
          <h1 className='text-2xl font-semibold font-inter '>User List</h1>
          <div className="list_items mt-8 grid gap-3">
            {
              users.length !== 0 && users.map(user =>
                <User key={user._id} userInfo={user} />
              )
            }
          </div>
          <div className="mt-5 flex items-center justify-end">
            <button className="addBtn text-gray-100 bg-green-600 hover:bg-green-700 capitalize">
              <UserPlus className="mr-1" /> Add User
            </button>
          </div>
        </div>
        <div>

        </div>
      </div>
    </section>
  )
}

export default Hero