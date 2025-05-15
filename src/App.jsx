import Header from "./components/header/Header";
import MainContent from "./components/mainContent/MainContent";

function App() {
  return (
    <main className="bg-[#1d1d1d] text-white">
      <div className="container mx-auto px-4 h-screen flex flex-col">
        <Header />
        <MainContent />
      </div>
    </main>
  );
}

export default App;
