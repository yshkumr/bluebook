import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="bg-gradient-to-br from-white via-blue-50 to-gray-100 min-h-screen font-sans text-gray-800">
      <div className="relative flex flex-col min-h-screen overflow-hidden">
        <div className="flex justify-center gap-x-6 gap-y-2 text-gray-500 text-xs sm:text-sm tracking-widest uppercase pt-6 px-4 select-none font-medium">
          <p>xeab97b</p>
          <p className="hidden sm:inline">q5t8w2x</p>
          <p className="hidden sm:inline">z9x4k7p</p>
          <p>2025</p>
          <p className="hidden sm:inline">6289971</p>
          <p>Y.1a</p>
        </div>

        <motion.div
          className="absolute top-1/2 left-1/2 w-[100vw] h-[100vw] max-w-[720px] max-h-[720px] bg-blue-100 rounded-full opacity-30 -translate-x-1/2 -translate-y-1/2 blur-[120px]"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
        />

        <main className="relative z-10 flex flex-col items-center justify-center flex-grow px-4">
          <div className="text-center space-y-8 max-w-3xl">
            <motion.h1
              className="text-4xl sm:text-6xl md:text-7xl font-bold text-[#0057D9] tracking-tight leading-tight"
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              its Bluebook
            </motion.h1>

            <motion.p
              className="text-base sm:text-lg md:text-xl -mt-5 text-gray-600 font-light leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 1 }}
            >
              Not sure when — but it's happening.
            </motion.p>

            <motion.p
              className="text-sm sm:text-base md:text-lg text-[#0057D9] font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 1 }}
            >
              contact@itsbluebook.com
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 1 }}
            >
              <p className="text-xs sm:text-sm text-gray-500">
                Yash Kumar, Founder
              </p>
            </motion.div>
          </div>
        </main>

        <footer className="relative z-10 py-6 text-center text-xs sm:text-sm text-gray-400">
          © {new Date().getFullYear()} itsbluebook. All rights reserved.
        </footer>
      </div>
    </div>
  );
}
