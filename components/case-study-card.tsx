import Image from "next/image";

interface CaseStudyCardProps {
  src: string;
  alt: string;
}

export function CaseStudyCard({ src, alt }: CaseStudyCardProps) {
  return (
    <div className="relative w-full aspect-[3/4] h-[265px] overflow-hidden group rounded-[35px]">
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
      />
    </div>
  );
}
