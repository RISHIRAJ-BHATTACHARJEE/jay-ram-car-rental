import { useState } from "react";
import heroCar from "@/assets/hero-car.jpg";
import { EyebrowLabel, PillButton } from "../ui";

export function Hero() {
  const [formData, setFormData] = useState({
    fullName: "",
    mobileNo: "",
    pickupLocation: "",
    dropLocation: "",
    pickupDate: "",
    noOfPeople: "",
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSend = () => {
    const { fullName, mobileNo, pickupLocation, dropLocation, pickupDate, noOfPeople } = formData;
    
    if (!fullName || !mobileNo || !pickupLocation || !dropLocation || !pickupDate || !noOfPeople) {
      alert("Please fill in all fields before sending.");
      return;
    }

    const message = `Hello Jay Ram Car Rentals, I would like to inquire about renting a car.\n\n*Booking Inquiry Details:*\n• *Full Name:* ${fullName}\n• *Mobile No:* ${mobileNo}\n• *Pickup Location:* ${pickupLocation}\n• *Drop Location:* ${dropLocation}\n• *Pickup Date:* ${pickupDate}\n• *No. of Passengers:* ${noOfPeople}`;
    
    const phone = "917002436100";
    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="relative px-4 pt-6">
      <div className="relative mx-auto max-w-[1800px] overflow-hidden rounded-3xl">
        <img
          src={heroCar}
          alt="Luxury sedan at premium hotel entrance"
          width={1920}
          height={1080}
          className="w-full h-[88vh] min-h-[600px] object-cover"
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
          <EyebrowLabel>Welcome To Car Rent</EyebrowLabel>
          <h1 className="mt-4 max-w-4xl font-display font-bold text-white text-4xl md:text-6xl lg:text-7xl leading-[1.05]">
            Looking to save more on your rental car?
          </h1>
          <p className="mt-6 max-w-2xl text-white/85 text-base md:text-lg">
            Whether you're planning a weekend getaway, a business trip, or just need a reliable ride
            for the day, we offer a wide range of vehicles to suit your needs.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <PillButton>Book A Rental</PillButton>
            <PillButton variant="light">Learn More</PillButton>
          </div>
        </div>

        {/* Booking strip */}
        <div className="absolute bottom-6 left-6 right-6">
          <div className="bg-white rounded-2xl shadow-xl grid grid-cols-2 md:grid-cols-8 gap-4 p-6 items-center text-foreground">
            <div className="md:col-span-1">
              <p className="font-display font-bold leading-tight">
                Need to Rent a<br />Luxury Car ?
              </p>
            </div>
            {[
              { label: "Full Name", key: "fullName", ph: "Full Name", type: "text" },
              { label: "Mobile No", key: "mobileNo", ph: "Phone no.", type: "tel" },
              { label: "Pickup Location", key: "pickupLocation", ph: "Pickup Location", type: "text" },
              { label: "Drop Location", key: "dropLocation", ph: "Drop Location", type: "text" },
              { label: "Pickup Date", key: "pickupDate", ph: "dd-mm-yyyy", type: "date" },
              { label: "No. of People", key: "noOfPeople", ph: "No. of People", type: "number" },
            ].map((f) => (
              <div key={f.label}>
                <label className="block text-xs font-semibold mb-1 text-muted-foreground truncate" title={f.label}>{f.label}</label>
                <input
                  type={f.type}
                  placeholder={f.ph}
                  value={formData[f.key as keyof typeof formData]}
                  onChange={(e) => handleChange(f.key, e.target.value)}
                  className="w-full border-b border-border bg-transparent py-1 text-sm outline-none focus:border-primary placeholder:text-muted-foreground"
                />
              </div>
            ))}
            <div className="flex justify-end md:col-span-1">
              <button 
                onClick={handleSend}
                className="h-12 px-8 rounded-full bg-primary text-primary-foreground font-semibold cursor-pointer hover:bg-primary/95 transition-colors"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
