// import { createSlice } from '@reduxjs/toolkit';

// export const appSlice = createSlice({
//   name: 'user',
//   initialState: {
//     channelId: null,
//     channelName: null,
//   },
//   reducers: {
//     setChannelId:(state,action)=> {
//       state.app+=action.payload;
//     },
//   },
// });

// export const { setChannelId,channelId } =appSlice.actions;

// export const selectchannelId = state => state.app.channelId;
// export const selectchannelName = state => state.app.channelName;

// export default appSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
    name: 'app',
    initialState: {
        channelId: null,
        channelName: null
    },
    reducers: {
        setChannelInfo: (state, action) => {
            state.channelId = action.payload.channelId;
            state.channelName = action.payload.channelName;
        }
    },
});

export const { setChannelInfo } = appSlice.actions;

export const selectChannelId = (state) => state.app.channelId;
export const selectChannelName = (state) => state.app.channelName;

export default appSlice.reducer;