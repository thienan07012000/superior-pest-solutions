import Image from "next/image";
import { Droplets, BookOpen, ShieldCheck, AlertCircle } from "lucide-react";

export function SilverfishInfoSection() {
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] bg-[var(--brand-red)]/5 rounded-full blur-[120px]" />
        <div className="absolute top-[60%] -left-[10%] w-[40%] h-[40%] bg-blue-50 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 gap-6">
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold tracking-tight text-foreground leading-[1.1]">
            Why Silverfish Are <span className="text-[var(--brand-red)]">a Real Problem.</span>
          </h2>
          <p className="text-lg md:text-xl text-foreground/60 leading-relaxed max-w-2xl text-center">
            Silverfish thrive in dark, humid spaces and quietly damage your belongings before you even know they&apos;re there. Here&apos;s what makes them so hard to ignore.
          </p>
        </div>

        {/* Bento Box Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 auto-rows-[minmax(200px,_auto)]">
          
          {/* Main Large Card */}
          <div className="md:col-span-2 group relative bg-gray-50 p-6 md:p-8 rounded-[2rem] border border-black/[0.03] hover:shadow-2xl hover:shadow-[var(--brand-red)]/10 transition-all duration-500 overflow-hidden flex flex-col justify-end min-h-[250px]">
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-transparent to-[var(--brand-red)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10 max-w-lg mt-auto">
              <div className="flex flex-row items-center gap-4 mb-4">
                <Droplets className="w-8 h-8 text-[var(--brand-red)]" strokeWidth={2.5} />
                <h3 className="text-xl md:text-2xl font-bold text-foreground tracking-tight m-0">They Love Moisture</h3>
              </div>
              <p className="text-lg text-foreground/70 leading-relaxed font-medium">
                Silverfish are drawn to damp, humid areas like bathrooms, kitchens, basements, and storage rooms. If there&apos;s moisture in your home, they&apos;ll find it and settle in. We target these high-risk zones to stop them where they live.
              </p>
            </div>
          </div>

          {/* Secondary Card 1 - Damage to Belongings */}
          <div className="md:col-span-1 group relative bg-white p-6 md:p-8 rounded-[2rem] border border-black/[0.08] hover:border-[var(--brand-red)]/30 hover:shadow-xl hover:shadow-black/5 transition-all duration-500 flex flex-col justify-between">
            <div className="flex flex-row items-center gap-3 mb-4">
              <BookOpen className="w-8 h-8 text-[var(--brand-red)] group-hover:scale-110 transition-transform duration-500" strokeWidth={2.5} />
              <h3 className="text-xl md:text-2xl font-bold text-foreground tracking-tight m-0">They Eat Your Stuff</h3>
            </div>
            <div>
              <p className="text-lg text-foreground/70 leading-relaxed">
                Books, papers, old photos, clothing, cardboard boxes. Silverfish chew through all of it. By the time you notice the damage, they&apos;ve usually been at it for a while.
              </p>
            </div>
          </div>

          {/* Secondary Card 2 - Multiply Silently */}
          <div className="md:col-span-1 group relative bg-foreground p-6 md:p-8 rounded-[2rem] hover:shadow-2xl hover:shadow-black/20 transition-all duration-500 flex flex-col justify-between text-white overflow-hidden">
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
            <div className="relative z-10">
              <div className="flex flex-row items-center gap-3 mb-4">
                <AlertCircle className="w-8 h-8 text-white backdrop-blur-md" strokeWidth={2.5} />
                <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight m-0">They Spread Silently</h3>
              </div>
              <p className="text-lg text-white/70 leading-relaxed">
                Silverfish multiply quickly and move through your home without you noticing. By the time you see one, there are usually many more hiding nearby.
              </p>
            </div>
          </div>

          {/* Secondary Card 3 - Protect Your Belongings */}
          <div className="md:col-span-2 group relative bg-gradient-to-br from-gray-50 to-gray-100 p-6 md:p-8 rounded-[2rem] border border-black/[0.03] hover:shadow-xl transition-all duration-500 flex flex-col sm:flex-row items-center gap-6 overflow-hidden">
            <div className="flex-1 relative z-10">
              <div className="flex flex-row items-center gap-3 mb-4">
                <ShieldCheck className="w-8 h-8 text-[var(--brand-red)]" strokeWidth={2.5} />
                <h3 className="text-xl md:text-2xl font-bold text-foreground tracking-tight m-0">Your Belongings Deserve Better.</h3>
              </div>
              <p className="text-lg text-foreground/70 leading-relaxed max-w-xl">
                Family photos, important documents, your favorite clothes. Silverfish don&apos;t care what matters to you. We treat the whole problem so your things stay safe, not just the ones you can see crawling around.
              </p>
            </div>
            <div className="w-full sm:w-1/3 aspect-[2/1] sm:aspect-square relative rounded-xl overflow-hidden shadow-sm border border-white">
                <Image 
                  src="/clean_bookshelf.png"
                  alt="A clean, well-organized bookshelf in a modern home"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
