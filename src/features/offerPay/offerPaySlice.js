import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    requisites: `Генеральному директору \nООО «Купи-Девайс»\nИ.И. Иванову \nот `,
    docText: `Прошу предоставить мне отпуск с _____________ 20__ года на _______ календарный день по (причина).`,
    fullName: '',
    dateOfferPay: ''

}

const offerPaySlice = createSlice({
    name: 'offerPay',
    initialState,
    reducers: {
        setRequisites: (state, action) => { state.requisites = action.payload },
        setDocText: (state, action) => { state.docText = action.payload },
        setFullName: (state, action) => { state.fullName = action.payload },
        setDateOfferPay: (state, action) => { state.dateNoPay = action.payload },
    }
})

export const {
    setRequisites,
    setDocText,
    setFullName,
    setDateOfferPay
} = offerPaySlice.actions

export default offerPaySlice.reducer