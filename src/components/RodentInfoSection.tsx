import { AlertCircle, Flame, ShieldCheck, Activity } from "lucide-react";

export function RodentInfoSection() {
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
            Why Rodents Are a <span className="text-[var(--brand-red)]">Serious Problem</span>
          </h2>
          <p className="text-lg md:text-xl text-foreground/60 leading-relaxed max-w-2xl text-center">
            Rodents spread diseases, damage your home, and move silently inside your walls. Here&apos;s why you should not wait to deal with them.
          </p>
        </div>

        {/* Bento Box Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 auto-rows-[minmax(200px,_auto)]">
          
          {/* Main Large Card */}
          <div className="md:col-span-2 group relative bg-gray-50 p-6 md:p-8 rounded-[2rem] border border-black/[0.03] hover:shadow-2xl hover:shadow-[var(--brand-red)]/10 transition-all duration-500 overflow-hidden flex flex-col justify-end min-h-[250px]">
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-transparent to-[var(--brand-red)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10 max-w-lg mt-auto">
              <div className="flex flex-row items-center gap-4 mb-4">
                <Activity className="w-8 h-8 text-[var(--brand-red)]" strokeWidth={2.5} />
                <h3 className="text-xl md:text-2xl font-bold text-foreground tracking-tight m-0">They Carry Diseases</h3>
              </div>
              <p className="text-lg text-foreground/70 leading-relaxed font-medium">
                Mice and rats carry salmonella, hantavirus, and other harmful bacteria. They leave droppings and urine everywhere they go, including your kitchen counters, pantry shelves, and storage areas. If your family is getting sick and you can&apos;t figure out why, rodents could be the reason.
              </p>
            </div>
          </div>

          {/* Secondary Card 1 - Wiring Damage */}
          <div className="md:col-span-1 group relative bg-white p-6 md:p-8 rounded-[2rem] border border-black/[0.08] hover:border-[var(--brand-red)]/30 hover:shadow-xl hover:shadow-black/5 transition-all duration-500 flex flex-col justify-between">
            <div className="flex flex-row items-center gap-3 mb-4">
              <Flame className="w-8 h-8 text-[var(--brand-red)] group-hover:scale-110 transition-transform duration-500" strokeWidth={2.5} />
              <h3 className="text-xl md:text-2xl font-bold text-foreground tracking-tight m-0">They Chew Through Wiring</h3>
            </div>
            <div>
              <p className="text-lg text-foreground/70 leading-relaxed">
                Rodents love to chew on electrical wires, and that creates a real fire hazard. A lot of house fires are caused by rodent damage that nobody even knew about.
              </p>
            </div>
          </div>

          {/* Secondary Card 2 - Silent Invasion */}
          <div className="md:col-span-1 group relative bg-foreground p-6 md:p-8 rounded-[2rem] hover:shadow-2xl hover:shadow-black/20 transition-all duration-500 flex flex-col justify-between text-white overflow-hidden">
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
            <div className="relative z-10">
              <div className="flex flex-row items-center gap-3 mb-4">
                <AlertCircle className="w-8 h-8 text-white backdrop-blur-md" strokeWidth={2.5} />
                <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight m-0">They Move Silently</h3>
              </div>
              <p className="text-lg text-white/70 leading-relaxed">
                Rodents travel inside your walls and attic where you can&apos;t see them. By the time you hear scratching or find droppings, the problem is already bigger than you think.
              </p>
            </div>
          </div>

          {/* Secondary Card 3 - Contamination */}
          <div className="md:col-span-2 group relative bg-gradient-to-br from-gray-50 to-gray-100 p-6 md:p-8 rounded-[2rem] border border-black/[0.03] hover:shadow-xl transition-all duration-500 flex flex-col sm:flex-row items-center gap-6 overflow-hidden">
            <div className="flex-1 relative z-10">
              <div className="flex flex-row items-center gap-3 mb-4">
                <ShieldCheck className="w-8 h-8 text-[var(--brand-red)]" strokeWidth={2.5} />
                <h3 className="text-xl md:text-2xl font-bold text-foreground tracking-tight m-0">They Attract More Pests</h3>
              </div>
              <p className="text-lg text-foreground/70 leading-relaxed max-w-xl">
                Rodents bring fleas, mites, and even roaches with them. Once mice or rats settle in, other pests follow because of the food scraps and nesting materials they leave behind. Getting rid of rodents early stops a much bigger pest problem from building up.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
