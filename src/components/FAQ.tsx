"use client";
import { useState } from "react";
import { ChevronDown, Plus, Minus } from "lucide-react";
import { motion } from "framer-motion";

const defaultFaqs = [
  {
    question: "How often should you come by my house?",
    answer: "Most of our neighbors find that once every three months is just right to keep bugs away. If you have a bigger problem, we might drop by more often until everything is back to normal."
  },
  {
    question: "Is it safe for my kids and my dog?",
    answer: "Yes, it is. We use products that are safe for your whole family once they have dried. We will even show you what we are using so you can feel good about it."
  },
  {
    question: "How long will you be at my house?",
    answer: "We usually finish up in about 30 to 45 minutes. We will work hard to do the job right while making sure we do not take up too much of your day."
  },
  {
    question: "Do I need to leave while you work?",
    answer: "Most of the time, you can stay right where you are. If we need to do something special that requires you to step outside for a bit, we will always tell you way ahead of time."
  },
  {
    question: "Do I need to do anything before you get here?",
    answer: "Not really. It helps if we can get to spots where you have seen bugs, like under the kitchen sink or in the garage. If you could pick up any toys or pet bowls from the floor, that would be great too."
  },
  {
    question: "How long does it take for the bugs to go away?",
    answer: "You will likely see a big difference in a day or two. You might see a few more bugs right after we leave because the treatment is moving them out of their hiding spots, and that is completely normal."
  },
  {
    question: "What if I see a bug before my next visit?",
    answer: "Just give us a quick call. If bugs show up before we are scheduled to come back, we will return and fix it for free. We want to make sure you are happy."
  },
  {
    question: "Do you work on offices too?",
    answer: "We sure do. Whether it is your own home or the place where you work, we know how to keep any building clear of pests."
  },
  {
    question: "How can I tell if I have termites or just ants?",
    answer: "It can be tricky. Termites have straight feelers and wings that are the same size. Ants have bent feelers and their wings are not the same size. If you are not sure, we will come take a look for you."
  },
  {
    question: "What makes you different?",
    answer: "We are a local, veteran-owned business and we truly care about our neighbors. We take the time to listen to you and make sure the job is done right every time."
  }
];

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQProps {
  faqs?: FAQItem[];
  title?: React.ReactNode;
  description?: React.ReactNode;
}

export function FAQ({ 
  faqs = defaultFaqs,
  title = <>Answers to your <span className="text-[var(--brand-red)]">pest</span> concerns</>,
  description = "Got a question we didn't cover? Feel free to reach out and we'll be happy to help."
}: FAQProps = {}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-background relative overflow-hidden">
      {/* Repeating Pattern Background */}
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

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-black/5 mb-6">
            <span className="w-2 h-2 rounded-full bg-[var(--brand-red)]" />
            <span className="text-sm font-semibold tracking-wide uppercase text-foreground/80">Common Questions</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
            {title}
          </h2>
          <p className="text-lg md:text-xl text-foreground/70 leading-relaxed max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`group transition-all duration-500 rounded-[2.5rem] border-2 ${
                openIndex === index 
                  ? 'bg-white border-[var(--brand-red)]/20 shadow-2xl shadow-[var(--brand-red)]/5' 
                  : 'bg-white/85 border-transparent hover:bg-white hover:border-white/50 hover:shadow-xl hover:shadow-black/[0.02]'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 md:p-8 text-left cursor-pointer"
              >
                <div className="flex-1 pr-6">
                  <h3 className={`text-lg md:text-xl font-bold transition-colors duration-300 ${openIndex === index ? 'text-[var(--brand-red)]' : 'text-foreground/80 group-hover:text-foreground'}`}>
                    {faq.question}
                  </h3>
                </div>
                <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${
                  openIndex === index 
                    ? 'bg-[var(--brand-red)] text-white rotate-180 shadow-lg shadow-[var(--brand-red)]/20' 
                    : 'bg-gray-100/80 text-foreground/40 group-hover:bg-gray-200 group-hover:text-foreground/60'
                }`}>
                  <ChevronDown className="w-5 h-5" />
                </div>
              </button>
              
              <motion.div
                initial={false}
                animate={{ 
                  height: openIndex === index ? "auto" : 0, 
                  opacity: openIndex === index ? 1 : 0 
                }}
                transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                className="overflow-hidden"
              >
                <div className="px-8 pb-8 md:px-10 md:pb-10">
                  <div className="w-full h-px bg-gray-100/80 mb-6" />
                  <p className="text-lg text-foreground/70 leading-relaxed max-w-3xl">
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
