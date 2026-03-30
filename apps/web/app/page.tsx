"use client";
import { motion, useScroll, useTransform } from "motion/react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Gamepad2,
  Users,
  Eye,
  Trophy,
  Zap,
  Target,
  Crown,
  Star,
  TrendingUp,
  Shield,
  Sparkles,
  Play,
  ArrowRight,
  ChevronRight,
} from "lucide-react";
import { useState, useRef } from "react";
import Nav from "@/components/ui/nav";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const [hoveredGame, setHoveredGame] = useState<number | null>(null);
  const [activeFeature, setActiveFeature] = useState(0);
  const router = useRouter();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  const gameCards = [
    {
      title: "Speed Typing",
      description: "Race against your followers in lightning-fast typing challenges",
      icon: <Zap className="w-6 h-6" />,
      color: "from-primary/20 to-primary/5",
      stats: { avgTime: "45s", players: "2.3K", difficulty: "Medium" },
      preview: "Type faster than your opponent to claim victory. Real-time WPM tracking with live leaderboards.",
    },
    {
      title: "Trivia Battle",
      description: "Test your knowledge in head-to-head trivia competitions",
      icon: <Target className="w-6 h-6" />,
      color: "from-chart-2/20 to-chart-2/5",
      stats: { avgTime: "2m", players: "4.1K", difficulty: "Hard" },
      preview: "Answer questions faster and more accurately than your rival. Categories include tech and pop culture.",
    },
    {
      title: "Memory Match",
      description: "Challenge your memory skills in fast-paced pattern games",
      icon: <Crown className="w-6 h-6" />,
      color: "from-chart-3/20 to-chart-3/5",
      stats: { avgTime: "90s", players: "1.8K", difficulty: "Easy" },
      preview: "Remember and repeat increasingly complex patterns. Perfect for quick mental workouts.",
    },
  ];

  const features = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Challenge",
      description: "Connect your X account and challenge followers to competitive mini-games",
      details: "Browse your followers, send game invites, and create custom tournaments with stakes.",
    },
    {
      icon: <Gamepad2 className="w-8 h-8" />,
      title: "Play",
      description: "Compete in real-time games designed for quick, intense matches",
      details: "Lightning-fast matchmaking and instant results. Optimized for all devices.",
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Spectate",
      description: "Watch live matches between friends and top players in the arena",
      details: "Live streaming with real-time chat. Turn every game into a community event.",
    },
  ];

  const liveStats = [
    { label: "Active Players", value: "12,400+", icon: <Users className="w-5 h-5" /> },
    { label: "Matches Today", value: "89K+", icon: <Play className="w-5 h-5" /> },
    { label: "Live Spectators", value: "3,700+", icon: <Eye className="w-5 h-5" /> },
    { label: "Social Reach", value: "2.4M", icon: <TrendingUp className="w-5 h-5" /> },
  ];

  const testimonials = [
    {
      name: "@ayushsingla32",
      role: "Pro Gamer",
      text: "OpenRank turned my boring Tuesday into an epic gaming session. This is the future of social engagement!",
    },
    {
      name: "@Dev_Aggarwal03",
      role: "Content Creator",
      text: "Finally, a way to actually compete with my audience instead of just talking to them. Absolute game changer!",
    },
    {
      name: "@startupfounder",
      role: "Tech Leader",
      text: "Compelling, addictive, and social. OpenRank is redefining how we interact with our digital communities.",
    },
  ];

  return (
    <div className="min-h-screen bg-background grid-pattern" ref={containerRef}>
      <Nav />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-20">
        <div className="glow-orb -top-20 -left-20 w-[600px] h-[600px] bg-primary/20" />
        <div className="glow-orb top-1/2 -right-20 w-[400px] h-[400px] bg-chart-2/20 animate-pulse" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            style={{ opacity, scale }}
            className="text-center"
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="mb-6 px-4 py-1.5 bg-primary/10 text-primary border-primary/20 backdrop-blur-md">
                <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
                The First Social Gaming Arena
              </Badge>
              <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tight">
                Turn Followers <br />
                <span className="text-gradient text-glow">into Rivals</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
                The world's first platform where social networks become competitive arenas. 
                Challenge, play, and dominate your circle.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
                <Button
                  size="lg"
                  className="h-14 px-8 text-lg font-bold bg-primary text-primary-foreground hover:scale-105 transition-transform hover-glow"
                >
                  Start Playing Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-14 px-8 text-lg font-semibold glass hover:bg-white/5"
                  onClick={() => router.push("/scheduledMatches")}
                >
                  <Eye className="w-5 h-5 mr-2" />
                  Spectate Live
                </Button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                {liveStats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="glass p-6 rounded-2xl text-center group"
                  >
                    <div className="flex items-center justify-center mb-3 text-primary group-hover:scale-110 transition-transform">
                      {stat.icon}
                    </div>
                    <div className="text-3xl font-black mb-1">{stat.value}</div>
                    <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Games Section */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                Featured <span className="text-primary italic">Arenas</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                High-stakes challenges designed for maximum competitive thrill.
                No lag, pure skill.
              </p>
            </div>
            <Button variant="link" className="text-primary font-bold text-lg group">
              View all games <ChevronRight className="ml-1 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {gameCards.map((game, index) => (
              <motion.div
                key={game.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onMouseEnter={() => setHoveredGame(index)}
                onMouseLeave={() => setHoveredGame(null)}
              >
                <Card className="h-full glass border-white/5 overflow-hidden group hover:border-primary/30 transition-colors">
                  <div className={`absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity`}>
                    {game.icon}
                  </div>
                  <CardHeader className="pb-4">
                    <Badge variant="outline" className="w-fit mb-4 border-primary/20 text-primary">
                      {game.stats.difficulty}
                    </Badge>
                    <CardTitle className="text-2xl font-bold">{game.title}</CardTitle>
                    <CardDescription className="text-base">
                      {game.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex gap-4 mb-6">
                      <div className="text-xs">
                        <div className="text-muted-foreground uppercase font-bold tracking-tighter mb-1">Avg Time</div>
                        <div className="font-bold">{game.stats.avgTime}</div>
                      </div>
                      <div className="text-xs">
                        <div className="text-muted-foreground uppercase font-bold tracking-tighter mb-1">Players</div>
                        <div className="font-bold">{game.stats.players}</div>
                      </div>
                    </div>
                    
                    <motion.div
                      initial={false}
                      animate={{ height: hoveredGame === index ? "auto" : "0", opacity: hoveredGame === index ? 1 : 0 }}
                      className="overflow-hidden"
                    >
                      <p className="text-sm text-muted-foreground mb-6 line-clamp-3">
                        {game.preview}
                      </p>
                      <Button className="w-full bg-white/5 hover:bg-white/10 border-white/10" variant="outline">
                        Launch Demo
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works / Features */}
      <section className="py-32 bg-primary/[0.02] border-y border-white/5 relative overflow-hidden">
        <div className="glow-orb bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-black mb-8">The Social Gaming Loop</h2>
            <div className="flex justify-center flex-wrap gap-4">
              {features.map((f, i) => (
                <button
                  key={f.title}
                  onClick={() => setActiveFeature(i)}
                  className={`px-6 py-2 rounded-full font-bold transition-all ${activeFeature === i ? "bg-primary text-black" : "bg-white/5 hover:bg-white/10"}`}
                >
                  0{i + 1}. {f.title}
                </button>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
             <motion.div
               key={activeFeature}
               initial={{ opacity: 0, x: -20 }}
               animate={{ opacity: 1, x: 0 }}
               className="space-y-8"
             >
                <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center text-primary mb-8 shadow-[0_0_30px_rgba(0,0,0,0.2)]">
                  {features[activeFeature]?.icon}
                </div>
                <h3 className="text-5xl font-black">{features[activeFeature]?.title}</h3>
                <p className="text-2xl text-muted-foreground leading-relaxed">
                  {features[activeFeature]?.description}
                </p>
                <p className="text-lg text-muted-foreground/80 bg-white/5 p-6 rounded-2xl border border-white/5 italic">
                  "{features[activeFeature]?.details}"
                </p>
                <Button size="lg" className="h-14 px-8 font-bold">
                  Explore Mode
                </Button>
             </motion.div>


             <div className="relative aspect-square">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-chart-2/20 rounded-full blur-3xl animate-pulse" />
                <motion.div
                  key={activeFeature}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="relative h-full glass rounded-[40px] border-white/10 flex items-center justify-center overflow-hidden"
                >
                  <Gamepad2 className="w-48 h-48 text-primary/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                      <div className="p-8 text-center">
                        <Badge className="bg-primary text-black mb-4">Live Preview</Badge>
                        <div className="text-sm font-mono text-muted-foreground">Interactive Dashboard Coming Soon</div>
                      </div>
                  </div>
                </motion.div>
             </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-16 text-center">Loved by <span className="text-primary underline">Creators</span></h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                whileHover={{ y: -10 }}
                className="glass p-8 rounded-[32px] border-white/5 relative"
              >
                <Star className="w-8 h-8 text-primary/20 absolute top-8 right-8" />
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-chart-2" />
                  <div>
                    <div className="font-black text-lg">{t.name}</div>
                    <div className="text-sm text-primary font-bold uppercase tracking-widest">{t.role}</div>
                  </div>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed italic">
                  "{t.text}"
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-40 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 -skew-y-6 translate-y-20 h-full w-full" />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <Trophy className="w-20 h-20 mx-auto mb-10 text-primary animate-bounce" />
          <h2 className="text-5xl md:text-7xl font-black mb-10">Ready to <span className="text-gradient">Take the Throne?</span></h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12">
            Be among the first to join the elite circle of social gamers. 
            Claim your username before someone else does.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <Button size="lg" className="h-16 px-12 text-xl font-black hover-glow">
               Join the Waitlist
             </Button>
             <Button size="lg" variant="outline" className="h-16 px-12 text-xl font-bold glass">
               Learn More
             </Button>
          </div>
          <div className="mt-16 flex justify-center gap-8 text-sm font-bold text-muted-foreground/60 uppercase tracking-widest">
            <span className="flex items-center gap-2"><Shield className="w-4 h-4" /> Secure</span>
            <span className="flex items-center gap-2"><Zap className="w-4 h-4" /> Fast</span>
            <span className="flex items-center gap-2"><Users className="w-4 h-4" /> Community</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-white/5 glass">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-chart-2 rounded-2xl flex items-center justify-center shadow-lg shadow-primary/20">
                <Gamepad2 className="w-7 h-7 text-black font-bold" />
              </div>
              <span className="text-3xl font-black tracking-tighter uppercase italic">OpenRank</span>
            </div>
            
            <div className="flex gap-8 text-sm font-bold text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">Documentation</a>
              <a href="#" className="hover:text-primary transition-colors">Privacy</a>
              <a href="#" className="hover:text-primary transition-colors">Twitter (X)</a>
            </div>

            <p className="text-sm text-muted-foreground font-medium">
              © 2024 OpenRank. The Revolution of Social Play.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

