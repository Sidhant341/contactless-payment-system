import { IonButton, IonContent, IonHeader, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage className="home-page">
      {/* <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader> */}
      <IonContent fullscreen>
        {/* <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer /> */}
		<div className="home-screen-heading">
			<IonText>
				<h1 className="home-screen-heading"><span className="top-sentence">Welcome to</span> MoboShop</h1>
			</IonText>
		</div>

		<div className="sign-up-button">
			<IonButton mode="ios" expand="block" fill="outline" routerLink="/register"><span className="sign-up-button">Sign Up</span></IonButton>
		</div>
		<div className="sign-in-button">
			<IonButton mode="ios" expand="block" routerLink="/login">Sign In</IonButton>
		</div>

      </IonContent>
    </IonPage>
  );
};

export default Home;
