import { IonButton, IonContent, IonHeader, IonPage, IonText, IonTitle, IonToolbar, useIonViewDidEnter } from '@ionic/react';
import React from 'react';
import './StoreSelect.css';

declare var google: any;

const StoreSelect: React.FC = () => {

    var map: any;

    useIonViewDidEnter(() => {
        map = new google.maps.Map(document.getElementById("google-maps"), {
            center: { lat: -34.397, lng: 150.644 },
            zoom: 8,
        })
    });

    return (
        <IonPage className="store-select-page">
        <IonContent fullscreen>
            <div id="google-maps" className="google-maps">

            </div>
        </IonContent>
        </IonPage>
    );
};

export default StoreSelect;
