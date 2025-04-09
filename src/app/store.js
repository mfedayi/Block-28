import { configureStore } from "@reduxjs/toolkit";
import transactions from "../features/transactions/transactionsSlice"
import reducer from "../features/transactions/transactionsSlice";


// TODO: Configure the store to use the reducer from the transactions slice.
const store = configureStore(
    {
        reducer: {
            transactions,
        },
    }
);

export default store;
