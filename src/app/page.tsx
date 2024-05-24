import Hero from "@/components/Hero";
import Image from "next/image";
import Drawer from "@/components/Drawer";
import TimeLine from "@/components/TimeLine";
import Navbar from "@/components/Navbar";
import ScholershipCategories from "@/components/ScholershipCategories";

export default function Home() {
  return (
    <Drawer myClasses="">
      <Navbar myClasses="" />
      <Hero />
      <main className="flex flex-col items-center justify-center p-3 md:p-10">
        <ScholershipCategories />
      </main>
    </Drawer>
  );
}
