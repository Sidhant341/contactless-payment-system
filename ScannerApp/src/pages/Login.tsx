import { IonButton, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState } from 'react';
import './Login.css';

const Login: React.FC = () => {

    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();


  return (
    <IonPage>
      <IonContent fullscreen>
		<div className="login-screen-heading">
			<IonText>
				<h1 className="login-screen-heading">Welcome Back</h1>
			</IonText>
		</div>

        <div className="login-screen-sub-heading">
			<IonText>
				<p className="login-screen-sub-heading">Login to continue.</p>
			</IonText>
		</div>

        <div className="login-page-form">
            <IonItem>
                <IonLabel position="floating">Email ID</IonLabel>
                <IonInput value={email} type="email"></IonInput>
            </IonItem>
            <IonItem>
                <IonLabel position="floating">Password</IonLabel>
                <IonInput value={password} type="password"></IonInput>
            </IonItem>
            <div className="login-in-button">
			    <IonButton mode="ios" expand="block" routerLink="login">Sign In</IonButton>
		    </div>
        </div>

        <div className="create-your-account">
            <p className="create-your-account">Don't have an account?<span className="create-your-account"> Create one!</span></p>
        </div>

      </IonContent>
    </IonPage>
  );
};

export default Login;
