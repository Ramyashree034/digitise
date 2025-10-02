import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

// QR codes for payment
const PAYMENT_QR = {
  hackathon: "/qr-hackathon.jpg", // ₹600
  other: "/qr-other.jpg", // ₹200
};

const RegistrationSection = () => {
  const { toast } = useToast();

  const events = [
    "8-Hour Hackathon",
    "CSS Design Sprint",
    "Byte Battle",
    "Debugging",
    "Visualize It",
    "BGMI",
    "Freefire",
  ];

  const [formData, setFormData] = useState({
    event: "",
    name: "",
    email: "",
    phone: "",
    usn: "",
    college: "",
    year: "",
    experience: "",
    participants: [] as { name: string; email: string; usn: string }[],
    paymentScreenshot: null as File | null,
  });

  const [submitting, setSubmitting] = useState(false);

  const handleInputChange = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleParticipantChange = (
    index: number,
    field: string,
    value: string
  ) => {
    const newParticipants = [...formData.participants];
    newParticipants[index] = { ...newParticipants[index], [field]: value };
    setFormData((prev) => ({ ...prev, participants: newParticipants }));
  };

  // Update participants based on event
  useEffect(() => {
    if (!formData.event) return;
    const totalMembers = formData.event === "8-Hour Hackathon" ? 4 : 2;
    const extraParticipants = totalMembers - 1;
    setFormData((prev) => ({
      ...prev,
      participants: Array(extraParticipants).fill({
        name: "",
        email: "",
        usn: "",
      }),
    }));
  }, [formData.event]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.paymentScreenshot) {
      toast({
        title: "Payment Required",
        description: "Please upload your payment screenshot before submitting.",
        variant: "destructive",
      });
      return;
    }

    try {
      setSubmitting(true);
      const backendUrl = import.meta.env.VITE_BACKEND_URL; // e.g., http://localhost:5000

      const teamSize =
        formData.event === "8-Hour Hackathon"
          ? 4
          : formData.participants.length + 1;

      // Create FormData for file upload
      const data = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        if (key === "participants") {
          data.append("participants", JSON.stringify(value));
        } else if (key === "paymentScreenshot" && value) {
          data.append("paymentScreenshot", value as File);
        } else {
          data.append(key, value as string);
        }
      });
      data.append("teamSize", String(teamSize));

      const res = await fetch(`${backendUrl}/register`, {
        method: "POST",
        body: data,
      });

      const result = await res.json();

      if (res.ok && result.message) {
        // ✅ Only show success if backend confirms registration + emails sent
        toast({
          title: "Registration Successful! 🚀",
          description:
            "Your registration has been submitted and emails sent successfully.",
        });

        // Reset form
        setFormData({
          event: "",
          name: "",
          email: "",
          phone: "",
          usn: "",
          college: "",
          year: "",
          experience: "",
          participants: [],
          paymentScreenshot: null,
        });
      } else {
        toast({
          title: "Error",
          description:
            result.message || "Something went wrong! Emails might not have been sent.",
          variant: "destructive",
        });
      }
    } catch (err) {
      console.error(err);
      toast({
        title: "Error",
        description: "Failed to submit registration. Try again later.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="register" className="py-20 px-4 bg-muted/20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="title-neon text-4xl md:text-6xl mb-6">Register Now</h2>
          <div className="section-divider mb-8" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join hundreds of tech enthusiasts for an unforgettable experience at
            Digitise 2025
          </p>
        </div>

        <div className="card-neon p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Team Leader fields */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label>Team Leader Name *</Label>
                <Input
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label>Team Leader Email *</Label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Phone + USN */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label>Team Leader Phone *</Label>
                <Input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label>Team Leader USN *</Label>
                <Input
                  type="text"
                  value={formData.usn}
                  onChange={(e) => handleInputChange("usn", e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Event Selection */}
            <div className="space-y-2">
              <Label>Event Interest *</Label>
              <Select
                onValueChange={(value) => handleInputChange("event", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Choose your events" />
                </SelectTrigger>
                <SelectContent>
                  {events.map((event) => (
                    <SelectItem key={event} value={event}>
                      {event}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Extra Participants */}
            {formData.participants.map((_, idx) => (
              <div key={idx} className="grid md:grid-cols-3 gap-4">
                <Input
                  placeholder={`Participant ${idx + 1} Name`}
                  value={formData.participants[idx]?.name || ""}
                  onChange={(e) =>
                    handleParticipantChange(idx, "name", e.target.value)
                  }
                  required
                />
                <Input
                  placeholder="Email"
                  value={formData.participants[idx]?.email || ""}
                  onChange={(e) =>
                    handleParticipantChange(idx, "email", e.target.value)
                  }
                  required
                />
                <Input
                  placeholder="USN"
                  value={formData.participants[idx]?.usn || ""}
                  onChange={(e) =>
                    handleParticipantChange(idx, "usn", e.target.value)
                  }
                  required
                />
              </div>
            ))}

            {/* Payment Section */}
            {formData.event && (
              <div className="mt-6 text-center">
                <p className="mb-2 font-semibold text-lg">Scan QR to Pay:</p>
                <img
                  src={
                    formData.event === "8-Hour Hackathon"
                      ? PAYMENT_QR.hackathon
                      : PAYMENT_QR.other
                  }
                  alt="Payment QR"
                  className="mx-auto w-64"
                />
                <p className="mt-2 font-medium text-muted-foreground">
                  {formData.event === "8-Hour Hackathon"
                    ? "₹600 per team"
                    : "₹200 per participant"}
                </p>

                {/* Upload Payment Screenshot */}
                <div className="mt-4">
                  <Label>Upload Payment Screenshot *</Label>
                  <Input
                    type="file"
                    accept="image/*,application/pdf"
                    onChange={(e) =>
                      handleInputChange(
                        "paymentScreenshot",
                        e.target.files?.[0] || null
                      )
                    }
                    required
                  />
                </div>
              </div>
            )}

            <div className="flex justify-center pt-6">
              <Button type="submit" disabled={submitting}>
                {submitting ? "Submitting..." : "Complete Registration 🚀"}
              </Button>
            </div>
          </form>
        </div>

        <div className="text-center mt-8">
          <p>
            Questions? Contact us at{" "}
            <a href="mailto:isedeptait22@gmail.com">isedeptait22@gmail.com</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default RegistrationSection;
