library(tidyverse)


cvs = read_csv("data/cvs.csv")

dir = dir("data")[1:4]


otituluj = function(TITULPRED, TITULZA) {
  result=""
  if (nchar(TITULPRED)>0 && nchar(TITULZA)>0) {
    result=(paste0(", ", TITULPRED, " ", TITULZA))
    #return("beides")
  }
  else if (nchar(TITULPRED)>0) {
    result=(paste0(", ", TITULPRED))
  }
  else if (nchar(TITULZA)>0) {
    result=return(paste0(", ", TITULZA))
  }
  return(result)
}
zvoleni = tibble()


otituluj("a", "")

for (i in dir) {
  path = paste0("data/", i, "/serk.csv")
  print(path)
  data <- read_csv2(path, locale = locale(encoding = "cp1250"), na=character())
  zvoleni = rbind(
    zvoleni,
    data %>%
      filter(ZVOLEN_K2 == 1 | ZVOLEN_K1 == 1) %>%
      left_join(cvs, by=c("NSTRANA" = "VSTRANA")) %>%
     # mutate(TITULY = otituluj(TITULPRED=TITULPRED, TITULZA=TITULZA)) %>%
      mutate(vitez = paste0(JMENO, " ", PRIJMENI)) %>%
      mutate(datum=i) %>%
      select(datum, obvod = OBVOD, vitez, strana = ZKRATKAV8)
  )
  
}

write_csv(zvoleni, "sentori2022.csv")
