import { useState, useEffect } from 'react';
import { Document, Page, Text, View, StyleSheet } from '../../../utils/reactpdf';

const styles = StyleSheet.create({
    page: {
        padding: 20,
        backgroundColor: '#fff',
        fontFamily: 'Roboto',
        fontSize: 12
    },
    requisitesWrapper: {
        flexDirection: 'row',
        justifyContent: "flex-end",
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
        textAlign: 'justify',
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        textAlign: 'center',
        marginTop: 40,
    },
    persone: {
        flexDirection: 'row',
        justifyContent: "flex-start",
        alignItems: 'flex-end',
        fontSize: 12,
        marginTop: 50,
    },
    date: {
        flexDirection: 'row',
        justifyContent: "flex-start",
        alignItems: 'flex-end',
        fontSize: 12,
        marginTop: 10,
    },
    persone__divider: {
        width: '150px',
        borderBottom: '1px solid #000',
    }
});

const VacationNoPayPDFBody = ({ date, requisites, docText, fullName }) => {
    const [textStart, setTextStart] = useState('')

    useEffect(() => {
        let re = /&[a-z]+;/g;
        setTextStart(docText.replace(/&amp;/g, '&').replace(re, '').replace(/  +/g, ' '))
    }, [docText])

    return (
        <Document>
            <Page size="A4" style={styles.page} wrap={true}>

                <View style={styles.requisitesWrapper}>
                    <Text style={styles.requisites}>{requisites}</Text>
                </View>

                <Text style={styles.title}>ЗАЯВЛЕНИЕ</Text>

                <View >
                    <Text style={styles.text}>{textStart}</Text>
                </View>

                <View style={styles.persone}>
                    <Text style={styles.persone__divider}></Text>
                    <Text>/</Text>
                    <Text>{fullName}</Text>
                </View>
                <View style={styles.date}>
                    <Text>{date}</Text>
                </View>

            </Page>
        </Document>
    );
};

export default VacationNoPayPDFBody;