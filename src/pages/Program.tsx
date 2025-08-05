import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Heart, Leaf, Users, Calendar, MapPin } from "lucide-react";
import educationImg from "@/assets/education-program.jpg";
import healthcareImg from "@/assets/healthcare-program.jpg";
import environmentImg from "@/assets/environment-program.jpg";
import { motion } from "framer-motion";

const programs = [
  {
    title: "Education Program",
    description: "Comprehensive educational initiatives focusing on quality learning, skill development, and literacy programs for all age groups.",
    image: educationImg,
    icon: BookOpen,
    details: [
      "Primary and secondary education support",
      "Adult literacy programs",
      "Vocational skill training",
      "Digital literacy initiatives",
      "Scholarship programs"
    ],
    impact: "500+ Students Educated",
    location: "Rural Maharashtra",
    duration: "Year-round program"
  },
  {
    title: "Healthcare Initiative",
    description: "Providing accessible healthcare services and medical support to underserved communities with limited healthcare facilities.",
    image: healthcareImg,
    icon: Heart,
    details: [
      "Mobile medical clinics",
      "Health awareness campaigns",
      "Maternal and child health programs",
      "Preventive healthcare initiatives",
      "Medical equipment distribution"
    ],
    impact: "1000+ Patients Treated",
    location: "Remote villages",
    duration: "Monthly health camps"
  },
  {
    title: "Environmental Conservation",
    description: "Promoting sustainable practices and environmental awareness through community-driven conservation initiatives.",
    image: environmentImg,
    icon: Leaf,
    details: [
      "Tree plantation drives",
      "Community clean-up programs",
      "Waste management education",
      "Water conservation projects",
      "Renewable energy promotion"
    ],
    impact: "2000+ Trees Planted",
    location: "Multiple districts",
    duration: "Seasonal activities"
  }
];

const Program = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
             
<motion.h1
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  viewport={{ once: true }}
  className="text-4xl md:text-5xl font-bold text-primary mb-6"
>
  Our Programs
</motion.h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Comprehensive initiatives designed to create lasting positive impact through education, healthcare, and environmental conservation.
              </p>
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="space-y-16">
              {programs.map((program, index) => {
                const IconComponent = program.icon;
                return (
                  <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                    {/* Image */}
                    <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                      <div className="relative overflow-hidden rounded-lg shadow-card">
                        <img
                          src={program.image}
                          alt={program.title}
                          className="w-full h-80 object-cover hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                        <div className="absolute bottom-4 left-4 text-white">
                          <span className="bg-secondary px-3 py-1 rounded-full text-sm font-medium">
                            {program.impact}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                      <Card>
                        <CardHeader>
                          <div className="flex items-center space-x-3 mb-2">
                            <div className="p-2 bg-primary/10 rounded-lg">
                              <IconComponent className="h-6 w-6 text-primary" />
                            </div>
                            <CardTitle className="text-2xl text-primary">{program.title}</CardTitle>
                          </div>
                          <p className="text-muted-foreground">{program.description}</p>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            <div>
                              <h4 className="font-semibold mb-2">Program Components:</h4>
                              <ul className="space-y-1">
                                {program.details.map((detail, idx) => (
                                  <li key={idx} className="flex items-center text-sm text-muted-foreground">
                                    <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-2"></div>
                                    {detail}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Join Our Mission</h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Together, we can create meaningful change and build stronger, more resilient communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Program;