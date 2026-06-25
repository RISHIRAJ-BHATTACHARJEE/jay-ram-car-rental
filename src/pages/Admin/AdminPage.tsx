import { useState, useEffect, useRef } from "react";
import { Upload, Trash2, LogOut, CheckCircle, AlertTriangle, Image as ImageIcon, Lock } from "lucide-react";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { EyebrowLabel } from "../ui";
import { storageService } from "../../lib/storage";
import type { BucketImage } from "../../lib/storage";

export function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  
  const [images, setImages] = useState<BucketImage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [uploadLoading, setUploadLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Authenticate using sessionStorage so login persists within tab sessions
  useEffect(() => {
    const authStatus = sessionStorage.getItem("admin_authenticated");
    if (authStatus === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      loadBucketImages();
    }
  }, [isAuthenticated]);

  const loadBucketImages = async () => {
    setIsLoading(true);
    setErrorMsg("");
    try {
      const data = await storageService.getImages();
      setImages(data);
    } catch (e: any) {
      setErrorMsg("Failed to retrieve images from the bucket: " + e.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "admin") {
      sessionStorage.setItem("admin_authenticated", "true");
      setIsAuthenticated(true);
      setLoginError("");
    } else {
      setLoginError("Invalid admin password. Try 'admin'.");
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem("admin_authenticated");
    setIsAuthenticated(false);
    setPassword("");
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;
    
    setUploadLoading(true);
    setErrorMsg("");
    setSuccessMsg("");

    let uploadedCount = 0;
    const failedFiles: string[] = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      if (!file.type.startsWith("image/")) {
        failedFiles.push(`${file.name} (Not an image)`);
        continue;
      }
      try {
        await storageService.uploadImage(file);
        uploadedCount++;
      } catch (e: any) {
        failedFiles.push(`${file.name} (${e.message || e})`);
      }
    }

    if (uploadedCount > 0) {
      setSuccessMsg(`Successfully uploaded ${uploadedCount} file(s).`);
      loadBucketImages();
    }
    
    if (failedFiles.length > 0) {
      setErrorMsg(`Failed uploads: ${failedFiles.join(", ")}`);
    }

    setUploadLoading(false);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleDelete = async (name: string) => {
    if (!window.confirm("Are you sure you want to delete this image from the storage bucket?")) return;
    
    setErrorMsg("");
    setSuccessMsg("");
    try {
      await storageService.deleteImage(name);
      setSuccessMsg("Image deleted successfully.");
      loadBucketImages();
    } catch (e: any) {
      setErrorMsg("Deletion failed: " + e.message);
    }
  };

  const formatSize = (bytes?: number) => {
    if (!bytes) return "Unknown";
    const kb = bytes / 1024;
    if (kb < 1024) return `${kb.toFixed(1)} KB`;
    return `${(kb / 1024).toFixed(1)} MB`;
  };

  const formatDate = (dateStr?: string | null) => {
    if (!dateStr) return "N/A";
    return new Date(dateStr).toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  // 1. LOGIN GATE VIEW
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-neutral-950 text-white flex flex-col justify-between font-sans">
        <Header />
        <div className="flex-1 flex items-center justify-center px-6 py-20">
          <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-8 max-w-md w-full text-center shadow-2xl">
            <div className="h-14 w-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-6">
              <Lock className="h-6 w-6" />
            </div>
            <h1 className="font-display font-bold text-3xl mb-2">Admin Panel</h1>
            <p className="text-neutral-400 text-sm mb-6">
              Please authenticate to access the image upload and bucket management dashboard.
            </p>
            
            <form onSubmit={handleLogin} className="space-y-4 text-left">
              <div>
                <label className="block text-xs font-semibold text-neutral-400 mb-2 uppercase tracking-wider">
                  Admin Password
                </label>
                <input
                  type="password"
                  placeholder="Enter admin password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-neutral-800 border border-neutral-700 rounded-xl px-4 py-3 text-sm outline-none focus:border-primary text-white placeholder:text-neutral-500"
                  required
                />
              </div>

              {loginError && (
                <div className="text-red-500 text-xs font-medium bg-red-500/10 p-3 rounded-lg border border-red-500/20">
                  {loginError}
                </div>
              )}

              <button
                type="submit"
                className="w-full h-12 bg-primary hover:bg-primary/95 text-primary-foreground font-semibold rounded-xl transition-colors cursor-pointer"
              >
                Authenticate
              </button>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // 2. DASHBOARD VIEW (AUTHENTICATED)
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Header />

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Dashboard Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 pb-8 border-b border-border">
          <div>
            <div className="flex items-center gap-2">
              <EyebrowLabel>Admin Portal</EyebrowLabel>
              {storageService.isSupabaseConfigured() ? (
                <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full shrink-0">
                  <CheckCircle className="h-3 w-3" /> Supabase Storage
                </span>
              ) : (
                <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full shrink-0">
                  <AlertTriangle className="h-3 w-3" /> Local Storage Mock
                </span>
              )}
            </div>
            <h1 className="font-display font-bold text-3xl md:text-4xl mt-3">Image Bucket Control</h1>
            <p className="text-muted-foreground text-sm mt-2 max-w-xl">
              Upload, preview, and delete pictures from your Supabase Storage bucket. Changes sync immediately to the homepage gallery.
            </p>
          </div>

          <button
            onClick={handleLogout}
            className="inline-flex items-center gap-2 px-5 h-11 border border-border rounded-xl text-sm font-semibold hover:bg-muted transition cursor-pointer self-start sm:self-center shrink-0"
          >
            <LogOut className="h-4 w-4" />
            <span>Sign Out</span>
          </button>
        </div>

        {/* Global Feedback Banners */}
        <div className="mt-8 space-y-3">
          {errorMsg && (
            <div className="bg-red-50 text-red-700 text-sm font-semibold p-4 rounded-2xl border border-red-200 flex items-start gap-3">
              <AlertTriangle className="h-5 w-5 shrink-0 mt-0.5 text-red-600" />
              <span>{errorMsg}</span>
            </div>
          )}
          {successMsg && (
            <div className="bg-emerald-50 text-emerald-700 text-sm font-semibold p-4 rounded-2xl border border-emerald-200 flex items-start gap-3">
              <CheckCircle className="h-5 w-5 shrink-0 mt-0.5 text-emerald-600" />
              <span>{successMsg}</span>
            </div>
          )}
          {!storageService.isSupabaseConfigured() && (
            <div className="bg-amber-50 text-amber-800 text-xs p-4 rounded-2xl border border-amber-200 leading-relaxed">
              <strong>Notice:</strong> VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY are not configured. Uploaded images will be saved in your browser's Local Storage for lightweight sandbox testing. Configure environment variables for full persistent cloud storage.
            </div>
          )}
        </div>

        <div className="mt-10 grid lg:grid-cols-3 gap-8 items-start">
          {/* UPLOAD PANEL */}
          <div className="lg:col-span-1 bg-cream-soft rounded-3xl border border-border/60 p-6">
            <h3 className="font-display font-bold text-xl mb-4">Upload Image</h3>
            
            <div 
              onClick={() => fileInputRef.current?.click()}
              className="border-2 border-dashed border-border/80 hover:border-primary/50 transition bg-white/50 rounded-2xl p-8 text-center cursor-pointer flex flex-col items-center justify-center gap-3 group"
            >
              <input 
                type="file" 
                ref={fileInputRef}
                onChange={handleFileChange}
                accept="image/*"
                multiple
                className="hidden" 
              />
              <div className="h-12 w-12 rounded-full bg-primary/10 text-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                <Upload className="h-5 w-5" />
              </div>
              <div className="space-y-1">
                <p className="text-sm font-semibold text-foreground">Click to browse files</p>
                <p className="text-xs text-muted-foreground">PNG, JPG, WebP (Max 5MB)</p>
              </div>
            </div>

            {uploadLoading && (
              <div className="mt-4 flex items-center justify-center gap-3 text-sm text-primary font-semibold">
                <div className="animate-spin h-5 w-5 border-2 border-primary border-t-transparent rounded-full" />
                <span>Uploading to bucket...</span>
              </div>
            )}
          </div>

          {/* ACTIVE IMAGES LIST */}
          <div className="lg:col-span-2">
            <h3 className="font-display font-bold text-xl mb-6">Bucket Images ({images.length})</h3>

            {isLoading ? (
              <div className="py-20 text-center text-muted-foreground flex flex-col items-center gap-3">
                <div className="animate-spin h-8 w-8 border-3 border-primary border-t-transparent rounded-full" />
                <span>Synchronizing bucket files...</span>
              </div>
            ) : images.length === 0 ? (
              <div className="border border-border/60 rounded-3xl p-16 text-center text-muted-foreground bg-cream-soft/30">
                <ImageIcon className="h-10 w-10 mx-auto mb-4 text-muted-foreground/55" />
                <p className="font-semibold text-foreground/80">No images in storage bucket</p>
                <p className="text-xs mt-1">Upload a photo to see it appear in the homepage gallery grid.</p>
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 gap-4">
                {images.map((image) => (
                  <div 
                    key={image.name} 
                    className="border border-border/60 rounded-2xl p-4 bg-white hover:shadow-md transition flex gap-4"
                  >
                    <div className="h-20 w-20 rounded-xl overflow-hidden shrink-0 bg-muted border border-border flex items-center justify-center">
                      <img 
                        src={image.url} 
                        alt={image.name} 
                        className="h-full w-full object-cover" 
                      />
                    </div>

                    <div className="grow min-w-0 flex flex-col justify-between py-0.5">
                      <div className="text-left">
                        <p className="font-mono text-xs text-foreground font-semibold truncate" title={image.name}>
                          {image.name}
                        </p>
                        <p className="text-[10px] text-muted-foreground mt-1">
                          Size: {formatSize(image.size)}
                        </p>
                        <p className="text-[10px] text-muted-foreground mt-0.5">
                          Uploaded: {formatDate(image.created_at)}
                        </p>
                      </div>

                      <button
                        onClick={() => handleDelete(image.name)}
                        className="text-xs text-red-600 hover:text-red-700 font-semibold inline-flex items-center gap-1.5 self-start cursor-pointer transition"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                        <span>Delete</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
