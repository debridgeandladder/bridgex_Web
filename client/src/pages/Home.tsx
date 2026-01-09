import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, CheckCircle2, Download, MessageSquare, Shield, Smartphone, Star, Users, Zap } from "lucide-react";
import { useState } from "react";
import WhatsAppWidget from "@/components/WhatsAppWidget";

export default function Home() {
  const [email, setEmail] = useState("");

  const services = [
    { name: "Auto Mechanic", icon: "🔧", image: "/images/mechanic.jpg", desc: "Expert car repair and maintenance" },
    { name: "Home Cleaning", icon: "🧹", image: "/images/cleaner.jpg", desc: "Professional residential cleaning" },
    { name: "Plumbing", icon: "🚰", image: "/images/plumber.jpg", desc: "Leak repairs and pipe installations" },
    { name: "Electrical", icon: "⚡", image: "/images/electrician.jpg", desc: "Wiring, repairs, and installations" },
    { name: "Carpentry", icon: "🪚", image: "/images/carpenter.jpg", desc: "Custom furniture and wood repairs" },
    { name: "AC Repair", icon: "❄️", image: "/images/ac-repair.jpg", desc: "Air conditioning service and fix" },
    { name: "Painting", icon: "🎨", image: "/images/painter.jpg", desc: "Interior and exterior painting" },
    { name: "Beauty", icon: "💅", image: "/images/beauty.jpg", desc: "Makeup, hair, and spa services" },
  ];

  const team = [
    { name: "Founder / CEO", role: "Leadership", placeholder: true },
    { name: "Head of Operations", role: "Operations", placeholder: true },
    { name: "Product Lead", role: "Product", placeholder: true },
    { name: "Marketing Lead", role: "Growth", placeholder: true },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background font-body selection:bg-primary/20 selection:text-primary">
      <Navbar />
      <WhatsAppWidget />
      
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 pattern-bg -z-10"></div>
          <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 blur-[120px] rounded-full -z-10 translate-x-1/2"></div>
          
          <div className="container grid lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-6 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-secondary/50 border border-secondary text-lg font-semibold text-primary w-fit">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
            </span>
            Launching Soon in Nigeria 🇳🇬
          </div>
              
              <h1 className="text-5xl lg:text-7xl font-display font-bold leading-[1.1] text-balance text-foreground">
                Your Bridge to <br />
                <span className="text-primary">Trusted Services</span>
              </h1>
              
              <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                Connect with verified mechanics, plumbers, cleaners, and more instantly. 
                Service users get lifetime free access. Providers get quality leads.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <Button size="lg" className="rounded-full h-14 px-8 text-base font-semibold shadow-xl shadow-primary/20 hover:shadow-primary/30 transition-all">
                  <Download className="mr-2 h-5 w-5" /> Download App
                </Button>
                <Button size="lg" variant="outline" className="rounded-full h-14 px-8 text-base font-semibold bg-background/50 backdrop-blur-sm border-primary/20 hover:bg-secondary/50">
                  Join Waitlist
                </Button>
              </div>
              
              <div className="flex items-center gap-4 mt-8 pt-8 border-t border-border/50">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-background bg-muted flex items-center justify-center text-xs font-medium text-muted-foreground overflow-hidden">
                      <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i*123}`} alt="User" />
                    </div>
                  ))}
                  <div className="w-10 h-10 rounded-full border-2 border-background bg-primary/10 flex items-center justify-center text-xs font-bold text-primary">
                    +200
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm font-medium text-muted-foreground">
                    <span className="text-foreground font-bold">269+</span> users on waitlist
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative lg:h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl border border-white/20 animate-fade-in-up delay-200 group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>
              <img 
                src="/images/hero-bg.jpg" 
                alt="BridgeX App Experience" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Floating UI Elements */}
              <div className="absolute bottom-8 left-8 right-8 z-20">
                <div className="glass-card p-4 rounded-2xl flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-2xl">
                    ✅
                  </div>
                  <div>
                    <p className="font-semibold text-white">Service Verified</p>
                    <p className="text-white/80 text-sm">Provider arrived at your location</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section id="services" className="py-20 bg-secondary/30">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">Services You Can Trust</h2>
              <p className="text-muted-foreground">
                From quick fixes to major projects, find the right professional for every job.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {services.map((service, idx) => (
                <Card key={idx} className="group hover:shadow-lg transition-all duration-300 border-border/50 overflow-hidden">
                  <div className="aspect-square relative bg-muted overflow-hidden">
                    {service.image ? (
                      <img 
                        src={service.image} 
                        alt={service.name} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-primary/5 text-4xl">
                        {service.icon}
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Button variant="secondary" size="sm" className="rounded-full">View Details</Button>
                    </div>
                  </div>
                  <CardContent className="p-4 text-center">
                    <h3 className="font-semibold font-display mb-1">{service.name}</h3>
                    <p className="text-xs text-muted-foreground line-clamp-1">{service.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works (Toggle) */}
        <section id="how-it-works" className="py-20">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">One App, Two Worlds</h2>
              <p className="text-muted-foreground">
                Switch seamlessly between finding help and offering your skills with a single tap.
              </p>
            </div>

            <Tabs defaultValue="user" className="max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-2 h-14 p-1 bg-secondary/50 rounded-full mb-12">
                <TabsTrigger value="user" className="rounded-full text-base font-medium data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all">
                  I Need a Service
                </TabsTrigger>
                <TabsTrigger value="provider" className="rounded-full text-base font-medium data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all">
                  I Offer a Service
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="user" className="animate-fade-in">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="order-2 md:order-1 relative">
                    <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl transform -translate-x-1/2"></div>
                    <img src="/images/hero-bg.jpg" alt="User App" className="relative rounded-3xl shadow-2xl border-4 border-white w-3/4 mx-auto" />
                  </div>
                  <div className="order-1 md:order-2 flex flex-col gap-8">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                        <Smartphone className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold font-display mb-2">Post a Request</h3>
                        <p className="text-muted-foreground">Describe what you need, set your location, and add photos if needed.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                        <Zap className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold font-display mb-2">Get Matched Instantly</h3>
                        <p className="text-muted-foreground">Our algorithm finds the best verified providers near you in seconds.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                        <Shield className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold font-display mb-2">Lifetime Free Access</h3>
                        <p className="text-muted-foreground">You never pay a fee to use the platform. Pay the provider directly after the job.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="provider" className="animate-fade-in">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="flex flex-col gap-8">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                        <CheckCircle2 className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold font-display mb-2">Get Verified</h3>
                        <p className="text-muted-foreground">Complete our vetting process to earn the trust badge and access premium jobs.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                        <Users className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold font-display mb-2">Receive Quality Leads</h3>
                        <p className="text-muted-foreground">Get notifications for jobs that match your skills and location.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                        <Star className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold font-display mb-2">Zero Commission</h3>
                        <p className="text-muted-foreground">Keep 100% of what you earn. Just pay a small fee for the lead or subscribe.</p>
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl transform translate-x-1/2"></div>
                    <img src="/images/mechanic.jpg" alt="Provider App" className="relative rounded-3xl shadow-2xl border-4 border-white w-3/4 mx-auto" />
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Team Section (Placeholder) */}
        <section id="about" className="py-20 bg-secondary/30">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">Meet the Team</h2>
              <p className="text-muted-foreground">
                The minds building the future of service connection in Nigeria.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, idx) => (
                <div key={idx} className="flex flex-col items-center text-center group">
                  <div className="w-32 h-32 rounded-full bg-muted mb-4 overflow-hidden border-4 border-background shadow-lg group-hover:border-primary transition-colors">
                    <img 
                      src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${member.role}`} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-bold font-display text-lg">{member.name}</h3>
                  <p className="text-primary font-medium text-sm">{member.role}</p>
                </div>
              ))}
            </div>
            
            {/* Organogram Visual Placeholder */}
            <div className="mt-16 p-8 border border-dashed border-border rounded-2xl bg-background/50 text-center">
              <p className="text-sm text-muted-foreground font-mono">Organizational Structure Loading...</p>
            </div>
          </div>
        </section>

        {/* Testimonials (Placeholder) */}
        <section className="py-20">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">What People Say</h2>
              <p className="text-muted-foreground">
                Early feedback from our beta testers and community.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="bg-background border-border/50 shadow-sm">
                  <CardContent className="p-6 flex flex-col gap-4">
                    <div className="flex gap-1 text-yellow-400">
                      {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="w-4 h-4 fill-current" />)}
                    </div>
                    <p className="text-muted-foreground italic">
                      "Waiting for the launch! This is exactly what Lagos needs. Finding a reliable mechanic has always been a headache."
                    </p>
                    <div className="flex items-center gap-3 mt-auto pt-4 border-t border-border/30">
                      <div className="w-10 h-10 rounded-full bg-muted overflow-hidden">
                        <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=Testimonial${i}`} alt="User" />
                      </div>
                      <div>
                        <p className="font-bold text-sm">Future User {i}</p>
                        <p className="text-xs text-muted-foreground">Lagos, Nigeria</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Feedback / Contact */}
        <section id="contact" className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 pattern-bg opacity-10"></div>
          <div className="container relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-5xl font-display font-bold mb-6">Feedback is our Fuel ⛽</h2>
                <p className="text-primary-foreground/80 text-lg mb-8 max-w-md">
                  Tell us how we are doing. Your thoughts help us build a better bridge for everyone.
                </p>
                
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm">
                      <MessageSquare className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-semibold">Have a suggestion?</p>
                      <p className="text-sm text-primary-foreground/70">We read every single message.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <Card className="bg-white text-foreground border-none shadow-2xl">
                <CardContent className="p-8 flex flex-col gap-4">
                  <h3 className="text-xl font-bold font-display">Send us a message</h3>
                  <div className="grid gap-2">
                    <label className="text-sm font-medium">Name</label>
                    <Input placeholder="Your name" className="bg-secondary/30" />
                  </div>
                  <div className="grid gap-2">
                    <label className="text-sm font-medium">Email</label>
                    <Input placeholder="hello@bridgexng.com" className="bg-secondary/30" />
                  </div>
                  <div className="grid gap-2">
                    <label className="text-sm font-medium">Message</label>
                    <Textarea placeholder="What's on your mind?" className="bg-secondary/30 min-h-[120px]" />
                  </div>
                  <Button className="w-full mt-2">Send Feedback</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
