import { Router as WouterRouter, Route, Switch } from "wouter";
import Layout from "./Layout";
import About from "./About";
import Careers from "./Careers";
import Contact from "./Contact";
import Home from "./Home";
import InternshipApplication from "./InternshipApplication";
import Partner from "./Partner";
import Services from "./Services";

function AppRoutes() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/services" component={Services} />
      <Route path="/careers" component={Careers} />
      <Route path="/contact" component={Contact} />
      <Route path="/partner" component={Partner} />
      <Route path="/internship-application" component={InternshipApplication} />
      <Route component={Home} />
    </Switch>
  );
}

export default function App() {
  const baseUrl = import.meta.env.BASE_URL.replace(/\/$/, "");

  return (
    <WouterRouter base={baseUrl}>
      <Layout>
        <AppRoutes />
      </Layout>
    </WouterRouter>
  );
}
