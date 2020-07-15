import React from 'react';
import './style-sheets/App.css';
// import './style-sheets/chat-page.css';
// import './style-sheets/home-page.css';
// import './style-sheets/login-page.css';
// import './style-sheets/photo-page.css';
// import './style-sheets/register-page.css';
// import './style-sheets/video-page.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBarComponent } from './components/navbar-component/navbar-component';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { HomePageComponent } from './components/home-page-component/home-page-component';
import { LoginPageComponent } from './components/login-page-component/login-page-component';
import { PhotoVideoPageComponent } from './components/photos-videos-page-component/media-page-component/photo-video-page-component';
import { PhotoPageComponent } from './components/photos-videos-page-component/photo-page-component/photo-page-component';
// import { VideoPageComponent } from './components/photos-videos-page-component/video-page-component';
import { ChatPageComponent } from './components/chat-page-component/chat-page-component';
import { BirthdayPageComponent } from './components/general-info-components/birthday-page-component/birthday-page-component';
import { ContactPageComponent } from './components/general-info-components/contact-info-page-component/contact-page-component';
import { GeneralFinancePageComponent } from './components/finance-page-component/general-finance-page-components/general-finance-page-component';
import { RecipePageComponent } from './components/recipe-page-component/main-recipe-page-component';
import { RunTrackerPageComponent } from './components/run-tracker-component/run-tracker-page-component';
import { AutoFinancePageComponent } from './components/finance-page-component/auto-finance-page-components/auto-finance-page-component';
import { MedicalFinancePageComponent } from './components/finance-page-component/medical-finance-page-components/medical-finance-page-component';
import {  MedicalFinanceUploadPageComponent } from './components/finance-page-component/medical-finance-page-components/medical-finance-upload-page-component';
import { GeneralFinanceUploadPageComponent } from './components/finance-page-component/general-finance-page-components/general-finance-upload-page-compnent';
import { AutoFinanceUploadComponent } from './components/file-upload-components/auto-finance-upload-component';
import { AutoFinanceUploadPageComponent } from './components/finance-page-component/auto-finance-page-components/auto-finance-upload-page-component';
import {  AdoboRecipePageComponent } from './components/recipe-page-component/recipe-pages/adobo-recipe-page-component';
import { BeefaroniRecipePageComponent } from './components/recipe-page-component/recipe-pages/beefaroni-recipe-page-component';
import { BeefstewRecipePageComponent } from './components/recipe-page-component/recipe-pages/beef-stew-recipe-page-component';
import { BlackEyedPeasAndHamHockRecipePageComponent } from './components/recipe-page-component/recipe-pages/black-eyed-peas-and-hamhocks-recipe-page-component';
import ChiliBtnComponent from './components/recipe-page-component/recipe-buttons/chili-recipe-btn';
import { ChiliRecipePageComponent } from './components/recipe-page-component/recipe-pages/chii-recipe-page-component';
import { FajitasRecipePageComponent } from './components/recipe-page-component/recipe-pages/fajitas-recipe-page-component';
import { MarinaraRecipePageComponent } from './components/recipe-page-component/recipe-pages/marinara-recipe-page-component';
import { MeatSaucePageComponent } from './components/recipe-page-component/recipe-pages/meat-sauce-page-component';
import { MeatballsPageComponent } from './components/recipe-page-component/recipe-pages/meatball-page-component';
import { PotRoastRecipePageComponent } from './components/recipe-page-component/recipe-pages/pot-roast-recipe-page-component';
import { PulledPorkRecipePageComponent } from './components/recipe-page-component/recipe-pages/puled-pork-recipe-page-component';
import { SalisburySteaksRecipePageComponent } from './components/recipe-page-component/recipe-pages/salisbury-steaks-recipe-page-component';
import { StuffedGreenPeppersPageComponent } from './components/recipe-page-component/recipe-pages/stuffed-green-peppers-recipe-page-component';
import { VideoPageComponent } from './components/photos-videos-page-component/video-page-component/video-page-component';
import { MeatloadRecipePageComponent } from './components/recipe-page-component/recipe-pages/meatloaf-recipe-page-component';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <NavBarComponent />
          <Switch>
            <Route path="/login" exact component={LoginPageComponent} />
            {/* <Route path="register" exact component={RegisterPageComponent} /> */}
            <Route path="/home" exact component={HomePageComponent} />
            <Route path="/media" exact component={PhotoVideoPageComponent} />

            <Route path="/photos" exact component={PhotoPageComponent} />
            

            <Route path="/videos" exaxt component={VideoPageComponent} />


            <Route path="/chat" exact component={ChatPageComponent} />

            <Route path="/general-finance" exact component={GeneralFinancePageComponent} />
            <Route path="/general-finance-uploads" exact component={GeneralFinanceUploadPageComponent} />

            <Route path="/auto-finance" exact component={AutoFinancePageComponent} />
            <Route path="/auto-finance-uploads" exact component={AutoFinanceUploadPageComponent} />

            <Route path="/medical-finance" exact component={MedicalFinancePageComponent} />
            <Route path="/medical-finance-uploads" exact component={MedicalFinanceUploadPageComponent} />

            <Route path="/birthdays" exact component={BirthdayPageComponent} />
            <Route path="/contact-info" exact component={ContactPageComponent} />
            <Route path="/run-tracker" exact component={RunTrackerPageComponent} />

            <Route path="/recipes" exact component={RecipePageComponent} />
            <Route path="/adobo-recipe" exact component={AdoboRecipePageComponent} />
            <Route path="/beefaroni-recipe" exact component={BeefaroniRecipePageComponent} />
            <Route path="/beef-stew-recipe" exact component={BeefstewRecipePageComponent} />
            <Route path="/black-eyed-peas-and-ham-hock-recipe" exact component={BlackEyedPeasAndHamHockRecipePageComponent} />
            <Route path="/chili-recipe" exact component={ChiliRecipePageComponent} />
            <Route path="/fajitas-recipe" exact component={FajitasRecipePageComponent} />
            <Route path="/marinara-recipe" exact component={MarinaraRecipePageComponent} />
            <Route path="/meat-sauce-recipe" exact component={MeatSaucePageComponent} />
            <Route path="/meatball-recipe" exact component={MeatballsPageComponent} />
            <Route path="/meatloaf-recipe" exact component={MeatloadRecipePageComponent} />
            <Route path="/pot-roast-recipe" exact component={PotRoastRecipePageComponent} />
            <Route path="/pulled-pork-recipe" exact component={PulledPorkRecipePageComponent} />
            <Route path="/salisbury-steaks-recipe" exact component={SalisburySteaksRecipePageComponent} />
            <Route path="/stuffed-green-peppers-recipe" exact component={StuffedGreenPeppersPageComponent} />
            
            <Route component={LoginPageComponent} />
          </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
