'use client';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const handleClassSelect = (value: string) => {
    if (value !== "2" && value !== "3" && value !== "4") {
      router.push(`/class/${value}`);
    }
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center  p-8 z-0 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">


        <div className="flex flex-col gap-4 items-center text-center text-4xl">
          <p>Selecteer een klas.</p>
        </div>
        
        <div className="flex justify-center gap-4 items-center">
          <select 
            className="border rounded px-4 py-2 bg-white dark:bg-black text-black dark:text-white"
            onChange={(e) => handleClassSelect(e.target.value)}
            value="2"
          >
            <option value="2" disabled>2</option>
            <option value="2tca">2tca</option>
            <option value="2tcb">2tcb</option>
            <option value="2tcc">2tcc</option>
            <option value="2tcd">2tcd</option>
          </select>
          <select 
            className="border rounded px-4 py-2 bg-white dark:bg-black text-black dark:text-white"
            onChange={(e) => handleClassSelect(e.target.value)}
            value="3"
          >
            <option value="3" disabled>3</option>
            <option value="3tca">3tca</option>
            <option value="3tcb">3tcb</option>
            <option value="3tcc">3tcc</option>
            <option value="3tcd">3tcd</option>
          </select>
          <select 
            className="border rounded px-4 py-2 bg-white dark:bg-black text-black dark:text-white"
            onChange={(e) => handleClassSelect(e.target.value)}
            value="4"
          >
            <option value="4" disabled>4</option>
            <option value="4tca">4tca</option>
            <option value="4tcb">4tcb</option>
            <option value="4tcc">4tcc</option>
            <option value="4tcd">4tcd</option>
          </select>
        </div>
      </main>
    </div>
  );
}
