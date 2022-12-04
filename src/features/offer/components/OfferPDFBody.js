import {useState, useEffect} from 'react';
import { Document, Page, Image, Text, View, StyleSheet } from '../../../utils/reactpdf';
import formatDate from '../../../utils/formatDate';
import intToWords from "../../../utils/intToWords";

import Logo  from '../../../static/img/logo.png';
import initVat from '../../../utils/initVat';



const styles = StyleSheet.create({
    page: {
        padding: 20,
        backgroundColor: '#fff',
        fontFamily: "Roboto",
        fontSize: 12
    },
    section: {
        flexDirection: 'row',
        justifyContent: "space-between",
        margin: 10,
        padding: 10,
    },
    requisites: {
        width: '50%'
    },
    text: {
        marginTop: 20,
        textIndent: 20,
        lineHeight: 1.5,
        textAlign: 'justify'
    },
    place: {
        flexDirection: 'row',
        justifyContent: "space-between",
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        textAlign: 'center',
        marginTop: 40,
    },
    listTitle: {
        fontSize: 15,
        fontWeight: "bold",
        marginTop: 20,
        marginBottom: 20,
    },
    persone: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'flex-end',
        fontSize: 15,
        marginTop: 50,
    },
    persone__divider: {
        width: '150px',
        borderBottom:'1px solid #000',
    }
});

const OfferPDFBody = ({city, requisites, date, checkVat, totalPrice, term, planItems, guaranteesItems, startOfDoc, jobTitle, employee}) => {


    const [textTotalPrice, setTextTotalPrice] = useState('')
    const [validDate, setValidDate] = useState('')
    const [planStr, setPlanStr] = useState('')
    const [guaranteesStr, setGuaranteesStr] = useState('')
    const [textStart, setTextStart] = useState('')

    const createPlanStr = (items) => {
        let str = ''
        if (items.length > 0) {
            items.map((item, i) => {
                str += `${i + 1}. ${item.title} - ${item.price} руб. \n`
                return str
            })
        }
        return str
    }

    const createGuaranteesStr = (items) => {
        let str = ''
        if (items.length > 0) {
            items.map((item, i) => {
                str += `${i + 1}. ${item.title} \n`
                return str
            })
        }
        return str
    }

    useEffect(() => {
        setPlanStr(createPlanStr(planItems))
    }, [planItems])

    useEffect(() => {
        setGuaranteesStr(createGuaranteesStr(guaranteesItems))
    }, [guaranteesItems])

    useEffect(() => {
        const initDate = (date) => {
            const arr = date.split('.')
    
            let d =  new Date(`${arr[2]}-${arr[1]}-${arr[0]}`)
            let t = new Date(d.setMonth(d.getMonth() + +term))
    
            term && term !== 0 && term !== '0' ? setValidDate(formatDate(t)) : setValidDate('бессрочно')
        }
        initDate(date)
    }, [date, term])

    useEffect(() => {
        setTextTotalPrice(`${intToWords(totalPrice)} руб.`)
    }, [totalPrice])

    useEffect(() => {
        let re = /&[a-z]+;/g;
        setTextStart(startOfDoc.replace(/&amp;/g, '&').replace(re, '').replace( /  +/g, ' ' ))
    }, [startOfDoc])

    return (
        <Document language="cyrillic">
            <Page size="A4" style={styles.page}  wrap={true}>

                <View style={styles.section}>
                    <Image source={Logo} style={{width: '100px', height: '30px'}}/>
                    <Text style={styles.requisites} >{requisites}</Text>
                </View>

                <View style={styles.place}>
                    <Text>{city}</Text>
                    <Text>{date}</Text>
                </View>

                <Text style={styles.title}>Коммерческое предложение</Text>
                <Text style={styles.text}>
                    {textStart} {totalPrice} руб. ({textTotalPrice})
                    <Text>
                        {
                            checkVat && <Text>, в том числе НДС: {initVat(totalPrice)[0]} руб. &nbsp; {initVat(totalPrice)[1]} копеек.</Text>
                        }
                    </Text>
                </Text>

                

                {
                    planStr.length > 0 ? 

                    <>
                        <View >
                            <Text style={styles.listTitle}>План работ:</Text>
                        </View>
                        <View >
                            <Text>{planStr}</Text>
                        </View> 
                    </>
                    : null
                }
                

                {
                    guaranteesStr.length > 0 ? 

                    <>
                        <View >
                            <Text style={styles.listTitle}>Мы гарантируем:</Text>
                        </View>
                        <View >
                            <Text>{guaranteesStr}</Text>
                        </View> 
                    </>
                    : null
                }

                <Text style={styles.text}>
                    Расчет стоимости является предварительным. Окончательный расчет производится непосредственно перед заключением договора.
                </Text>
                <Text style={styles.text}>
                        Данное коммерческое предложение действительно
                        {
                            date && <Text>{validDate === ' бессрочно' ? validDate : `до ${validDate}`}</Text>
                        }
                </Text>

                <View style={styles.persone}>
                    <Text>{jobTitle}</Text>
                    <Text style={styles.persone__divider}></Text>
                    <Text>{employee}</Text>
                </View>

            </Page>
        </Document>
    )
}

export default OfferPDFBody;