import Thoughts from "@/components/main/Thoughts";
export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Thoughts />  
      </div>
    </main>
  );
}