/**
 * This component represents the 404 Not Found page, displayed when a user tries to access a route that does not exist in the application.
 */
export default function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4">
      <h2 className="text-4xl font-bold">404 Not Found</h2>
      <p className="text-lg text-gray-600">
        Sorry, the page you're looking for does not exist.
      </p>
    </div>
  );
}
