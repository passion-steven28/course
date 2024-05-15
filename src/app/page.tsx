import { Button } from "@/components/ui/button";
import { auth } from "@/lib/db/firebase";
import { signOutUser } from "@/server/actions";
import { redirect } from "next/navigation";

export default async function Home() {
  const user = await auth.currentUser;
  console.log(user);

  if (!user) {
    // redirect('/sign-in')
  }


  return (
    <main>
      <h1>Hello World</h1>
      {/* {user.email} */}
      <form action={signOutUser}>
      <Button type="submit">sign out</Button>
      </form>
    </main>
  );
}
