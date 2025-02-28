import {
  IonAvatar,
  IonButtons,
  IonContent,
  IonHeader,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonItem,
  IonLabel,
  IonList,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import { useEffect, useState } from 'react';

const Feed: React.FC = () => {
  const [items, setItems] = useState<string[]>([]);

  useEffect(() => {
    const newItems = [];
    for (let i = 1; i < 51; i++) {
      newItems.push(`Item ${items.length + i}`);
    }
    setItems([...items, ...newItems]);
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>Upcoming Events</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        No list yet

        <IonList>
          {items.map((item, index) => (
            <IonItem key={item}>
              <IonLabel>{item}</IonLabel>
            </IonItem>
          ))}
        </IonList>
        <IonInfiniteScroll>
          <IonInfiniteScrollContent loadingText="Please wait..." loadingSpinner="bubbles"></IonInfiniteScrollContent>
        </IonInfiniteScroll>
      </IonContent>
    </IonPage >
  );
};

export default Feed;