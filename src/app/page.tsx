import Hero from "@/components/Hero";
import Image from "next/image";
import Drawer from "@/components/Drawer";
import UpcomingEvent from "@/components/UpcomingEvent";
import Navbar from "@/components/Navbar";
import ScholershipCategories from "@/components/ScholershipCategories";
import Footer from "@/components/Footer";
import RecentEvents from "@/components/RecentEvents";
import PresidentMessage from "@/components/PresidentMessage";
import Sponsors from "@/components/Sponsors";

export default function Home() {
  return (
    <Drawer myClasses="">
      <Navbar myClasses="" />
      <Hero />
      <main className="flex flex-col items-center justify-center p-3 md:p-10">
        <ScholershipCategories />
        <UpcomingEvent />
        <RecentEvents />
        <PresidentMessage />
        <Sponsors />
      </main>
      <Footer />
    </Drawer>
  );
}
