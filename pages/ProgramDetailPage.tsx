import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProgramDetail from '@/components/ProgramDetail';
import { getProgramById } from '@/data/programs';

const ProgramDetailPage: React.FC = () => {
  const { programId } = useParams<{programId: string;}>();

  if (!programId) {
    return <Navigate to="/programs" replace data-id="4egt0w6mo" data-path="src/pages/ProgramDetailPage.tsx" />;
  }

  const program = getProgramById(programId);

  if (!program) {
    return <Navigate to="/programs" replace data-id="b0l2mk36d" data-path="src/pages/ProgramDetailPage.tsx" />;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }} data-id="d5z48e8ou" data-path="src/pages/ProgramDetailPage.tsx">

      <Header data-id="kgly0wbej" data-path="src/pages/ProgramDetailPage.tsx" />
      <ProgramDetail program={program} data-id="jl4by7e07" data-path="src/pages/ProgramDetailPage.tsx" />
      <Footer data-id="now3fo96r" data-path="src/pages/ProgramDetailPage.tsx" />
    </motion.div>);

};

export default ProgramDetailPage;