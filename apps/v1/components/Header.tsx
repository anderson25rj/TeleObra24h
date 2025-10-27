'use client';

import Link from 'next/link';
import { Button, ThemeToggle } from '@teleobra24h/ui';
import { Menu, Phone, User, HardHat } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-200">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-secondary-500 rounded-lg flex items-center justify-center">
              <HardHat className="text-white w-6 h-6" />
            </div>
            <span className="text-2xl font-heading font-bold text-primary-600">
              TeleObra<span className="text-secondary-500">24h</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Início
            </Link>
            <Link href="/busca" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Buscar Profissionais
            </Link>
            <Link href="/sobre" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Sobre Nós
            </Link>
            <Link href="/planos" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Planos
            </Link>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:+552299999999" className="flex items-center space-x-2 text-primary-600 hover:text-primary-700 transition-colors">
              <Phone className="w-4 h-4" />
              <span className="font-semibold">(22) 9 9999-9999</span>
            </a>
            <ThemeToggle />
            <Button variant="outline" size="sm">
              <User className="w-4 h-4 mr-2" />
              Entrar
            </Button>
            <Button size="sm" className="bg-secondary-500 hover:bg-secondary-600">
              Quero ser um Pro
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-600 hover:text-primary-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-700 hover:text-primary-600 font-medium">
                Início
              </Link>
              <Link href="/busca" className="text-gray-700 hover:text-primary-600 font-medium">
                Buscar Profissionais
              </Link>
              <Link href="/sobre" className="text-gray-700 hover:text-primary-600 font-medium">
                Sobre Nós
              </Link>
              <Link href="/planos" className="text-gray-700 hover:text-primary-600 font-medium">
                Planos
              </Link>
              <a href="tel:+552299999999" className="flex items-center space-x-2 text-primary-600 font-semibold">
                <Phone className="w-4 h-4" />
                <span>(22) 9 9999-9999</span>
              </a>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">Tema:</span>
                <ThemeToggle />
              </div>
              <Button variant="outline" size="sm" className="w-full">
                <User className="w-4 h-4 mr-2" />
                Entrar
              </Button>
              <Button size="sm" className="w-full bg-secondary-500 hover:bg-secondary-600">
                Quero ser um Pro
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
