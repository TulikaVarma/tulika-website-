import { useState } from "react";

export default function Navbar({ scrollToSection }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  return (
    <>
      {/* NAVIGATION BAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-4">
        <div className="w-full flex justify-between items-center">
          <div className="text-[#024f9b] font-mono text-base sm:text-lg md:text-xl font-bold flex-shrink-0">
            &lt;TulikaVarma/&gt;
          </div>
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
          clipPath: menuOpen ? 'circle(150% at 100% 0%)' : 'circle(0% at 100% 0%)',
          transition: 'clip-path 0.8s cubic-bezier(0.65, 0, 0.35, 1)'
        }}
      >
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
          <div className="mb-12">
            <h3 className="text-[#0066CE] text-xl font-mono mb-6">MENU</h3>
            <div className="space-y-4">
              {[
                { id: 'home', label: 'Home', color: 'bg-[#024f9b]' },
                { id: 'about', label: 'About Me', color: 'bg-[#0066CE]' },
                { id: 'skills', label: 'Skills', color: 'bg-sky-400' },
                { id: 'work', label: 'Projects', color: 'bg-blue-400' },
                { id: 'contact', label: 'Contact', color: 'bg-cyan-300' },
              ].map(({ id, label, color }) => (
                <button
                  key={id}
                  onClick={() => { scrollToSection(id); setMenuOpen(false); }}
                  className="flex items-center gap-3 text-white hover:text-[#0066CE] transition-colors group w-full"
                >
                  <span className={`w-2 h-2 rounded-full ${color}`}></span>
                  <span className="text-base">{label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-[#0066CE] text-xl font-mono mb-6">SOCIAL</h3>
            <div className="space-y-3">
              <a href="https://github.com/TulikaVarma" className="block text-gray-300 hover:text-[#0066CE] transition-colors">Github</a>
              <a href="https://www.linkedin.com/in/tulika-varma-962165278/?originalSubdomain=ca" className="block text-gray-300 hover:text-[#0066CE] transition-colors">Linkedin</a>
            </div>
          </div>

          <div>
            <h3 className="text-[#0066CE] text-xl font-mono mb-6">GET IN TOUCH</h3>
            <a 
              href="mailto:tulikaavarma@gmail.com" 
              className="text-gray-300 hover:text-[#0066CE] transition-colors break-all"
              onClick={(e) => {
                e.preventDefault(); 
                navigator.clipboard.writeText("tulikaavarma@gmail.com");
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
              }}
            >
              {copied ? "Copied to clipboard" : "tulikaavarma@gmail.com"}
            </a>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div 
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
        />
      )}
    </>
  );
}