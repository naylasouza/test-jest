const soma = require("./soma");

test ('soma de 2+2 tem que dar 4', ()=>{
    expect(soma(2,2)).toBe(4)
})