import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <main className="">
      <h1>Dropbox clone</h1>

      <UserButton />
    </main>
  );
}
