import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";
import { CursorTrail } from "@/components/cursor-trail";
import { useDeviceType } from "@/hooks/useDeviceType";
import { MobileNavigation } from "@/components/mobile/MobileNavigation";
import { MobileHome } from "@/components/mobile/MobileHome";
import { MobileAbout } from "@/components/mobile/MobileAbout";
import { MobileEvents } from "@/components/mobile/MobileEvents";
import { MobileSchedule } from "@/components/mobile/MobileSchedule";
import { MobileSponsors } from "@/components/mobile/MobileSponsors";
import { MobileRegistration } from "@/components/mobile/MobileRegistration";
import { MobileContact } from "@/components/mobile/MobileContact";
import { MobileEventDetail } from "@/components/mobile/MobileEventDetail";
import MobileStartupExpo from "@/components/mobile/MobileStartupExpo";
import Home from "@/pages/home.tsx";
import About from "@/pages/about.tsx";
import Events from "@/pages/events.tsx";
import EventDetail from "@/pages/event-detail.tsx";
import Schedule from "@/pages/schedule.tsx";
import Registration from "@/pages/registration.tsx";
import { RegistrationConfirmation } from "@/pages/registration-confirmation.tsx";
import { MobileRegistrationConfirmation } from "@/components/mobile/MobileRegistrationConfirmation.tsx";
import Sponsors from "@/pages/sponsors.tsx";
import Gallery from "@/pages/gallery.tsx";
import Contact from "@/pages/contact.tsx";
import PrivacyPolicy from "@/pages/privacy-policy.tsx";
import RulesRegulations from "@/pages/rules-regulations.tsx";
import NotFound from "@/pages/not-found.tsx";
import PanelDiscussion from '@/pages/panel-discussion';
import PanelConfirmation from "@/pages/panel-confirmation";
import MobilePanelDiscussion from "@/components/mobile/MobilePanelDiscussion";
import MobilePanelRegistrationForm from "@/components/mobile/MobilePanelRegistrationForm";
import MobilePanelConfirmation from "@/components/mobile/MobilePanelConfirmation";
import StartupExpo from "@/pages/startup-expo";


function Router() {
  const deviceType = useDeviceType();

  // Mobile-specific UI (768px and below)
  if (deviceType === 'mobile') {
    return (
      <div className="min-h-screen bg-white">
        <MobileNavigation />
        <div className="pb-20">
          <Switch>
            <Route path="/" component={MobileHome} />
            <Route path="/about" component={MobileAbout} />
            <Route path="/events" component={MobileEvents} />
            <Route path="/events/panel-discussion" component={MobilePanelDiscussion} />
            <Route path="/events/startup-expo" component={MobileStartupExpo} />
            <Route path="/events/:id" component={MobileEventDetail} />
            <Route path="/schedule" component={MobileSchedule} />
            <Route path="/registration" component={MobileRegistration} />
            <Route path="/panel-discussion/register" component={MobilePanelRegistrationForm} />
            <Route path="/panel-confirmation" component={MobilePanelConfirmation} />
            <Route path="/registration-confirmation" component={MobileRegistrationConfirmation} />
            <Route path="/sponsors" component={MobileSponsors} />
            <Route path="/gallery" component={() => <div className="p-4 text-center">Mobile Gallery - Coming Soon</div>} />
            <Route path="/contact" component={MobileContact} />
            <Route path="/privacy-policy" component={PrivacyPolicy} />
            <Route path="/rules-regulations" component={RulesRegulations} />
            <Route component={() => <div className="p-4 text-center">Mobile 404 - Page Not Found</div>} />
          </Switch>
        </div>
      </div>
    );
  }

  // Desktop UI (769px and above)
  return (
    <div className="min-h-screen flex flex-col">
      <CursorTrail />
      <Navigation />
      <main className="flex-1">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/events" component={Events} />
          <Route path="/events/panel-discussion" component={PanelDiscussion} />
          <Route path="/events/startup-expo" component={StartupExpo} />{/* ✅ Before :id */}
          <Route path="/events/:id" component={EventDetail} />
          <Route path="/schedule" component={Schedule} />
          <Route path="/registration" component={Registration} />
          <Route path="/registration-confirmation" component={RegistrationConfirmation} />
          <Route path="/panel-confirmation" component={PanelConfirmation} />
          <Route path="/sponsors" component={Sponsors} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/contact" component={Contact} />
          <Route path="/privacy-policy" component={PrivacyPolicy} />
          <Route path="/rules-regulations" component={RulesRegulations} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}


function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;


