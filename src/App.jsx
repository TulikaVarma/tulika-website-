import { Particles } from '@/components/ui/particles'
import { MorphingText } from '@/components/ui/morphing-text'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import MainBackground from '@/components/ui/main-background'
import { StarBackground } from './components/ui/stars-eyes'
import { useState } from 'react'


function App() {
  const [menuOpen, setMenuOpen] = useState(false)
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
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-4">
        <div className="w-full flex justify-between items-center">
          {/* Name */}
          <div className="text-[#024f9b] font-mono text-base sm:text-lg md:text-xl font-bold flex-shrink-0">
            &lt;TulikaVarma/&gt;
          </div>
          
          {/* Menu Button */}
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            className="group relative w-10 h-10 flex flex-col justify-center items-center gap-1.5 rounded-md transition-all flex-shrink-0"
            aria-label="Menu"
          >
            <span className="w-6 h-0.5 bg-gray-400 group-hover:bg-[#0066CE] transition-all duration-300 group-hover:rotate-45 group-hover:translate-y-1 origin-center"></span>
            <span className="w-6 h-0.5 bg-gray-400 group-hover:bg-[#0066CE] transition-all duration-300 group-hover:-rotate-45 group-hover:-translate-y-1 origin-center"></span>
          </button>
        </div>
      </nav>
      {/* Side Panel Menu */}
      <div 
        className={`fixed top-0 right-0 h-full w-80 backdrop-blur-md border-l border-[#0066CE]/20 z-50 ${
          menuOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
        style={{
          clipPath: menuOpen 
            ? 'circle(150% at 100% 0%)' 
            : 'circle(0% at 100% 0%)',
          transition: 'clip-path 0.8s cubic-bezier(0.65, 0, 0.35, 1)'
        }}
      >
        {/* Close Button */}
        <button 
          onClick={() => setMenuOpen(false)}
          className={`absolute top-4 right-6 text-gray-400 hover:text-white text-3xl transition-all duration-300 ${
            menuOpen ? 'opacity-100 delay-300' : 'opacity-0'
          }`}
        >
          ×
        </button>

        <div className={`p-8 pt-20 transition-opacity duration-500 ${
          menuOpen ? 'opacity-100 delay-400' : 'opacity-0'
        }`}>
          {/* MENU Section */}
          <div className="mb-12">
            <h3 className="text-[#0066CE] text-xl font-mono mb-6">MENU</h3>
            <div className="space-y-4">
              <button 
                onClick={() => { scrollToSection('home'); setMenuOpen(false); }}
                className="flex items-center gap-3 text-white hover:text-[#0066CE] transition-colors group w-full"
              >
                <span className="w-2 h-2 rounded-full bg-[#024f9b]"></span>
                <span className="text-base">Home</span>
              </button>
              <button 
                onClick={() => { scrollToSection('about'); setMenuOpen(false); }}
                className="flex items-center gap-3 text-white hover:text-[#0066CE] transition-colors group w-full"
              >
                <span className="w-2 h-2 rounded-full bg-[#0066CE]"></span>
                <span className="text-base">About Me</span>
              </button>
              <button 
                onClick={() => { scrollToSection('skills'); setMenuOpen(false); }}
                className="flex items-center gap-3 text-white hover:text-[#0066CE] transition-colors group w-full"
              >
                <span className="w-2 h-2 rounded-full bg-sky-400"></span>
                <span className="text-base">Skills</span>
              </button>
              <button 
                onClick={() => { scrollToSection('work'); setMenuOpen(false); }}
                className="flex items-center gap-3 text-white hover:text-[#0066CE] transition-colors group w-full"
              >
                <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                <span className="text-base">Projects</span>
              </button>
              <button 
                onClick={() => { scrollToSection('contact'); setMenuOpen(false); }}
                className="flex items-center gap-3 text-white hover:text-[#0066CE] transition-colors group w-full"
              >
                <span className="w-2 h-2 rounded-full bg-cyan-300"></span>
                <span className="text-base">Contact</span>
              </button>
            </div>
          </div>

          {/* Social Links */}
          <div className="mb-12">
            <h3 className="text-[#0066CE] text-xl font-mono mb-6">SOCIAL</h3>
            <div className="space-y-3">
              <a href="#" className="block text-gray-300 hover:text-[#0066CE] transition-colors">Github</a>
              <a href="#" className="block text-gray-300 hover:text-[#0066CE] transition-colors">Linkedin</a>
            </div>
          </div>

          {/* Email */}
          <div>
            <h3 className="text-[#0066CE] text-xl font-mono mb-6">GET IN TOUCH</h3>
            <a href="mailto:tulikavarma@gmail.com" className="text-gray-300 hover:text-[#0066CE] transition-colors break-all">
              tulikaavarma@gmail.com
            </a>
          </div>
        </div>
      </div>
      {/* closes menu when clicking outside */}
      {menuOpen && (
        <div 
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
        ></div>
      )}

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
            <div className="text-lg md:text-xl text-gray-300 font-mono mb-8">
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
              Computer Science | Mathematics
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
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-24">
            <div className="font-mono text-[#0066CE] text-sm mb-4">
              {'// Technical Skills'}
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-white">
              tech<span className="text-[#0066CE]">Stack</span>[]
            </h2>
          </div>

          {/* Stacking Cards Container */}
          <div className="relative space-y-[-2rem]">
            {[
              { 
                title: "Languages", 
                skills: ["Python", "C++", "SQL", "RISC-V", "JavaScript", "Bash/Shell"], 
                icon: "{ }",
                color: "from-blue-600/30 to-cyan-600/30",
                borderColor: "border-blue-500/50",
                layer: 1
              },
              { 
                title: "Web Development", 
                skills: ["React", "Tailwind CSS", "HTML/CSS", "Node.js"], 
                icon: "</>",
                color: "from-blue-500/30 to-cyan-500/30",
                borderColor: "border-blue-400/50",
                layer: 2
              },
              { 
                title: "Tools & DevOps", 
                skills: ["Git", "Docker", "Linux", "VS Code", "LaTeX", "MATLAB"], 
                icon: "🔧",
                color: "from-blue-400/30 to-cyan-400/30",
                borderColor: "border-blue-300/50",
                layer: 3
              },
              { 
                title: "Data & ML", 
                skills: ["NumPy", "Pandas", "PyTorch", "scikit-learn", "Jupyter", "Matplotlib"], 
                icon: "📊",
                color: "from-blue-300/30 to-cyan-300/30",
                borderColor: "border-blue-200/50",
                layer: 4
              },
            ].map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 100, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  delay: index * 0.2,
                  duration: 0.6,
                  ease: "easeOut"
                }}
                style={{
                  zIndex: 10 + index,
                }}
                className="group relative"
              >
                {/* Stack Shadow Effect */}
                <div 
                  className="absolute -inset-4 bg-[#0066CE]/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    transform: `translateY(${(4 - index) * 8}px)`,
                  }}
                />
                
                <Card className={`
                  relative overflow-hidden
                  bg-gradient-to-br from-[#0A0F1A]/95 to-[#0A0F1A]/80
                  ${category.borderColor}
                  border-2
                  hover:border-[#0066CE] 
                  hover:shadow-2xl hover:shadow-[#0066CE]/30
                  transition-all duration-500
                  backdrop-blur-xl
                  transform hover:-translate-y-12 hover:scale-105
                `}
                style={{
                  boxShadow: `0 ${(4 - index) * 4}px ${(4 - index) * 20}px rgba(0, 102, 206, ${0.1 + index * 0.05})`
                }}
                >
                  {/* Animated gradient background */}
                  <div className={`
                    absolute inset-0 bg-gradient-to-br ${category.color} 
                    opacity-0 group-hover:opacity-100 
                    transition-opacity duration-500
                  `} />
                  
                  {/* Grid pattern overlay */}
                  <div className="absolute inset-0 opacity-[0.03]" 
                    style={{
                      backgroundImage: `
                        linear-gradient(rgba(0, 102, 206, 0.5) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(0, 102, 206, 0.5) 1px, transparent 1px)
                      `,
                      backgroundSize: '20px 20px'
                    }}
                  />

                  <CardHeader className="relative z-10 pb-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-1">
                          <span className="text-5xl group-hover:scale-110 transition-transform duration-300">
                            {category.icon}
                          </span>
                          <div>
                            <CardTitle className="text-white font-bold text-2xl mb-1 group-hover:text-[#0066CE] transition-colors">
                              {category.title}
                            </CardTitle>
                          </div>
                        </div>
                      </div>
                      
                      {/* Stack indicator */}
                      <div className="flex flex-col gap-1 opacity-30 group-hover:opacity-100 transition-opacity">
                        {[...Array(4)].map((_, i) => (
                          <div 
                            key={i}
                            className={`h-1 rounded-full transition-all duration-300 ${
                              i === index 
                                ? 'w-8 bg-[#0066CE]' 
                                : 'w-4 bg-gray-600'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="relative z-10 pt-4 border-t border-[#0066CE]/20">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {category.skills.map((skill, i) => (
                        <motion.div 
                          key={i}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.2 + i * 0.05 }}
                          className="
                            relative
                            bg-[#0066CE]/5
                            border border-[#0066CE]/20
                            rounded-lg px-3 py-2
                            transition-all duration-300 cursor-default
                          "
                        >
                          <span className="font-mono text-sm text-gray-300 transition-colors flex items-center gap-2">
                            {skill}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>

                  {/* Bottom edge highlight */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#0066CE]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Stack visualization at bottom */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-16 text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0066CE]/10 border border-[#0066CE]/30">
              <div className="flex gap-1">
                {[...Array(4)].map((_, i) => (
                  <div 
                    key={i}
                    className="w-2 h-2 rounded-full bg-[#0066CE]"
                    style={{
                      opacity: 1 - (i * 0.2),
                      animation: `pulse 2s ease-in-out ${i * 0.2}s infinite`
                    }}
                  />
                ))}
              </div>
              <span className="font-mono text-xs text-[#0066CE]">
                4 Layers Deep
              </span>
            </div>
          </motion.div>
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