import MainFront from "@/components/main/MainFront";
import Skills from "@/components/main/Skills";
import Experience from "@/components/main/Experience";
import ThoughtsPage from "@/components/main/Thoughts";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <MainFront />
        <Skills />
        <Experience />
        <ThoughtsPage />
      </div>
    </main>
  );
}
