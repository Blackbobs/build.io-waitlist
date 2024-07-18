import { Layout } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-screen w-full">
      <div className="p-2"><h1 className='logo_gradient text-2xl font-bold'>build.io</h1></div>
     <Layout/>
    </main>
  );
}
