import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    childAge: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formDataToSend = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: formDataToSend,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        toast.success("Thank you! We'll get back to you soon.");
        setFormData({
          fullName: "",
          phone: "",
          email: "",
          childAge: "",
          message: "",
        });
        form.reset();
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      toast.error("Unable to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-20 sm:pt-24 pb-12 sm:pb-16">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-12 md:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            Get in Touch
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground px-4">
            Let's talk about your child's journey. Contact us today to schedule
            your first consultation.
          </p>
        </div>

        {/* Contact Form & Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-card border border-border rounded-xl p-6 sm:p-8 shadow-card">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6">
              Send Us a Message
            </h2>
            <form 
              onSubmit={handleSubmit} 
              action="https://formspree.io/f/YOUR_FORM_ID"
              method="POST"
              className="space-y-5"
            >
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Full Name *
                </label>
                <Input
                  id="fullName"
                  name="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={(e) =>
                    setFormData({ ...formData, fullName: e.target.value })
                  }
                  required
                  className="rounded-lg"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Phone Number *
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  required
                  className="rounded-lg"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="rounded-lg"
                />
              </div>

              <div>
                <label
                  htmlFor="childAge"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Your Child's Age
                </label>
                <Input
                  id="childAge"
                  name="childAge"
                  type="text"
                  value={formData.childAge}
                  onChange={(e) =>
                    setFormData({ ...formData, childAge: e.target.value })
                  }
                  className="rounded-lg"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  How can we help you? *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  rows={5}
                  className="rounded-lg resize-none"
                />
              </div>

              <Button 
                type="submit" 
                variant="pill" 
                size="lg" 
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6">
                Visit Our Centre
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Address</p>
                    <p className="text-muted-foreground">
                      YMCA School Campus, Kantatoli, Ranchi
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Phone</p>
                    <a
                      href="tel:7033917890"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      7033917890
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-yellow/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Email</p>
                    <a
                      href="mailto:upasana.ranchicentre@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors break-all"
                    >
                      upasana.ranchicentre@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-pink/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-pink-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Hours</p>
                    <div className="text-muted-foreground space-y-1">
                      <p>Mon - Fri: 10:30 AM - 4:00 PM</p>
                      <p>Sat - Sun: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-xl overflow-hidden shadow-card-hover h-[300px] sm:h-[350px] md:h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3662.8888507598246!2d85.32473931496634!3d23.35457648475754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e1d8d8d8d8d8%3A0x8d8d8d8d8d8d8d8!2sYMCA%20School%2C%20Kantatoli%2C%20Ranchi!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Upasana Centre Location"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
