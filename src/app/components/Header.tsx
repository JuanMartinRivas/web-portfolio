import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="font-bold text-xl">Juan Martín Rivas</div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8">
            <button
              onClick={() => scrollToSection('about')}
              className="hover:text-purple-600 transition-colors cursor-pointer"
            >
              About Me
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="hover:text-purple-600 transition-colors cursor-pointer"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('education')}
              className="hover:text-purple-600 transition-colors cursor-pointer"
            >
              Education
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection('about')}
              className="hover:text-purple-600 transition-colors text-left cursor-pointer"
            >
              About Me
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="hover:text-purple-600 transition-colors text-left cursor-pointer"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('education')}
              className="hover:text-purple-600 transition-colors text-left cursor-pointer"
            >
              Education
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
