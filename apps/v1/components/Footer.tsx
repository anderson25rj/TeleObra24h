import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-600 to-secondary-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">T</span>
              </div>
              <span className="text-xl font-heading font-bold text-white">
                TeleObra24h
              </span>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Conectando você aos melhores profissionais da construção civil na Região dos Lagos - RJ.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm hover:text-primary-400 transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/busca" className="text-sm hover:text-primary-400 transition-colors">
                  Buscar Profissionais
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="text-sm hover:text-primary-400 transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/planos" className="text-sm hover:text-primary-400 transition-colors">
                  Planos e Preços
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/busca?categoria=alvenaria" className="text-sm hover:text-primary-400 transition-colors">
                  Alvenaria
                </Link>
              </li>
              <li>
                <Link href="/busca?categoria=eletrica" className="text-sm hover:text-primary-400 transition-colors">
                  Elétrica
                </Link>
              </li>
              <li>
                <Link href="/busca?categoria=hidraulica" className="text-sm hover:text-primary-400 transition-colors">
                  Hidráulica
                </Link>
              </li>
              <li>
                <Link href="/busca?categoria=pintura" className="text-sm hover:text-primary-400 transition-colors">
                  Pintura
                </Link>
              </li>
              <li>
                <Link href="/busca?categoria=emergencias" className="text-sm hover:text-primary-400 transition-colors">
                  Emergências 24h
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm">
                  São Pedro da Aldeia, RJ<br />
                  Região dos Lagos
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <a href="tel:+552299999999" className="text-sm hover:text-primary-400 transition-colors">
                  (22) 9 9999-9999
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <a href="mailto:contato@teleobra24h.com.br" className="text-sm hover:text-primary-400 transition-colors">
                  contato@teleobra24h.com.br
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} TeleObra24h. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacidade" className="text-sm text-gray-400 hover:text-primary-400 transition-colors">
                Privacidade
              </Link>
              <Link href="/termos" className="text-sm text-gray-400 hover:text-primary-400 transition-colors">
                Termos de Uso
              </Link>
              <Link href="/cookies" className="text-sm text-gray-400 hover:text-primary-400 transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
