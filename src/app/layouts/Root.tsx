import { useEffect, useState } from 'react';
import { Outlet, useNavigate, useLocation, Link } from 'react-router';
import { 
  Home, FileText, Clock, Heart, DollarSign, Briefcase, 
  Wifi, FolderOpen, MessageCircle, Search, ShieldCheck, 
  User, Settings, LogOut, Bell, ChevronRight, Menu, X, Workflow, Scroll
} from 'lucide-react';
import { BottomNavigation } from '../components/BottomNavigation';
import { FloatingAssistantButton } from '../components/artemis/FloatingAssistantButton';

export function Root() {
  const navigate = useNavigate();
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const authenticated = localStorage.getItem('authenticated');
    if (!authenticated) {
      navigate('/login');
    }
  }, [navigate]);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const handleLogout = () => {
    localStorage.removeItem('authenticated');
    localStorage.removeItem('userName');
    localStorage.removeItem('userMatricula');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userLotacao');
    localStorage.removeItem('userCargo');
    navigate('/login');
  };

  const menuItems = [
    { path: '/', icon: Home, label: 'Dashboard', badge: null },
    { path: '/manifesto', icon: Scroll, label: 'Manifesto Institucional', badge: '📜' },
    { path: '/vida-funcional', icon: FileText, label: 'Minha Vida Funcional', badge: null },
    { path: '/frequencia', icon: Clock, label: 'Frequência e Banco de Horas', badge: '2' },
    { path: '/licencas', icon: Heart, label: 'Licenças e Afastamentos', badge: null },
    { path: '/beneficios', icon: DollarSign, label: 'Benefícios e Indenizações', badge: null },
    { path: '/adicionais', icon: Briefcase, label: 'Adicionais e Gratificações', badge: null },
    { path: '/teletrabalho', icon: Wifi, label: 'Teletrabalho', badge: null },
    { path: '/protocolo', icon: FolderOpen, label: 'Protocolo Administrativo', badge: '1' },
    { path: '/assistente', icon: MessageCircle, label: 'Assistente Virtual', badge: null },
    { path: '/acompanhamento', icon: Search, label: 'Acompanhamento Processual', badge: null },
    { path: '/lgpd', icon: ShieldCheck, label: 'Privacidade e LGPD', badge: null },
  ];

  const userName = localStorage.getItem('userName') || 'Servidor';
  const userMatricula = localStorage.getItem('userMatricula') || '000000';

  return (
    <div className="min-h-screen bg-[var(--tjma-cream)]">
      {/* Mobile Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar - Desktop and Mobile Drawer */}
      <aside
        className={`fixed top-0 left-0 h-full bg-gradient-to-b from-[var(--tjma-navy-dark)] to-[var(--tjma-navy)] text-white transition-transform duration-300 z-50 flex flex-col ${
          mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 ${sidebarOpen ? 'w-72' : 'w-72 lg:w-20'}`}
      >
        {/* Logo */}
        <div className="p-6 border-b border-[var(--tjma-navy-medium)]">
          <div className="flex items-center justify-between">
            <div className={`${!sidebarOpen && 'lg:hidden'}`}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[var(--tjma-gold)] rounded-lg flex items-center justify-center">
                  <Workflow className="h-6 w-6 text-[var(--tjma-navy-dark)]" />
                </div>
                <div>
                  <h1 className="text-xl font-semibold text-[var(--tjma-gold)]">DRH FLOW</h1>
                  <p className="text-xs text-[var(--tjma-gray-400)]">TJMA</p>
                </div>
              </div>
            </div>
            <div className={`${sidebarOpen && 'hidden lg:flex'} flex items-center justify-center w-full`}>
              <div className="text-[var(--tjma-gold)] font-bold text-2xl">DF</div>
            </div>
            <button
              onClick={() => mobileMenuOpen ? setMobileMenuOpen(false) : setSidebarOpen(!sidebarOpen)}
              className="p-2 hover:bg-[var(--tjma-navy-medium)] rounded-lg transition-colors lg:block"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-6 px-3">
          <div className="space-y-1">
            {menuItems.map((item) => {
              const isActive = location.pathname === item.path;
              const Icon = item.icon;

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                    isActive
                      ? 'bg-[var(--tjma-gold)] text-[var(--tjma-navy-dark)]'
                      : 'text-white hover:bg-[var(--tjma-navy-medium)]'
                  }`}
                  title={!sidebarOpen ? item.label : ''}
                >
                  <Icon className="h-5 w-5 flex-shrink-0" />
                  <span className={`flex-1 text-sm ${!sidebarOpen && 'lg:hidden'}`}>
                    {item.label}
                  </span>
                  {item.badge && (
                    <span className={`px-2 py-0.5 bg-[var(--tjma-error)] text-white text-xs rounded-full ${!sidebarOpen && 'lg:hidden'}`}>
                      {item.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </div>
        </nav>

        {/* User Section */}
        <div className="p-4 border-t border-[var(--tjma-navy-medium)]">
          <Link
            to="/perfil"
            onClick={() => setMobileMenuOpen(false)}
            className={`flex items-center gap-3 p-3 rounded-lg hover:bg-[var(--tjma-navy-medium)] transition-colors mb-2 ${
              !sidebarOpen && 'lg:justify-center'
            }`}
          >
            <div className="w-10 h-10 rounded-full bg-[var(--tjma-gold)] flex items-center justify-center text-[var(--tjma-navy-dark)] font-semibold flex-shrink-0">
              {userName.charAt(0)}
            </div>
            <div className={`flex-1 min-w-0 ${!sidebarOpen && 'lg:hidden'}`}>
              <p className="text-sm font-medium truncate">{userName}</p>
              <p className="text-xs text-[var(--tjma-gray-400)] truncate">Mat. {userMatricula}</p>
            </div>
          </Link>
          <button
            onClick={handleLogout}
            className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[var(--tjma-navy-medium)] transition-colors text-sm ${
              !sidebarOpen && 'lg:justify-center'
            }`}
          >
            <LogOut className="h-4 w-4 flex-shrink-0" />
            <span className={`${!sidebarOpen && 'lg:hidden'}`}>Sair do Sistema</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="lg:ml-20 xl:ml-20 transition-all duration-300" style={{ marginLeft: sidebarOpen ? '288px' : undefined }}>
        {/* Top Bar - Mobile */}
        <header className="bg-white border-b border-[var(--tjma-gray-200)] sticky top-0 z-30">
          <div className="px-4 lg:px-8 py-3 lg:py-4 flex items-center justify-between">
            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 hover:bg-[var(--tjma-gray-100)] rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu className="h-5 w-5 text-[var(--tjma-navy)]" />
            </button>

            {/* Mobile Logo */}
            <div className="lg:hidden flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-[var(--tjma-navy)] to-[var(--tjma-navy-light)] rounded-lg flex items-center justify-center">
                <Workflow className="h-5 w-5 text-white" />
              </div>
              <span className="font-bold text-[var(--tjma-navy-dark)]">DRH Flow</span>
            </div>

            {/* Breadcrumb - Desktop */}
            <div className="hidden lg:flex items-center gap-2 text-sm">
              <Home className="h-4 w-4 text-[var(--tjma-gray-500)]" />
              <ChevronRight className="h-4 w-4 text-[var(--tjma-gray-400)]" />
              <span className="text-[var(--tjma-navy-dark)] font-medium">
                {menuItems.find((item) => item.path === location.pathname)?.label || 'Dashboard'}
              </span>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2 lg:gap-4">
              <button className="relative p-2 hover:bg-[var(--tjma-gray-100)] rounded-lg transition-colors">
                <Bell className="h-5 w-5 text-[var(--tjma-gray-600)]" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-[var(--tjma-error)] rounded-full"></span>
              </button>
              <Link
                to="/admin"
                className="hidden lg:flex p-2 hover:bg-[var(--tjma-gray-100)] rounded-lg transition-colors"
                title="Painel Administrativo"
              >
                <Settings className="h-5 w-5 text-[var(--tjma-gray-600)]" />
              </Link>
              <Link
                to="/perfil"
                className="lg:hidden p-2 hover:bg-[var(--tjma-gray-100)] rounded-lg transition-colors"
              >
                <User className="h-5 w-5 text-[var(--tjma-gray-600)]" />
              </Link>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-4 lg:p-8 pb-20 lg:pb-8">
          <Outlet />
        </main>

        {/* Footer - Desktop Only */}
        <footer className="hidden lg:block bg-white border-t border-[var(--tjma-gray-200)] px-8 py-6 mt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[var(--tjma-gray-600)]">
            <div>
              <p>Tribunal de Justiça do Estado do Maranhão</p>
              <p className="text-xs mt-1">Diretoria de Recursos Humanos - DRH</p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-xs">
                Sistema de apoio e orientação • Não substitui análise técnica ou decisão administrativa
              </p>
              <p className="text-xs mt-1">Versão 1.0.0 • © 2026 TJMA</p>
            </div>
          </div>
        </footer>
      </div>

      {/* Bottom Navigation - Mobile Only */}
      <BottomNavigation />
      <FloatingAssistantButton />
    </div>
  );
}