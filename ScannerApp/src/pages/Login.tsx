import { IonButton, IonContent, IonHeader, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import './Login.css';

const Login: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
		<div className="login-screen-heading">
			<IonText>
				<h1 className="login-screen-heading">Login</h1>
			</IonText>
		</div>

      </IonContent>
    </IonPage>
  );
};

export default Login;
