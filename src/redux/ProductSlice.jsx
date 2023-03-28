const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit')

export const fetchProduct = createAsyncThunk("FetchProducts", async () => {
    const res = await fetch('https://fakestoreapi.com/products')
    const final = await res.json()
    return final;
})

const Productslice = createSlice({

    name: 'products',
    initialState: {
        data: null,
        isLoader: false,
        isError: false,
    },
    extraReducers: builder => {
        builder.addCase(fetchProduct.pending, (state, action) => {
            state.isLoader = true;
        })
        builder.addCase(fetchProduct.fulfilled, (state, action) => {
            state.isLoader = false;
            state.data = action.payload;
        })
        builder.addCase(fetchProduct.rejected, (state, action) => {
            state.isLoader = false;
            state.isError = true;
        })
    }
})

export default Productslice.reducer;