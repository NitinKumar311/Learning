import "./App.css";
import Header from "./component/common/header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./component/about/About";
import CourseHome from "./component/allcourses/CoursesHome";
import Team from "./component/team/Team";
import Pricing from "./component/pricing/Pricing";
import Blog from "./component/blog/Blog";
import Contact from "./component/contact/Contact";
import Footer from "./component/common/footer/Footer";
import Home from "./component/home/Home";
function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/courses" component={CourseHome} />
          <Route exact path="/team" component={Team} />
          <Route exact path="/pricing" component={Pricing} />
          <Route exact path="/journal" component={Blog} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
