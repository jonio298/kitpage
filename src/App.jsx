export default function App() {
  const IconWrapper = ({ children }) => (
    <div className="p-3 rounded-full border border-neon/20 hover:shadow-neon transition-transform hover:scale-105 inline-block">
      {children}
    </div>
  );

  const icons = {
    cabling: (
      <IconWrapper>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-neon transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1"/>
          <path d="M19 15V6.5a1 1 0 0 0-7 0v11a1 1 0 0 1-7 0V9"/>
          <path d="M21 21v-2h-4"/>
          <path d="M3 5h4V3"/>
          <path d="M7 5a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a1 1 0 0 1 1-1V3"/>
        </svg>
      </IconWrapper>
    ),
    paging: (
      <IconWrapper>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-neon transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="16" height="20" x="4" y="2" rx="2"/>
          <path d="M12 6h.01"/>
          <circle cx="12" cy="14" r="4"/>
          <path d="M12 14h.01"/>
        </svg>
      </IconWrapper>
    ),
    door: (
      <IconWrapper>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-neon transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 12h.01"/>
          <path d="M18 9V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14"/>
          <path d="M2 20h8"/>
          <path d="M20 17v-2a2 2 0 1 0-4 0v2"/>
          <rect x="14" y="17" width="8" height="5" rx="1"/>
        </svg>
      </IconWrapper>
    ),
    surveillance: (
      <IconWrapper>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-neon transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16.75 12h3.632a1 1 0 0 1 .894 1.447l-2.034 4.069a1 1 0 0 1-1.708.134l-2.124-2.97"/>
          <path d="M17.106 9.053a1 1 0 0 1 .447 1.341l-3.106 6.211a1 1 0 0 1-1.342.447L3.61 12.3a2.92 2.92 0 0 1-1.3-3.91L3.69 5.6a2.92 2.92 0 0 1 3.92-1.3z"/>
          <path d="M2 19h3.76a2 2 0 0 0 1.8-1.1L9 15"/>
          <path d="M2 21v-4"/>
          <path d="M7 9h.01"/>
        </svg>
      </IconWrapper>
    ),
    fiber: (
      <IconWrapper>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-neon transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 4V2"/><path d="M15 16v-2"/><path d="M8 9h2"/><path d="M20 9h2"/>
          <path d="M17.8 11.8 19 13"/><path d="M15 9h.01"/><path d="M17.8 6.2 19 5"/><path d="m3 21 9-9"/><path d="M12.2 6.2 11 5"/>
        </svg>
      </IconWrapper>
    ),
    wifi: (
      <IconWrapper>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-neon transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 20h.01"/>
          <path d="M2 8.82a15 15 0 0 1 20 0"/>
          <path d="M5 12.859a10 10 0 0 1 14 0"/>
          <path d="M8.5 16.429a5 5 0 0 1 7 0"/>
        </svg>
      </IconWrapper>
    )
  };

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-textLight font-sans">
      <header className="glass-header">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <img
              src="/kit-logo.png"
              alt="KIT Communications Logo"
              className="h-20 transition-transform hover:scale-105 drop-shadow-lg"
              style={{ filter: 'brightness(1.2)' }}
            />
          </div>
          <nav className="flex gap-6 text-neon">
            <a href="#" className="hover:text-white transition">Home</a>
            <a href="#services" className="hover:text-white transition">Services</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </nav>
        </div>
      </header>

      <main className="px-6 py-20 max-w-7xl mx-auto">
        <section className="text-center mb-20">
          <h2 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500 drop-shadow-xl">
            Powering Business Connectivity
          </h2>
          <p className="mt-6 text-lg text-dim max-w-2xl mx-auto">
            From fiber optics to enterprise networks, we deliver next-gen solutions that keep you ahead.
          </p>
        </section>

        <section id="services" className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: 'Structured Cabling', icon: icons.cabling },
            { title: 'Fiber Optics', icon: icons.fiber },
            { title: 'Paging Systems', icon: icons.paging },
            { title: 'Door Access', icon: icons.door },
            { title: 'Surveillance Setup', icon: icons.surveillance },
            { title: 'Wi-Fi Optimization', icon: icons.wifi }
          ].map(({ title, icon }) => (
            <div key={title} className="kit-card">
              <div className="mb-4">{icon}</div>
              <h3 className="text-2xl font-semibold mb-2 text-neon">{title}</h3>
              <p className="text-dim text-sm">Tailored, high-performance infrastructure solutions.</p>
            </div>
          ))}
        </section>

        <section id="contact" className="mt-24 text-center">
          <h2 className="kit-header-text">Ready to Upgrade?</h2>
          <p className="text-dim mb-6">
            Let's connect. Email us at{' '}
            <a className="underline text-neon" href="mailto:info@kit-communications.com">
              info@kit-communications.com
            </a>
          </p>
          <button className="kit-button">
            Schedule a Consultation
          </button>
        </section>
      </main>

      <footer className="text-center text-sm text-dim py-6 border-t border-neon/20">
        &copy; {new Date().getFullYear()} KIT Communications. Future built.
      </footer>
    </div>
  );
}
