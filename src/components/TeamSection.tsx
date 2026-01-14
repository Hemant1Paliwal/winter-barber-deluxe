import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Facebook, Instagram } from 'lucide-react';

const teamMembers = [
  {
    name: 'Munish Nagpal (Lala Ji)',
    role: 'Founder',
    image: 'https://lalajithebarbershop.ca/wp-content/uploads/2025/11/Lala-JI-2.webp',
  },
  {
    name: 'Mohit Nagpal',
    role: 'Co-Founder',
    image: 'https://lalajithebarbershop.ca/wp-content/uploads/2025/11/Mohit-Nagpal.webp',
  },
  {
    name: 'AK',
    role: 'Manager, Truro',
    image: 'https://lalajithebarbershop.ca/wp-content/uploads/2025/11/AK.webp',
  },
  {
    name: 'Prem',
    role: 'Manager, Bedford',
    image: 'https://lalajithebarbershop.ca/wp-content/uploads/2025/11/Prem.webp',
  },
  {
    name: 'Rahul',
    role: 'Senior Barber',
    image: 'https://lalajithebarbershop.ca/wp-content/uploads/2025/11/Rahul.webp',
  },
  {
    name: 'Raj',
    role: 'Senior Barber',
    image: 'https://lalajithebarbershop.ca/wp-content/uploads/2025/11/Raj.webp',
  },
];

const TeamCard = ({ member, index }: { member: typeof teamMembers[0]; index: number }) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    setRotateY((x - centerX) / 10);
    setRotateX(-(y - centerY) / 10);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="perspective-1000"
    >
      <div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transition: 'transform 0.1s ease-out',
        }}
        className="card-luxury overflow-hidden transform-style-3d"
      >
        <div className="aspect-[3/4] overflow-hidden">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>
        <div className="p-4 flex items-center justify-between">
          <div>
            <h3 className="font-display text-lg font-semibold text-foreground">
              {member.name}
            </h3>
            <p className="text-primary text-sm">{member.role}</p>
          </div>
          <div className="flex gap-2">
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Facebook size={18} />
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Instagram size={18} />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const TeamSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="team" className="section-padding bg-background" ref={ref}>
      <div className="container mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold italic">
              Behind Every Cut,
              <br />
              <span className="text-gold-gradient">There's a Team</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-md"
          >
            <p className="text-muted-foreground mb-6">
              A premier hairstyling destination in Nova Scotia. Founded in 2022, Awarded with Crown of Clippers Nova Scotia. We are dedicated to providing exceptional hairstyling services to the community.
            </p>
            <a
              href="https://lalajithebarbershop.ca"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold-outline"
            >
              Book Your Appointment
            </a>
          </motion.div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <TeamCard key={member.name} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;