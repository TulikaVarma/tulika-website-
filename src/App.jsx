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
    <div className="relative w-full min-h-screen bg-[#0A0F1A] font-sans">
      {/* Particles in background */}
      <div className="fixed inset-0 z-40 pointer-events-none">
        <Particles
          className="absolute inset-0"
          quantity={150}
          ease={80}
          color="#e6e6e6"
          refresh={false}
        />
      </div>

      {/*Stars*/}
      <StarBackground />

      <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm px-6 py-4">
        {/* Navigation menu for page */}
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Top Left Name*/}
          <div className="text-[#024f9b] font-mono text-xl font-bold">
            &lt;TulikaVarma/&gt;
          </div>

          {/* Navigation bar */}
          <div className="flex gap-4 font-mono text-sm">

            {/* About Dropdown */}
            <div className="group relative">
              <button className="text-gray-400 hover:text-[#0066CE] hover:bg-[#0066CE]/10 px-4 py-2 rounded-md transition-all flex items-center gap-1">
                .about() <span className="text-[10px]">▼</span>
              </button>
              {/* The Dropdown Content */}
              <div className="absolute top-full left-0 hidden group-hover:block pt-2">
                <div className="bg-[#0A0F1A] border border-[#0066CE]/30 rounded-md p-2 w-40 shadow-xl">
                  <button onClick={() => scrollToSection('about')} className="w-full text-left px-3 py-2 text-gray-400 hover:text-white hover:bg-[#0066CE]/20 rounded transition-all">
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
                <div className="bg-[#0A0F1A] border border-[#0066CE]/30 rounded-md p-2 w-40 shadow-xl">
                  <button onClick={() => scrollToSection('work')} className="w-full text-left px-3 py-2 text-gray-400 hover:text-white hover:bg-[#0066CE]/20 rounded transition-all">
                    → projects
                  </button>
                </div>
              </div>
            </div>
            {/* Contact */}
            <button onClick={() => scrollToSection('contact')} className="text-gray-400 hover:text-[#0066CE] hover:bg-[#0066CE]/10 px-4 py-2 rounded-md transition-all">
              .contact()
            </button>
          </div>
        </div>
      </nav>

      {/* Main Page Content  */}
      <section className="relative w-full h-screen overflow-hidden">
        {/* Animated gradient background */}
        <MainBackground />
        {/* Main Page Content */}
        <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="text-[#0066CE] font-mono text-sm mb-4">
              PS. the stars are watching you!
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6">
              Tulika Varma
            </h1>
            
            <div className="text-2xl md:text-3xl text-gray-300 font-mono mb-8">
              <MorphingText 
                texts={[
                  "CS_Student.exe",
                  "Math_Enthusiast.py", 
                  "Problem_Solver.cpp",
                  "Full_Stack_Dev.js"
                ]}
              />
            </div>
            
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12 font-light">
              Building solutions to complex problems through code and mathematics
            </p>
            
            <div className="flex gap-4 justify-center font-mono">
              <Button 
                onClick={() => scrollToSection('work')}
                className="bg-[#0066CE] hover:bg-[#00468C] text-white px-8 py-6 text-base border border-[#0066CE]"
              >
                {'>'} View Work
              </Button>
              <Button 
                variant="outline"
                className="border-2 border-[#0066CE] text-white hover:bg-[#0066CE]/10 px-8 py-6 text-base"
              >
                {'>'} Download CV
              </Button>
            </div>
          </motion.div>
        </div>
        
        <div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce cursor-pointer"
          onClick={() => scrollToSection('about')}
        >
          <div className="text-gray-400 font-mono text-sm">scroll_down()</div>
        </div>
      </section>

      {/* ABOUT SECTION - REDUCED Z-INDEX */}
      <section id="about" className="relative w-full min-h-screen bg-gradient-to-b from-[#0A0F1A] to-[#111827] py-32 px-6 z-30">
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
            
            <div className="grid md:grid-cols-2 gap-16 pl-8">
              <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                <p>
                  <span className="text-[#0066CE] font-mono">name:</span> <span className="text-white">"Tulika"</span>,
                </p>
                <p>
                  <span className="text-[#0066CE] font-mono">role:</span> <span className="text-white">"CS Student & Developer"</span>,
                </p>
                <p>
                  <span className="text-[#0066CE] font-mono">education:</span> <span className="text-white">"Computer Science Major, Math Minor"</span>,
                </p>
                <p className="pt-4">
                  <span className="text-[#0066CE] font-mono">bio:</span> <span className="text-white">"I'm passionate about leveraging technology and mathematical thinking to solve real-world problems. My work spans full-stack development, algorithms, and data analysis."</span>
                </p>
                <p className="pt-4">
                  <span className="text-[#0066CE] font-mono">interests:</span> [
                  <span className="text-white block pl-8">"Web Development",</span>
                  <span className="text-white block pl-8">"Algorithms & Data Structures",</span>
                  <span className="text-white block pl-8">"Machine Learning",</span>
                  <span className="text-white block pl-8">"Mathematical Modeling"</span>
                  ],
                </p>
              </div>
              
              <div className="flex items-center justify-center">
                <div className="relative">
                  <div className="w-80 h-80 rounded-lg bg-gradient-to-br from-[#0066CE] to-[#00468C] flex items-center justify-center text-white text-9xl font-bold shadow-2xl border-2 border-[#0066CE]">
                    T
                  </div>
                  <div className="absolute -bottom-4 -right-4 bg-[#00468C] text-white px-4 py-2 font-mono text-sm rounded border border-[#0066CE]">
                    ready_to_work = true
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-5xl md:text-6xl font-bold text-white mt-8">
              {'}'}
            </div>
          </motion.div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="relative w-full min-h-screen bg-gradient-to-b from-[#111827] to-[#0A0F1A] py-32 px-6 z-30">
        <div className="max-w-7xl mx-auto">
          <div className="font-mono text-[#0066CE] text-sm mb-4">
            {'// Technical Skills'}
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-16">
            tech<span className="text-[#0066CE]">Stack</span>[]
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                title: "Languages", 
                skills: ["Python", "Java", "C++", "JavaScript", "SQL", "R"],
                icon: "{ }"
              },
              { 
                title: "Frontend", 
                skills: ["React", "Tailwind CSS", "HTML/CSS", "Vite", "Framer Motion"],
                icon: "</>"
              },
              { 
                title: "Backend", 
                skills: ["Node.js", "Express", "Flask", "PostgreSQL", "MongoDB"],
                icon: "⚙️"
              },
              { 
                title: "Tools & Math", 
                skills: ["Git", "VS Code", "LaTeX", "NumPy", "Pandas", "Jupyter"],
                icon: "🔧"
              },
            ].map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="bg-[#1F2937]/50 border-[#0066CE]/30 hover:border-[#0066CE] transition-all h-full backdrop-blur">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-3xl">{category.icon}</span>
                      <CardTitle className="text-gray-300 font-mono text-xl">
                        {category.title}
                      </CardTitle>
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
      <section id="work" className="relative w-full min-h-screen bg-gradient-to-b from-[#0A0F1A] to-[#111827] py-32 px-6 z-30">
        <div className="max-w-7xl mx-auto">
          <div className="font-mono text-[#0066CE] text-sm mb-4">
            {'// Featured Projects'}
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-16">
            recent<span className="text-[#0066CE]">Work</span>()
          </h2>

          <div className="space-y-8">
            {/* Project 1 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ x: 10 }}
              className="group"
            >
              <Card className="bg-[#1F2937]/50 border-[#0066CE]/30 hover:border-[#0066CE] transition-all backdrop-blur overflow-hidden">
                <div className="grid md:grid-cols-3 gap-6 p-8">
                  <div className="md:col-span-2 space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="text-[#0066CE] font-mono text-sm">01</div>
                      <h3 className="text-3xl font-bold text-white group-hover:text-[#0066CE] transition-colors">
                        Project Name Here
                      </h3>
                    </div>
                    <p className="text-gray-400 text-lg">
                      Description of your CS/Math project. Explain the problem, your approach, and the technologies used.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {["React", "Python", "TensorFlow", "PostgreSQL"].map((tech) => (
                        <span key={tech} className="bg-[#0066CE]/20 text-[#0066CE] px-3 py-1 rounded font-mono text-sm border border-[#0066CE]/40">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col justify-center gap-3">
                    <Button className="bg-[#0066CE] hover:bg-[#00468C] text-white font-mono w-full">
                      View Project →
                    </Button>
                    <Button variant="outline" className="border-[#0066CE] text-[#0066CE] hover:bg-[#0066CE]/10 font-mono w-full">
                      GitHub →
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Project 2 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ x: 10 }}
              className="group"
            >
              <Card className="bg-[#1F2937]/50 border-[#0066CE]/30 hover:border-[#0066CE] transition-all backdrop-blur overflow-hidden">
                <div className="grid md:grid-cols-3 gap-6 p-8">
                  <div className="md:col-span-2 space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="text-[#0066CE] font-mono text-sm">02</div>
                      <h3 className="text-3xl font-bold text-white group-hover:text-[#0066CE] transition-colors">
                        Another Project
                      </h3>
                    </div>
                    <p className="text-gray-400 text-lg">
                      Another CS/Math project description. Focus on what makes it unique.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {["Java", "Algorithms", "Data Structures"].map((tech) => (
                        <span key={tech} className="bg-[#0066CE]/20 text-[#0066CE] px-3 py-1 rounded font-mono text-sm border border-[#0066CE]/40">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col justify-center gap-3">
                    <Button className="bg-[#0066CE] hover:bg-[#00468C] text-white font-mono w-full">
                      View Project →
                    </Button>
                    <Button variant="outline" className="border-[#0066CE] text-[#0066CE] hover:bg-[#0066CE]/10 font-mono w-full">
                      GitHub →
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="relative w-full min-h-screen bg-gradient-to-b from-[#111827] to-[#0A0F1A] py-32 px-6 flex items-center z-30">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="font-mono text-[#0066CE] text-sm mb-4">
              {'// Get In Touch'}
            </div>
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-8">
              let's <span className="text-[#0066CE]">connect</span>()
            </h2>
            
            <p className="text-2xl text-gray-400 mb-16 max-w-2xl mx-auto">
              Open to internships, collaborations, and exciting opportunities
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center font-mono mb-16">
              <a href="mailto:your.email@example.com">
                <Button className="bg-[#0066CE] hover:bg-[#00468C] text-white px-10 py-8 text-lg border border-[#0066CE]">
                  → Email Me
                </Button>
              </a>
              <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="border-2 border-[#0066CE] text-[#0066CE] hover:bg-[#0066CE]/10 px-10 py-8 text-lg">
                  → LinkedIn
                </Button>
              </a>
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="border-2 border-[#0066CE] text-[#0066CE] hover:bg-[#0066CE]/10 px-10 py-8 text-lg">
                  → GitHub
                </Button>
              </a>
            </div>

            <div className="text-gray-600 font-mono text-sm">
              © 2026 Tulika // Built with React + Tailwind + Love
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  )
}

export default App