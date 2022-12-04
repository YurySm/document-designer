const todayDate = () => {
    let date = new Date();

    let dd = date.getDate();
    if (dd < 10) dd = '0' + dd;

    let mm = date.getMonth() + 1;
    if (mm < 10) mm = '0' + mm;

    let yy = date.getFullYear().toString()

    return `${yy}-${mm}-${dd}`
}

export default todayDate;