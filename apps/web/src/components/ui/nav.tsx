"use client";

import { Button } from "@/components/ui/button";
import { Gamepad2, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import ConnectBtnStellar from "../../components/stellarUi/connectBtnStellar";

export default function Nav() {
  const router = useRouter();
  const [walletAddress, setWalletAddress] = useState<string | undefined>(undefined);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const address = localStorage.getItem('WALLET_ADDRESS');
    if (address?.length) {
      setWalletAddress(address);
    }
  }, []);

  const { user, isLoaded, isSignedIn } = useUser();

  const navLinks = [
    { name: "Live Matches", href: "/scheduledMatches", show: true },
    { name: "Challenges", href: "/game/myGames", show: !!user },
    { name: "Games", href: "/game", show: true },
    { name: "Profile", href: "/profile", show: !!user },
    { name: "Redeem", href: "/redeem", show: !!walletAddress },
  ];

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="glass-header sticky top-0 z-[100] w-full"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div
            className="flex items-center space-x-3 hover:cursor-pointer group"
            onClick={() => router.push("/")}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-chart-2 rounded-xl flex items-center justify-center shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform">
              <Gamepad2 className="w-6 h-6 text-black" />
            </div>
            <span className="text-2xl font-black tracking-tighter text-glow uppercase italic">OpenRank</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.filter(link => link.show).map((link) => (
              <Link key={link.name} href={link.href}>
                <Button
                  variant="ghost"
                  className="text-sm font-bold uppercase tracking-widest hover:text-primary hover:bg-white/5 px-4"
                >
                  {link.name}
                </Button>
              </Link>
            ))}
            
            <div className="h-6 w-[1px] bg-white/10 mx-4" />
            
            {!user && isLoaded && (
              <Link href="/auth">
                <Button variant="ghost" className="font-bold text-primary hover:bg-primary/10 mr-2">
                  SIGN UP
                </Button>
              </Link>
            )}
            
            <ConnectBtnStellar />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <ConnectBtnStellar />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-foreground"
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-white/5 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.filter(link => link.show).map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-4 text-base font-black uppercase tracking-widest hover:text-primary border-b border-white/5"
                >
                  {link.name}
                </Link>
              ))}
              {!user && (
                <Link
                  href="/auth"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-4 text-base font-black uppercase tracking-widest text-primary"
                >
                  Sign Up
                </Link>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
