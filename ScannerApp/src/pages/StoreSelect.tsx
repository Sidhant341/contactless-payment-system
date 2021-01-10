import { IonButton, IonContent, IonHeader, IonModal, IonPage, IonText, IonTitle, IonToolbar, useIonViewDidEnter } from '@ionic/react';
import React, { useState } from 'react';
import './StoreSelect.css';

declare var google: any;

const StoreSelect: React.FC = () => {

    var map: any;
    const [showModal, setShowModal] = useState(true);

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
            <IonModal isOpen={showModal} cssClass='my-custom-class'>
                <p>This is modal content</p>
                <IonButton className="google-maps ion-text-center" onClick={() => setShowModal(false)}>Shop Here</IonButton>
            </IonModal>
            </div>
            
        </IonContent>
        </IonPage>
    );
};

export default StoreSelect;
