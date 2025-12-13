import AnimatedBackground from "../AnimatedBackground";

export default function AnimatedBackgroundExample() {
  return (
    <div className="relative min-h-[400px] w-full">
      <AnimatedBackground />
      <div className="relative z-10 flex items-center justify-center min-h-[400px]">
        <p className="text-white/80 text-lg">Animated liquid maroon gradient background</p>
      </div>
    </div>
  );
}
