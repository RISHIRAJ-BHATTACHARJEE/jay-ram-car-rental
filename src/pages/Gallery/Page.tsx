import { useState, useEffect } from "react";
import { Play, Image as ImageIcon } from "lucide-react";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { EyebrowLabel } from "../ui";
import { storageService } from "../../lib/storage";
import faqBanner from "@/assets/faq.jpg";

interface BentoItemProps {
  placeholderText: string;
  isVideo?: boolean;
  imageUrl?: string;
  aspectClass?: string;
}

function BentoCard({ placeholderText, isVideo, imageUrl, aspectClass }: BentoItemProps) {
  return (
    <div
      className="group relative w-full rounded-3xl overflow-hidden bg-neutral-900 border border-neutral-800 flex items-center justify-center cursor-pointer hover:shadow-2xl hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
    >
      {imageUrl ? (
        <div className="relative w-full">
          <img 
            src={imageUrl} 
            alt={placeholderText} 
            className="w-full h-auto object-cover block transition-transform duration-500 group-hover:scale-105"
            loading="lazy" 
          />
          {isVideo && (
            <div className="absolute inset-0 bg-black/25 flex items-center justify-center z-10">
              <div className="h-14 w-14 rounded-full bg-white/15 text-white flex items-center justify-center backdrop-blur-xs shadow-lg group-hover:scale-110 transition-transform">
                <Play className="h-6 w-6 fill-white ml-0.5" />
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className={`relative w-full ${aspectClass || "h-[250px]"} flex items-center justify-center p-6`}>
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
        </div>
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

function getPlaceholderText(index: number) {
  return placeholders[index] || `image_${index + 1}.jpg`;
}

export function GalleryPage() {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    
    async function loadImages() {
      try {
        const data = await storageService.getImages();
        // Load ALL images from the bucket
        setImages(data.map((img) => img.url));
      } catch (e) {
        console.error("Failed to load bento gallery images:", e);
      }
    }
    loadImages();
  }, []);

  // Formulate items list (at least 8 elements, but expands to N if there are more than 8 uploaded images)
  const totalItems = Math.max(images.length, 8);
  const items = Array.from({ length: totalItems }).map((_, index) => {
    // Assign varied heights to placeholder slots (e.g. h-[220px], h-[300px], h-[400px])
    let aspectClass = "h-[300px]";
    if (index % 3 === 0) aspectClass = "h-[380px]";
    else if (index % 3 === 1) aspectClass = "h-[220px]";
    else aspectClass = "h-[440px]";

    return {
      imageUrl: images[index] || undefined,
      placeholderText: getPlaceholderText(index),
      isVideo: index === 2,
      aspectClass,
    };
  });

  // Distribute items into 3 columns using the mathematically balanced grid layout:
  const col1Items = items.filter((_, index) => index % 3 === 0);
  const col2Items = items.filter((_, index) => index % 3 === 1);
  const col3Items = items.filter((_, index) => index % 3 === 2);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Header />

      {/* Hero Header Section */}
      <section className="px-4 pt-4">
        <div className="relative mx-auto max-w-[1400px] h-[420px] rounded-[40px] overflow-hidden">
          <img 
            src={faqBanner} 
            alt="Jayram Car Rentals Gallery Banner" 
            className="absolute inset-0 w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-black/45" />
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-6">
            <h1 className="font-display font-bold text-5xl md:text-7xl tracking-tight">Our Gallery</h1>
            <div className="mt-4 flex items-center gap-2 font-medium text-sm md:text-base">
              <a href="/" className="hover:text-primary transition-colors">Home</a>
              <span className="text-primary">/</span>
              <span className="text-primary">Gallery</span>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Grid Gallery Section */}
      <section className="py-24 px-6 text-primary">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <div className="flex justify-center">
              <EyebrowLabel>Explore Fleet & Tours</EyebrowLabel>
            </div>
            <h2 className="mt-3 font-display font-bold text-4xl md:text-5xl leading-tight">
              Our Fleet & Experiences Gallery
            </h2>
          </div>

          {/* Bento Grid Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Column 1 */}
            <div className="flex flex-col gap-6">
              {col1Items.map((item, idx) => (
                <BentoCard 
                  key={idx}
                  placeholderText={item.placeholderText} 
                  imageUrl={item.imageUrl}
                  aspectClass={item.aspectClass}
                />
              ))}
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-6">
              {col2Items.map((item, idx) => (
                <BentoCard 
                  key={idx}
                  placeholderText={item.placeholderText} 
                  isVideo={item.isVideo}
                  imageUrl={item.imageUrl}
                  aspectClass={item.aspectClass}
                />
              ))}
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-6">
              {col3Items.map((item, idx) => (
                <BentoCard 
                  key={idx}
                  placeholderText={item.placeholderText} 
                  imageUrl={item.imageUrl}
                  aspectClass={item.aspectClass}
                />
              ))}
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
