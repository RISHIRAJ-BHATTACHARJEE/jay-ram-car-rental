import { useState, useEffect } from "react";
import { Play, Image as ImageIcon } from "lucide-react";
import { Link } from "react-router";
import { EyebrowLabel, PillButton } from "../ui";
import { storageService } from "../../lib/storage";

interface BentoItemProps {
  heightClass: string;
  placeholderText: string;
  isVideo?: boolean;
  imageUrl?: string;
}

function BentoCard({ heightClass, placeholderText, isVideo, imageUrl }: BentoItemProps) {
  return (
    <div
      className={`group relative ${heightClass} rounded-3xl overflow-hidden bg-neutral-900 border border-neutral-800 flex items-center justify-center p-6 cursor-pointer hover:shadow-2xl hover:border-primary/30 transition-all duration-300 hover:-translate-y-1`}
    >
      {imageUrl ? (
        <>
          <img 
            src={imageUrl} 
            alt={placeholderText} 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy" 
          />
          {isVideo && (
            <div className="absolute inset-0 bg-black/25 flex items-center justify-center z-10">
              <div className="h-14 w-14 rounded-full bg-white/15 text-white flex items-center justify-center backdrop-blur-xs shadow-lg group-hover:scale-110 transition-transform">
                <Play className="h-6 w-6 fill-white ml-0.5" />
              </div>
            </div>
          )}
        </>
      ) : (
        <>
          {/* Background Graphic Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] opacity-20" />
          
          {/* Placeholder Glimpse Overlay */}
          <div className="flex flex-col items-center justify-center text-neutral-500 opacity-60 group-hover:opacity-80 transition-opacity p-4 z-10">
            {isVideo ? (
              <div className="h-14 w-14 rounded-full bg-white/10 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <Play className="h-6 w-6 fill-white ml-0.5" />
              </div>
            ) : (
              <div className="flex flex-col items-center gap-2">
                <ImageIcon className="h-8 w-8 text-neutral-600" />
                <span className="text-xs uppercase tracking-widest text-neutral-600 font-mono">{placeholderText}</span>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}

const placeholders = [
  "wings_experience.jpg",
  "camel_safari.jpg",
  "video_glimpse.mp4",
  "desert_buggy.jpg",
  "tour_bus.jpg",
  "corporate_stage.jpg",
  "passenger_van.jpg",
  "airport_arrivals.jpg"
];

export function WhyChoose() {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    async function loadImages() {
      try {
        const data = await storageService.getImages();
        // Limit homepage gallery to show a maximum of 8 images
        setImages(data.slice(0, 8).map((img) => img.url));
      } catch (e) {
        console.error("Failed to load bento images:", e);
      }
    }
    loadImages();
  }, []);

  // Formulate items list (always exactly 8 elements for the homepage layout)
  const items = Array.from({ length: 8 }).map((_, index) => ({
    imageUrl: images[index] || undefined,
    placeholderText: placeholders[index],
    isVideo: index === 2,
  }));

  // Distribute items into 3 columns using the mathematically balanced grid layout:
  // i % 4 === 0       -> Col 1 (tall: h-[420px])
  // i % 4 === 1 or 2  -> Col 2 (short: h-[200px])
  // i % 4 === 3       -> Col 3 (tall: h-[420px])
  const col1Items = items.filter((_, index) => index % 4 === 0);
  const col2Items = items.filter((_, index) => index % 4 === 1 || index % 4 === 2);
  const col3Items = items.filter((_, index) => index % 4 === 3);

  return (
    <section className="py-24 px-6 bg-neutral-950 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <div className="flex justify-center">
            <EyebrowLabel>Our Gallery</EyebrowLabel>
          </div>
          <h2 className="mt-3 font-display font-bold text-4xl md:text-5xl leading-tight">
            Glimpses of our premium fleet<br />and tourist experiences
          </h2>
        </div>

        {/* Bento Grid Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Column 1 */}
          <div className="flex flex-col gap-6">
            {col1Items.map((item, idx) => (
              <BentoCard 
                key={idx}
                heightClass="h-[420px]" 
                placeholderText={item.placeholderText} 
                imageUrl={item.imageUrl}
              />
            ))}
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-6">
            {col2Items.map((item, idx) => (
              <BentoCard 
                key={idx}
                heightClass="h-[200px]" 
                placeholderText={item.placeholderText} 
                isVideo={item.isVideo}
                imageUrl={item.imageUrl}
              />
            ))}
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-6">
            {col3Items.map((item, idx) => (
              <BentoCard 
                key={idx}
                heightClass="h-[420px]" 
                placeholderText={item.placeholderText} 
                imageUrl={item.imageUrl}
              />
            ))}
          </div>

        </div>

        {/* Navigation to Full Gallery */}
        <div className="mt-16 flex justify-center">
          <Link to="/gallery">
            <PillButton variant="light" withArrow={true}>
              View Full Gallery
            </PillButton>
          </Link>
        </div>
      </div>
    </section>
  );
}
