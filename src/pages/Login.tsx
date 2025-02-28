import { 
  IonAlert,
  IonButton,
  IonButtons,
    IonContent, 
    IonHeader, 
    IonInput, 
    IonInputPasswordToggle, 
    IonMenuButton, 
    IonPage, 
    IonTitle, 
    IonToolbar, 
    useIonRouter
} from '@ionic/react';
import { logoIonic, } from 'ionicons/icons';
import { useState } from 'react';

  const Login: React.FC = () => {
    const navigation = useIonRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [showToast, setShowToast] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const doLogin = async () => {
          navigation.push('/it35-lab/app', 'forward', 'replace');
        }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className='ion-padding'>
      <IonInput
                    label="Email" 
                    labelPlacement="floating" 
                    fill="outline"
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onIonChange={e => setEmail(e.detail.value!)}
                  />
                  <IonInput style={{
                      marginTop:'10px',
                    }}      
                    fill="outline"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onIonChange={e => setPassword(e.detail.value!)}
                  ><IonInputPasswordToggle slot="end"></IonInputPasswordToggle></IonInput>
      <br />
          <IonButton onClick={() =>setIsOpen(true)} expand="full" id='login-button'>
              Login
          </IonButton>
                  <IonAlert
                  trigger="login-button"
                  header="Login Successful"
                  message="Account Logged in Successfully."
                  buttons={['Okay']}
                  onDidDismiss={() => doLogin()}
                ></IonAlert>

      </IonContent>
    </IonPage>
  );
};

export default Login;