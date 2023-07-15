import { PayloadAction, createSlice, current } from '@reduxjs/toolkit';
import {
  fetchCapsules
} from './capsuleAction';
import {
  IMaidListItem,
  ICapsuleState,
} from '../../types/features/capsules/capsule.type';
import { getFilterdData } from '../utils/getFilterdData';


const totalItemsPerPage = 6;


const initialState: ICapsuleState = {
  error: false,
  loading: false,
  status: 'idle',
  message: null,
  data: [],
  singleMaid: {},
  totalLength: 0,
};

const maidSlice = createSlice({
  name: 'maid',
  initialState,
  reducers: {
    resetMaidState: (state: ICapsuleState) => {
      state.error = false;
      state.loading = false;
      state.status = 'idle';
      state.message = null;
    },


    filterData: (state, { payload }) => {
      const resultData = getFilterdData(payload, current(state.data));
      state.totalLength = resultData.length;
    },
    pagination: (state, { payload: { page } }) => {
      const perPage = totalItemsPerPage; // Number of items per page
      const startIndex = (page - 1) * perPage; // Calculate the starting index of the current page
      const endIndex = startIndex + perPage; // Calculate the ending index of the current page
      console.log(page);
      const paginatedData =
        current(state.data)?.slice(startIndex, endIndex) ?? [];

      state.data = paginatedData;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchCapsules.fulfilled,
        (state, { payload }: PayloadAction<IMaidListItem[]>) => {
          state.error = false;
          state.data = payload;
          state.filterdData = payload.slice(0, totalItemsPerPage);
          state.filterdDataBackup = payload;
          state.totalLength = payload.length;
          state.loading = false;
          state.status = 'success';
        }
      )
      .addCase(fetchCapsules.pending, (state) => {
        state.error = false;
        state.loading = true;
        state.status = 'loading';
      })
      .addCase(fetchCapsules.rejected, (state) => {
        state.error = true;
        state.loading = false;
        state.status = 'error';
      })

  },
});
export const {
  filterData,
  resetMaidState,
  pagination,

} = maidSlice.actions;
export default maidSlice.reducer;
