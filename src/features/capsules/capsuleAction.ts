import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from '../../app/axiosInstance';



export const fetchCapsules = createAsyncThunk(
  'rockets/get-rockets',
  async (_, { rejectWithValue }) => {
    try {
      const response:any = await axiosInstance.get('capsules');

      return response.data;
    } catch (error: any) {
      return rejectWithValue({
        message: 'Something went wrong'
      })
    }
  }
)
