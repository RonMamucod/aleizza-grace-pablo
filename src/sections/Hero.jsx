import React from 'react'
import { Button } from '../components/Button';
import {
  ArrowRight,
  ChevronDown,
  Github,
  Linkedin,
  Twitter,
  Download,
  Facebook,
  Instagram,
} from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";
import FloatingContactButton from "../components/FloatingContactButton";

const skills = [
  "React",
  "Wordpress",
  "HTML",
  "CSS",
  "JavaScript",
  "PHP",
  "Vercel",
  "Tailwind CSS",
  "Laravel",
  "Bootstrap",
  "Adobe Photoshop",
  "Affinity Designer",
  "Figma",
  "Git",
  "GitHub Actions",
];

const Hero = () => {
  return (
    <section className='relative min-h-screen flex items-center overflow-hidden'>
      

      {/* Green Dots */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        {[...Array(30)].map((_, i) => (
          <div className='absolute w-1.5 h-1.5 rounded-full opacity-60'
            style={
              {
                backgroundColor: "#20B2A6",
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `slow-drift ${15 + Math.random() * 20
                  }s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`,
              }
            } />
        ))}
      </div>

      {/* Content */}
      <div className='container mx-auto px-6 pt-32 md:py-12 pb-20 relative z-10'>
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          {/*Left Column - Text Content */}
          <div className='order-2 lg:order-1 space-y-8'>
            <div className='animate-fade-in'>
              <span className='inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary'>
                <span className='w-2 h-2 bg-primary rounded-full animate-pulse' />Staff Nurses | Gilberto O. Teodoro Memorial Hospital

              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                <span className="text-primary glow-text">AAleizza Grace Naigan Pablo</span>
                
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                I am a Registered Nurse from the Philippines with a passion for providing compassionate, patient-centered care. With a background in nursing education, student leadership, and athletics, I value teamwork, responsibility, and continuous growth in the nursing profession.</p>
            </div>

            {/* CTA */}
            <div className='flex flex-wrap gap-4 animate-fade-in animate-delay-300'>

              <Button size="lg" className="w-full md:w-auto">
                <a href="#contact" className="flex items-center justify-center gap-2">
                  Contact Me <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              <div className="w-full md:w-auto">
                <AnimatedBorderButton>
                  <Download className="w-5 h-5" />
                  <a
                    href="/Aleizza-Pablo-Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Download CV
                  </a>
                </AnimatedBorderButton>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-sm text-muted-foreground">Follow me: </span>
              {[
               
                { icon: Facebook, href: "https://www.facebook.com/aleizza.pablo.2025" },
                { icon: Instagram, href: "https://www.instagram.com/assangyy/" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  {<social.icon className="w-5 h-5" />}
                </a>
              ))}
            </div>
          </div>

          {/*Right Column - Profile Image */}
          <div className='order-1 lg:order-2 relative animate-fade-in animation-delay-300'>
            {/* Profile Image */}
            <div className='relative max-w-md mx-auto'>
              <div
                className="absolute inset-0 
              rounded-3xl bg-gradient-to-br 
              from-primary/30 via-transparent 
              to-primary/10 blur-2xl animate-pulse"
              />
              <div className='relative glass rounded-3xl p-2 glow-border'>
                <img src="/Aleizza-Grace-IMG-1.jpg" alt="Aleizza Grace Pablo" className='w-full aspect-[4/5] object-cover rounded-2xl' />

                {/* Floating Badge */}
                <div className='absolute -bottom-4 -right-4 bg-primary rounded-xl px-4 py-3 animate-float'>
                  <div className='flex items-center gap-3 '>
                    <div className='w-3 h-3 bg-red-500 rounded-full animate-pulse' />
                    <span className='text-sm font-medium text-white'>Currently employed</span>
                  </div>
                </div>

                {/* Stats Badge */}
                <div className='absolute -top-4 -left-4 bg-primary rounded-xl px-4 py-3 animate-float animation-delay-500'>
                  <div className='text-xl font-bold text-white'>
                    1+
                  </div>
                  <div className='text-xs text-white'>
                    Years Exp.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        
      </div>

      {/* Scroll */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800">
        <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group">
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>

      <FloatingContactButton />
    </section>
  )
}

export default Hero
