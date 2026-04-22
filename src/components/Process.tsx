import React from 'react';

const processSteps = [
  {
    number: "1",
    title: "We Do It Right",
    description: "We use safe products and proven methods. No shortcuts, no guessing, no cutting corners."
  },
  {
    number: "2",
    title: "Pests Come Back? So Do We.",
    description: "If you’re still seeing bugs after we treat, we’ll come back out at no charge. That’s our promise."
  },
  {
    number: "3",
    title: "People Actually Recommend Us",
    description: "Our neighbors in NWA trust us and tell their friends. We’re honest, we show up, and we get the job done."
  },
  {
    number: "4",
    title: "We Show Up When We Say",
    description: "Text or call us and we’ll be there. No sitting around waiting for a four-hour window."
  },
  {
    number: "5",
    title: "We Live Here Too",
    description: "Our guys are licensed and live right here in NWA. They know exactly what pests to look for and where."
  },
  {
    number: "6",
    title: "Six Years and Still Going",
    description: "We’ve been doing this for six years in Arklahoma and our clients keep coming back. That says a lot."
  }
];

interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

interface ProcessProps {
  title?: React.ReactNode;
  description?: React.ReactNode;
  steps?: ProcessStep[];
}

export const Process: React.FC<ProcessProps> = ({
  title = <>Here's what you actually get <br /><span className="text-[var(--brand-red)]"> when you hire us.</span></>,
  description = (
    <>
      <p>
        As your Northwest Arkansas exterminator, we follow a proven pest control process designed to deliver long-lasting results. It starts with a detailed inspection of your home or business to identify pest types, entry points, and areas of concern. Next, our licensed technicians create a treatment plan that targets the infestation using safe, effective products. We then apply precise treatments to eliminate pests while minimizing disruption to your family, pets, or workplace.
      </p>
      <p>
        Finally, we provide ongoing prevention strategies and, if needed, recommend regular maintenance spraying to keep your property pest-free year-round. Our step-by-step pest control process ensures peace of mind and a healthier environment.
      </p>
    </>
  ),
  steps = processSteps
}) => {
  return (
    <section className="py-12 md:py-24 bg-background relative overflow-hidden">
      {/* Background Pattern (Same as Services) */}
      <div
        className="absolute inset-0 opacity-[0.4] pointer-events-none"
        style={{
          backgroundImage: "url('/bug-pattern.png')",
          backgroundRepeat: 'repeat',
          backgroundSize: '400px'
        }}
      />

      {/* Faded Gradient Blurs */}
      <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-background to-transparent pointer-events-none z-0" />
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-background to-transparent pointer-events-none z-0" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col items-center text-center mb-10 md:mb-16 gap-8 max-w-4xl mx-auto">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
              {title}
            </h2>

            <div className="flex flex-col gap-6 text-lg md:text-xl text-foreground/70 leading-relaxed font-medium text-center">
              {description}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative bg-white p-6 rounded-[2rem] shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-black/5 hover:border-[var(--brand-red)]/20 transition-all duration-700 hover:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] hover:-translate-y-2 flex flex-col"
            >
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-3">
                  {/* Number Badge */}
                  <div className="w-11 h-11 shrink-0 bg-foreground rounded-[1rem] flex items-center justify-center text-white text-lg font-bold shadow-[0_8px_16px_-4px_rgba(0,0,0,0.2)] group-hover:bg-[var(--brand-red)] transition-colors duration-500 transform group-hover:rotate-12">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold tracking-tight group-hover:text-[var(--brand-red)] transition-colors duration-300">
                    {step.title}
                  </h3>
                </div>

                <p className="text-foreground/70 leading-relaxed font-medium">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
