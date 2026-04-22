import Image from "next/image";
import { AlertCircle, PawPrint, ShieldCheck, Activity } from "lucide-react";

export function FleaInfoSection() {
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
            Fleas Don't Just Bug Your Pets. <span className="text-[var(--brand-red)]">They Take Over Your Home.</span>
          </h2>
          <p className="text-lg md:text-xl text-foreground/60 leading-relaxed max-w-2xl text-center">
            Fleas can quickly infest pets, carpets, and furniture, causing itchy bites and discomfort for both humans and animals. Here's why you shouldn't wait to deal with them.
          </p>
        </div>

        {/* Bento Box Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 auto-rows-[minmax(200px,_auto)]">
          
          {/* Main Large Card */}
          <div className="md:col-span-2 group relative bg-gray-50 p-6 md:p-8 rounded-[2rem] border border-black/[0.03] hover:shadow-2xl hover:shadow-[var(--brand-red)]/10 transition-all duration-500 overflow-hidden flex flex-col justify-end min-h-[250px]">
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-transparent to-[var(--brand-red)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10 max-w-lg mt-auto">
              <div className="flex flex-row items-center gap-4 mb-4">
                <PawPrint className="w-8 h-8 text-[var(--brand-red)]" strokeWidth={2.5} />
                <h3 className="text-xl md:text-2xl font-bold text-foreground tracking-tight m-0">They Bite Everyone, Not Just Pets</h3>
              </div>
              <p className="text-lg text-foreground/70 leading-relaxed font-medium">
                Fleas cause painful, itchy bites on pets and humans. If your dog or cat keeps scratching, chances are the fleas have already moved into your carpets and furniture too. We help Northwest Arkansas families stop the cycle before it gets worse.
              </p>
            </div>
          </div>

          {/* Secondary Card 1 - Health Risks */}
          <div className="md:col-span-1 group relative bg-white p-6 md:p-8 rounded-[2rem] border border-black/[0.08] hover:border-[var(--brand-red)]/30 hover:shadow-xl hover:shadow-black/5 transition-all duration-500 flex flex-col justify-between">
            <div className="flex flex-row items-center gap-3 mb-4">
              <Activity className="w-8 h-8 text-[var(--brand-red)] group-hover:scale-110 transition-transform duration-500" strokeWidth={2.5} />
              <h3 className="text-xl md:text-2xl font-bold text-foreground tracking-tight m-0">They Spread Disease</h3>
            </div>
            <div>
              <p className="text-lg text-foreground/70 leading-relaxed">
                Fleas can carry tapeworms and Bartonella. Kids and pets are especially at risk. Getting rid of them early protects the whole family.
              </p>
            </div>
          </div>

          {/* Secondary Card 2 - Multiplication */}
          <div className="md:col-span-1 group relative bg-foreground p-6 md:p-8 rounded-[2rem] hover:shadow-2xl hover:shadow-black/20 transition-all duration-500 flex flex-col justify-between text-white overflow-hidden">
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
            <div className="relative z-10">
              <div className="flex flex-row items-center gap-3 mb-4">
                <AlertCircle className="w-8 h-8 text-white backdrop-blur-md" strokeWidth={2.5} />
                <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight m-0">They Multiply Fast</h3>
              </div>
              <p className="text-lg text-white/70 leading-relaxed">
                A single flea can lay up to 50 eggs a day. If you don't catch them early, a small problem turns into a full-blown infestation in just a couple weeks.
              </p>
            </div>
          </div>

          {/* Secondary Card 3 - Home Protection */}
          <div className="md:col-span-2 group relative bg-gradient-to-br from-gray-50 to-gray-100 p-6 md:p-8 rounded-[2rem] border border-black/[0.03] hover:shadow-xl transition-all duration-500 flex flex-col sm:flex-row items-center gap-6 overflow-hidden">
            <div className="flex-1 relative z-10">
              <div className="flex flex-row items-center gap-3 mb-4">
                <ShieldCheck className="w-8 h-8 text-[var(--brand-red)]" strokeWidth={2.5} />
                <h3 className="text-xl md:text-2xl font-bold text-foreground tracking-tight m-0">Your Home Deserves Better.</h3>
              </div>
              <p className="text-lg text-foreground/70 leading-relaxed max-w-xl">
                Fleas hide deep in carpet fibers, furniture cushions, and pet bedding. Store-bought sprays barely scratch the surface. We treat the whole home so fleas don't keep coming back.
              </p>
            </div>
            <div className="w-full sm:w-1/3 aspect-[2/1] sm:aspect-square relative rounded-xl overflow-hidden shadow-sm border border-white">
                <Image 
                  src="/clean_living_room.png"
                  alt="A clean, cozy living room with a happy dog on a rug"
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
