export function ParallaxDivider({ imageSrc }: { imageSrc: string }) {
  return (
    <div className="relative w-full h-[25vh] min-h-[200px] border-y border-white/5 overflow-hidden">
      <div 
        className="absolute inset-0 bg-fixed bg-center bg-cover opacity-80" 
        style={{ backgroundImage: `url(${imageSrc})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
    </div>
  );
}
