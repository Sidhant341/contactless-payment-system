import { IonButton, IonCheckbox, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState } from 'react';
import './Register.css';

const Register: React.FC = () => {

    const [name, setName] = useState<string>();
    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();


  return (
    <IonPage>
      <IonContent fullscreen>
		<div className="register-screen-heading">
			<IonText>
				<h1 className="register-screen-heading">Welcome!</h1>
			</IonText>
		</div>

        <div className="register-screen-sub-heading">
			<IonText>
				<p className="register-screen-sub-heading">Create an account to continue.</p>
			</IonText>
		</div>

        <div className="register-page-form">
            <IonItem>
                <IonLabel position="floating">Name</IonLabel>
                <IonInput value={name} type="text"></IonInput>
            </IonItem>
            <IonItem>
                <IonLabel position="floating">Email ID</IonLabel>
                <IonInput value={email} type="email"></IonInput>
            </IonItem>
            <IonItem>
                <IonLabel position="floating">Password</IonLabel>
                <IonInput value={password} type="password"></IonInput>
            </IonItem>
            <div className="terms-and-conditions">
                <IonCheckbox color="primary" slot="start"></IonCheckbox>
                <IonLabel>I agree to the terms and conditions.</IonLabel>
            </div>
            <div className="register-in-button">
			    <IonButton mode="ios" expand="block" routerLink="/register">Create Account</IonButton>
		    </div>
        </div>

        <div className="have-your-account">
            <p className="have-your-account">Already have an account?<span className="have-your-account"> Sign in!</span></p>
        </div>

      </IonContent>
    </IonPage>
  );
};

export default Register;