import ViewLayout from "./ViewLayout";
import Router from "./pages/Router";

/**
 * This component defines the structure of the application, including the usage of layout (ViewLayout) and router (Router) for displaying content.
 */
export default function App() {
  return (
    <ViewLayout>
      <Router />
    </ViewLayout>
  );
}
