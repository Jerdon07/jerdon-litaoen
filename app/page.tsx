import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 justify-center bg-zinc-950 font-sans dark:bg-black">
      <div className="pl-20">
        <h1 className="text-4xl font-semibold">Hi, I'm Jerdon Litaoen,</h1>
        <h2 className="text-emerald-500 text-5xl font-semibold">web developer</h2>
      </div>

      <div className="absolute bottom-0 right-0 h-120 w-120">
        <div className="absolute inset-0 bg-emerald-800 rounded-tl-full"></div>
    
        <img 
          src="/profile.png" 
          alt="Profile" 
          className="absolute right-10 w-full h-full object-cover grayscale-50" 
        />
      </div>
    </div>
  );
}
