import { TextRun } from "docx"

const initStrToArr = (str) => {
    let arrStr = str.split('\n')
    let arr = []

    if (arrStr.length > 0) {
        arrStr.forEach((item) => {
            arr.push(new TextRun({
                text: `${item}`,
                size: 24,
                break: 1
            }))
        })
    }

    return arr
}

export default initStrToArr