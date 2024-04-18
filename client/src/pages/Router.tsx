import { Routes, Route } from "react-router-dom";
import NotFound from "./NotFound";
import Home from "./Home";
import CreateWizardForm from "./wizard/CreateWizardForm";
import WizardList from "./wizard/WizardList";
import WizardView from "./wizard/WizardView";
import DeletedWizard from "./wizard/DeletedWizard";
import CreatedWizard from "./wizard/CreatedWizard";
import UpdateWizardForm from "./wizard/UpdateWizardForm";
import UpdatedWizard from "./wizard/UpdatedWizard";

import CreateJuiceForm from "./juice/CreateJuiceForm";
import CreatedJuice from "./juice/CreatedJuice";
import DeletedJuice from "./juice/DeletedJuice";
import JuiceList from "./juice/JuiceList";
import JuiceView from "./juice/JuiceView";
import UpdateJuiceForm from "./juice/UpdateJuiceForm";
import UpdatedJuice from "./juice/UpdatedJuice";

import CreateFastFoodForm from "./fastFood/CreateFastFoodForm";
import CreatedFastFood from "./fastFood/CreatedFastFood";
import DeletedFastFood from "./fastFood/DeletedFastFood";
import FastFoodList from "./fastFood/FastFoodList";
import FastFoodView from "./fastFood/FastFoodView";
import UpdateFastFoodForm from "./fastFood/UpdateFastFoodForm";
import UpdatedFastFood from "./fastFood/UpdatedFastFood";

import CameramanList from "./cameraman/CameramanList";
import CameramanView from "./cameraman/CameramanView";
import CreateCameramanForm from "./cameraman/CreateCameramanForm";
import CreatedCameraman from "./cameraman/CreatedCameraman";
import DeletedCameraman from "./cameraman/DeletedCameraman";
import UpdateCameramanForm from "./cameraman/UpdateCameramanForm";
import UpdatedCameraman from "./cameraman/UpdatedCameraman";

/**
 * This component defines the routing configuration for the application.
 */
export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/create-wizard" element={<CreateWizardForm />} />
      <Route path="/wizard/:id" element={<WizardView />} />
      <Route path="/wizards" element={<WizardList />} />
      <Route path="/update-wizard/:id" element={<UpdateWizardForm />} />
      <Route path="/updated-wizard/:id" element={<UpdatedWizard />} />
      <Route path="/created-wizard/:id" element={<CreatedWizard />} />
      <Route path="/deleted-wizard/:id" element={<DeletedWizard />} />

      <Route path="/create-juice" element={<CreateJuiceForm />} />
      <Route path="/juice/:id" element={<JuiceView />} />
      <Route path="/juices" element={<JuiceList />} />
      <Route path="/update-juice/:id" element={<UpdateJuiceForm />} />
      <Route path="/updated-juice/:id" element={<UpdatedJuice />} />
      <Route path="/created-juice/:id" element={<CreatedJuice />} />
      <Route path="/deleted-juice/:id" element={<DeletedJuice />} />

      <Route path="/create-fastFood" element={<CreateFastFoodForm />} />
      <Route path="/fastFood/:id" element={<FastFoodView />} />
      <Route path="/fastFoods" element={<FastFoodList />} />
      <Route path="/update-fastFood/:id" element={<UpdateFastFoodForm />} />
      <Route path="/updated-fastFood/:id" element={<UpdatedFastFood />} />
      <Route path="/created-fastFood/:id" element={<CreatedFastFood />} />
      <Route path="/deleted-fastFood/:id" element={<DeletedFastFood />} />

      <Route path="/create-cameraman" element={<CreateCameramanForm />} />
      <Route path="/cameraman/:id" element={<CameramanView />} />
      <Route path="/cameramans" element={<CameramanList />} />
      <Route path="/update-cameraman/:id" element={<UpdateCameramanForm />} />
      <Route path="/updated-cameraman/:id" element={<UpdatedCameraman />} />
      <Route path="/created-cameraman/:id" element={<CreatedCameraman />} />
      <Route path="/deleted-cameraman/:id" element={<DeletedCameraman />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
