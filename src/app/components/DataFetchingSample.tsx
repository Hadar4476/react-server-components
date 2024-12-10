import { use } from "react";
import { IUser } from "../types";

interface DataFetchingSample {
  fetchUsersPromise: Promise<unknown | IUser[]>;
}

const DataFetchingSample = ({ fetchUsersPromise }: DataFetchingSample) => {
  const users = use(fetchUsersPromise) as IUser[];

  const userElements = users.map((user) => {
    return (
      <li key={user._id}>
        {user.name}({user.title})
      </li>
    );
  });
  return (
    <div>
      <h2>A React Server Component with Data Fetching</h2>
      <p>
        Uses <strong>async / await</strong> for data fetching.
      </p>
      {userElements.length >= 0 && <ul>{userElements}</ul>}
    </div>
  );
};

export default DataFetchingSample;
