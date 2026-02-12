import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Particles } from '@/components/ui/particles'
import { MorphingText } from '@/components/ui/morphing-text'
import MountainBackground from '@/components/ui/main-background'

function App() {
  return (
    <div className="min-h-screen bg-blush-50">
      {/* Hero Section with Mountain Background */}
      <section className="relative flex flex-col items-center justify-center min-h-screen text-white px-4 overflow-hidden">
        <MountainBackground />
        <Particles className="absolute inset-0" quantity={100} ease={80} color="#FADCD5" refresh />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center"
        >
          <MorphingText 
            texts={["Tulika Varma", "My First Website", "Computer Science and Math"]}
          />
          <p className="text-xl mb-8 mt-8 text-blush-100">Built with React + Tailwind + Magic UI</p>
          <Button className="bg-blush-100 text-wine-800 hover:bg-blush-200 font-semibold">
            Get Started
          </Button>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-sage-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-wine-800">Features</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Fast Performance", desc: "Lightning fast load times and smooth animations" },
              { title: "Beautiful Design", desc: "Modern UI components with stunning visuals" },
              { title: "Easy to Use", desc: "Simple and intuitive user experience" }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ delay: i * 0.1, type: "spring", stiffness: 300 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 h-full bg-white shadow-lg hover:shadow-xl transition-shadow border-mauve-200">
                  <h3 className="text-2xl font-bold mb-3 text-plum-700">{feature.title}</h3>
                  <p className="text-charcoal-300">{feature.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default App