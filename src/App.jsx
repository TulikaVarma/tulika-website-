import { Particles } from '@/components/ui/particles'
import { DotPattern } from '@/components/ui/dot-pattern'
import { MorphingText } from '@/components/ui/morphing-text'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import MainBackground from '@/components/ui/main-background'

function App() {
  return (
    <div className="relative w-full min-h-screen">
      
      {/* Main Page*/}
      <section className="relative w-full h-screen overflow-hidden">
        <MainBackground />
        <Particles
          className="absolute inset-0 z-0"
          quantity={100}
          ease={80}
          color="#ffffff"
          refresh={false}
        />
        {/* Centered morphing text */}
        <div className="relative z-10 w-full h-full flex items-center justify-center px-4 sm:px-6 md:px-8">
          <MorphingText
            texts={[
              "Tulika",
              "Developer",
              "Designer",
              "Creator"
            ]}
            className="text-white"
          />
        </div>
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
          <svg 
            className="w-6 h-6 text-white/60" 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </section>

      {/* SECTION 2: Features Section - Scrollable */}
      <section className="relative w-full min-h-screen bg-gradient-to-b from-transparent via-black/50 to-black/80 backdrop-blur-sm">
        <div className="relative z-10 w-full px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-24">
          
          {/* Section Title */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              What I Do
            </h2>
            <p className="text-white/70 text-base sm:text-lg md:text-xl max-w-2xl mx-auto">
              Crafting beautiful experiences with modern technology
            </p>
          </div>

          {/* Features Grid */}
          <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            
            {/* Feature Card 1 */}
            <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all hover:scale-105">
              <CardHeader>
                <CardTitle className="text-white text-xl sm:text-2xl">Web Development</CardTitle>
                <CardDescription className="text-white/70 text-sm sm:text-base">
                  Building modern web applications
                </CardDescription>
              </CardHeader>
              <CardContent className="text-white/90 text-sm sm:text-base">
                <p>Creating responsive and performant websites using React, Tailwind, and modern web technologies.</p>
              </CardContent>
            </Card>

            {/* Feature Card 2 */}
            <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all hover:scale-105">
              <CardHeader>
                <CardTitle className="text-white text-xl sm:text-2xl">UI/UX Design</CardTitle>
                <CardDescription className="text-white/70 text-sm sm:text-base">
                  Designing beautiful interfaces
                </CardDescription>
              </CardHeader>
              <CardContent className="text-white/90 text-sm sm:text-base">
                <p>Crafting intuitive user experiences with attention to detail and modern design principles.</p>
              </CardContent>
            </Card>

            {/* Feature Card 3 */}
            <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all hover:scale-105">
              <CardHeader>
                <CardTitle className="text-white text-xl sm:text-2xl">Creative Solutions</CardTitle>
                <CardDescription className="text-white/70 text-sm sm:text-base">
                  Solving problems creatively
                </CardDescription>
              </CardHeader>
              <CardContent className="text-white/90 text-sm sm:text-base">
                <p>Bringing ideas to life through innovative thinking and technical expertise.</p>
              </CardContent>
            </Card>

          </div>

          {/* CTA Button */}
          <div className="text-center mt-12 sm:mt-16">
            <Button className="bg-white/20 hover:bg-white/30 text-white backdrop-blur-md border border-white/20 px-8 py-6 text-base sm:text-lg">
              View My Work
            </Button>
          </div>

        </div>
      </section>

    </div>
  )
}

export default App