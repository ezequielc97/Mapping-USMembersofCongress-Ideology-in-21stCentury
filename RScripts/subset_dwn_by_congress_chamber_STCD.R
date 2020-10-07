

#####  Assign DWNFolder to data folder ##### 
DWNFolder = 'member_ideology_data'
DWNcsv = 'HSall_members.csv'
if(dir.exists(DWNFolder)) {
        MasterDWNdata <- read.csv(paste(DWNFolder,DWNcsv, sep = "/"))
} else {
        stop('------------> Cannot output .png:
       DWNFolder (data) is missing at [working directory]/member_ideology_data/')
}

congress_num <- readline(prompt="Enter Congress number (ex: 112, 116, 23): ")
# convert character into integer
congress_num <- as.integer(congress_num)
print(paste("subsetting by US Congress number --->",congress_num))

congress_chamber <- readline(prompt="Enter chamber (either 'House 'Senate' or President'): ")
# convert character into integer

print(paste("subsetting by US Congress chamber --->",congress_chamber))


##### filter by Congress ##### 
DWNCongressNum <- MasterDWNdata[MasterDWNdata$congress==congress_num,]

##### filter by House #####
DWNChamber <- DWNCongressNum[DWNCongressNum$chamber==congress_chamber,]
##### filter by Senate #####
#DWNSenate <- DWNCongressNum[DWNCongressNum$chamber=="Senate",]

##### filter by state #####
#$DWNHouse_NewYork <- DWNHouse[DWNHouse$state_abbrev=="NY",]

#DWNHouse$STATEFP <- paste(DWNHouse_NewYork$state_abbrev,"-",DWNHouse_NewYork$district_code, sep="")

DWNChamber$CD <- DWNChamber$district_code
DWNChamber$STCD <- paste(DWNChamber$state_abbrev,"-",DWNChamber$district_code, sep="")
######################only works with house so far

##### Build Nominate-dimension1 average for House Districts ##### 
#DWNbyDistrict <- aggregate(nominate_dim1~STCD, data=DWNHouse, sum)

##### .png device on/set output file #####
#png(filename = "DWN-116thC-House-UnitedStates.png", width=3000, height=1000, bg = "white")
##### plot in .png device ##### 
#barplot(DWNbyDistrict$nominate_dim1, space = 0.5, col=rgb(0.2,0.2,0.7,1.0),
  #      main = 'DWNominate Dimension 1 Representative Score by Congressional District',
   #     names.arg = DWNbyDistrict$district_code,
    #    ylab = 'DWNominate Dimension 1 Score',
     #   xlab = 'Congressional District',
      #  cex.names=0.9,
       # horiz = FALSE)
#dev.off() ##### .png device off ##### 

#write.csv(DWNHouse_NewYork, file = "DWN-116thC-House-NewYork.csv")


#DWNHouse_NewYork$STATEFP <- stringr::str_pad(6, width = 1,side = c("left"), pad = "0")
#DWNHouse_NewYork$CD116FP <- DWNHouse_NewYork$district_code

#DWNHouse_NewYork$STCD <- paste(DWNHouse_NewYork$state_abbrev,"-",DWNHouse_NewYork$district_code, sep="")

OutputCSV <- paste(congress_chamber,"_",congress_num,"_STCD.csv", sep = "") 
OutputFolder <- "member_ideology_data"


write.csv(DWNChamber, file = paste(OutputFolder,OutputCSV, sep = "/"))

#NumDistrictsInState <- seq(1, 54)
#STATEFP <- data.frame(fix.empty.names = FALSE)


