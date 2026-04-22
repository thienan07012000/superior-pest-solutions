"use client";
import React, { useState } from 'react';
import Image from 'next/image';

export const Community = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-12 sm:py-24 bg-background relative overflow-hidden">
      {/* Background Pattern (Same as Services/Process) */}
      <div
        className="absolute inset-0 opacity-[0.4] pointer-events-none"
        style={{
          backgroundImage: "url('/bug-pattern.png')",
          backgroundRepeat: 'repeat',
          backgroundSize: '400px'
        }}
      />

      {/* Top Fade Gradient */}
      <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-background to-transparent pointer-events-none z-0" />
      {/* Bottom Fade Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-background to-transparent pointer-events-none z-0" />

      <div className="max-w-[1200px] mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col items-center text-center mb-12 gap-6 max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-tight max-w-[1100px]">
            As seen on <span className="text-[var(--brand-red)]">5NEWS</span> for giving back to the community, every time you work with us, you help us feed hungry families across Arklahoma.
          </h2>
        </div>

        {/* Video Container */}
        <div className="relative max-w-[900px] mx-auto shadow-[0_32px_80px_-16px_rgba(0,0,0,0.3)] rounded-2xl overflow-hidden">
          {/* Sound Warning Bar */}
          <div className="bg-[var(--brand-red)] text-white py-2.5 px-4 flex items-center justify-center gap-3 text-sm font-bold tracking-wide">
            <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 4-8 4z" />
            </svg>
            Make sure your sound is turned ON! (please wait for video to buffer)
          </div>

          <div className="aspect-video w-full bg-black relative">
            {!isPlaying ? (
              <div
                className="absolute inset-0 w-full h-full cursor-pointer group"
                onClick={() => setIsPlaying(true)}
              >
                {/* Thumbnail */}
                <Image
                  src="https://img.youtube.com/vi/ZMRRl2vRWi0/hqdefault.jpg"
                  alt="Superior Pest Solutions on 5NEWS Thumbnail"
                  fill
                  sizes="(max-width: 1200px) 100vw, 900px"
                  className="object-cover transition-transform duration-700"
                />

                {/* Dark Overlay on Hover */}
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-500" />

                {/* YouTube Style Play Button */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-[68px] h-[48px] bg-[#212121]/90 group-hover:bg-[#FF0000] rounded-[25%] flex items-center justify-center transition-all duration-300">
                    <svg className="w-[32px] h-[32px] text-white fill-current" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
            ) : (
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/ZMRRl2vRWi0?autoplay=1"
                title="Superior Pest Solutions on 5NEWS"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
