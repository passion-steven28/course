import HeroSection from "@/components/HeroSection";
import { Button } from "@/components/ui/button";
import { auth } from "@/lib/db/firebase";
import { signOutUser } from "@/server/actions";


export default async function Home() {
  const user = await auth.currentUser;
  console.log(user);

  if (!user) {
    // redirect('/sign-in')
  }


  return (
    <main className="grid grid-cols-12 min-h-screen">
      <section className="col-start-3 col-end-11 max-h-screen">
        <HeroSection />
      </section>
      {/* <form onSubmit={signOutUser}>
        <Button type="submit">sign out</Button>
      </form> */}
    </main>
  );
}
