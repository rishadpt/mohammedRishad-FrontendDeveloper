import { PayloadAction, createSlice, current } from '@reduxjs/toolkit';
import { IJobListItem, IJobSearchReturn, IJobState } from '../../types/features/job/job.types';
import { fetchJobsData, searchJobsData } from './rocketAction';

const totalItemsPerPage = 6
const initialState: IJobState = {
  error: false,
  loading: false,
  status: 'idle',
  message: null,
  data: [],
  singlejob: {},
  searchResults: [],
  totalLength: 0,
};


function sortByValues(a: any, b: any, type: string) {
  const locationA = a[type]?.toUpperCase();
  const locationB = b[type]?.toUpperCase();

  if (locationA < locationB) {
    console.log(locationB, 'greater');
    return -1;
  }
  if (locationA > locationB) {
    console.log(locationB, 'less');
    return 1;
  }
  return 0;
}

const jobSlice = createSlice({
  name: 'job',
  initialState,
  reducers: {
    sortingData: (state, { payload }: any) => {
      let sortedArr: any = [];
      const arr = current(state.data);
      switch (payload) {
      
        case 'nationality':
          sortedArr = [...arr].sort((a, b) => sortByValues(a, b, 'nationality'));
          break;
        case 'commitment':
          sortedArr = [...arr].sort((a, b) => sortByValues(a, b, 'commitment'));
          break;
        case 'service':
          sortedArr = [...arr].sort((a, b) => sortByValues(a, b, 'service'));
          console.log(sortedArr);
          break;
        default:
          break;
      }
      if (sortedArr.length > 0) {
        console.log(sortedArr,"sorted Array")
        state.data = sortedArr;
      }
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
        fetchJobsData.fulfilled,
        (state, { payload }: PayloadAction<IJobListItem[]>) => {
          console.log(payload,"payload")
          state.error = false;
          state.data = payload?.data?.jobs
          state.loading = false;
          state.status = 'success';
          state.totalLength = payload?.data?.jobs?.length;
        }
      )
      .addCase(fetchJobsData.pending, (state) => {
        state.error = false;
        state.loading = false;
        state.status = 'loading';
      })
      .addCase(fetchJobsData.rejected, (state) => {
        state.error = true;
        state.loading = false;
        state.status = 'error';
      })
      .addCase(
        searchJobsData.fulfilled,
        (state, { payload }: PayloadAction<IJobSearchReturn>) => {
        
          state.error = false;
          state.data =  payload?.data
          state.loading = false;
          state.status = 'success';
        }
      )
      .addCase(searchJobsData.pending, (state) => {
        state.error = false;
        state.loading = false;
        state.status = 'loading';
      })
      .addCase(searchJobsData.rejected, (state) => {
        state.error = true;
        state.loading = false;
        state.status = 'error';
      });
  },
});

export const {
  pagination,
  sortingData
} = jobSlice.actions;
export default jobSlice.reducer;