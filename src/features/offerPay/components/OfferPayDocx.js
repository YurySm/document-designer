import { useEffect, useState } from 'react';
import { AlignmentType, WidthType, Document, Packer, Paragraph, TextRun, ImageRun, Table, TableRow, TableCell, VerticalAlign, BorderStyle } from "docx";
import saveAs from 'save-as';

import { useSelector } from 'react-redux';
import intToWords from '../../../utils/intToWords';
import formatDate from '../../../utils/formatDate';
import { Button } from "react-bootstrap";
import initStrToArr from '../../../utils/docx/initStrToArr';


const VacationNoPayDocx = () => {

    const dateOfferPay = useSelector(state => state.offerPay.dateOfferPay)
    const docText = useSelector(state => state.offerPay.docText)
    const fullName = useSelector(state => state.offerPay.fullName)
    const requisites = useSelector(state => state.offerPay.requisites)

    const [requisitesDoc, setRequisitesDoc] = useState([])
    const [trueDate, setTrueDate] = useState('')

    useEffect(() => {
        setRequisitesDoc(initStrToArr(requisites))
    }, [requisites])

    useEffect(() => {
        setTrueDate(formatDate(new Date(dateOfferPay)))
    }, [dateOfferPay])


    const doc = new Document({
        sections: [
            {
                children: [
                    new Table({
                        columnWidths: [4505, 4505],
                        borders: {
                            top: {
                                size: 1,
                                color: "#FFFFFF",
                            },
                            bottom: {
                                size: 1,
                                color: "#FFFFFF",
                            },
                            left: {
                                size: 1,
                                color: "#FFFFFF",
                            },
                            right: {
                                size: 1,
                                color: "#FFFFFF",
                            },
                        },
                        rows: [
                            new TableRow({
                                children: [
                                    new TableCell({
                                        width: {
                                            size: 4505,
                                            type: WidthType.DXA,
                                        },
                                        borders: {
                                            top: {
                                                size: 1,
                                                color: "#FFFFFF",
                                            },
                                            bottom: {
                                                size: 1,
                                                color: "#FFFFFF",
                                            },
                                            left: {
                                                size: 1,
                                                color: "#FFFFFF",
                                            },
                                            right: {
                                                size: 1,
                                                color: "#FFFFFF",
                                            },
                                        },
                                        children: [new Paragraph({ children: [] })],
                                    }),
                                    new TableCell({
                                        width: {
                                            size: 4505,
                                            type: WidthType.DXA,
                                        },
                                        borders: {
                                            top: {
                                                size: 1,
                                                color: "#FFFFFF",
                                            },
                                            bottom: {
                                                size: 1,
                                                color: "#FFFFFF",
                                            },
                                            left: {
                                                size: 1,
                                                color: "#FFFFFF",
                                            },
                                            right: {
                                                size: 1,
                                                color: "#FFFFFF",
                                            },
                                        },
                                        // children: [new Paragraph(requisites)],
                                        children: [
                                            new Paragraph({
                                                children: requisitesDoc
                                            }),
                                        ]
                                    }),
                                ],
                            })
                        ]
                    }),
                    new Paragraph({
                        children: [
                            new TextRun({
                                text: "",
                                break: 2
                            })
                        ]
                    }),
                    new Paragraph({
                        alignment: AlignmentType.CENTER,
                        children: [
                            new TextRun({
                                text: "ЗАЯВЛЕНИЕ",
                                bold: true,
                                size: 40,
                            })
                        ]
                    }),
                    new Paragraph({
                        children: [
                            new TextRun({
                                text: "",
                                break: 1
                            })
                        ]
                    }),
                    new Paragraph({
                        children: [
                            new TextRun({
                                text: "\t",
                                size: 24,
                            }),
                            new TextRun({
                                text: docText,
                                size: 24,
                            }),
                        ]
                    }),
                    new Paragraph({
                        children: [
                            new TextRun({
                                text: "",
                            })
                        ]
                    }),
                    new Table({
                        columnWidths: [2505, 100, 6405],
                        borders: {
                            top: {
                                size: 1,
                                color: "#FFFFFF",
                            },
                            bottom: {
                                size: 1,
                                color: "#FFFFFF",
                            },
                            left: {
                                size: 1,
                                color: "#FFFFFF",
                            },
                            right: {
                                size: 1,
                                color: "#FFFFFF",
                            },
                        },
                        rows: [
                            new TableRow({
                                children: [
                                    new TableCell({
                                        width: {
                                            size: 2505,
                                            type: WidthType.DXA,
                                        },
                                        borders: {
                                            top: {
                                                size: 1,
                                                color: "#FFFFFF",
                                            },
                                            // bottom: {
                                            //     size: 1,
                                            //     color: "#000000",
                                            // },
                                            left: {
                                                size: 1,
                                                color: "#FFFFFF",
                                            },
                                            right: {
                                                size: 1,
                                                color: "#FFFFFF",
                                            },
                                            bottom: {
                                                style: BorderStyle.SINGLE,
                                                size: 5,
                                                color: "000000",
                                            },
                                        },
                                        children: [
                                            new Paragraph({
                                                children: [
                                                    new TextRun({
                                                        text: '',
                                                        size: 24,
                                                    })
                                                ]
                                            }),
                                        ]
                                    }),
                                    new TableCell({
                                        width: {
                                            size: 100,
                                            type: WidthType.DXA,
                                        },
                                        borders: {
                                            top: {
                                                size: 1,
                                                color: "#FFFFFF",
                                            },
                                            bottom: {
                                                size: 1,
                                                color: "#FFFFFF",
                                            },
                                            left: {
                                                size: 1,
                                                color: "#FFFFFF",
                                            },
                                            right: {
                                                size: 1,
                                                color: "#FFFFFF",
                                            },
                                        },
                                        verticalAlign: VerticalAlign.BOTTOM,
                                        children: [
                                            new Paragraph({
                                                // alignment: AlignmentType.RIGHT,
                                                children: [
                                                    new TextRun({
                                                        text: '',
                                                        size: 24,
                                                    })
                                                ]
                                            }),
                                        ]
                                    }),
                                    new TableCell({
                                        width: {
                                            size: 6405,
                                            type: WidthType.DXA,
                                        },
                                        borders: {
                                            top: {
                                                size: 1,
                                                color: "#FFFFFF",
                                            },
                                            bottom: {
                                                size: 1,
                                                color: "#FFFFFF",
                                            },
                                            left: {
                                                size: 1,
                                                color: "#FFFFFF",
                                            },
                                            right: {
                                                size: 1,
                                                color: "#FFFFFF",
                                            },
                                        },
                                        verticalAlign: VerticalAlign.BOTTOM,
                                        children: [
                                            new Paragraph({
                                                // alignment: AlignmentType.RIGHT,
                                                children: [
                                                    new TextRun({
                                                        text: fullName,
                                                        size: 24,
                                                    })
                                                ]
                                            }),
                                        ]
                                    }),
                                ],
                            })
                        ]
                    }),
                    new Paragraph({
                        children: [
                            new TextRun({
                                text: "",
                            })
                        ]
                    }),
                    new Paragraph({
                        children: [
                            new TextRun({
                                text: trueDate,
                            })
                        ]
                    }),

                ]
            }
        ]
    });



    const generate = () => {
        // let now =  Date.now()
        Packer.toBlob(doc).then((blob) => {
            //  saveAs(blob, `offer from ${(date)} - ${formatDate(new Date(now))}.docx`);
            saveAs(blob, `Отпуск без сохранения ЗП ${(trueDate)}.docx`);
        });
    }

    return (
        <Button
            className='ms-2'
            variant="primary"
            onClick={() => generate()}
        >
            Скачать .docx</Button>
    );
};

export default VacationNoPayDocx;