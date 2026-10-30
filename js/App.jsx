function App() {
  return (
    <div className="app">
      <AppPromoBadge />
      <ShootingStars />
      <Hero />
      <AboutMe />
      <Background />
      <Goals />
      <Product />
      <Activity />
      <Contact />
      <Footer />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
