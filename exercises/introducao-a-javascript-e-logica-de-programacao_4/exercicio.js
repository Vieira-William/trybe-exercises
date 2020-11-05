//Exercicio 01
let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  };

  console.log("Bem vinda, " + info.personagem)

  //Exercicio 02
  let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  };

  info.recorrente = "sim"

  console.log(info)

//Exercicio 03

let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};

info.recorrente = "sim"

  
for (k in info) {
  console.log(k)
}

//Exercicio 04

let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};

info.recorrente = "sim"

  
for (k in info) {
  console.log(info[k])
}

//Exercicio 05

let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  recorrente: "Sim"
};

let info2 = {
  personagem: "Tio Patinhas",
  origem: "e Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: "e O último MacPatinhas",
  recorrente: "Não"
};

for (k in info) {
  if (
    info.recorrente === info2.recorrente
  ) {
    console.log("Ambos recorrentes");
  } else {
    console.log(info[k] + " e " + info2[k]);
  }
}
