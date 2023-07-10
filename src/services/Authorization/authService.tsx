import {UserProfile} from "../../interfaces/user-profile.interface";
import httpAuth from './http-authentication'

const getProfileData = async (): Promise<UserProfile> => {
  const response = await httpAuth.get<UserProfile>('user/profile');
  return response.data;
};

const getProfileStatus = async (token: string | null): Promise<number> => {
  const response = await httpAuth.get<number>('user/ping', {
    headers: {
      Authorization: token
    }
  });
  return response.status;
};


export default {
  getProfileData,
  getProfileStatus
}