import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from '../../app/axiosInstance';
import { ICapsuleType  } from '../../types/features/capsules/capsule.type';


export const fetchCapsules = createAsyncThunk(
  'rockets/get-rockets',
  async (_, { rejectWithValue }) => {
    try {
      const { data: { message } } = await axiosInstance.get('job/counts');
      const response = message?.[0]
      return response as ICapsuleType;
    } catch (error: any) {
      return rejectWithValue({
        message: 'Something went wrong'
      })
    }
  }
)
