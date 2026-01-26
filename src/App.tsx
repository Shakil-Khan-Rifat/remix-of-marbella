import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import BeachClubs from "./pages/BeachClubs";
import NaoBeachClub from "./pages/NaoBeachClub";
import OceanClubPage from "./pages/OceanClubPage";
import MogliPage from "./pages/MogliPage";
import NikkiBeachPage from "./pages/NikkiBeachPage";
import SublimPage from "./pages/SublimPage";
import PlayaPadrePage from "./pages/PlayaPadrePage";
import YachtCharter from "./pages/YachtCharter";
import VillaRental from "./pages/VillaRental";
import VillaDetailPage from "./pages/VillaDetailPage";
import CarHire from "./pages/CarHire";
import Nightclubs from "./pages/Nightclubs";
import FitzPage from "./pages/FitzPage";
import OliviaValerePage from "./pages/OliviaValerePage";
import PangeaPage from "./pages/PangeaPage";
import MiragePage from "./pages/MiragePage";
import TibuPage from "./pages/TibuPage";
import MomentoPage from "./pages/MomentoPage";
import NewsCafePage from "./pages/NewsCafePage";
import LifestyleManagement from "./pages/LifestyleManagement";
import VipX from "./pages/VipX";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <FloatingWhatsApp />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/beach-clubs" element={<BeachClubs />} />
          <Route path="/beach-clubs/nao" element={<NaoBeachClub />} />
          <Route path="/beach-clubs/ocean-club" element={<OceanClubPage />} />
          <Route path="/beach-clubs/mogli" element={<MogliPage />} />
          <Route path="/beach-clubs/nikki-beach" element={<NikkiBeachPage />} />
          <Route path="/beach-clubs/sublim" element={<SublimPage />} />
          <Route path="/beach-clubs/playa-padre" element={<PlayaPadrePage />} />
          <Route path="/yacht-charter" element={<YachtCharter />} />
          <Route path="/villa-rental" element={<VillaRental />} />
          <Route path="/villa-rental/:slug" element={<VillaDetailPage />} />
          <Route path="/car-hire" element={<CarHire />} />
          <Route path="/nightclubs" element={<Nightclubs />} />
          <Route path="/nightclubs/fitz" element={<FitzPage />} />
          <Route path="/nightclubs/olivia-valere" element={<OliviaValerePage />} />
          <Route path="/nightclubs/pangea" element={<PangeaPage />} />
          <Route path="/nightclubs/mirage" element={<MiragePage />} />
          <Route path="/nightclubs/tibu" element={<TibuPage />} />
          <Route path="/nightclubs/momento" element={<MomentoPage />} />
          <Route path="/nightclubs/news-cafe" element={<NewsCafePage />} />
          <Route path="/lifestyle-management" element={<LifestyleManagement />} />
          <Route path="/vip-x" element={<VipX />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
