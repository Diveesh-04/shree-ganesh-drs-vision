import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Users, Lightbulb, Target, ArrowRight, Globe } from "lucide-react";
import { motion } from "framer-motion";

const Approach = () => {
  const approaches = [
    {
      icon: Users,
      title: "Community-Centered",
      description: "We work directly with communities to understand their unique needs and develop tailored solutions.",
      principles: [
        "Local participation in planning",
        "Cultural sensitivity and respect",
        "Building on existing strengths",
        "Empowering local leadership"
      ]
    },
    {
      icon: Target,
      title: "Impact-Focused",
      description: "Every initiative is designed with clear objectives and measurable outcomes to ensure maximum impact.",
      principles: [
        "Evidence-based program design",
        "Regular monitoring and evaluation",
        "Continuous improvement process",
        "Transparent impact reporting"
      ]
    },
    {
      icon: Lightbulb,
      title: "Innovation-Driven",
      description: "We embrace innovative approaches and technologies to solve complex social challenges effectively.",
      principles: [
        "Creative problem-solving",
        "Technology integration",
        "Pilot testing new approaches",
        "Scaling successful innovations"
      ]
    },
    {
      icon: Globe,
      title: "Sustainable Development",
      description: "Our programs are designed to create long-term, sustainable change that continues beyond our intervention.",
      principles: [
        "Environmental sustainability",
        "Economic viability",
        "Social equity and inclusion",
        "Institutional capacity building"
      ]
    }
  ];

  const process = [
    {
      step: "1",
      title: "Assessment & Research",
      description: "Comprehensive community needs assessment and research to understand local challenges and opportunities."
    },
    {
      step: "2",
      title: "Collaborative Planning",
      description: "Working with community stakeholders to develop culturally appropriate and locally relevant solutions."
    },
    {
      step: "3",
      title: "Implementation",
      description: "Executing programs with community participation, regular monitoring, and adaptive management."
    },
    {
      step: "4",
      title: "Evaluation & Scale",
      description: "Measuring impact, learning from outcomes, and scaling successful interventions to reach more communities."
    }
  ];

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
  Our Approach
</motion.h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                We believe in a holistic, community-driven approach that combines innovation with traditional wisdom to create sustainable solutions for social challenges.
              </p>
            </div>
          </div>
        </section>

        {/* Core Approaches */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-primary mb-12">
              Our Core Methodologies
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {approaches.map((approach, index) => {
                const IconComponent = approach.icon;
                return (
                  <Card
                  key={index}
                  className="border-t-4 border-primary transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-[1.02] hover:border-primary/80"
                >
                  <CardContent className="p-8">
                    <div className="flex items-center mb-4">
                      <div className="p-3 bg-primary/10 rounded-lg mr-4">
                        <IconComponent className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold text-primary">{approach.title}</h3>
                    </div>
                    <p className="text-muted-foreground mb-6">{approach.description}</p>
                    <div className="space-y-2">
                      {approach.principles.map((principle, idx) => (
                        <div key={idx} className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-secondary mr-2 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{principle}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                
                );
              })}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-primary mb-12">
              Our Implementation Process
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {process.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 mr-6">
                      <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold">
                        {item.step}
                      </div>
                    </div>
                    <motion.div
  initial={{ x: -100, opacity: 0 }}
  whileInView={{ x: 0, opacity: 1 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
>
  <Card className="flex-1">
    <CardContent className="p-6">
      <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
      <p className="text-muted-foreground">{item.description}</p>
    </CardContent>
  </Card>
</motion.div>
                    {index < process.length - 1 && (
                      <div className="flex-shrink-0 ml-6 mt-6">
                        <ArrowRight className="h-6 w-6 text-primary" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Key Principles */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-primary mb-12">
                Guiding Principles
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
              <Card className="transition duration-300 hover:shadow-lg hover:border-primary border">
  <CardContent className="p-8">
    <h3 className="text-xl font-bold text-primary mb-4">Participatory Development</h3>
    <p className="text-muted-foreground leading-relaxed">
      We believe that communities are the best judges of their own needs. Our approach emphasizes active participation of community members in all stages of program development and implementation.
    </p>
  </CardContent>
</Card>

<Card className="transition duration-300 hover:shadow-lg hover:border-primary border">
  <CardContent className="p-8">
    <h3 className="text-xl font-bold text-primary mb-4">Capacity Building</h3>
    <p className="text-muted-foreground leading-relaxed">
      Rather than creating dependency, we focus on building local capacity and empowering communities to become self-sufficient in addressing their challenges.
    </p>
  </CardContent>
</Card>

<Card className="transition duration-300 hover:shadow-lg hover:border-primary border">
  <CardContent className="p-8">
    <h3 className="text-xl font-bold text-primary mb-4">Integrated Solutions</h3>
    <p className="text-muted-foreground leading-relaxed">
      We recognize that social challenges are interconnected. Our programs address multiple issues simultaneously to create comprehensive, lasting solutions.
    </p>
  </CardContent>
</Card>

<Card className="transition duration-300 hover:shadow-lg hover:border-primary border">
  <CardContent className="p-8">
    <h3 className="text-xl font-bold text-primary mb-4">Cultural Sensitivity</h3>
    <p className="text-muted-foreground leading-relaxed">
      All our interventions are designed with deep respect for local culture, traditions, and values, ensuring that solutions are culturally appropriate and acceptable.
    </p>
  </CardContent>
</Card>

              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Approach;