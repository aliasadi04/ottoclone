import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  justify-center">
      <div className="grid grid-cols-2 items-center">
        <div className="text-[250px] w-72 h-72 flex justify-center font-bold">
          O
        </div>
        <div className="text-[250px] w-72 h-72  flex justify-center font-bold">
          T
        </div>
        <div className="text-[250px] w-72 h-72 flex justify-center font-bold">
          T
        </div>
        <div className="text-[250px] w-72 h-72 flex justify-center font-bold">
          O
        </div>
      </div>
    </main>
  );
}
