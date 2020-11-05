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
