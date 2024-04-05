import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getAllUsers } from "@/models/User";
import { IUserForm } from "@/types";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

/**
 * This component displays a list of users fetched from the server.
 */
export default function UserList() {
  const [users, setUsers] = useState<IUserForm[]>([]);
  const [loaded, setLoaded] = useState<boolean | null>(false);

  /**
   * Function to load users from the server.
   */
  const load = async () => {
    const data = await getAllUsers();
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setUsers(data.payload);
      setLoaded(true);
    }
  };

  useEffect(() => {
    load();
  }, []);

  if (loaded === null) {
    return (
      <div className="spacing-y-4 flex h-screen flex-col items-center justify-center">
        <h2 className="text-4xl font-bold">Users Not Found</h2>
      </div>
    );
  }

  if (!loaded)
    return <h1 className="text-xl font-semibold">Loading user...</h1>;

  return (
    <section className="grid grid-flow-row-dense grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {users.map((user) => (
        <Card key={user._id}>
          <CardHeader>
            <CardTitle>
              {user.firstName} {user.lastName}
            </CardTitle>
            <CardDescription className="break-all">{user._id}</CardDescription>
          </CardHeader>
          <CardContent>Age: {user.age}</CardContent>
          <CardFooter className="flex justify-end gap-2">
            <Link to={`/user/${user._id}`}>
              <Button className="bg-blue-600 text-white hover:bg-blue-600/90">
                View
              </Button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </section>
  );
}
