import { useNavigate } from "react-router-dom";
import CreatePost from "../components/CreatePost";

function CreatePage() {
  const navigate = useNavigate();

  const handleSuccess = () => {
    navigate("/posts"); // Redirect after successful upload
  };

  return <CreatePost onPostCreated={handleSuccess} />;
}

export default CreatePage;