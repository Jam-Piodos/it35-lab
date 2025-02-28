import { 
  IonButtons,
    IonContent, 
    IonDatetime, 
    IonHeader, 
    IonMenuButton, 
    IonPage, 
    IonTitle, 
    IonToolbar 
} from '@ionic/react';

const Search: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>Calendar</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
          }}
        >
          <div>
          <IonDatetime minuteValues="0,15,30,45" dayValues="5,10,15,20,25,30"></IonDatetime>;
          </div>
        </div>

      </IonContent>
    </IonPage>
  );
};

export default Search;