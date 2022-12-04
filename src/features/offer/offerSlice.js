import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  city: 'Москва',
  date: '',
  planItems: [],
  guaranteesItems: [],
  checkVat: false,
  term: "1",
  totalPrice: 0,
  requisites: `ООО «Купи-Девайс» \nг. Москва, Кутузовский проспект, д.1111  \nТел.: 8-800-777-77-77 `,
  startOfDoc: 'Согласно вашему запросу, сообщаем, что предварительная стоимость продукта, составит',
  jobTitle: '',
  employee: ''
};

export const offerSlice = createSlice({
  name: 'offer',
  initialState,
  reducers: {
    setCheckedVAT: (state) => { state.checkVat = !state.checkVat },
    setTermValue: (state, action) => { state.term = action.payload },
    addPlanItems: (state, action) => { state.planItems = action.payload },
    addGuaranteesItems: (state, action) => { state.guaranteesItems = action.payload },
    calcTotalPrice: (state, action) => { state.totalPrice = action.payload },
    setRequisites: (state, action) => { state.requisites = action.payload },
    setCity: (state, action) => { state.city = action.payload },
    setDateDocument: (state, action) => { state.date = action.payload },
    setStartOfDoc: (state, action) => { state.startOfDoc = action.payload },
    setjobTitle: (state, action) => { state.jobTitle = action.payload },
    setEmployee: (state, action) => { state.employee = action.payload },
  }
});

export const {
  setCheckedVAT,
  setTermValue,
  addPlanItems,
  addGuaranteesItems,
  calcTotalPrice,
  setRequisites,
  setCity,
  setDateDocument,
  setStartOfDoc,
  setjobTitle,
  setEmployee
} = offerSlice.actions;

export default offerSlice.reducer;