import { Link, useLocation } from 'react-router';
import { 
  Home, 
  FileText, 
  MessageCircle, 
  User,
  LayoutDashboard
} from 'lucide-react';

export function BottomNavigation() {
  const location = useLocation();

  const navItems = [
    {
      path: '/',
      icon: LayoutDashboard,
      label: 'Início'
    },
    {
      path: '/vida-funcional',
      icon: FileText,
      label: 'Vida Funcional'
    },
    {
      path: '/assistente',
      icon: MessageCircle,
      label: 'Assistente'
    },
    {
      path: '/perfil',
      icon: User,
      label: 'Perfil'
    }
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-[var(--tjma-gray-200)] z-50 safe-area-bottom">
      <div className="flex items-center justify-around h-16 px-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center justify-center flex-1 h-full gap-1 transition-colors ${
                isActive
                  ? 'text-[var(--tjma-navy)]'
                  : 'text-[var(--tjma-gray-500)] hover:text-[var(--tjma-navy)]'
              }`}
            >
              <Icon className={`h-5 w-5 ${isActive ? 'stroke-[2.5]' : ''}`} />
              <span className="text-xs font-medium">{item.label}</span>
              {isActive && (
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-[var(--tjma-navy)]"></div>
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
