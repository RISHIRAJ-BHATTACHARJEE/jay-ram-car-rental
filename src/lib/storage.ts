import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || "";
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || "";
const bucketName = import.meta.env.VITE_SUPABASE_BUCKET || "gallery";

export const supabase = (supabaseUrl && supabaseAnonKey)
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

export interface BucketImage {
  name: string;
  url: string;
  size?: number;
  created_at?: string | null;
}

// LocalStorage Mock Bucket Helper
const MOCK_STORAGE_KEY = "jayram_car_rentals_mock_bucket";

function getMockImages(): BucketImage[] {
  const data = localStorage.getItem(MOCK_STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}

function setMockImages(images: BucketImage[]) {
  localStorage.setItem(MOCK_STORAGE_KEY, JSON.stringify(images));
}

// Unified API Service
export const storageService = {
  isSupabaseConfigured(): boolean {
    return supabase !== null;
  },

  async getImages(): Promise<BucketImage[]> {
    if (supabase) {
      const { data, error } = await supabase.storage.from(bucketName).list("", {
        sortBy: { column: "created_at", order: "desc" },
      });

      if (error) {
        console.error("Supabase Storage error:", error.message);
        throw error;
      }

      if (!data) return [];

      return data.map((file) => {
        const { data: publicUrlData } = supabase.storage
          .from(bucketName)
          .getPublicUrl(file.name);

        return {
          name: file.name,
          url: publicUrlData.publicUrl,
          size: file.metadata?.size,
          created_at: file.created_at,
        };
      });
    } else {
      // Local fallback
      return getMockImages();
    }
  },

  async uploadImage(file: File): Promise<void> {
    if (supabase) {
      // Sanitize name to avoid conflicts
      const fileExt = file.name.split(".").pop();
      const fileName = `${Date.now()}_${Math.random().toString(36).substring(2, 7)}.${fileExt}`;
      
      const { error } = await supabase.storage
        .from(bucketName)
        .upload(fileName, file, {
          cacheControl: "3600",
          upsert: false,
        });

      if (error) {
        console.error("Supabase Upload error:", error.message);
        throw error;
      }
    } else {
      // Local fallback (Read file as base64 and store in localStorage)
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
          try {
            const base64Url = reader.result as string;
            const currentMockImages = getMockImages();
            
            // Check localStorage limit warnings
            if (base64Url.length > 2 * 1024 * 1024) {
              reject(new Error("File size is too large for local fallback storage (Max 2MB). Please configure Supabase."));
              return;
            }

            const newImage: BucketImage = {
              name: `${Date.now()}_${file.name}`,
              url: base64Url,
              size: file.size,
              created_at: new Date().toISOString(),
            };

            setMockImages([newImage, ...currentMockImages]);
            resolve();
          } catch (e) {
            reject(new Error("Storage limit exceeded. Please clear some items or configure your Supabase bucket."));
          }
        };
        reader.onerror = () => reject(reader.error);
        reader.readAsDataURL(file);
      });
    }
  },

  async deleteImage(name: string): Promise<void> {
    if (supabase) {
      const { error } = await supabase.storage.from(bucketName).remove([name]);

      if (error) {
        console.error("Supabase Delete error:", error.message);
        throw error;
      }
    } else {
      // Local fallback
      const currentMockImages = getMockImages();
      const updated = currentMockImages.filter((img) => img.name !== name);
      setMockImages(updated);
    }
  },
};
