import {
    IonAlert,
    IonButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonIcon,
    IonItem,
    IonMenu,
    IonMenuButton,
    IonMenuToggle,
    IonPage,
    IonRouterOutlet,
    IonSplitPane,
    IonTitle,
    IonToolbar,
    useIonRouter
} from '@ionic/react'
import { homeOutline, logOutOutline, rocketOutline } from 'ionicons/icons';
import { Redirect, Route } from 'react-router';
import Home from './Home';
import About from './About';
import { useState } from 'react';

const Menu: React.FC = () => {
    const path = [
        { name: 'Home', url: '/it35-lab/app/home', icon: homeOutline },
        { name: 'About', url: '/it35-lab/app/about', icon: rocketOutline },
    ]
    const [isOpen, setIsOpen] = useState(false);
    const navigation = useIonRouter();
    const doLogout = async () => {
        navigation.push('/it35-lab/', 'back', 'replace');
      }

    return (
        <IonPage>
            <IonSplitPane contentId="main">
                <IonMenu contentId="main">
                    <IonHeader>
                        <IonToolbar>
                            <IonTitle>
                                Menu
                            </IonTitle>
                        </IonToolbar>
                    </IonHeader>
                    <IonContent>
                        {path.map((item, index) => (
                            <IonMenuToggle key={index}>
                                <IonItem routerLink={item.url} routerDirection="forward">
                                    <IonIcon icon={item.icon} slot="start"></IonIcon>
                                    {item.name}
                                </IonItem>
                            </IonMenuToggle>
                        ))}

                        {/*Logout Button*/}
                        <IonButton expand="full" id='logout-button'>
                            <IonIcon icon={logOutOutline} slot="start"> </IonIcon>
                            Logout
                        </IonButton>

                    </IonContent>
                </IonMenu>

                <IonRouterOutlet id="main">
                    <Route exact path="/it35-lab/app/home" component={Home} />
                    <Route exact path="/it35-lab/app/about" component={About} />

                    <Route exact path="/it35-lab/app">
                        <Redirect to="/it35-lab/app/home" />
                    </Route>
                </IonRouterOutlet>

                <IonAlert
                            header="Alert!"
                            trigger="logout-button"
                            buttons={[
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    handler: () => {
                                        console.log('Alert canceled');
                                    },
                                },
                                {
                                    text: 'Logout',
                                    role: 'confirm',
                                    handler: () => {
                                        console.log('Alert confirmed');
                                    },
                                },
                            ]}
                            onDidDismiss={() => doLogout()}
                        ></IonAlert>

            </IonSplitPane>
        </IonPage>
    );
};

export default Menu;