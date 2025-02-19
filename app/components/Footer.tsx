import { Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; 2025 Ayodeji Ikujuni. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <a
              href="https://github.com/Eniolayo"
              target="_blank"
              className="hover:text-purple-400 transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/ayodeji-ikujuni3"
              target="_blank"
              className="hover:text-purple-400 transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://x.com/ayodeji_ikujuni"
              target="_blank"
              className="hover:text-purple-400 transition-colors"
            >
              <Twitter size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
