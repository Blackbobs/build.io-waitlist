import { Layout } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-full w-full md:overflow-hidden">
      <div className="p-2"><h1 className='logo_gradient text-2xl font-bold'>build.io</h1></div>
     <Layout/>
    </main>
  );
}
