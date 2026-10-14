import React from 'react'
import { HeartHandshake, GroupIcon, ClipboardCheck, MessageCircle } from "lucide-react";

const highlights = [
  {
    icon: HeartHandshake,
    title: "Compassionate Care",
    description:
      "Providing empathetic and patient-centered care in all interactions.",
  },
  {
    icon: GroupIcon,
    title: "Teamwork",
    description:
      "Collaboration and shared responsibility to achieve the best outcomes for patients.",
  },
  {
    icon: MessageCircle,
    title: "Communication",
    description: "Clear and respectful interaction with patients, families, and colleagues.",
  },
  {
    icon: ClipboardCheck,
    title: "Discipline",
    description:
      "Focus, responsibility, and perseverance in delivering high-quality nursing care.",
  },
];

const About = () => {
  return (
    <section id='about' className='py-12 md:py-24 relative overflow-hidden'>
        <div className='container mx-auto px-6 relative z-10'>
          <div className='grid lg:grid-cols-2 gap-16 items-center'>
            {/* Left Column */}
            <div className='space-y-8 '>
              <div className='animate-fade-in'>
                <span className='text-secondary-foreground text-sm font-medium tracking-wider uppercase'>About Me</span>
              </div>

              <h2 className='text-4xl md:text-5xl font-bold
           mt-4 mb-6 animate-fade-in animation-delay-100
            text-secondary-foreground'>
            Dedicated to <span className='font-serif italic font-normal text-primary'>
               Caring for Others
            </span>
          </h2>

              <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
                <p>
                  I am Aleizza Grace Naigan Pablo, a Registered Nurse from the Philippines and a graduate of Pangasinan State University – Bayambang Campus. After passing the November 2025 Philippine Nurse Licensure Examination (PNLE), I began my professional nursing journey as a Staff Nurse at Gilberto O. Teodoro Memorial Hospital, a government hospital in Camiling, Tarlac.</p>
                <p>
                 During my academic years, I served as Class President and Secretary, experiences that strengthened my leadership, communication, and organizational skills. I also participated in badminton competitions, which helped develop my discipline, focus, and perseverance.</p>
                <p>
                  As a nursing professional, I strive to provide safe, respectful, and compassionate care while continuing to learn and grow in the healthcare field.
                </p>
              </div>

             
            </div>

            {/* Right Column - Highlights */}
            <div className='grid sm:grid-cols-2 gap-6'>
              {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
              ))}
            </div>
          </div>
        </div>
    </section>
  )

}

export default About
