import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="flex flex-col h-screen bg-gray-50 text-[#0057D9] relative overflow-hidden justify-center">
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-100 rounded-full opacity-30"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      ></motion.div>

      <main className="flex flex-col items-center text-center space-y-6 relative">
        <motion.h1
          className="text-7xl font-extrabold tracking-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Its Bluebook
        </motion.h1>

        <motion.p
          className="text-2xl text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Not sure when but it's happening
        </motion.p>

        <motion.div
          className="text-gray-700"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <p className="text-[#0057D9] font-medium mt-7 text-xl">
            contact@itsbluebook.com
          </p>
        </motion.div>
      </main>

      <footer className="text-center py-4 text-gray-200 border-t absolute bottom-0 w-full">
        <p className="text-gray-600">
          © {new Date().getFullYear()} @itsbluebook. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
