let g = 0
let result = ''

const toRoman = number => {
    let num = String(+number).split('')
    if(num.length === 4){
        if(num[0] >= 5){
            g = num[0]
            while(g > 0) {
                result = result + 'X'
                g--
            }
        }

        if(num[1] >= 5){
            g = num[1] - 5
            result = result + 'D'
            while(g > 0) {
            result = result + 'C'
            g--
            }
        } else{
            g = num[1]
            while(g > 0) {
                result = result + 'C'
                g--
            }
        }

        if(num[2] >= 5){
            g = num[2] - 5
            result = result + 'L'
            while(g > 0) {
            result = result + 'X'
            g--
            }
        } else{
            g = num[2]
            while(g > 0) {
                result = result + 'X'
                g--
            }
        }

        if(num[3] >= 5){
            g = num[3] - 5
            result = result + 'V'
            while(g > 0) {
            result = result + 'I'
            g--
            }
        } else{
            g = num[3]
            while(g > 0) {
                result = result + 'I'
                g--
            }
        }

    }else if(num.length === 3){
        if(num[0] >= 5){
            g = num[0] - 5
            result = result + 'D'
            while(g > 0) {
            result = result + 'C'
            g--
            }
        } else{
            g = num[0]
            while(g > 0) {
                result = result + 'C'
                g--
            }
        }


        if(num[1] >= 5){
            g = num[1] - 5
            result = result + 'L'
            while(g > 0) {
            result = result + 'X'
            g--
            }
        } else{
            g = num[1]
            while(g > 0) {
                result = result + 'X'
                g--
            }
        }


        if(num[2] >= 5){
            g = num[2] - 5
            result = result + 'V'
            while(g > 0) {
            result = result + 'I'
            g--
            }
        } else{
            g = num[2]
            while(g > 0) {
                result = result + 'I'
                g--
            }
        }

    }else if(num.length === 2){
        if(num[0] >= 5){
            g = num[0] - 5
            result = result + 'L'
            while(g > 0) {
            result = result + 'X'
            g--
            }
        } else{
            g = num[0]
            while(g > 0) {
                result = result + 'X'
                g--
            }
        }


        if(num[1] >= 5){
            g = num[1] - 5
            result = result + 'V'
            while(g > 0) {
                result = result + 'I'
                g--
            }
        }else {
            g = num[1]
            while(g > 0) {
                result = result + 'I'
                g--
            }
        }
        

    }else if(num.length === 1){
        if(num[0] >= 5){
            g = num[0] - 5
            result = result + 'V'
            while(g > 0) {
                result = result + 'I'
                g--
            }
        } else{
            g = num[0]
            while(g > 0) {
                result = result + 'I'
                g--
            }
        }
    }

    console.log(result)

    result = ''
}






toRoman(5)
// 'V'

toRoman(267)
// 'CCLXVII'

toRoman(99)
// 'LXXXXVIIII'