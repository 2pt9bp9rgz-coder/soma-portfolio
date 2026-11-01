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
      <Video />
      <Contact />
      <Footer />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
