import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  Users, 
  Award, 
  Clock, 
  Globe, 
  Heart,
  CheckCircle,
  Star,
  Zap,
  BookOpen,
  Handshake,
  TrendingUp
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: "Transparent Operations",
      description: "Complete transparency in all our operations with regular public reporting and accountability measures.",
      highlights: ["Financial transparency", "Impact reporting", "Governance standards"],
      category: "Governance"
    },
    {
      icon: Users,
      title: "Community-Driven Programs",
      description: "All programs are designed and implemented with active community participation and local leadership.",
      highlights: ["Local participation", "Community ownership", "Cultural sensitivity"],
      category: "Approach"
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "Rigorous quality standards and continuous improvement processes ensure program excellence.",
      highlights: ["Best practices", "Quality monitoring", "Continuous improvement"],
      category: "Quality"
    },
    {
      icon: Clock,
      title: "Timely Implementation",
      description: "Efficient project management and execution ensures programs are delivered on time and within budget.",
      highlights: ["Project management", "Timeline adherence", "Budget control"],
      category: "Management"
    },
    {
      icon: Globe,
      title: "Scalable Solutions",
      description: "Programs designed to be scalable and replicable across different communities and regions.",
      highlights: ["Scalability design", "Best practice sharing", "Knowledge transfer"],
      category: "Innovation"
    },
    {
      icon: Heart,
      title: "Compassionate Care",
      description: "Every interaction is guided by empathy, respect, and genuine care for the people we serve.",
      highlights: ["Empathetic approach", "Respectful engagement", "Dignity preservation"],
      category: "Values"
    },
    {
      icon: BookOpen,
      title: "Educational Excellence",
      description: "Comprehensive educational programs using modern teaching methods and curriculum design.",
      highlights: ["Modern curriculum", "Skilled educators", "Learning outcomes"],
      category: "Education"
    },
    {
      icon: Handshake,
      title: "Strategic Partnerships",
      description: "Strong partnerships with government, NGOs, and private sector for enhanced program impact.",
      highlights: ["Government collaboration", "NGO networks", "Private partnerships"],
      category: "Collaboration"
    },
    {
      icon: TrendingUp,
      title: "Measurable Impact",
      description: "Evidence-based programs with clear metrics and regular impact assessment for continuous improvement.",
      highlights: ["Impact metrics", "Data-driven decisions", "Outcome evaluation"],
      category: "Results"
    }
  ];

  const achievements = [
    { number: "500+", label: "Students Educated", icon: BookOpen },
    { number: "1000+", label: "Patients Treated", icon: Heart },
    { number: "2000+", label: "Trees Planted", icon: Globe },
    { number: "50+", label: "Communities Served", icon: Users },
    { number: "100+", label: "Volunteers", icon: Handshake },
    { number: "5+", label: "Years of Service", icon: Award }
  ];

  const categoryColors = {
    "Governance": "bg-primary/10 text-primary",
    "Approach": "bg-secondary/10 text-secondary",
    "Quality": "bg-accent/10 text-accent",
    "Management": "bg-primary/10 text-primary",
    "Innovation": "bg-secondary/10 text-secondary",
    "Values": "bg-accent/10 text-accent",
    "Education": "bg-primary/10 text-primary",
    "Collaboration": "bg-secondary/10 text-secondary",
    "Results": "bg-accent/10 text-accent"
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                Our Key Features
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Discover what makes SHREE GANESH DRS Foundation a trusted partner in community development and social change.
              </p>
            </div>
          </div>
        </section>


        {/* Features Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-primary mb-12">
              What Sets Us Apart
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-4">
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <IconComponent className="h-6 w-6 text-primary" />
                        </div>
                        <Badge className={categoryColors[feature.category as keyof typeof categoryColors]}>
                          {feature.category}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl text-primary">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{feature.description}</p>
                      <div className="space-y-2">
                        {feature.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-center">
                            <CheckCircle className="h-4 w-4 text-secondary mr-2 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{highlight}</span>
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

        {/* Quality Standards */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-primary mb-12">
                Quality Standards & Certifications
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardContent className="p-8">
                    <div className="flex items-center mb-4">
                      <Star className="h-8 w-8 text-accent mr-3" />
                      <h3 className="text-xl font-bold text-primary">ISO Standards</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      We adhere to international ISO standards for quality management and social responsibility, ensuring our operations meet global best practices.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-8">
                    <div className="flex items-center mb-4">
                      <Zap className="h-8 w-8 text-secondary mr-3" />
                      <h3 className="text-xl font-bold text-primary">Rapid Response</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      Our emergency response protocols enable us to quickly mobilize resources and support communities during crisis situations.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-8">
                    <div className="flex items-center mb-4">
                      <Shield className="h-8 w-8 text-primary mr-3" />
                      <h3 className="text-xl font-bold text-primary">Financial Integrity</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      Regular financial audits and transparent reporting ensure the highest standards of financial integrity and donor confidence.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-8">
                    <div className="flex items-center mb-4">
                      <TrendingUp className="h-8 w-8 text-accent mr-3" />
                      <h3 className="text-xl font-bold text-primary">Continuous Improvement</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      We employ systematic feedback mechanisms and learning systems to continuously improve our programs and increase impact.
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

export default Features;