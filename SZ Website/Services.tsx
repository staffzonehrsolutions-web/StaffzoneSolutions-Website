import { ArrowRight, BarChart3, BookOpenCheck, BriefcaseBusiness, Check, ClipboardCheck, LineChart, ShieldCheck, UsersRound } from "lucide-react";
import { Link } from "wouter";
import type { LucideIcon } from "lucide-react";
import ParticleDrift from "./ParticleDrift";

const services: { number: string; icon: LucideIcon; title: string; description: string; bullets: string[]; tone: string }[] = [
  { number: "01", icon: UsersRound, title: "Recruitment & staffing solutions", description: "Skilled manpower for permanent, temporary, and project-based roles—matched to the practical needs of your workforce.", bullets: ["Permanent & temporary hiring", "Project-based staffing", "Pre-trained talent pools"], tone: "service-tone-blue" },
  { number: "02", icon: ShieldCheck, title: "Payroll & compliance management", description: "Accurate salary processing, compliance support, and seamless HR administration that reduce overhead and protect continuity.", bullets: ["Salary processing", "Compliance support", "HR administration"], tone: "service-tone-lilac" },
  { number: "03", icon: BookOpenCheck, title: "Training & development programs", description: "Upskilling, internships, and project placements that bridge skill gaps and help emerging talent become work-ready.", bullets: ["Technical & soft skills", "Campus drives", "Internships & projects"], tone: "service-tone-mint" },
  { number: "04", icon: BriefcaseBusiness, title: "Workforce continuity & HR consulting", description: "Reliable deployment, attendance discipline, and practical HR guidance to keep operations smooth as your teams grow.", bullets: ["Workforce deployment", "Attendance discipline", "HR process guidance"], tone: "service-tone-peach" },
];

const steps = [{ icon: ClipboardCheck, label: "Listen", text: "We start with the context, not a pre-packaged answer." }, { icon: BarChart3, label: "Shape", text: "We turn the brief into a focused, measurable plan." }, { icon: LineChart, label: "Move", text: "We stay close enough to make sure the plan works." }];

export default function Services() {
  return (
    <div>
      <section 
        className="page-hero page-hero-services" 
        style={{ 
          position: "relative", 
          overflow: "hidden", 
          isolation: "isolate" 
        }}
      >
        {/* Interactive Particle Layer */}
        <div 
          style={{ 
            position: "absolute", 
            top: 0, 
            left: 0, 
            width: "100%", 
            height: "100%", 
            zIndex: 1, 
            pointerEvents: "auto" 
          }}
        >
          <ParticleDrift />
        </div>

        {/* Text Layer on top with pointer-events passthrough */}
        <div 
          className="container page-hero-inner" 
          style={{ 
            position: "relative", 
            zIndex: 2, 
            pointerEvents: "none" 
          }}
        >
          <div className="
