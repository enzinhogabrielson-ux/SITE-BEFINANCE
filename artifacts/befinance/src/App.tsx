import { Switch, Route, Router as WouterRouter } from "wouter";
import { useHashLocation } from "wouter/use-hash-location";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { lazy, Suspense } from "react";
import { LanguageProvider } from "@/i18n/LanguageContext";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";

const OpcoesDigitais = lazy(() => import("@/pages/negociacao/OpcoesDigitais"));
const Acoes = lazy(() => import("@/pages/negociacao/Acoes"));
const Commodities = lazy(() => import("@/pages/negociacao/Commodities"));

const TradingWeb = lazy(() => import("@/pages/plataforma/TradingWeb"));
const ContaDemo = lazy(() => import("@/pages/plataforma/ContaDemo"));
const Ferramentas = lazy(() => import("@/pages/plataforma/Ferramentas"));
const BaixarApp = lazy(() => import("@/pages/plataforma/BaixarApp"));

const SobreNos = lazy(() => import("@/pages/sobre/SobreNos"));
const Regulamentacao = lazy(() => import("@/pages/sobre/Regulamentacao"));
const Afiliados = lazy(() => import("@/pages/sobre/Afiliados"));

const CentralAjuda = lazy(() => import("@/pages/ajuda/CentralAjuda"));
const Contato = lazy(() => import("@/pages/ajuda/Contato"));
const FAQ = lazy(() => import("@/pages/ajuda/FAQ"));
const Suporte = lazy(() => import("@/pages/ajuda/Suporte"));

const queryClient = new QueryClient();

function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center" style={{ background: "#040d18" }}>
      <div className="w-8 h-8 border-2 border-t-transparent rounded-full animate-spin" style={{ borderColor: "#00bfff", borderTopColor: "transparent" }} />
    </div>
  );
}

function Router() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Switch>
        <Route path="/" component={Home} />

        <Route path="/negociacao/opcoes-digitais" component={OpcoesDigitais} />
        <Route path="/negociacao/acoes" component={Acoes} />
        <Route path="/negociacao/commodities" component={Commodities} />

        <Route path="/plataforma/trading-web" component={TradingWeb} />
        <Route path="/plataforma/conta-demo" component={ContaDemo} />
        <Route path="/plataforma/ferramentas" component={Ferramentas} />
        <Route path="/plataforma/baixar-app" component={BaixarApp} />

        <Route path="/sobre/sobre-nos" component={SobreNos} />
        <Route path="/sobre/regulamentacao" component={Regulamentacao} />
        <Route path="/sobre/afiliados" component={Afiliados} />

        <Route path="/ajuda/central-de-ajuda" component={CentralAjuda} />
        <Route path="/ajuda/contato" component={Contato} />
        <Route path="/ajuda/faq" component={FAQ} />
        <Route path="/ajuda/suporte" component={Suporte} />

        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

function App() {
  return (
    <LanguageProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <WouterRouter hook={useHashLocation}>
            <Router />
          </WouterRouter>
          <Toaster />
        </TooltipProvider>
      </QueryClientProvider>
    </LanguageProvider>
  );
}

export default App;
