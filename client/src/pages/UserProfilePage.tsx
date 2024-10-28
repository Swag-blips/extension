import { useUpdateMyUser } from "@/api/UserApi";
import UserProfileForm from "@/forms/UserProfileForm/UserProfileForm";

const UserProfilePage = () => {
  const { updateUser, isLoading } = useUpdateMyUser();
  return <UserProfileForm onSave={updateUser} isLoading={isLoading} />;
};

export default UserProfilePage;
