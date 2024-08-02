// function fixedDecimal (n: number ){
//     const x = n.toLocaleString()
//     return x
// }
// console.log(fixedDecimal(10000))

// const str: string = "      siravit      "

// console.log(str.toLowerCase())

// function checkStringLength (name:string) {
//     console.log (name.length)
// }
//  checkStringLength ("tle")


// function getcharByIndex(msg: string, index: number) {
//     return msg.charAt(index)
// }
// console.log(getcharByIndex('อยากกลับบ้านนน', 3))


const str: string = 'ฉันรักเธอ'

console.log (str.includes('ยัง'))


function checkStrIndex(str:string, search: string) {
    if (str.includes(search)) {
        console.log(str.indexOf(search))
    } else {
        console.log('ไม่พบคำที่ค้นหา')
    }
}

checkStrIndex('อยากกลับบ้านนน Home','m')