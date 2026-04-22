import Image from "next/image";
import { AlertCircle, Bug, ShieldCheck, Activity } from "lucide-react";

export function WaspInfoSection() {
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
            Wasp Infestations Are More Than <span className="text-[var(--brand-red)]">Just a Nuisance.</span>
          </h2>
          <p className="text-lg md:text-xl text-foreground/60 leading-relaxed max-w-2xl text-center">
            Wasps pose a significant safety risk with their painful stings and aggressive behavior. Protecting your home and family from these pests is crucial.
          </p>
        </div>

        {/* Bento Box Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 auto-rows-[minmax(200px,_auto)]">

          {/* Main Large Card */}
          <div className="md:col-span-2 group relative bg-gray-50 p-6 md:p-8 rounded-[2rem] border border-black/[0.03] hover:shadow-2xl hover:shadow-[var(--brand-red)]/10 transition-all duration-500 overflow-hidden flex flex-col justify-end min-h-[250px]">
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-transparent to-[var(--brand-red)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10 max-w-lg mt-auto">
              <div className="flex flex-row items-center gap-4 mb-4">
                <Bug className="w-8 h-8 text-[var(--brand-red)]" strokeWidth={2.5} />
                <h3 className="text-xl md:text-2xl font-bold text-foreground tracking-tight m-0">Their Stings Are Painful and Dangerous</h3>
              </div>
              <p className="text-lg text-foreground/70 leading-relaxed font-medium">
                Unlike bees, wasps can sting multiple times. For people with allergies, a single sting can trigger a severe reaction. Even if you are not allergic, multiple stings from an agitated nest can send you to the emergency room.
              </p>
            </div>
          </div>

          {/* Secondary Card 1 - Aggressive Behavior */}
          <div className="md:col-span-1 group relative bg-white p-6 md:p-8 rounded-[2rem] border border-black/[0.08] hover:border-[var(--brand-red)]/30 hover:shadow-xl hover:shadow-black/5 transition-all duration-500 flex flex-col justify-between">
            <div className="flex flex-row items-center gap-3 mb-4">
              <Activity className="w-8 h-8 text-[var(--brand-red)] group-hover:scale-110 transition-transform duration-500" strokeWidth={2.5} />
              <h3 className="text-xl md:text-2xl font-bold text-foreground tracking-tight m-0">They Get Aggressive Fast</h3>
            </div>
            <div>
              <p className="text-lg text-foreground/70 leading-relaxed">
                Wasps will defend their nest if they feel threatened. Just walking too close to one on your porch or in your eaves can set off a swarm. That makes outdoor areas unsafe for your family and pets.
              </p>
            </div>
          </div>

          {/* Secondary Card 2 - Nests Grow Quickly */}
          <div className="md:col-span-1 group relative bg-foreground p-6 md:p-8 rounded-[2rem] hover:shadow-2xl hover:shadow-black/20 transition-all duration-500 flex flex-col justify-between text-white overflow-hidden">
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
            <div className="relative z-10">
              <div className="flex flex-row items-center gap-3 mb-4">
                <AlertCircle className="w-8 h-8 text-white backdrop-blur-md" strokeWidth={2.5} />
                <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight m-0">Nests Grow Quickly</h3>
              </div>
              <p className="text-lg text-white/70 leading-relaxed">
                A small wasp nest in spring can turn into a colony of thousands by late summer. The longer you wait, the bigger and more dangerous the nest becomes.
              </p>
            </div>
          </div>

          {/* Secondary Card 3 - DIY Is Risky */}
          <div className="md:col-span-2 group relative bg-gradient-to-br from-gray-50 to-gray-100 p-6 md:p-8 rounded-[2rem] border border-black/[0.03] hover:shadow-xl transition-all duration-500 flex flex-col sm:flex-row items-center gap-6 overflow-hidden">
            <div className="flex-1 relative z-10">
              <div className="flex flex-row items-center gap-3 mb-4">
                <ShieldCheck className="w-8 h-8 text-[var(--brand-red)]" strokeWidth={2.5} />
                <h3 className="text-xl md:text-2xl font-bold text-foreground tracking-tight m-0">DIY Removal Is Risky</h3>
              </div>
              <p className="text-lg text-foreground/70 leading-relaxed max-w-xl">
                Spraying a wasp nest yourself often makes things worse. You agitate the colony, and they come after you. Professional treatment is safer and actually gets rid of the whole nest, not just the wasps you can see flying around.
              </p>
            </div>
            <div className="w-full sm:w-1/3 aspect-[2/1] sm:aspect-square relative rounded-xl overflow-hidden shadow-sm border border-white">
                <Image
                  src="/clean_kitchen_counter.png"
                  alt="A safe, wasp-free home environment"
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
