import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useForm } from "@formspree/react";
import { toast } from "sonner";
import { useEffect } from "react";

const Contact = () => {
  const [state, handleSubmit] = useForm("xjgwyywy");

  useEffect(() => {
    if (state.succeeded) {
      toast.success("Thank you! We'll get back to you soon.");
    }
    if (state.errors) {
      toast.error("Something went wrong. Please try again.");
    }
  }, [state.succeeded, state.errors]);

  return (
    <div className="min-h-screen pt-20 sm:pt-24 pb-12 sm:pb-16">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-12 md:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 sm:mb-4 font-serif">
            Let's Connect
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground px-4">
            We're here to support your family. Reach out to learn how we can help your child thrive.
          </p>
        </div>

        {/* Contact Form & Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 shadow-card">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6 font-serif">
              Send Us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-5">
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
                  required
                  className="rounded-xl"
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
                  required
                  className="rounded-xl"
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
                  className="rounded-xl"
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
                  className="rounded-xl"
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
                  required
                  rows={5}
                  className="rounded-xl resize-none"
                />
              </div>

              <Button
                type="submit"
                variant="pill"
                size="lg"
                className="w-full"
                disabled={state.submitting}
              >
                {state.submitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6 font-serif">
                Visit Our Centre
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">
                      Address
                    </p>
                    <p className="text-muted-foreground">
                      YMCA School Campus, Kantatoli, Ranchi
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Phone</p>
                    <a
                      href="tel:7033917890"
                      className="text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      7033917890
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-yellow/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Email</p>
                    <a
                      href="mailto:upasana.ranchicentre@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors duration-300 break-all"
                    >
                      upasana.ranchicentre@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-pink/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-secondary" />
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
            <div className="rounded-2xl overflow-hidden shadow-card-hover h-[300px] sm:h-[350px] md:h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3662.5!2d85.3479911!3d23.3644669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e190ded8871d%3A0xca59b51342c792d7!2sUpasana%20-%20Centre%20for%20Early%20Intervention%20%26%20Child%20Development!5e0!3m2!1sen!2sin!4v1731234567890!5m2!1sen!2sin"
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
