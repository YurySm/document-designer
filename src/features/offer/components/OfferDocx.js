import  { useEffect, useState } from 'react';
import { AlignmentType, WidthType, Document, Packer, Paragraph, TextRun, ImageRun, Table, TableRow, TableCell, VerticalAlign, BorderStyle } from "docx";
import saveAs from 'save-as';

import { useSelector } from 'react-redux';
import intToWords from '../../../utils/intToWords';
import formatDate from '../../../utils/formatDate';
import { Button } from 'react-bootstrap';

import Logo  from '../../../static/img/logo.png'
import initStrToArr from '../../../utils/docx/initStrToArr';
import initVat from '../../../utils/initVat';

const Docx = () => {

    const requisites = useSelector(state => state.offer.requisites)
    const startOfDoc = useSelector(state => state.offer.startOfDoc)
    const planItems = useSelector(state => state.offer.planItems)
    const guaranteesItems = useSelector(state => state.offer.guaranteesItems)
    const term = useSelector(state => state.offer.term)
    const city = useSelector(state => state.offer.city)
    const date = useSelector(state => state.offer.date)
    const totalPrice = useSelector(state => state.offer.totalPrice)
    const checkVat = useSelector(state => state.offer.checkVat)
    const jobTitle = useSelector(state => state.offer.jobTitle)
    const employee = useSelector(state => state.offer.employee)


    const [textTotalPrice, setTextTotalPrice] = useState('')
    const [trueDate, setTrueDate] = useState('')
    const [validDate, setValidDate] = useState('')
    const [planArr, setPlanArr] = useState([])
    const [guaranteesArr, setGuaranteesArr] = useState([])
    const [requisitesDoc, setRequisitesDoc] = useState([])
    const [jobTitleArr, setJobTitleArr] = useState([])
    
    const checkVatStr = checkVat ?  `, в том числе НДС: ${initVat(totalPrice)[0]} руб.  ${initVat(totalPrice)[1]} копеек.` : ''

    const initGuaranteesArr = (items) => {
        let arr = []

        if (items.length > 0) {
            items.forEach((item, i) => {
                arr.push(new TextRun({
                    text: `${i + 1}. ${item.title} \n`,
                    size: 24,
                    break:  1
                }))
            })
        }

        return arr
    }

    const initPlanArr = (items) => {
        let arr = []
            if (items.length > 0) {
                items.forEach((item, i) => {
                    arr.push(new TextRun({
                        text: `${i + 1}. ${item.title} - ${item.price} руб.`,
                        size: 24,
                        break: 1
                    }))
                }) 
            }

        return arr
    }


    useEffect(() => {
        setTextTotalPrice(`${intToWords(totalPrice)} руб.`)
    }, [totalPrice])

    useEffect(() => {
        setTrueDate(formatDate(new Date(date)))
        const initDate = (date) => {
            const arr = date.split('.')
    
            let d =  new Date(`${arr[2]}-${arr[1]}-${arr[0]}`)
            let t = new Date(d.setMonth(d.getMonth() + +term))
    
            term && term !== 0 && term !== '0' ? setValidDate(` до ${formatDate(t)}`) : setValidDate(' бессрочно')
        }
        initDate(date)
    }, [date, term])
    
    useEffect(() => {
        setPlanArr(initPlanArr(planItems))
    }, [planItems])

    useEffect(() => {
        setGuaranteesArr(initGuaranteesArr(guaranteesItems))
    }, [guaranteesItems])

    useEffect(() => {
        setRequisitesDoc(initStrToArr(requisites))
    }, [requisites])

    useEffect(() => {
        setJobTitleArr(initStrToArr(jobTitle))
    }, [jobTitle])


    const logo = new ImageRun({
        data: Logo,
        transformation: {
            width: 120,
            height: 40,
        }
    })


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
                                    children: [new Paragraph({children: [logo]})],
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
                new Table({
                    columnWidths: [8505, 505],
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
                                        size: 8505,
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
                                    children: [
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: city,
                                                    size: 24
                                                })
                                            ]
                                        })
                                    ],
                                }),
                                new TableCell({
                                    width: {
                                        size: 505,
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
                                    // children: [new Paragraph(trueDate)],
                                    children: [
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: trueDate,
                                                    size: 24
                                                })
                                            ]
                                        })
                                    ],
                                }),
                            ],
                        })
                    ]
                }),
                new Paragraph({
                    alignment: AlignmentType.CENTER,
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
                            text: "Коммерческое предложение",
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
                    // alignment: AlignmentType.JUSTIFIED,
                    children: [
                        new TextRun({
                            text: "\t",
                            size: 24,
                        }),
                        new TextRun({
                            text: startOfDoc,
                            size: 24,
                        }),
                        new TextRun({
                            text: ` ${totalPrice} руб. `,
                            size: 24,
                        }),
                        new TextRun({
                            text: textTotalPrice,
                            size: 24,
                        }),
                        new TextRun({
                            text: checkVatStr,
                            size: 24,
                            break: 1
                        }),

                    ]
                }),
                new Paragraph({
                    children: [
                        new TextRun({
                            text: 'План работ:',
                            size: 30,
                        }),
                    ]
                }),
                new Paragraph({
                    children: planArr
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
                            text: 'Мы гарантируем:',
                            size: 30,
                        })
                    ]
                }),
                new Paragraph({
                    children: guaranteesArr
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
                            text: '\tРасчет стоимости является предварительным. Окончательный расчет производится непосредственно перед заключением договора.',
                            size: 24,
                            break: 1
                        })
                    ]
                }),
                new Paragraph({
                    children: [
                        new TextRun({
                            text: '\tДанное коммерческое предложение действительно',
                            size: 24,
                        }),
                        new TextRun({
                            text: validDate,
                            size: 24,
                        }),
                        new TextRun({
                            break: 4
                        })
                    ]
                }),
                new Table({
                    columnWidths: [3003, 3003, 3003],
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
                                        size: 3003,
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
                                    // children: [new Paragraph({children: [jobTitleArr]})],
                                    children: [
                                        new Paragraph({
                                            children: jobTitleArr
                                        }),
                                    ]
                                }),
                                new TableCell({
                                    width: {
                                        size: 3003,
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
                                        size: 3003,
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
                                            alignment: AlignmentType.RIGHT,
                                            children: [
                                                new TextRun({
                                                    text: employee,
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

            ]
          }
        ]
      });

    const generate = () => {
        // let now =  Date.now()
        Packer.toBlob(doc).then((blob) => {
        //  saveAs(blob, `offer from ${(date)} - ${formatDate(new Date(now))}.docx`);
            saveAs(blob, `offer from ${(date)}.docx`);
        });
    }

    return (
        <Button 
        className='ms-2'
        variant="primary" 
        onClick={() => generate()}>
            Скачать .docx</Button>
    );
};

export default Docx;






