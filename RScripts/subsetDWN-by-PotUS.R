

#####  Assign DWNFolder to data folder ##### 
DWNFolder = 'DWNominate-Data'
DWNcsv = 'HSall_members.csv'
if(dir.exists(DWNFolder)) {
        MasterDWNdata <- read.csv(paste(DWNFolder,DWNcsv, sep = "/"))
} else {
        stop('------------> Cannot output .png:
       DWNFolder (data) is missing at [working directory]/DWNominate-Data/')
}

##### filter by Congress ##### 
DWNCongressNum <- MasterDWNdata[MasterDWNdata$congress==114,]

DWNPOTUS <- DWNCongressNum[DWNCongressNum$chamber=="President",]


##### filter by House ########################################################
#DWNHouse <- DWNCongressNum[DWNCongressNum$chamber=="House",]
##### filter by Senate #####
#DWNSenate <- DWNCongressNum[DWNCongressNum$chamber=="Senate",]

##### filter by state #####
#$DWNHouse_NewYork <- DWNHouse[DWNHouse$state_abbrev=="NY",]

#DWNHouse$STATEFP <- paste(DWNHouse_NewYork$state_abbrev,"-",DWNHouse_NewYork$district_code, sep="")

#
#DWNHouse$CD116FP <- DWNHouse$district_code

#DWNHouse$STCD <- paste(DWNHouse$state_abbrev,"-",DWNHouse$district_code, sep="")
#

#
#DWNHouse$CD116FP <- DWNHouse$district_code

DWNPOTUS$STCD <- paste(DWNPOTUS$state_abbrev,"-DC", sep="")
#

##### Build Nominate-dimension1 average for House Districts ##### 
#DWNDColumbia <- aggregate(nominate_dim1~STCD, data=DWNPOTUS, sum)

##### .png device on/set output file #####
#png(filename = "DWN-116thC-House-UnitedStates.png", width=3000, height=1000, bg = "white")
##### plot in .png device ##### 
#barplot(DWNbyDistrict$nominate_dim1, space = 0.5, col=rgb(0.2,0.2,0.7,1.0),
       # main = 'DWNominate Dimension 1 Representative Score by Congressional District',
       # names.arg = DWNbyDistrict$district_code,
        #ylab = 'DWNominate Dimension 1 Score',
        #xlab = 'Congressional District',
        #horiz = FALSE)
#dev.off() ##### .png device off ##### 

#write.csv(DWNHouse_NewYork, file = "DWN-116thC-House-NewYork.csv")


#DWNHouse_NewYork$STATEFP <- stringr::str_pad(6, width = 1,side = c("left"), pad = "0")
#DWNHouse_NewYork$CD116FP <- DWNHouse_NewYork$district_code

#DWNHouse_NewYork$STCD <- paste(DWNHouse_NewYork$state_abbrev,"-",DWNHouse_NewYork$district_code, sep="")

OutputCSV <- "DWN-POTUS43-BHObama-C114.csv"
OutputFolder <- "DWNominate-Data"

write.csv(DWNPOTUS, file = paste(OutputFolder,OutputCSV, sep = "/"))

#NumDistrictsInState <- seq(1, 54)
#STATEFP <- data.frame(fix.empty.names = FALSE)


