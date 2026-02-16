import { Particles } from '@/components/ui/particles'
import { MorphingText } from '@/components/ui/morphing-text'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import MainBackground from '@/components/ui/main-background'
import { StarBackground } from './components/ui/stars-eyes'

function App() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="relative w-full min-h-screen bg-[#040409] font-sans">
      
      {/* BACKGROUND ANIMATIONS - Particles Global              */}
      <div className="fixed inset-0 z-40 pointer-events-none">
        <Particles
          className="absolute inset-0"
          quantity={150}
          ease={80}
          color="#e6e6e6"
          refresh={false}
        />
      </div>
      
      {/* NAVIGATION BAR - Global                                        */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo/Brand */}
          <div className="text-[#024f9b] font-mono text-xl font-bold">
            &lt;TulikaVarma/&gt;
          </div>
          {/* Navigation Links with Dropdowns */}
          <div className="flex gap-4 font-mono text-sm"> 
            {/* About Dropdown */}
            <div className="group relative">
              <button className="text-gray-400 hover:text-[#0066CE] hover:bg-[#0066CE]/10 px-4 py-2 rounded-md transition-all flex items-center gap-1">
                .about() <span className="text-[10px]">▼</span>
              </button>
              <div className="absolute top-full left-0 hidden group-hover:block pt-2">
                <div className="bg-[#040409] border border-[#0066CE]/30 rounded-md p-2 w-40 shadow-xl">
                  <button 
                    onClick={() => scrollToSection('about')} 
                    className="w-full text-left px-3 py-2 text-gray-400 hover:text-white hover:bg-[#0066CE]/20 rounded transition-all"
                  >
                    → bio
                  </button>
                  <button className="w-full text-left px-3 py-2 text-gray-400 hover:text-white hover:bg-[#0066CE]/20 rounded transition-all">
                    → education
                  </button>
                </div>
              </div>
            </div>
            {/* Work Dropdown */}
            <div className="group relative">
              <button className="text-gray-400 hover:text-[#0066CE] hover:bg-[#0066CE]/10 px-4 py-2 rounded-md transition-all flex items-center gap-1">
                .work() <span className="text-[10px]">▼</span>
              </button>
              <div className="absolute top-full left-0 hidden group-hover:block pt-2">
                <div className="bg-[#040409] border border-[#0066CE]/30 rounded-md p-2 w-40 shadow-xl">
                  <button 
                    onClick={() => scrollToSection('work')} 
                    className="w-full text-left px-3 py-2 text-gray-400 hover:text-white hover:bg-[#0066CE]/20 rounded transition-all"
                  >
                    → projects
                  </button>
                </div>
              </div>
            </div>
            {/* Contact Link */}
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-gray-400 hover:text-[#0066CE] hover:bg-[#0066CE]/10 px-4 py-2 rounded-md transition-all"
            >
              .contact()
            </button>
          </div>
        </div>
      </nav>

      {/* INTRODUCTION PAGE                                    */}
      <section className="relative w-full h-screen overflow-hidden">
        {/* Animated  Background */}
        <MainBackground />
        <StarBackground />
        {/* Hero Content */}
        <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Top Comment */}
            <div className="text-[#0066CE] font-mono text-sm mb-4">
              // Proof_by_Interaction: the stars are watching you!
            </div> 
            {/* Name/Title */}
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6">
              Tulika Varma
            </h1>
            {/* Morphing File Names */}
            <div className="text-xl md:text-2xl text-gray-300 font-mono mb-8">
              <MorphingText 
                texts={[
                  "train_model.py",       
                  "convolve_image.cpp",   
                  "query_database.sql",   
                  "superpose_state.qc",   
                  "deploy_pipeline.yaml"  
                ]}
              />
            </div>
            {/* Tagline */}
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12 font-light">
              Computing Science Major | Math Minor 
            </p>
            {/* CTA Button */}
            <div className="flex gap-4 justify-center font-mono mt-8">
              <Button 
                className="bg-transparent text-white border border-white/20 hover:border-[#0066CE] hover:bg-[#0066CE]/10 hover:text-white px-8 py-6 text-base transition-all duration-300 shadow-sm hover:shadow-[0_0_20px_rgba(0,102,206,0.3)]"
              >
                {'>'} get_resume.sh 
              </Button>
            </div>
          </motion.div>
        </div>
        {/* Scroll Down Indicator */}
        <div 
          className="absolute bottom-8 w-full z-20 flex justify-center"
          onClick={() => scrollToSection('about')}
        >
          <div className="animate-bounce cursor-pointer text-gray-400 font-mono text-sm hover:text-[#0066CE] transition-colors">
            scroll_down()
          </div>
        </div>  
      </section>

      {/* ABOUT SECTION  */}
      <section id="about" className="relative w-full min-h-screen bg-[#040409] py-32 px-6 z-30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="font-mono text-[#0066CE] text-sm mb-4">
              {'// About Me'}
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-16">
              const <span className="text-[#0066CE]">about</span> = {'{'}
            </h2>
            
            {/* Left Side - Info */}
            <div className="grid md:grid-cols-2 gap-16 pl-8">
              <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                <p>
                  <span className="text-[#0066CE] font-mono">name:</span> 
                  <span className="text-white"> "Tulika Varma"</span>,
                </p>

                <p>
                  <span className="text-[#0066CE] font-mono">role:</span> 
                  <span className="text-white"> "Computer Science Student"</span>,
                </p>

                <p>
                  <span className="text-[#0066CE] font-mono">education:</span> 
                  <span className="text-white"> "BSc Computer Science, Minor in Mathematics"</span>,
                </p>

                <p className="pt-4">
                  <span className="text-[#0066CE] font-mono">academicInterests:</span> 
                  <span className="text-white"> ["Machine Learning and Data Mining", "Biomedical Image Analysis", "Discrete Mathematics and Graph Theory", "Quantum Computing"]</span>,
                </p>

                <p>
                  <span className="text-[#0066CE] font-mono">approach:</span>
                  <span className="text-white"> "With training across machine learning, data-intensive systems, biomedical imaging, and quantum computing, I approach problems through a mathematically rigorous and research-driven lens. I'm especially interested in building interpretable, reliable intelligent systems grounded in strong theoretical foundations."</span>
                </p>
              </div>
              
              {/* Right Side - Animated Code Block */}
              <div className="flex items-center justify-center">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="bg-[#0A0F1A] border-2 border-[#0066CE]/40 rounded-lg p-8 font-mono text-sm backdrop-blur shadow-2xl hover:border-[#0066CE] transition-all w-full max-w-md"
                >
                  {/* Terminal Header */}
                  <div className="flex items-center gap-2 mb-6 pb-3 border-b border-gray-700">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span className="text-gray-500 ml-2 text-xs">tulika_varma.js</span>
                  </div>
                  {/* Code Content */}
                  <div className="space-y-3">
                    <div className="text-gray-500">// Quick Facts</div>
                    
                    <div>
                      <span className="text-purple-400">const</span>
                      <span className="text-blue-400"> student</span>
                      <span className="text-gray-400"> = {'{'}</span>
                    </div>
                    
                    <div className="ml-4 space-y-2">
                      <div>
                        <span className="text-red-400">location:</span> 
                        <span className="text-green-400"> "📍 Vancouver, Canada"</span>,
                      </div>
                      <div>
                        <span className="text-red-400">focus:</span> 
                        <span className="text-green-400"> "ML + Math"</span>,
                      </div>
                      <div>
                        <span className="text-red-400">status:</span> 
                        <span className="text-green-400"> "Seeking Internships"</span>,
                      </div>
                      <div>
                        <span className="text-red-400">coffee:</span> 
                        <span className="text-orange-400"> true</span>
                      </div>
                      <div>
                        <span className="text-red-400">sleep_schedule:</span> 
                        <span className="text-green-400"> "undefined"</span>,
                      </div>
                      <div>
                        <span className="text-red-400">terminal_theme:</span> 
                        <span className="text-green-400"> "Dark Mode Only"</span>,
                      </div>
                    </div>
                    
                    <div className="text-gray-400">{'}'};</div>

                    <div className="mt-4 pt-4 border-t border-gray-700">
                      <div className="text-gray-500 text-xs">$ node tulika_varma.js</div>
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.3 }}
                        className="text-green-400 text-xs mt-1"
                      >
                        ✓ Ready to build amazing things
                      </motion.div>
                    </div>

                    {/* Blinking Cursor */}
                    <div className="flex items-center gap-1">
                      <span className="text-gray-500">$</span>
                      <motion.span
                        animate={{ opacity: [1, 0, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                        className="inline-block w-2 h-4 bg-[#0066CE]"
                      />
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
             
            <div className="text-5xl md:text-6xl font-bold text-white mt-8">
              {'}'}
            </div>
          </motion.div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="relative w-full min-h-screen bg-[#040409] py-32 px-6 z-30">
        <div className="max-w-7xl mx-auto">
          <div className="font-mono text-[#0066CE] text-sm mb-4">
            {'// Technical Skills'}
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-16">
            tech<span className="text-[#0066CE]">Stack</span>[]
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Languages", skills: ["Python", "Java", "C++", "JavaScript", "SQL", "R"], icon: "{ }" },
              { title: "Frontend", skills: ["React", "Tailwind CSS", "HTML/CSS", "Vite", "Framer Motion"], icon: "</>" },
              { title: "Backend", skills: ["Node.js", "Express", "Flask", "PostgreSQL", "MongoDB"], icon: "⚙️" },
              { title: "Tools & Math", skills: ["Git", "VS Code", "LaTeX", "NumPy", "Pandas", "Jupyter"], icon: "🔧" },
            ].map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                {/* Updated Card background  */}
                <Card className="bg-[#0A0F1A]/80 border-[#0066CE]/30 hover:border-[#0066CE] transition-all h-full backdrop-blur">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-3xl">{category.icon}</span>
                      <CardTitle className="text-gray-300 font-mono text-xl">{category.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 font-mono text-sm">
                      {category.skills.map((skill, i) => (
                        <div key={i} className="text-gray-400 hover:text-[#0066CE] transition-colors cursor-default">
                          → {skill}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="work" className="relative w-full min-h-screen bg-[#040409] py-32 px-6 z-30">
        <div className="max-w-7xl mx-auto">
          <div className="font-mono text-[#0066CE] text-sm mb-4">
            {'// Featured Projects'}
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-16">
            recent<span className="text-[#0066CE]">Work</span>()
          </h2>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ x: 10 }}
              className="group"
            >
              <Card className="bg-[#0A0F1A]/80 border-[#0066CE]/30 hover:border-[#0066CE] transition-all backdrop-blur overflow-hidden">
                <div className="grid md:grid-cols-3 gap-6 p-8">
                  <div className="md:col-span-2 space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="text-[#0066CE] font-mono text-sm">01</div>
                      <h3 className="text-3xl font-bold text-white group-hover:text-[#0066CE] transition-colors">Project Name Here</h3>
                    </div>
                    <p className="text-gray-400 text-lg">Description of your CS/Math project.</p>
                  </div>
                  <div className="flex flex-col justify-center gap-3">
                    <Button className="bg-[#0066CE] hover:bg-[#00468C] text-white font-mono w-full">View Project →</Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="relative w-full min-h-screen bg-[#040409] py-32 px-6 flex items-center z-30">
        <div className="max-w-7xl mx-auto w-full text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="font-mono text-[#0066CE] text-sm mb-4">{'// Get In Touch'}</div>
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-8">
              let's <span className="text-[#0066CE]">connect</span>()
            </h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center font-mono mb-16">
              <Button className="bg-[#0066CE] hover:bg-[#00468C] text-white px-10 py-8 text-lg">→ Email Me</Button>
              <Button variant="outline" className="border-2 border-[#0066CE] text-[#0066CE] hover:bg-[#0066CE]/10 px-10 py-8 text-lg">→ LinkedIn</Button>
            </div>
            <div className="text-gray-600 font-mono text-sm">© 2026 Tulika // Built with React + Tailwind + Love</div>
          </motion.div>
        </div>
      </section>

    </div>
  )
}

export default App