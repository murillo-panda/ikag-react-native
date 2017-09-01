import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from '../components/containers/login-container';
import WelcomeView from '../components/containers/welcome-container';
import PersonalData from '../components/containers/personal-data-container';
import Schedule from '../components/containers/schedule-container';
import Categories from '../components/containers/categories-container';
import PhotoUpload from '../components/containers/photo-upload-container';
import List from '../components/list';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 10 }}>
      <Scene key="auth">
        <Scene key="login" component={LoginForm} title="Iniciar Sesion" initial />
        <Scene key="welcomeView" component={WelcomeView} title="Menu Prinicpal" />
        <Scene key="personalData" component={PersonalData} title="Informacion Contacto" />
        <Scene key="schedule" component={Schedule} title="Horarios Atencion" />
        <Scene key="categories" component={Categories} title="Categorias" />
        <Scene key="uploadPhotos" component={PhotoUpload} title="Agregar imagenes" />
        <Scene
          onRight={() => Actions.personalData()}
          rightTitle="Agregar"
          key="list"
          component={List}
          title="Establecimientos"
        />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
