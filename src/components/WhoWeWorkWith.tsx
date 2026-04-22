import React from 'react';

const clients = [
  {
    title: "Families & Homes",
    description: "We help busy parents, first-time homebuyers, and pet owners keep their houses safe. Whether you’re raising a family or just moving in, we’ll make sure your home stays bug-free.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    )
  },
  {
    title: "Property Owners",
    description: "Whether you’re a young professional, an elderly homeowner, or a property manager, we look after your buildings. We handle the pests so you can focus on everything else.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
      </svg>
    )
  },
  {
    title: "Local Businesses",
    description: "We work with small businesses, real estate agents, and local schools or churches. We keep your space clean and welcoming for your customers and the community.",
    icon: (
      <span className="w-7 h-7 inline-block bg-current" style={{ WebkitMaskImage: 'url(/google-my-business.webp)', WebkitMaskSize: 'contain', WebkitMaskRepeat: 'no-repeat', WebkitMaskPosition: 'center', maskImage: 'url(/google-my-business.webp)', maskSize: 'contain', maskRepeat: 'no-repeat', maskPosition: 'center' }} />
    )
  }
];

interface WhoWeWorkWithProps {
  title?: React.ReactNode;
  description?: React.ReactNode;
}

export const WhoWeWorkWith: React.FC<WhoWeWorkWithProps> = ({ 
  title = <>Our clients are <span className="text-[var(--brand-red)]">family</span>.</>,
  description = "We look after the neighbors and businesses that make our town a great place to live."
}) => {
  return (
    <section className="py-12 md:py-24 bg-background relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col items-center text-center mb-10 md:mb-16 gap-8 max-w-3xl mx-auto">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
              {title}
            </h2>
            <p className="text-lg md:text-xl text-foreground/70 leading-relaxed">
              {description}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clients.map((client, index) => (
            <div
              key={index}
              className="group relative bg-white p-8 rounded-[2rem] border-2 border-gray-100 hover:border-[var(--brand-red)]/40 transition-all duration-500 hover:shadow-2xl hover:shadow-[var(--brand-red)]/5 overflow-hidden flex flex-col cursor-pointer"
            >
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center gap-4 mb-6 transition-all duration-300 text-foreground group-hover:translate-x-1">
                  <div className="w-12 h-12 rounded-xl bg-[var(--brand-red)]/5 flex items-center justify-center text-[var(--brand-red)] transition-all duration-300 group-hover:bg-[var(--brand-red)] group-hover:text-white shrink-0">
                    {client.icon}
                  </div>
                  <h3 className="text-2xl font-semibold tracking-tight">
                    {client.title}
                  </h3>
                </div>

                <p className="text-foreground/70 leading-relaxed flex-grow">
                  {client.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
