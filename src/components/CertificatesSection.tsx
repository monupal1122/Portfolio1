import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award } from "lucide-react";

const certificates = [
  {
    id: 1,
    title: "Hackathon Certificate",
    description: "Certificate awarded for outstanding participation and innovation in the annual tech hackathon.",
    image: "/certificate1.jpeg",
    issuer: "Google Developers Group",
    date: "2025",
  },
  {
    id: 2,
    title: "Learning Certificate",
    description: "Certificate of completion for advanced web development and MERN stack training program.",
    image: "/certificate2.jpeg",
    issuer: "NIT Foundation",
    date: "2024",
  },
];

const CertificateCard = ({ certificate, index }: { certificate: typeof certificates[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group glass-card overflow-hidden"
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-video flex items-center justify-center">
        <img
          src={certificate.image}
          alt={certificate.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-display text-lg font-semibold group-hover:text-primary transition-colors">
            {certificate.title}
          </h3>
          <Award className="w-4 h-4 text-primary flex-shrink-0" />
        </div>
        <p className="text-muted-foreground text-xs mb-3 line-clamp-2">
          {certificate.description}
        </p>
        <div className="flex justify-between items-center text-[10px] text-muted-foreground">
          <span>Issued by: {certificate.issuer}</span>
          <span>{certificate.date}</span>
        </div>
      </div>
    </motion.div>
  );
};

const CertificatesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certificates" className="py-12 lg:py-16 relative" ref={ref}>
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <p className="text-primary font-medium mb-2 text-sm">Achievements</p>
          <h2 className="font-display text-3xl lg:text-4xl font-bold mb-3">Certificates</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm">
            A collection of certificates earned through participation in hackathons, courses, and professional development.
          </p>
        </motion.div>

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {certificates.map((certificate, index) => (
            <CertificateCard key={certificate.id} certificate={certificate} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
