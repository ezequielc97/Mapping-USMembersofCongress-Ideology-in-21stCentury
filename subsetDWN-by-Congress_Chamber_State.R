##### This script outputs "2017-SOCAL-PM25Emissions.png", which charts pm2.5 emissions in Socal counties##### 
##### 2017-SOCAL-PM25Emissions.R ##### 

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
DWNCongressNum <- MasterDWNdata[MasterDWNdata$congress==116,]

##### filter by House #####
DWNHouse <- DWNCongressNum[DWNCongressNum$chamber=="House",]
##### filter by Senate #####
DWNSenate <- DWNCongressNum[DWNCongressNum$chamber=="Senate",]

##### filter by state #####
DWNHouse_California <- DWNHouse[DWNHouse$state_abbrev=="CA",]

##### Build Nominate-dimension1 average for House Districts ##### 
DWNbyDistrict <- aggregate(nominate_dim1~district_code, data=DWNHouse_California, sum)

##### .png device on/set output file #####
png(filename = "DWN-116thC-House-California.png", width=2000, height=768, bg = "white")
##### plot in .png device ##### 
barplot(DWNbyDistrict$nominate_dim1, space = 0.5, col=rgb(0.2,0.2,0.7,1.0),
        main = 'DWNominate Dimension 1 Representative Score by California Congressional District',
        names.arg = DWNbyDistrict$district_code,
        ylab = 'DWNominate Dimension 1 Score',
        xlab = 'Congressional District',
        cex.names=0.9,
        horiz = FALSE)
dev.off() ##### .png device off ##### 

