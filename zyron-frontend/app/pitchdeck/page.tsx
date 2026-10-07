"use client";

import * as React from "react";
import Link from "next/link";
import {
  Shield,
  ShieldCheck,
  ShieldAlert,
  Lock,
  Code2,
  Terminal,
  Cpu,
  FileCheck2,
  Sparkles,
  TrendingUp,
  Coins,
  Scale,
  Building2,
  Layers,
  GitBranch,
  Users,
  CheckCircle2,
  ArrowRight,
  Maximize2,
  Minimize2,
  Grid,
  Play,
  Pause,
  Printer,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Zap,
  Check,
  AlertTriangle,
  ArrowUpRight,
  Clock,
  FileText,
  DollarSign,
  Activity,
  Award,
  Search,
  CheckSquare,
  Crosshair,
  Volume2,
  VolumeX,
  User,
  Globe,
  HelpCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";

// --- PITCH DECK SLIDE DEFINITIONS WITH CONVERSATIONAL INVESTOR PRESENTATION SCRIPT ---
interface SlideData {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  category: "Vision" | "Market" | "Product" | "Business" | "Traction";
  script: string;
}

const SLIDES_META: SlideData[] = [
  {
    id: "cover",
    badge: "Executive Pitch Deck",
    title: "ZYRON AI SECURITY ENGINE",
    subtitle: "Dual-Engine AI & Mathematical Proving Infrastructure for Web3 Protocols",
    category: "Vision",
    script:
      "Welcome to Zairon. We are building the AI security infrastructure for Web3 protocols. Rather than relying on speculative linters or four-week manual reviews, Zairon combines static A-S-T semantic reasoning with an Autonomous Red-Team E-V-M Sandbox agent that proves exploit viability before human sign-off.",
  },
  {
    id: "problem",
    badge: "The Problem",
    title: "The Speculative Audit Bottleneck",
    subtitle: "Smart contracts secure over $100B, yet security relies on noisy linters and slow $50k+ manual audits.",
    category: "Market",
    script:
      "Smart contracts secure over one hundred billion dollars, yet security is a bottleneck. Generic AI linters flood teams with eighty percent false positives, while manual audits take four to eight weeks and cost up to one hundred fifty thousand dollars. Speculative bug finding fails Web3.",
  },
  {
    id: "solution",
    badge: "The Solution",
    title: "Zyron Dual-Engine AI Architecture",
    subtitle: "AST Semantic Reasoning + Autonomous Red-Team EVM Sandbox Exploit Prover.",
    category: "Product",
    script:
      "Zairon replaces speculative bug finding with automated mathematical proof. Our Dual-Engine AI combines static A-S-T invariant analysis with an autonomous red-team agent that forks E-V-M mainnet state, synthesizes executable attack vectors, and generates reproducible Foundry proof of concepts.",
  },
  {
    id: "technology",
    badge: "AI Layer 1",
    title: "AST & Invariant Semantic Engine",
    subtitle: "Deterministic Solidity parsing, opcode flow graphs, and protocol-specific invariant reasoning.",
    category: "Product",
    script:
      "Layer one parses Solidity into Abstract Syntax Trees and opcode flow graphs. Unlike generic LLMs that guess syntax errors, our model reasons against protocol invariants—such as collateral solvency, share dilution, reentrancy guards, and oracle staleness—across complex multi-file storage layouts.",
  },
  {
    id: "human-review",
    badge: "AI Layer 2",
    title: "Autonomous Red-Team Prover (zyron-agent)",
    subtitle: "Ephemeral virtual EVM state forking, active attack synthesis, and zero false positives.",
    category: "Product",
    script:
      "Layer two is our autonomous red-team microservice. It spins up an ephemeral virtual E-V-M fork, orchestrates multi-step transactions with flash loans, and executes attacks. If an invariant breaks, it generates an executable Foundry test suite dot-t-dot-sol. Unverified candidate bugs are eliminated.",
  },
  {
    id: "attestation",
    badge: "AI Layer 3",
    title: "Dual-Pane Workbench & EVM Trace Replay",
    subtitle: "Step-by-step transaction trace stepper emitting opcodes, gas consumption, and storage slot mutations.",
    category: "Product",
    script:
      "The AI emits a step-by-step transaction trace detailing opcodes, gas, and balance drains. In our Dual-Pane Workbench, senior auditors replay live proofs, write remediation guidance, and verify patches in real time—reducing audit turnaround from weeks to days.",
  },
  {
    id: "how-it-works",
    badge: "Lifecycle",
    title: "5-Stage AI Audit Lifecycle",
    subtitle: "Transparent audit process from code submission and EVM sandbox attack proving to on-chain attestation.",
    category: "Product",
    script:
      "Our audit lifecycle is completely transparent: Stage one, scope ingestion. Stage two, A-S-T invariant analysis. Stage three, red-team E-V-M sandbox attack synthesis. Stage four, trace replay auditor triage. Stage five, final cryptographic on-chain attestation.",
  },
  {
    id: "market",
    badge: "Market Opportunity",
    title: "Surging Demand for AI Security Infrastructure",
    subtitle: "Sitting at the intersection of automated AI execution, security tooling, and on-chain trust.",
    category: "Market",
    script:
      "Demand for verifiable AI security is booming. Thousands of smart contracts deploy daily across Layer-2 rollups like Arbitrum, Base, and Optimism. Institutional real-world asset protocols demand continuous cryptographic proof over speculative P-D-F compliance checks.",
  },
  {
    id: "business-model",
    badge: "Business Model",
    title: "High-Margin Hybrid Revenue Model",
    subtitle: "Fixed-price engagement fees for full AI audits + continuous pull-request security plans.",
    category: "Business",
    script:
      "We operate a high-margin hybrid model: charging fixed engagement fees for complete AI audits with on-chain attestations, alongside continuous subscriptions for pull-request scanning and priority sandbox triage—creating predictable annual recurring revenue.",
  },
  {
    id: "competition",
    badge: "Competitive Advantage",
    title: "Why Zyron Outperforms Linters & Legacy Firms",
    subtitle: "Mathematical proof over static linters, and 10x throughput over 6-week legacy manual audits.",
    category: "Business",
    script:
      "Static linters flood teams with false positives and cannot execute code. Legacy audit firms are slow, expensive, and deliver unlinked reports. Zairon delivers compiler speed, mathematical E-V-M exploit proofs, and on-chain verification that no legacy firm provides.",
  },
  {
    id: "roadmap",
    badge: "Execution & Roadmap",
    title: "Current Status & Execution Roadmap",
    subtitle: "From core AST engine and Arbitrum Sepolia attestations to ERC-8004 auditor identity.",
    category: "Traction",
    script:
      "Our core A-S-T engine, auditor workbench, and Arbitrum Sepolia attestation registry are live. We are now expanding multi-file inheritance analysis, client dashboards, decentralized auditor identity on E-R-C eight thousand and four, and continuous active monitoring.",
  },
  {
    id: "vision",
    badge: "Vision & Next Steps",
    title: "Building the Trust Layer for Web3 Security",
    subtitle: "Replacing speculative audit claims with mathematical EVM proofs and on-chain attestations.",
    category: "Vision",
    script:
      "Zairon is building the trust layer for smart contract security. We are onboarding design partner protocols, security researchers, and strategic supporters who share our vision for verifiable AI security. Join us in making Web3 security genuinely trusted onchain.",
  },
];

export default function PitchDeckPage() {
  const [currentSlide, setCurrentSlide] = React.useState<number>(0);
  const [isFullscreen, setIsFullscreen] = React.useState<boolean>(false);
  const [isOverviewOpen, setIsOverviewOpen] = React.useState<boolean>(false);
  const [isAfricanVoiceGuideOpen, setIsAfricanVoiceGuideOpen] = React.useState<boolean>(false);
  const [isAutoPlaying, setIsAutoPlaying] = React.useState<boolean>(false);
  const [isVoiceEnabled, setIsVoiceEnabled] = React.useState<boolean>(true);
  const [isSpeaking, setIsSpeaking] = React.useState<boolean>(false);
  const [currentCaption, setCurrentCaption] = React.useState<string>("");
  const [availableVoices, setAvailableVoices] = React.useState<SpeechSynthesisVoice[]>([]);
  const [selectedVoiceURI, setSelectedVoiceURI] = React.useState<string>("");
  const [hasAfricanVoice, setHasAfricanVoice] = React.useState<boolean>(false);
  const deckContainerRef = React.useRef<HTMLDivElement>(null);
  const selectedVoiceRef = React.useRef<SpeechSynthesisVoice | null>(null);
  const audioPlayerRef = React.useRef<HTMLAudioElement | null>(null);

  const totalSlides = SLIDES_META.length;

  // Helper to check if a voice is African
  const isAfricanVoice = (v: SpeechSynthesisVoice) => {
    const lang = v.lang.toLowerCase();
    const name = v.name.toLowerCase();
    return (
      lang.includes("ng") ||
      lang.includes("za") ||
      lang.includes("gh") ||
      lang.includes("ke") ||
      lang.includes("tz") ||
      lang.includes("ug") ||
      lang.includes("zw") ||
      name.includes("nigeria") ||
      name.includes("south africa") ||
      name.includes("ghana") ||
      name.includes("kenya") ||
      name.includes("tanzania") ||
      name.includes("uganda") ||
      name.includes("zimbabwe") ||
      name.includes("africa") ||
      name.includes("ekaette") ||
      name.includes("lesedi") ||
      name.includes("wanjiku") ||
      name.includes("sibusiso") ||
      name.includes("lwandle")
    );
  };

  // Helper to test if a voice is female
  const isFemaleVoice = (v: SpeechSynthesisVoice) => {
    const name = v.name.toLowerCase();
    return (
      name.includes("female") ||
      name.includes("voice 2") ||
      name.includes("samantha") ||
      name.includes("victoria") ||
      name.includes("karen") ||
      name.includes("moira") ||
      name.includes("fiona") ||
      name.includes("veena") ||
      name.includes("kate") ||
      name.includes("serena") ||
      name.includes("tessa") ||
      name.includes("allison") ||
      name.includes("ava") ||
      name.includes("susan") ||
      name.includes("stephanie") ||
      name.includes("ekaette") ||
      (name.includes("siri") && !name.includes("voice 1"))
    );
  };

  // Helper to test if a voice is male
  const isMaleVoice = (v: SpeechSynthesisVoice) => {
    const name = v.name.toLowerCase();
    if (isFemaleVoice(v)) return false;
    return (
      name.includes("male") ||
      name.includes("voice 1") ||
      name.includes("daniel") ||
      name.includes("george") ||
      name.includes("arthur") ||
      name.includes("david") ||
      name.includes("aaron") ||
      name.includes("marcus") ||
      name.includes("alex") ||
      name.includes("bruce") ||
      name.includes("fred") ||
      name.includes("oliver") ||
      name.includes("thomas") ||
      name.includes("gordon") ||
      name.includes("rishi") ||
      name.includes("tariq") ||
      name.includes("lesedi") ||
      name.includes("sibusiso") ||
      name.includes("lwandle")
    );
  };

  // Initialize SpeechSynthesis voice selection prioritizing strong male African & English voices
  React.useEffect(() => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;

    const loadVoices = () => {
      const voices = window.speechSynthesis.getVoices();
      if (voices.length > 0) {
        // Sort Male & African voices first
        const sorted = [...voices].sort((a, b) => {
          const aAfMale = isAfricanVoice(a) && isMaleVoice(a);
          const bAfMale = isAfricanVoice(b) && isMaleVoice(b);
          if (aAfMale && !bAfMale) return -1;
          if (!aAfMale && bAfMale) return 1;

          const aMale = isMaleVoice(a);
          const bMale = isMaleVoice(b);
          if (aMale && !bMale) return -1;
          if (!aMale && bMale) return 1;

          return 0;
        });

        setAvailableVoices(sorted);

        const africanFound = voices.some((v) => isAfricanVoice(v));
        setHasAfricanVoice(africanFound);

        const preferredVoice =
          // 1. Male African voice (e.g. South Africa Siri Voice 1, Sibusiso, Google Nigeria Male)
          voices.find((v) => isAfricanVoice(v) && isMaleVoice(v)) ||
          // 2. Male English voice (e.g. Daniel, Arthur, Alex, Fred, George, David)
          voices.find((v) => v.lang.startsWith("en") && isMaleVoice(v)) ||
          // 3. Any Male voice
          voices.find((v) => isMaleVoice(v)) ||
          // 4. Any African voice (fallback only if no male voice exists)
          voices.find((v) => isAfricanVoice(v)) ||
          voices[0];

        if (preferredVoice) {
          selectedVoiceRef.current = preferredVoice;
          setSelectedVoiceURI(preferredVoice.voiceURI);
        }
      }
    };

    loadVoices();
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
      window.speechSynthesis.onvoiceschanged = loadVoices;
    }
  }, []);

  // Format script for teleprompter display (reverting phonetic spellings for visual reading)
  const formatCaptionForDisplay = (text: string) => {
    return text
      .replace(/Zairon/g, "Zyron")
      .replace(/Zai-ron/g, "Zyron")
      .replace(/E-R-C eight thousand and four/g, "ERC-8004")
      .replace(/A-S-T/g, "AST")
      .replace(/E-I-P seven twelve/g, "EIP-712")
      .replace(/S-H-A two fifty-six/g, "SHA-256")
      .replace(/E-V-M/g, "EVM");
  };

  // Function to handle speaking current slide presentation script (with MP3 audio file support)
  const speakCurrentSlide = React.useCallback(
    (slideIndex: number, autoAdvance: boolean) => {
      if (typeof window === "undefined") return;

      // Stop any existing audio or Web Speech
      if (audioPlayerRef.current) {
        audioPlayerRef.current.pause();
        audioPlayerRef.current.currentTime = 0;
        audioPlayerRef.current = null;
      }
      if ("speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }

      if (!isVoiceEnabled) {
        setIsSpeaking(false);
        setCurrentCaption("");
        return;
      }

      const slide = SLIDES_META[slideIndex];
      if (!slide || !slide.script) return;

      const fallbackWebSpeech = () => {
        if (!("speechSynthesis" in window)) return;
        const utterance = new SpeechSynthesisUtterance(slide.script);
        utterance.rate = 1.08;
        utterance.pitch = 1.0;
        utterance.volume = 1.0;

        const voices = window.speechSynthesis.getVoices();
        const activeVoice =
          (selectedVoiceURI && voices.find((v) => v.voiceURI === selectedVoiceURI)) ||
          selectedVoiceRef.current ||
          voices.find((v) => isAfricanVoice(v) && isMaleVoice(v)) ||
          voices.find((v) => isMaleVoice(v) && v.lang.startsWith("en")) ||
          voices.find((v) => isMaleVoice(v)) ||
          voices[0];

        if (activeVoice) utterance.voice = activeVoice;

        utterance.onstart = () => {
          setIsSpeaking(true);
          setCurrentCaption(formatCaptionForDisplay(slide.script));
        };

        utterance.onend = () => {
          setIsSpeaking(false);
          if (autoAdvance && slideIndex < totalSlides - 1) {
            setCurrentSlide((prev) => prev + 1);
          } else if (slideIndex === totalSlides - 1) {
            setIsAutoPlaying(false);
          }
        };

        utterance.onerror = () => setIsSpeaking(false);
        window.speechSynthesis.speak(utterance);
      };

      // Try pre-rendered studio MP3 audio file if present
      const mp3Url = `/audio/pitchdeck/slide-${slideIndex + 1}.mp3`;
      const audio = new Audio(mp3Url);

      audio.oncanplaythrough = () => {
        audioPlayerRef.current = audio;
        setIsSpeaking(true);
        setCurrentCaption(formatCaptionForDisplay(slide.script));
        audio.play().catch(() => fallbackWebSpeech());
        audio.onended = () => {
          setIsSpeaking(false);
          if (autoAdvance && slideIndex < totalSlides - 1) {
            setCurrentSlide((prev) => prev + 1);
          } else if (slideIndex === totalSlides - 1) {
            setIsAutoPlaying(false);
          }
        };
      };

      audio.onerror = () => {
        fallbackWebSpeech();
      };
    },
    [isVoiceEnabled, selectedVoiceURI, totalSlides]
  );

  // Playback effect when slide changes or autoplay is toggled
  React.useEffect(() => {
    if (isAutoPlaying) {
      speakCurrentSlide(currentSlide, true);
    } else {
      if (audioPlayerRef.current) {
        audioPlayerRef.current.pause();
        audioPlayerRef.current.currentTime = 0;
      }
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
      setIsSpeaking(false);
      setCurrentCaption("");
    }
  }, [currentSlide, isAutoPlaying, speakCurrentSlide]);

  // Cleanup on unmount
  React.useEffect(() => {
    return () => {
      if (audioPlayerRef.current) {
        audioPlayerRef.current.pause();
        audioPlayerRef.current = null;
      }
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const nextSlide = React.useCallback(() => {
    setCurrentSlide((prev) => (prev < totalSlides - 1 ? prev + 1 : prev));
  }, [totalSlides]);

  const prevSlide = React.useCallback(() => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev));
  }, []);

  const jumpToSlide = (index: number) => {
    if (index >= 0 && index < totalSlides) {
      setCurrentSlide(index);
      setIsOverviewOpen(false);
    }
  };

  const handleStartPresentation = () => {
    setCurrentSlide(0);
    setIsAutoPlaying(true);
  };

  // Keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (["INPUT", "TEXTAREA"].includes((e.target as HTMLElement)?.tagName)) return;

      if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") {
        e.preventDefault();
        nextSlide();
      } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault();
        prevSlide();
      } else if (e.key === "f" || e.key === "F") {
        e.preventDefault();
        toggleFullscreen();
      } else if (e.key === "Escape") {
        if (isOverviewOpen) setIsOverviewOpen(false);
        if (isAfricanVoiceGuideOpen) setIsAfricanVoiceGuideOpen(false);
      } else if (e.key === "o" || e.key === "O" || e.key === "g" || e.key === "G") {
        e.preventDefault();
        setIsOverviewOpen((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide, isOverviewOpen, isAfricanVoiceGuideOpen]);

  // Fullscreen handler
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      deckContainerRef.current?.requestFullscreen?.().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen?.().catch(() => {});
      setIsFullscreen(false);
    }
  };

  React.useEffect(() => {
    const handleFsChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", handleFsChange);
    return () => document.removeEventListener("fullscreenchange", handleFsChange);
  }, []);

  const progressPercent = Math.round(((currentSlide + 1) / totalSlides) * 100);

  return (
    <div
      ref={deckContainerRef}
      className={cn(
        "min-h-screen bg-bg-void text-text-primary flex flex-col justify-between selection:bg-accent-scan/30 relative overflow-hidden font-sans border-hairline",
        isFullscreen ? "h-screen w-screen p-4 sm:p-8" : "p-3 sm:p-6 md:p-8"
      )}
    >
      {/* Structural Hairline Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#262B33_1px,transparent_1px),linear-gradient(to_bottom,#262B33_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none opacity-20 -z-10" />

      {/* Top Deck Navigation Bar */}
      <header className="flex items-center justify-between gap-4 pb-4 border-b border-border-hairline shrink-0 z-20">
        <div className="flex items-center gap-3">
          <Link
            href="/portal"
            className="flex items-center gap-2.5 group hover:opacity-90 transition-opacity"
            title="Return to Zyron Portal"
          >
            <div className="h-8 w-8 rounded bg-bg-panel border border-border-hairline flex items-center justify-center text-accent-scan group-hover:border-accent-scan/50 transition-colors">
              <Shield className="h-4 w-4" />
            </div>
            <div className="flex flex-col">
              <span className="font-mono font-bold text-xs tracking-wider text-text-primary flex items-center gap-2">
                ZYRON <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-bg-panel-raised text-accent-scan border border-border-hairline">FOUNDER PITCH DECK</span>
              </span>
              <span className="text-[10px] text-text-muted font-mono hidden sm:inline">Cryptographic Protocol Security</span>
            </div>
          </Link>
        </div>

        {/* Center Pill: Current Slide & Title */}
        <div className="hidden md:flex items-center gap-2 px-3 py-1 rounded bg-bg-panel border border-border-hairline text-xs font-mono">
          <span className="text-accent-scan font-bold">
            SLIDE {String(currentSlide + 1).padStart(2, "0")} / {String(totalSlides).padStart(2, "0")}
          </span>
          <span className="text-text-muted">•</span>
          <span className="text-text-primary truncate max-w-xs">{SLIDES_META[currentSlide].title}</span>
          <span className="text-text-muted">•</span>
          <span className="text-[10px] px-1.5 py-0.5 rounded bg-bg-panel-raised text-signal-resolved border border-border-hairline">⏱️ ~3m 45s Pitch</span>
        </div>

        {/* Right Action Controls */}
        <div className="flex items-center gap-2">
          {/* African Voice Guide Button if no African voice detected */}
          {!hasAfricanVoice && (
            <button
              type="button"
              onClick={() => setIsAfricanVoiceGuideOpen(true)}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-bg-panel border border-accent-scan/40 hover:border-accent-scan text-accent-scan font-mono text-xs transition-colors cursor-pointer"
              title="How to enable African system voice on macOS or Chrome"
            >
              <span>🌍 Add African Voice</span>
              <HelpCircle className="h-3 w-3" />
            </button>
          )}

          {/* System Voice Selection Dropdown */}
          {availableVoices.length > 0 && (
            <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-bg-panel border border-border-hairline">
              <User className="h-3.5 w-3.5 text-accent-scan shrink-0" />
              <select
                value={selectedVoiceURI}
                onChange={(e) => {
                  const uri = e.target.value;
                  setSelectedVoiceURI(uri);
                  const voice = availableVoices.find((v) => v.voiceURI === uri);
                  if (voice) {
                    selectedVoiceRef.current = voice;
                    if (isAutoPlaying) {
                      speakCurrentSlide(currentSlide, true);
                    }
                  }
                }}
                className="bg-transparent text-text-primary text-xs font-mono border-none outline-none max-w-[150px] truncate cursor-pointer"
                title="Select Presentation Voice"
              >
                {availableVoices.map((v) => (
                  <option key={v.voiceURI} value={v.voiceURI} className="bg-bg-panel text-text-primary">
                    {isAfricanVoice(v) ? (v.lang.toLowerCase().includes("za") ? "🇿🇦 " : "🇳🇬 ") : ""}{v.name} ({v.lang})
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Voiceover Mute/Unmute Toggle */}
          <button
            type="button"
            onClick={() => {
              const nextVoiceState = !isVoiceEnabled;
              setIsVoiceEnabled(nextVoiceState);
              if (!nextVoiceState && typeof window !== "undefined" && "speechSynthesis" in window) {
                window.speechSynthesis.cancel();
                setIsSpeaking(false);
                setCurrentCaption("");
              }
            }}
            className={cn(
              "px-2.5 py-1.5 rounded text-xs font-mono border transition-colors flex items-center gap-1.5 cursor-pointer",
              isVoiceEnabled
                ? "bg-bg-panel-raised border-accent-scan/50 text-accent-scan"
                : "bg-bg-panel border-border-hairline text-text-muted hover:text-text-primary"
            )}
            title={isVoiceEnabled ? "Voiceover Audio Enabled" : "Voiceover Audio Muted"}
          >
            {isVoiceEnabled ? <Volume2 className="h-3.5 w-3.5 text-accent-scan" /> : <VolumeX className="h-3.5 w-3.5 text-text-muted" />}
            <span className="hidden sm:inline font-mono text-[11px]">{isVoiceEnabled ? "Voice On" : "Muted"}</span>
          </button>

          {/* Auto Presentation Play/Pause */}
          <button
            type="button"
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className={cn(
              "px-3 py-1.5 rounded text-xs font-mono border transition-colors flex items-center gap-1.5 cursor-pointer font-bold",
              isAutoPlaying
                ? "bg-bg-panel-raised border-signal-resolved text-signal-resolved"
                : "bg-accent-scan text-bg-void border-accent-scan hover:bg-accent-scan/90"
            )}
            title="Auto-Present Deck with Investor Audio Presentation"
          >
            {isAutoPlaying ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5 fill-bg-void" />}
            <span>{isAutoPlaying ? "Pause Presentation" : "Play Presentation"}</span>
          </button>

          {/* Slide Overview Toggle */}
          <button
            type="button"
            onClick={() => setIsOverviewOpen(!isOverviewOpen)}
            className={cn(
              "px-2.5 py-1.5 rounded text-xs font-mono border transition-colors flex items-center gap-1.5 cursor-pointer",
              isOverviewOpen
                ? "bg-bg-panel-raised border-accent-scan text-accent-scan"
                : "bg-bg-panel border-border-hairline text-text-muted hover:text-text-primary"
            )}
            title="Slide Overview (Press 'O' or 'G')"
          >
            <Grid className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Overview</span>
          </button>

          {/* Fullscreen Toggle */}
          <button
            type="button"
            onClick={toggleFullscreen}
            className="p-1.5 rounded bg-bg-panel border border-border-hairline text-text-muted hover:text-text-primary transition-colors cursor-pointer"
            title="Fullscreen Toggle (Press 'F')"
          >
            {isFullscreen ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
          </button>

          {/* Print / Save Deck */}
          <button
            type="button"
            onClick={() => window.print()}
            className="p-1.5 rounded bg-bg-panel border border-border-hairline text-text-muted hover:text-text-primary transition-colors cursor-pointer"
            title="Print or Save Deck (PDF)"
          >
            <Printer className="h-4 w-4" />
          </button>
        </div>
      </header>


      {/* Main Slide Presentation Stage */}
      <main className="flex-1 flex flex-col justify-center items-center py-6 sm:py-8 max-w-5xl w-full mx-auto relative z-10">
        <div className="w-full transition-all duration-200">
          {currentSlide === 0 && <SlideCover onNext={nextSlide} onStart={handleStartPresentation} />}
          {currentSlide === 1 && <SlideProblem />}
          {currentSlide === 2 && <SlideSolution />}
          {currentSlide === 3 && <SlideTechnology />}
          {currentSlide === 4 && <SlideHumanReview />}
          {currentSlide === 5 && <SlideAttestation />}
          {currentSlide === 6 && <SlideHowItWorks />}
          {currentSlide === 7 && <SlideMarket />}
          {currentSlide === 8 && <SlideBusinessModel />}
          {currentSlide === 9 && <SlideCompetition />}
          {currentSlide === 10 && <SlideRoadmap />}
          {currentSlide === 11 && <SlideVision onRestart={() => handleStartPresentation()} />}
        </div>
      </main>

      {/* Bottom Deck Navigation Bar */}
      <footer className="shrink-0 pt-4 border-t border-border-hairline flex flex-col sm:flex-row items-center justify-between gap-3 relative z-10">
        {/* Progress Bar & Indicators */}
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <div className="text-xs font-mono text-text-muted">
            <span className="text-text-primary font-bold">{String(currentSlide + 1).padStart(2, "0")}</span>
            <span className="text-text-muted"> / {String(totalSlides).padStart(2, "0")}</span>
          </div>
          <div className="h-1.5 w-32 sm:w-48 bg-bg-panel border border-border-hairline rounded-none overflow-hidden">
            <div
              className="h-full bg-accent-scan transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          <span className="text-[10px] font-mono text-text-muted uppercase hidden md:inline">
            [{SLIDES_META[currentSlide].category}]
          </span>
        </div>

        {/* Keyboard Shortcuts Tip */}
        <div className="text-[11px] font-mono text-text-muted hidden lg:flex items-center gap-2">
          <span>Navigation:</span>
          <kbd className="px-1.5 py-0.5 rounded bg-bg-panel border border-border-hairline text-[10px] font-mono text-text-primary">
            ←
          </kbd>
          <kbd className="px-1.5 py-0.5 rounded bg-bg-panel border border-border-hairline text-[10px] font-mono text-text-primary">
            →
          </kbd>
          <span>or</span>
          <kbd className="px-1.5 py-0.5 rounded bg-bg-panel border border-border-hairline text-[10px] font-mono text-text-primary">
            Space
          </kbd>
        </div>

        {/* Prev / Next Buttons */}
        <div className="flex items-center gap-2 w-full sm:w-auto justify-end font-mono">
          <button
            type="button"
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded text-xs bg-bg-panel hover:bg-bg-panel-raised disabled:opacity-30 disabled:pointer-events-none border border-border-hairline text-text-primary transition-colors cursor-pointer"
          >
            <ChevronLeft className="h-4 w-4" />
            <span>Prev</span>
          </button>
          <button
            type="button"
            onClick={nextSlide}
            disabled={currentSlide === totalSlides - 1}
            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded text-xs bg-accent-scan text-bg-void hover:bg-accent-scan/90 disabled:opacity-30 disabled:pointer-events-none font-bold transition-colors cursor-pointer"
          >
            <span>Next</span>
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </footer>

      {/* Grid Overview Modal */}
      {isOverviewOpen && (
        <div className="fixed inset-0 z-50 bg-bg-void/95 backdrop-blur-sm flex flex-col p-4 sm:p-8 animate-fadeIn">
          <div className="flex items-center justify-between pb-4 border-b border-border-hairline max-w-5xl mx-auto w-full">
            <div>
              <h2 className="font-mono text-lg font-bold text-text-primary">DECK OVERVIEW</h2>
              <p className="text-xs text-text-muted">Select a slide to jump directly to its content</p>
            </div>
            <button
              type="button"
              onClick={() => setIsOverviewOpen(false)}
              className="px-3 py-1.5 rounded bg-bg-panel border border-border-hairline hover:bg-bg-panel-raised text-xs font-mono text-text-primary transition-colors cursor-pointer"
            >
              Close (Esc)
            </button>
          </div>

          <div className="flex-1 overflow-y-auto max-w-5xl mx-auto w-full py-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {SLIDES_META.map((meta, idx) => (
              <button
                key={meta.id}
                type="button"
                onClick={() => jumpToSlide(idx)}
                className={cn(
                  "text-left p-3.5 rounded border transition-colors flex flex-col justify-between h-32 group cursor-pointer font-sans",
                  idx === currentSlide
                    ? "bg-bg-panel-raised border-accent-scan text-text-primary"
                    : "bg-bg-panel border-border-hairline hover:border-text-muted text-text-muted"
                )}
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-accent-scan">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-bg-void text-text-muted border border-border-hairline">
                    {meta.category}
                  </span>
                </div>
                <div className="space-y-1">
                  <h3 className="font-semibold text-xs text-text-primary line-clamp-1 group-hover:text-accent-scan transition-colors">
                    {meta.title}
                  </h3>
                  <p className="text-[11px] text-text-muted line-clamp-2 leading-relaxed">
                    {meta.subtitle}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* African Voice Guide Modal */}
      {isAfricanVoiceGuideOpen && (
        <div className="fixed inset-0 z-50 bg-bg-void/95 backdrop-blur-sm flex flex-col items-center justify-center p-4 animate-fadeIn font-sans">
          <div className="bg-bg-panel border border-border-hairline max-w-lg w-full rounded p-6 space-y-4 shadow-xl font-mono text-xs">
            <div className="flex items-center justify-between border-b border-border-hairline pb-3">
              <div className="flex items-center gap-2 text-accent-scan font-bold text-sm">
                <span>🇿🇦 HOW TO ENABLE AFRICAN SYSTEM VOICE ON MAC</span>
              </div>
              <button
                type="button"
                onClick={() => setIsAfricanVoiceGuideOpen(false)}
                className="text-text-muted hover:text-text-primary"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3 font-sans text-xs text-text-muted leading-relaxed">
              <p className="text-text-primary">
                On macOS, Apple provides <strong>English (South Africa)</strong> voices directly in system settings:
              </p>

              <div className="p-3 rounded bg-bg-panel-raised border border-border-hairline space-y-2 font-mono text-[11px]">
                <div className="text-accent-scan font-bold"> On macOS (Mac):</div>
                <ol className="list-decimal list-inside space-y-1 text-text-primary">
                  <li>Open <strong>System Settings → Accessibility</strong></li>
                  <li>Click <strong>Spoken Content → System Voice</strong></li>
                  <li>Select <strong>Manage Voices...</strong></li>
                  <li>Scroll to <strong>English (South Africa)</strong></li>
                  <li>Click the cloud download icon for <strong>Voice 1</strong> (Male) or <strong>Voice 2 / Tessa</strong>!</li>
                </ol>
              </div>

              <div className="p-3 rounded bg-bg-panel-raised border border-border-hairline space-y-2 font-mono text-[11px]">
                <div className="text-accent-scan font-bold">🌐 On Google Chrome:</div>
                <p className="text-text-primary">
                  Google Chrome includes <strong>Google English (Nigeria)</strong> and <strong>Google English (South Africa)</strong> automatically in the voice selector dropdown above!
                </p>
              </div>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                type="button"
                onClick={() => setIsAfricanVoiceGuideOpen(false)}
                className="px-4 py-2 rounded bg-accent-scan text-bg-void font-bold cursor-pointer"
              >
                Got It!
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ==========================================
// INDIVIDUAL SLIDE COMPONENTS
// ==========================================

// --- SLIDE 1: COVER ---
function SlideCover({ onNext, onStart }: { onNext: () => void; onStart: () => void }) {
  return (
    <div className="flex flex-col items-center text-center space-y-8 py-4 max-w-3xl mx-auto">
      {/* Eyebrow */}
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-bg-panel border border-border-hairline text-accent-scan text-xs font-mono">
        <Terminal className="h-3.5 w-3.5" />
        <span>ZYRON AI SECURITY ENGINE — PITCH DECK</span>
      </div>

      {/* Hero Headline */}
      <div className="space-y-4">
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-text-primary leading-tight">
          Dual-Engine AI & Mathematical Proving Infrastructure for <span className="text-accent-scan">Web3 Protocols</span>
        </h1>
        <p className="text-sm sm:text-base text-text-muted leading-relaxed max-w-2xl mx-auto font-sans">
          Replacing speculative linting with AST invariant reasoning, Autonomous Red-Team EVM sandbox attack proving, and immutable on-chain attestations.
        </p>
      </div>

      {/* 4 Pillars Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full pt-2">
        {[
          { label: "AST Invariant Engine", desc: "Deterministic opcode parsing", icon: Code2 },
          { label: "Red-Team Exploit Prover", desc: "zyron-agent EVM sandbox", icon: Cpu },
          { label: "EVM Trace Stepper", desc: "Step-by-step opcode replay", icon: Activity },
          { label: "Verifiable Proofs", desc: "On-chain bytecode attestations", icon: FileCheck2 },
        ].map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="p-3.5 rounded bg-bg-panel border border-border-hairline text-left space-y-1.5 hover:border-accent-scan/50 transition-colors"
            >
              <div className="h-6 w-6 rounded bg-bg-panel-raised text-accent-scan flex items-center justify-center border border-border-hairline">
                <Icon className="h-3.5 w-3.5" />
              </div>
              <div className="font-mono text-xs font-bold text-text-primary">{item.label}</div>
              <div className="text-[11px] text-text-muted">{item.desc}</div>
            </div>
          );
        })}
      </div>

      {/* CTA Buttons */}
      <div className="pt-2 flex items-center justify-center gap-3">
        <button
          type="button"
          onClick={onStart}
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded bg-accent-scan text-bg-void font-mono font-bold text-xs hover:bg-accent-scan/90 transition-colors cursor-pointer"
        >
          <Play className="h-4 w-4 fill-bg-void" />
          <span>PLAY LIVE PRESENTATION</span>
        </button>
        <button
          type="button"
          onClick={onNext}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-bg-panel border border-border-hairline text-text-primary font-mono text-xs hover:bg-bg-panel-raised transition-colors cursor-pointer"
        >
          <span>MANUAL SLIDES</span>
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

// --- SLIDE 2: PROBLEM ---
function SlideProblem() {
  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <SlideHeader
        badge="Slide 2 – Problem"
        title="The Speculative Audit Bottleneck"
        description="Smart contracts secure over $100B in value, yet Web3 security remains trapped between noisy linters and slow, expensive manual audits."
      />

      {/* Key Problems Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        <div className="p-4 rounded bg-bg-panel border border-border-hairline space-y-2">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs text-signal-high font-bold">PROBLEM 01</span>
            <AlertTriangle className="h-4 w-4 text-signal-high" />
          </div>
          <h3 className="font-mono text-sm font-bold text-text-primary">Speculative Linters & 80% Noise</h3>
          <p className="text-xs text-text-muted leading-relaxed font-sans">
            Generic AI linters guess syntax errors without code execution, flooding protocol teams with 80%+ false positive hallucination alerts.
          </p>
        </div>

        <div className="p-4 rounded bg-bg-panel border border-border-hairline space-y-2">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs text-signal-high font-bold">PROBLEM 02</span>
            <Clock className="h-4 w-4 text-signal-high" />
          </div>
          <h3 className="font-mono text-sm font-bold text-text-primary">4–8 Week Audit Delays</h3>
          <p className="text-xs text-text-muted leading-relaxed font-sans">
            Manual audit firms cost $50k–$150k+ and take 4 to 8 weeks to start, delaying protocol updates and product launches.
          </p>
        </div>

        <div className="p-4 rounded bg-bg-panel border border-border-hairline space-y-2">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs text-signal-high font-bold">PROBLEM 03</span>
            <FileText className="h-4 w-4 text-signal-high" />
          </div>
          <h3 className="font-mono text-sm font-bold text-text-primary">PDF Reports Unlinked to Bytecode</h3>
          <p className="text-xs text-text-muted leading-relaxed font-sans">
            Audits produce static PDF reports with zero cryptographic link between the audited code and deployed EVM bytecode.
          </p>
        </div>

        <div className="p-4 rounded bg-bg-panel border border-border-hairline space-y-2">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs text-signal-high font-bold">PROBLEM 04</span>
            <ShieldAlert className="h-4 w-4 text-signal-high" />
          </div>
          <h3 className="font-mono text-sm font-bold text-text-primary">Zero Automated Exploit Proving</h3>
          <p className="text-xs text-text-muted leading-relaxed font-sans">
            Existing tools predict vulnerabilities instead of executing attacks in an EVM sandbox to prove whether an exploit is actually viable.
          </p>
        </div>
      </div>

      {/* Result Callout */}
      <div className="p-3.5 rounded bg-bg-panel-raised border border-signal-critical/40 flex items-center gap-3">
        <div className="h-8 w-8 rounded bg-signal-critical/10 text-signal-critical flex items-center justify-center shrink-0 border border-signal-critical/20">
          <AlertTriangle className="h-4 w-4" />
        </div>
        <div className="font-mono text-xs">
          <span className="text-signal-critical font-bold">Industry Gap: </span>
          <span className="text-text-primary font-sans">Speculative bug prediction fails Web3. Protocols need deterministic EVM attack proofs before deployment.</span>
        </div>
      </div>
    </div>
  );
}

// --- SLIDE 3: SOLUTION ---
function SlideSolution() {
  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <SlideHeader
        badge="Slide 3 – Solution"
        title="Zyron Dual-Engine AI Architecture"
        description="Zyron replaces speculative bug finding with automated mathematical & dynamic proof across three integrated layers:"
      />

      {/* 3 Solution Layers */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
        <div className="p-4.5 rounded bg-bg-panel border border-border-hairline space-y-3 hover:border-accent-scan/50 transition-colors">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs font-bold text-accent-scan">LAYER 01</span>
            <Code2 className="h-4 w-4 text-accent-scan" />
          </div>
          <h3 className="font-mono text-sm font-bold text-text-primary">AST Invariant Reasoning</h3>
          <p className="text-xs text-text-muted leading-relaxed font-sans">
            Parses raw Solidity into Abstract Syntax Trees and evaluates protocol-specific invariants (collateral solvency, share dilution, oracle bounds).
          </p>
        </div>

        <div className="p-4.5 rounded bg-bg-panel border border-border-hairline space-y-3 hover:border-accent-scan/50 transition-colors">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs font-bold text-accent-scan">LAYER 02</span>
            <Cpu className="h-4 w-4 text-accent-scan" />
          </div>
          <h3 className="font-mono text-sm font-bold text-text-primary">Red-Team Exploit Prover</h3>
          <p className="text-xs text-text-muted leading-relaxed font-sans">
            <code className="text-accent-scan">zyron-agent</code> microservice forks EVM mainnet state via Anvil, synthesizes multi-step attacks, and generates Foundry <code className="text-accent-scan">.t.sol</code> PoCs.
          </p>
        </div>

        <div className="p-4.5 rounded bg-bg-panel border border-border-hairline space-y-3 hover:border-accent-scan/50 transition-colors">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs font-bold text-accent-scan">LAYER 03</span>
            <FileCheck2 className="h-4 w-4 text-accent-scan" />
          </div>
          <h3 className="font-mono text-sm font-bold text-text-primary">Trace Stepper & Proofs</h3>
          <p className="text-xs text-text-muted leading-relaxed font-sans">
            Emits interactive opcode transaction traces for senior auditors to verify in real time, anchoring SHA-256 bytecode attestations onchain.
          </p>
        </div>
      </div>

      {/* Bottom Summary Banner */}
      <div className="p-3.5 rounded bg-bg-panel border border-border-hairline flex items-center justify-between gap-3 font-mono text-xs">
        <span className="text-text-muted">Core Value Proposition:</span>
        <span className="text-accent-scan font-bold">Automated EVM attack proofs with zero false positives.</span>
      </div>
    </div>
  );
}

// --- SLIDE 4: TECHNOLOGY ---
function SlideTechnology() {
  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <SlideHeader
        badge="Slide 4 – AI Layer 1"
        title="AST & Invariant Semantic Engine"
        description="Deterministic code modeling parsing Solidity into AST and evaluating protocol-specific invariants:"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Pass List */}
        <div className="p-4 rounded bg-bg-panel border border-border-hairline space-y-3">
          <div className="font-mono text-xs font-bold text-accent-scan flex items-center justify-between border-b border-border-hairline pb-2">
            <span>PROTOCOL INVARIANT PASSES</span>
            <span>FORMAL VERIFICATION</span>
          </div>
          <div className="grid grid-cols-1 gap-1.5 font-mono text-xs text-text-primary">
            {[
              "1. Collateral Solvency & Share Dilution",
              "2. Non-Reentrant State Ordering",
              "3. Price Oracle Staleness & Twap Bounds",
              "4. Proxy Storage Collision & Upgrade Safety",
              "5. Flash Loan Liquidation Boundaries",
              "6. Yul Assembly & Low-Level Call Risks",
              "7. Cross-File Inheritance Triage",
            ].map((pass, idx) => (
              <div key={idx} className="p-2 rounded bg-bg-panel-raised border border-border-hairline flex items-center justify-between">
                <span>{pass}</span>
                <Check className="h-3 w-3 text-signal-resolved" />
              </div>
            ))}
          </div>
        </div>

        {/* Technical Console Output */}
        <div className="p-4 rounded bg-bg-panel border border-border-hairline space-y-3 font-mono text-xs">
          <div className="flex items-center justify-between text-[11px] text-text-muted border-b border-border-hairline pb-2">
            <span className="flex items-center gap-1.5 text-accent-scan">
              <Terminal className="h-3.5 w-3.5" /> AST_INVARIANT_ENGINE
            </span>
            <span className="text-signal-resolved font-bold">DETERMINISTIC</span>
          </div>

          <div className="space-y-2 text-[11px] leading-relaxed text-text-muted">
            <p className="text-text-primary">&gt; parsing Solidity AST nodes...</p>
            <p className="text-accent-scan">&gt; evaluating protocol invariants across 32 state variables...</p>
            <div className="p-2.5 rounded bg-bg-void border border-border-hairline space-y-1">
              <div className="text-signal-high font-bold">⚠ INVARIANT BREACH CANDIDATE</div>
              <div className="text-[10px] text-text-primary">Line 142: Share minting fee precision mismatch</div>
              <div className="text-[10px] text-text-muted">Target: depositCollateral(uint256 amount)</div>
            </div>
            <p className="text-signal-resolved">&gt; AST Analysis Complete: Passed candidate to zyron-agent for EVM sandbox proof.</p>
          </div>

          <div className="pt-2 border-t border-border-hairline text-[11px] text-text-muted font-sans">
            Reasons against mathematical protocol invariants rather than guessing syntax errors.
          </div>
        </div>
      </div>
    </div>
  );
}

// --- SLIDE 5: HUMAN REVIEW (AI LAYER 2) ---
function SlideHumanReview() {
  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <SlideHeader
        badge="Slide 5 – AI Layer 2"
        title="Autonomous Red-Team Prover (zyron-agent)"
        description="Ephemeral virtual EVM state forking via Anvil microservice to synthesize real attacks and eliminate false positives:"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        <div className="p-4 rounded bg-bg-panel border border-border-hairline space-y-2 hover:border-accent-scan/50 transition-colors">
          <div className="h-7 w-7 rounded bg-bg-panel-raised text-accent-scan flex items-center justify-center border border-border-hairline font-mono text-xs font-bold">
            01
          </div>
          <h3 className="font-mono text-sm font-bold text-text-primary">Ephemeral Virtual EVM Forking</h3>
          <p className="text-xs text-text-muted leading-relaxed font-sans">
            Spins up an instantaneous local EVM execution sandbox (via Anvil) matching live mainnet state and protocol storage.
          </p>
        </div>

        <div className="p-4 rounded bg-bg-panel border border-border-hairline space-y-2 hover:border-accent-scan/50 transition-colors">
          <div className="h-7 w-7 rounded bg-bg-panel-raised text-accent-scan flex items-center justify-center border border-border-hairline font-mono text-xs font-bold">
            02
          </div>
          <h3 className="font-mono text-sm font-bold text-text-primary">Active Attack Synthesis</h3>
          <p className="text-xs text-text-muted leading-relaxed font-sans">
            The AI acts as an autonomous adversary: generating attacker contracts, calculating flash loan capital, and executing multi-step exploits.
          </p>
        </div>

        <div className="p-4 rounded bg-bg-panel border border-border-hairline space-y-2 hover:border-accent-scan/50 transition-colors">
          <div className="h-7 w-7 rounded bg-bg-panel-raised text-accent-scan flex items-center justify-center border border-border-hairline font-mono text-xs font-bold">
            03
          </div>
          <h3 className="font-mono text-sm font-bold text-text-primary">Executable Foundry PoCs (.t.sol)</h3>
          <p className="text-xs text-text-muted leading-relaxed font-sans">
            If an invariant breaks, <code className="text-accent-scan">zyron-agent</code> generates a reproducible Foundry test suite to mathematically prove the vulnerability.
          </p>
        </div>

        <div className="p-4 rounded bg-bg-panel border border-border-hairline space-y-2 hover:border-accent-scan/50 transition-colors">
          <div className="h-7 w-7 rounded bg-bg-panel-raised text-accent-scan flex items-center justify-center border border-border-hairline font-mono text-xs font-bold">
            04
          </div>
          <h3 className="font-mono text-sm font-bold text-text-primary">Zero False-Positive Guarantee</h3>
          <p className="text-xs text-text-muted leading-relaxed font-sans">
            Unverified bugs that hold invariant state during sandbox execution are automatically filtered out before senior auditor triage.
          </p>
        </div>
      </div>

      <div className="p-3.5 rounded bg-bg-panel border border-border-hairline font-mono text-xs text-text-muted flex items-center justify-between">
        <span>zyron-agent Guarantee:</span>
        <span className="text-accent-scan font-bold">Every reported issue includes an executable Foundry PoC.</span>
      </div>
    </div>
  );
}

// --- SLIDE 6: ON-CHAIN ATTESTATION (AI LAYER 3) ---
function SlideAttestation() {
  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <SlideHeader
        badge="Slide 6 – AI Layer 3 & Attestation"
        title="Dual-Pane Workbench & EVM Trace Replay"
        description="Interactive transaction trace stepper emitting opcodes, gas consumption, and storage slot mutations for auditors:"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Included Proofs */}
        <div className="p-4 rounded bg-bg-panel border border-border-hairline space-y-3">
          <div className="font-mono text-xs font-bold text-accent-scan border-b border-border-hairline pb-2">
            INTERACTIVE TRACE & PROOF FEATURES
          </div>
          <div className="space-y-2 font-mono text-xs">
            <div className="p-2.5 rounded bg-bg-panel-raised border border-border-hairline space-y-1">
              <div className="text-text-primary font-bold">1. Interactive Opcode Trace Stepper</div>
              <div className="text-[10px] text-text-muted">Inspect storage slot mutations, gas usage, and balance drains step-by-step</div>
            </div>
            <div className="p-2.5 rounded bg-bg-panel-raised border border-border-hairline space-y-1">
              <div className="text-text-primary font-bold">2. 90% Auditor Augmentation</div>
              <div className="text-[10px] text-text-muted">AI does heavy verification upfront, reducing audit turnaround from weeks to days</div>
            </div>
            <div className="p-2.5 rounded bg-bg-panel-raised border border-border-hairline space-y-1">
              <div className="text-text-primary font-bold">3. SHA-256 Bytecode & Merkle Proofs</div>
              <div className="text-[10px] text-text-muted">Direct cryptographic link to exact compiled bytecode and finding roots</div>
            </div>
            <div className="p-2.5 rounded bg-bg-panel-raised border border-border-hairline space-y-1">
              <div className="text-text-primary font-bold">4. EIP-712 Auditor Signatures</div>
              <div className="text-[10px] text-text-muted">Cryptographic signatures published directly to public EVM attestations (EAS)</div>
            </div>
          </div>
        </div>

        {/* Certificate Display */}
        <div className="p-4 rounded bg-bg-panel border border-border-hairline space-y-3 font-mono text-xs">
          <div className="flex items-center justify-between text-[11px] text-text-muted border-b border-border-hairline pb-2">
            <span>EAS CERTIFICATE SCHEMA</span>
            <span className="text-signal-resolved font-bold">VERIFIED ONCHAIN</span>
          </div>

          <div className="space-y-2.5 text-[11px]">
            <div>
              <div className="text-text-muted">Bytecode Hash:</div>
              <div className="text-accent-scan break-all font-bold">0x8a7f9b2c3d4e5f6a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a</div>
            </div>
            <div>
              <div className="text-text-muted">Findings Merkle Root:</div>
              <div className="text-text-primary break-all">0x1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c</div>
            </div>
            <div>
              <div className="text-text-muted">Signer (EIP-712):</div>
              <div className="text-text-primary">0xAuditor712...93A2 (Verified)</div>
            </div>
            <div>
              <div className="text-text-muted">Foundry PoC Suite:</div>
              <div className="text-signal-resolved font-bold">VaultSolvency.t.sol (0 False Positives)</div>
            </div>
          </div>

          <div className="pt-2 border-t border-border-hairline text-[11px] text-text-muted font-sans">
            Protocol founders and auditors can independently verify and replay transaction traces onchain.
          </div>
        </div>
      </div>
    </div>
  );
}

// --- SLIDE 7: HOW IT WORKS ---
function SlideHowItWorks() {
  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <SlideHeader
        badge="Slide 7 – How It Works"
        title="5-Stage AI Audit Lifecycle"
        description="Transparent process from code submission and EVM sandbox attack proving to on-chain attestation:"
      />

      {/* 5 Stages Sequence */}
      <div className="space-y-2.5 font-mono text-xs">
        {[
          { step: "STAGE 01", title: "Scope & Invariant Setup", desc: "Client submits smart contract source code and specifies protocol solvency invariants." },
          { step: "STAGE 02", title: "AST Invariant Analysis", desc: "Automated AST static engine parses opcode flow graphs and evaluates invariant rules." },
          { step: "STAGE 03", title: "Red-Team EVM Sandbox", desc: "zyron-agent forks mainnet state via Anvil, synthesizes attacks, and emits Foundry .t.sol PoCs." },
          { step: "STAGE 04", title: "Trace Replay Auditor Triage", desc: "Senior auditors inspect opcode trace steppers, write remediation guidance, and verify fixes." },
          { step: "STAGE 05", title: "On-Chain Attestation", desc: "Final cryptographic certificate with bytecode hash and Merkle root published onchain." },
        ].map((item, idx) => (
          <div key={idx} className="p-3.5 rounded bg-bg-panel border border-border-hairline flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:border-accent-scan/50 transition-colors">
            <div className="flex items-center gap-3">
              <span className="px-2 py-0.5 rounded bg-bg-panel-raised border border-border-hairline text-accent-scan font-bold">
                {item.step}
              </span>
              <span className="font-bold text-text-primary">{item.title}</span>
            </div>
            <span className="text-text-muted text-xs font-sans sm:text-right max-w-md">{item.desc}</span>
          </div>
        ))}
      </div>

      <div className="p-3.5 rounded bg-bg-panel border border-border-hairline font-mono text-xs text-text-muted flex items-center justify-between">
        <span>Lifecycle Guarantee:</span>
        <span className="text-accent-scan font-bold">Automated mathematical proof with senior auditor sign-off.</span>
      </div>
    </div>
  );
}

// --- SLIDE 8: MARKET OPPORTUNITY ---
function SlideMarket() {
  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <SlideHeader
        badge="Slide 8 – Market Opportunity"
        title="Surging Demand for AI Security Infrastructure"
        description="Positioned at the intersection of automated AI execution, security tooling, and on-chain trust."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        <div className="p-4 rounded bg-bg-panel border border-border-hairline space-y-2 hover:border-accent-scan/50 transition-colors">
          <div className="flex items-center justify-between font-mono text-xs text-accent-scan">
            <span className="font-bold">DRIVER 01</span>
            <Layers className="h-4 w-4" />
          </div>
          <h3 className="font-mono text-sm font-bold text-text-primary">L2 Contract Explosion</h3>
          <p className="text-xs text-text-muted leading-relaxed font-sans">
            Thousands of smart contracts deployed daily across Layer-2 rollups (Arbitrum, Base, Optimism) requiring rapid EVM security validation.
          </p>
        </div>

        <div className="p-4 rounded bg-bg-panel border border-border-hairline space-y-2 hover:border-accent-scan/50 transition-colors">
          <div className="flex items-center justify-between font-mono text-xs text-accent-scan">
            <span className="font-bold">DRIVER 02</span>
            <Building2 className="h-4 w-4" />
          </div>
          <h3 className="font-mono text-sm font-bold text-text-primary">Institutional & RWA Protocols</h3>
          <p className="text-xs text-text-muted leading-relaxed font-sans">
            Institutional players and Real-World Asset (RWA) protocols demanding mathematical EVM proofs before committing capital.
          </p>
        </div>

        <div className="p-4 rounded bg-bg-panel border border-border-hairline space-y-2 hover:border-accent-scan/50 transition-colors">
          <div className="flex items-center justify-between font-mono text-xs text-accent-scan">
            <span className="font-bold">DRIVER 03</span>
            <TrendingUp className="h-4 w-4" />
          </div>
          <h3 className="font-mono text-sm font-bold text-text-primary">Shift from Linters to Exploit Provers</h3>
          <p className="text-xs text-text-muted leading-relaxed font-sans">
            Industry paradigm shift moving from noisy static linters toward dynamic EVM attack simulation and verifiable PoC suites.
          </p>
        </div>

        <div className="p-4 rounded bg-bg-panel border border-border-hairline space-y-2 hover:border-accent-scan/50 transition-colors">
          <div className="flex items-center justify-between font-mono text-xs text-accent-scan">
            <span className="font-bold">DRIVER 04</span>
            <FileCheck2 className="h-4 w-4" />
          </div>
          <h3 className="font-mono text-sm font-bold text-text-primary">Verifiable On-Chain Security</h3>
          <p className="text-xs text-text-muted leading-relaxed font-sans">
            Strong market demand for on-chain verifiable security certificates directly linking bytecode hashes to audit proofs.
          </p>
        </div>
      </div>

      <div className="p-3.5 rounded bg-bg-panel border border-border-hairline font-mono text-xs text-text-muted flex items-center justify-between">
        <span>Strategic Position:</span>
        <span className="text-accent-scan font-bold">Zyron sits at the intersection of AI execution and on-chain trust.</span>
      </div>
    </div>
  );
}

// --- SLIDE 9: BUSINESS MODEL ---
function SlideBusinessModel() {
  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <SlideHeader
        badge="Slide 9 – Business Model"
        title="High-Margin Hybrid Revenue Model"
        description="Clear path from project-based revenue to recurring protocol security revenue:"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
        <div className="p-4.5 rounded bg-bg-panel border border-border-hairline space-y-3">
          <div className="font-mono text-xs text-accent-scan font-bold">STREAM 01</div>
          <h3 className="font-mono text-sm font-bold text-text-primary">Full AI Audits</h3>
          <p className="text-xs text-text-muted leading-relaxed font-sans">
            Fixed-price security engagements with full AST scanning, <code className="text-accent-scan">zyron-agent</code> EVM sandbox PoCs, and on-chain attestation.
          </p>
          <div className="pt-2 border-t border-border-hairline font-mono text-[11px] text-text-primary">
            Fixed-Price Engagements
          </div>
        </div>

        <div className="p-4.5 rounded bg-bg-panel border border-accent-scan/50 space-y-3">
          <div className="font-mono text-xs text-accent-scan font-bold">STREAM 02</div>
          <h3 className="font-mono text-sm font-bold text-text-primary">Continuous PR Scanning</h3>
          <p className="text-xs text-text-muted leading-relaxed font-sans">
            Ongoing CI/CD pull-request scanning, automated invariant checks, plus priority EVM sandbox triage for active protocol updates.
          </p>
          <div className="pt-2 border-t border-border-hairline font-mono text-[11px] text-accent-scan font-bold">
            Recurring Subscription ARR
          </div>
        </div>

        <div className="p-4.5 rounded bg-bg-panel border border-border-hairline space-y-3">
          <div className="font-mono text-xs text-text-muted font-bold">STREAM 03 (FUTURE)</div>
          <h3 className="font-mono text-sm font-bold text-text-primary">Enterprise Telemetry</h3>
          <p className="text-xs text-text-muted leading-relaxed font-sans">
            Continuous active monitoring, insurance risk telemetry, custom invariant suite development, and enterprise API access.
          </p>
          <div className="pt-2 border-t border-border-hairline font-mono text-[11px] text-text-muted">
            Enterprise Expansion
          </div>
        </div>
      </div>

      <div className="p-3.5 rounded bg-bg-panel border border-border-hairline font-mono text-xs text-text-muted flex items-center justify-between">
        <span>Revenue Trajectory:</span>
        <span className="text-accent-scan font-bold">Transitioning audit services into recurring SaaS subscriptions.</span>
      </div>
    </div>
  );
}

// --- SLIDE 10: COMPETITIVE POSITION ---
function SlideCompetition() {
  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <SlideHeader
        badge="Slide 10 – Competitive Advantage"
        title="Why Zyron Outperforms Linters & Legacy Firms"
        description="Side-by-side comparison of smart contract security approaches across key technical criteria:"
      />

      <div className="rounded border border-border-hairline overflow-hidden bg-bg-panel font-mono text-xs">
        <table className="w-full text-left">
          <thead className="bg-bg-panel-raised text-text-primary font-bold border-b border-border-hairline">
            <tr>
              <th className="py-3 px-4">Feature</th>
              <th className="py-3 px-4 text-text-muted">Generic Linters</th>
              <th className="py-3 px-4 text-text-muted">Legacy Firms</th>
              <th className="py-3 px-4 text-accent-scan font-bold">Zyron Dual-Engine AI</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border-hairline text-text-primary text-[11px]">
            <tr>
              <td className="py-2.5 px-4 font-bold">EVM Execution Sandbox</td>
              <td className="py-2.5 px-4 text-signal-critical">No (Static Only)</td>
              <td className="py-2.5 px-4 text-signal-high">Manual / Slow</td>
              <td className="py-2.5 px-4 text-accent-scan font-bold">Instant Anvil Fork</td>
            </tr>
            <tr>
              <td className="py-2.5 px-4 font-bold">False Positive Rate</td>
              <td className="py-2.5 px-4 text-signal-critical">80%+ Noise</td>
              <td className="py-2.5 px-4 text-signal-resolved">Low (Manual)</td>
              <td className="py-2.5 px-4 text-accent-scan font-bold">0% (Proven PoCs)</td>
            </tr>
            <tr>
              <td className="py-2.5 px-4 font-bold">Automated Attack Proving</td>
              <td className="py-2.5 px-4 text-signal-critical">No</td>
              <td className="py-2.5 px-4 text-signal-critical">No</td>
              <td className="py-2.5 px-4 text-accent-scan font-bold">Foundry .t.sol PoCs</td>
            </tr>
            <tr>
              <td className="py-2.5 px-4 font-bold">Interactive Trace Replay</td>
              <td className="py-2.5 px-4 text-signal-critical">No</td>
              <td className="py-2.5 px-4 text-signal-critical">No</td>
              <td className="py-2.5 px-4 text-accent-scan font-bold">Step-by-Step Opcodes</td>
            </tr>
            <tr>
              <td className="py-2.5 px-4 font-bold">Delivery Turnaround</td>
              <td className="py-2.5 px-4 text-signal-resolved">Seconds (No Proof)</td>
              <td className="py-2.5 px-4 text-signal-critical">4–8 Weeks</td>
              <td className="py-2.5 px-4 text-accent-scan font-bold">Days / Real-time</td>
            </tr>
            <tr>
              <td className="py-2.5 px-4 font-bold">On-Chain Bytecode Attestation</td>
              <td className="py-2.5 px-4 text-signal-critical">No</td>
              <td className="py-2.5 px-4 text-signal-critical">No (PDF Only)</td>
              <td className="py-2.5 px-4 text-accent-scan font-bold">EAS On-Chain Certs</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

// --- SLIDE 11: ROADMAP ---
function SlideRoadmap() {
  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <SlideHeader
        badge="Slide 11 – Current Status & Roadmap"
        title="Execution Status & Future Roadmap"
        description="Strategic milestone breakdown from live features to long-term protocol security infrastructure:"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
        {/* Current */}
        <div className="p-4 rounded bg-bg-panel border border-accent-scan/50 space-y-3 font-mono">
          <div className="flex items-center justify-between text-xs font-bold border-b border-border-hairline pb-2">
            <span className="text-accent-scan">CURRENT (NOW)</span>
            <span className="px-1.5 py-0.5 rounded bg-bg-panel-raised text-signal-resolved text-[10px]">LIVE</span>
          </div>
          <ul className="space-y-2 text-xs font-sans text-text-primary">
            <li className="flex items-start gap-2">
              <Check className="h-3.5 w-3.5 text-accent-scan shrink-0 mt-0.5" />
              <span>Core AST analysis engine with multiple security passes</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="h-3.5 w-3.5 text-accent-scan shrink-0 mt-0.5" />
              <span>Auditor workbench and finding management</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="h-3.5 w-3.5 text-accent-scan shrink-0 mt-0.5" />
              <span>On-chain attestation system (Arbitrum Sepolia)</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="h-3.5 w-3.5 text-accent-scan shrink-0 mt-0.5" />
              <span>End-to-end audit workflow</span>
            </li>
          </ul>
        </div>

        {/* Near Term */}
        <div className="p-4 rounded bg-bg-panel border border-border-hairline space-y-3 font-mono">
          <div className="flex items-center justify-between text-xs font-bold border-b border-border-hairline pb-2">
            <span className="text-text-primary">NEAR TERM</span>
            <span className="px-1.5 py-0.5 rounded bg-bg-panel-raised text-accent-scan text-[10px]">IN DEV</span>
          </div>
          <ul className="space-y-2 text-xs font-sans text-text-muted">
            <li className="flex items-start gap-2">
              <ArrowRight className="h-3.5 w-3.5 text-accent-scan shrink-0 mt-0.5" />
              <span>Deeper multi-file and inheritance support</span>
            </li>
            <li className="flex items-start gap-2">
              <ArrowRight className="h-3.5 w-3.5 text-accent-scan shrink-0 mt-0.5" />
              <span>Improved false positive reduction</span>
            </li>
            <li className="flex items-start gap-2">
              <ArrowRight className="h-3.5 w-3.5 text-accent-scan shrink-0 mt-0.5" />
              <span>Better reporting and client dashboard</span>
            </li>
            <li className="flex items-start gap-2">
              <ArrowRight className="h-3.5 w-3.5 text-accent-scan shrink-0 mt-0.5" />
              <span>Expanded test coverage and reliability</span>
            </li>
          </ul>
        </div>

        {/* Future */}
        <div className="p-4 rounded bg-bg-panel border border-border-hairline space-y-3 font-mono">
          <div className="flex items-center justify-between text-xs font-bold border-b border-border-hairline pb-2">
            <span className="text-text-muted">FUTURE</span>
            <span className="px-1.5 py-0.5 rounded bg-bg-panel-raised text-text-muted text-[10px]">PLANNED</span>
          </div>
          <ul className="space-y-2 text-xs font-sans text-text-muted">
            <li className="flex items-start gap-2">
              <Sparkles className="h-3.5 w-3.5 text-text-muted shrink-0 mt-0.5" />
              <span>Auditor reputation and identity (ERC-8004 direction)</span>
            </li>
            <li className="flex items-start gap-2">
              <Sparkles className="h-3.5 w-3.5 text-text-muted shrink-0 mt-0.5" />
              <span>Support for more chains</span>
            </li>
            <li className="flex items-start gap-2">
              <Sparkles className="h-3.5 w-3.5 text-text-muted shrink-0 mt-0.5" />
              <span>Continuous monitoring features</span>
            </li>
            <li className="flex items-start gap-2">
              <Sparkles className="h-3.5 w-3.5 text-text-muted shrink-0 mt-0.5" />
              <span>Stronger agent-based and decentralized validation (longer term)</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

// --- SLIDE 12: VISION & NEXT STEPS ---
function SlideVision({ onRestart }: { onRestart: () => void }) {
  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <SlideHeader
        badge="Slide 12 – Vision & Next Steps"
        title="Building the Trust Layer for Smart Contract Security"
        description="Zyron exists to make professional security reviews more accessible, transparent, and verifiable."
      />

      <div className="p-5 rounded bg-bg-panel border border-border-hairline space-y-4">
        <div className="font-mono text-xs font-bold text-accent-scan">WE ARE CURRENTLY LOOKING FOR:</div>
        <div className="space-y-3 font-mono text-xs">
          <div className="p-3 rounded bg-bg-panel-raised border border-border-hairline flex items-start gap-3">
            <div className="h-5 w-5 rounded bg-bg-void text-accent-scan flex items-center justify-center shrink-0 border border-border-hairline font-bold">1</div>
            <div>
              <div className="font-bold text-text-primary font-sans">Early Design Partners & Protocols</div>
              <div className="text-[11px] text-text-muted font-sans">Protocols seeking fast, verifiable smart contract audits and continuous security reviews.</div>
            </div>
          </div>

          <div className="p-3 rounded bg-bg-panel-raised border border-border-hairline flex items-start gap-3">
            <div className="h-5 w-5 rounded bg-bg-void text-accent-scan flex items-center justify-center shrink-0 border border-border-hairline font-bold">2</div>
            <div>
              <div className="font-bold text-text-primary font-sans">Security Researchers & Founders</div>
              <div className="text-[11px] text-text-muted font-sans">Feedback and collaboration from top Web3 security researchers and protocol builders.</div>
            </div>
          </div>

          <div className="p-3 rounded bg-bg-panel-raised border border-border-hairline flex items-start gap-3">
            <div className="h-5 w-5 rounded bg-bg-void text-accent-scan flex items-center justify-center shrink-0 border border-border-hairline font-bold">3</div>
            <div>
              <div className="font-bold text-text-primary font-sans">Strategic Supporters</div>
              <div className="text-[11px] text-text-muted font-sans">Partners who believe verifiable security infrastructure matters for Web3 adoption.</div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-5 rounded bg-bg-panel-raised border border-accent-scan/50 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="space-y-1 text-center sm:text-left font-mono">
          <div className="text-sm font-bold text-text-primary">Let’s make security work that can actually be trusted onchain.</div>
          <div className="text-xs text-text-muted font-sans">Submit your contract for an audit or schedule a protocol onboarding call.</div>
        </div>

        <div className="flex items-center gap-2 shrink-0 font-mono text-xs">
          <Link href="/portal/new-request">
            <button
              type="button"
              className="px-4 py-2 rounded bg-accent-scan text-bg-void font-bold hover:bg-accent-scan/90 transition-colors cursor-pointer"
            >
              Start Audit Request
            </button>
          </Link>
          <button
            type="button"
            onClick={onRestart}
            className="px-3.5 py-2 rounded bg-bg-panel hover:bg-bg-panel border border-border-hairline text-text-primary transition-colors cursor-pointer flex items-center gap-1.5"
          >
            <Play className="h-3.5 w-3.5 fill-text-primary" />
            <span>Replay Presentation</span>
          </button>
        </div>
      </div>
    </div>
  );
}

// Reusable Slide Header
function SlideHeader({
  badge,
  title,
  description,
}: {
  badge: string;
  title: string;
  description: string;
}) {
  return (
    <div className="space-y-1 text-left">
      <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-bg-panel text-accent-scan border border-border-hairline">
        <Sparkles className="h-3 w-3" />
        <span>{badge}</span>
      </div>
      <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-text-primary">
        {title}
      </h2>
      <p className="text-xs sm:text-sm text-text-muted max-w-2xl font-sans leading-relaxed">{description}</p>
    </div>
  );
}
