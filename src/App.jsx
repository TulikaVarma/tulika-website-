import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Particles } from '@/components/ui/particles'

function App() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Animated Background */}
      <section className="relative flex flex-col items-center justify-center min-h-screen text-white px-4 bg-gradient-to-br from-purple-600 to-blue-500 overflow-hidden">
        <Particles className="absolute inset-0" quantity={100} ease={80} color="#ffffff" refresh />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center"
        >
          <h1 className="text-6xl font-bold mb-4">Welcome to My Site</h1>
          <p className="text-xl mb-8">Built with React + Tailwind + Magic UI</p>
          <Button className="bg-white text-purple-600 hover:bg-gray-100">
            Get Started
          </Button>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Features</h2>
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
                <Card className="p-8 h-full bg-white shadow-lg hover:shadow-xl transition-shadow">
                  <h3 className="text-2xl font-bold mb-3 text-purple-600">{feature.title}</h3>
                  <p className="text-gray-600">{feature.desc}</p>
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