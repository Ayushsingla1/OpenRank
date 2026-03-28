import { connect, getStoredAddress } from "@/stellarWallet";
import { useEffect, useState } from "react";
import { Wallet } from "lucide-react";

export default function WalletConnectButton() {
  const [address, setAddress] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const stored = getStoredAddress();
    if (stored) {
      setAddress(stored);
    }
  }, []);

  const connectWallet = async () => {
    try {
      setLoading(true);
      await connect((addr) => {
        setAddress(addr);
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={connectWallet}
      disabled={loading}
      className="
        glass
        text-foreground
        px-6 py-2.5
        rounded-xl
        text-xs font-black uppercase tracking-widest
        hover:border-primary/50
        hover:shadow-[0_0_20px_oklch(0.7_0.15_180_/_0.2)]
        transition-all duration-300
        flex items-center gap-2
        disabled:opacity-50
        group
      "
    >
      <Wallet className={`w-4 h-4 ${address ? 'text-primary' : 'text-muted-foreground group-hover:text-primary transition-colors'}`} />
      <span className="mt-0.5">
        {loading
          ? "Syncing..."
          : address
          ? `${address.slice(0, 4)}...${address.slice(-4)}`
          : "Connect Wallet"}
      </span>
    </button>
  );
}

