import React from 'react'
import Link from 'next/link';


 function Home() {
  return (
    <div className="flex flex-col w-full bg-slate-200">
      
      <h1 className="lg:text-xl space-x-6 py-2 sm:text 5x1 text-blue-400 sm:text 5x1">
  Featured New Cars
</h1>
  
<div className="sm:justify-start text-xl sm:text-2xl md:text-3xl lg:text-xl space-x-6 py-2 border-b border-slate-500">
  <Link href="/" className="text-black hover:underline hover:text-slate-400">Popular</Link>
  <Link href="/" className="text-black hover:underline hover:text-slate-400">UpComing</Link>
  <Link href="/" className="text-black hover:underline hover:text-slate-400">Newly Launched</Link>
</div>
</div>
     );
}
export default Home
