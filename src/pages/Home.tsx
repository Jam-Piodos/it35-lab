import { 
  IonAlert,
  IonButton,
    IonButtons,
      IonContent, 
      IonHeader, 
      IonIcon, 
      IonLabel, 
      IonMenuButton, 
      IonPage, 
      IonRouterOutlet, 
      IonTabBar, 
      IonTabButton, 
      IonTabs, 
      IonTitle, 
      IonToolbar 
  } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { bookOutline, calendar, search, star } from 'ionicons/icons';
import { Route, Redirect } from 'react-router';

import Events from './home-tabs/Events';
import Calendar from './home-tabs/Calendar';
  
  const Home: React.FC = () => {

    const tabs = [
      {name:'Events', tab:'feed',url: '/it35-lab/app/home/events', icon: bookOutline},
      {name:'Calendar', tab:'search', url: '/it35-lab/app/home/calendar', icon: calendar},
    ]
    
    return (
      <IonReactRouter>
        <IonTabs>
          <IonTabBar slot="bottom">

            {tabs.map((item, index) => (
              <IonTabButton key={index} tab={item.tab} href={item.url}>
                <IonIcon icon={item.icon} />
                <IonLabel>{item.name}</IonLabel>
              </IonTabButton>
            ))}
            
          </IonTabBar>
        <IonRouterOutlet>

          <Route exact path="/it35-lab/app/home/events" render={Events} />
          <Route exact path="/it35-lab/app/home/calendar" render={Calendar} />

          <Route exact path="/it35-lab/app/home">
            <Redirect to="/it35-lab/app/home/events" />
          </Route>

        </IonRouterOutlet>
        </IonTabs>
      </IonReactRouter>
    );
  };
  
  export default Home;