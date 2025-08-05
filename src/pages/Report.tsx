import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Download, 
  TrendingUp, 
  Users, 
  DollarSign, 
  Calendar,
  FileText,
  BarChart3,
  PieChart
} from "lucide-react";

const Report = () => {
  const reports = [
    {
      title: "Annual Report 2023",
      description: "Comprehensive overview of our programs, achievements, and financial performance for the year 2023.",
      type: "Annual Report",
      date: "March 2024",
      pages: "45 pages",
      size: "2.3 MB",
      status: "Latest"
    },
    {
      title: "Financial Transparency Report 2023",
      description: "Detailed breakdown of fund utilization, donations received, and financial accountability measures.",
      type: "Financial Report",
      date: "February 2024", 
      pages: "28 pages",
      size: "1.8 MB",
      status: "Available"
    },
    {
      title: "Impact Assessment Report",
      description: "In-depth analysis of program outcomes and community impact across all our initiatives.",
      type: "Impact Report",
      date: "January 2024",
      pages: "52 pages", 
      size: "3.1 MB",
      status: "Available"
    },
    {
      title: "Quarterly Progress Report Q4 2023",
      description: "Latest quarterly update on program progress, milestones achieved, and upcoming activities.",
      type: "Quarterly Report",
      date: "December 2023",
      pages: "16 pages",
      size: "1.2 MB",
      status: "Available"
    }
  ];

  const stats = [
    {
      icon: Users,
      title: "People Served",
      value: "2,500+",
      description: "Direct beneficiaries across all programs"
    },
    {
      icon: DollarSign,
      title: "Funds Utilized",
      value: "₹25 Lakhs",
      description: "Total program expenditure in 2023"
    },
    {
      icon: TrendingUp,
      title: "Program Growth",
      value: "40%",
      description: "Increase in program reach year-over-year"
    },
    {
      icon: BarChart3,
      title: "Efficiency Rate",
      value: "92%",
      description: "Funds directly used for programs"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Latest":
        return "bg-accent text-accent-foreground";
      case "Available":
        return "bg-secondary text-secondary-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "Annual Report":
        return FileText;
      case "Financial Report":
        return DollarSign;
      case "Impact Report":
        return BarChart3;
      case "Quarterly Report":
        return PieChart;
      default:
        return FileText;
    }
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
                Reports & Transparency
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Access our comprehensive reports showcasing our impact, financial transparency, and accountability to the communities we serve.
              </p>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-primary mb-12">
              2023 Impact Summary
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <Card key={index} className="text-center">
                    <CardContent className="p-6">
                      <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                        <IconComponent className="h-8 w-8 text-primary" />
                      </div>
                      <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                      <h3 className="font-semibold mb-2">{stat.title}</h3>
                      <p className="text-sm text-muted-foreground">{stat.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Reports Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-primary mb-12">
              Available Reports
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {reports.map((report, index) => {
                const IconComponent = getTypeIcon(report.type);
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="p-2 bg-primary/10 rounded-lg">
                            <IconComponent className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <CardTitle className="text-lg text-primary">{report.title}</CardTitle>
                            <p className="text-sm text-muted-foreground">{report.type}</p>
                          </div>
                        </div>
                        <Badge className={getStatusColor(report.status)}>
                          {report.status}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{report.description}</p>
                      
                      <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {report.date}
                          </div>
                          <div className="flex items-center">
                            <FileText className="h-4 w-4 mr-1" />
                            {report.pages}
                          </div>
                        </div>
                        <span className="text-xs">{report.size}</span>
                      </div>

                      <Button className="w-full" variant="secondary">
                        <Download className="h-4 w-4 mr-2" />
                        Download Report
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Transparency Commitment */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-primary mb-12">
                Our Commitment to Transparency
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-primary mb-4">Financial Accountability</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We maintain complete transparency in our financial operations with regular audits, public disclosure of fund utilization, and detailed reporting of all donations and expenditures.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-primary mb-4">Impact Measurement</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Our impact assessment follows rigorous methodologies to measure and report the real-world outcomes of our programs, ensuring accountability to our beneficiaries and donors.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-primary mb-4">Regular Reporting</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We publish quarterly progress reports, annual comprehensive reports, and special impact assessments to keep all stakeholders informed about our work and achievements.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-primary mb-4">Open Communication</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We encourage open dialogue with communities, donors, and partners. All reports are made publicly available and we welcome questions and feedback from stakeholders.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Subscribe to receive our latest reports and updates directly in your inbox.
            </p>
            <Button variant="secondary" size="lg">
              Subscribe to Newsletter
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Report;