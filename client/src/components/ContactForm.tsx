import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { useMutation } from "@tanstack/react-query";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const submitContact = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to submit contact form");
      }

      return response.json();
    },
    onSuccess: () => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitContact.mutate(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  if (submitContact.isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center p-8 rounded-md bg-green-500/10 border border-green-500/20"
      >
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-green-400 mb-2">Message Sent Successfully!</h3>
        <p className="text-muted-foreground">
          Thank you for contacting us. We'll get back to you within 24 hours.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-lg p-6 shadow-[0_8px_32px_rgba(0,0,0,0.2)]"
    >
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-foreground mb-2">Send us a Message</h3>
        <p className="text-muted-foreground text-sm">
          Fill out the form below and we'll get back to you as soon as possible.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="name" className="text-sm font-medium">
              Full Name *
            </Label>
            <Input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Your full name"
              className="mt-1 bg-white/[0.05] border-white/[0.1] focus:border-primary/50"
            />
          </div>

          <div>
            <Label htmlFor="email" className="text-sm font-medium">
              Email Address *
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="your@email.com"
              className="mt-1 bg-white/[0.05] border-white/[0.1] focus:border-primary/50"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="phone" className="text-sm font-medium">
              Phone Number
            </Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 9876543210"
              className="mt-1 bg-white/[0.05] border-white/[0.1] focus:border-primary/50"
            />
          </div>

          <div>
            <Label htmlFor="company" className="text-sm font-medium">
              Company Name
            </Label>
            <Input
              id="company"
              name="company"
              type="text"
              value={formData.company}
              onChange={handleChange}
              placeholder="Your company"
              className="mt-1 bg-white/[0.05] border-white/[0.1] focus:border-primary/50"
            />
          </div>
        </div>

        <div>
          <Label htmlFor="message" className="text-sm font-medium">
            Message *
          </Label>
          <Textarea
            id="message"
            name="message"
            required
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your project or any questions you have..."
            rows={4}
            className="mt-1 bg-white/[0.05] border-white/[0.1] focus:border-primary/50 resize-none"
          />
        </div>

        {submitContact.isError && (
          <div className="flex items-center gap-2 text-red-400 text-sm">
            <AlertCircle className="w-4 h-4" />
            <span>Failed to send message. Please try again.</span>
          </div>
        )}

        <Button
          type="submit"
          disabled={submitContact.isPending}
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3"
        >
          {submitContact.isPending ? (
            "Sending..."
          ) : (
            <>
              Send Message
              <Send className="w-4 h-4 ml-2" />
            </>
          )}
        </Button>
      </form>
    </motion.div>
  );
}
