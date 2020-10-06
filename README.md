Mapping Ideology of US Congress Members in the 21st Century (2000-2018)
================
Ezequiel Contreras

# Mapping-USMembersofCongress-Ideology-in-21stCentury

#### Introduction

The purpose of this work in progress is to map US Representatives’ and
Senators’ ideological scores onto their districts.

DW-NOMINATE Scores are a measure of ideology developed by Keith T. Poole
and Howard Rosenthal at Carnegie-Mellon University between in the late
1980’s.

This work in progress will map DW-Nominate Scores for US members of
Congress (US Representatives and Senators) by Congressional District for
the period of 2000-2018. This project uses ideological data accessible
through voteview.com. Voteview.com hosts DW-Nominate Score data for all
Members of Congress from the 1st to 116th Congresses (see citation at
end of doc).

#### File Table

  - map-master.qgz ….. latest master QGIS map project
  - /district\_boundaries\_shapefiles ….. district and state boundary
    shapefiles
  - /QGIS-Files ….. QGIS map export templates
  - /member\_ideology\_data ….. Ideological data for House, Senate,
    POTUS
  - /RScripts ….. mainly subset data scripts
  - /qgis2web\_maps ….. rough webmaps (.zip)
  - /maps\_png ….. rough map outputs (.png)
  - /district\_boundaries\_shapefiles/documentation\_jefflewis\_ucla …..
    documentation for district shapefile metadata

#### Initial interactive webmaps

(hosting somewhere on web soon)

#### Rough Map Samples

  - Representative Nominate Dimension 1 scores by Congressional
    District, 116th Congress (2019-2021)

![Representative Nominate Dimension 1 scores by Congressional District,
116th Congress (2019-2021)](maps_png/nl_116_MasterView_Massive.png)

  - Representative Nominate Dimension 1 scores by Congressional
    District, 115th Congress (2017-2019)

![Representative Nominate Dimension 1 scores by Congressional District,
115th Congress (2017-2019)](maps_png/nl_115_MasterView_Massive.png)

  - Representative Nominate Dimension 1 scores by Congressional
    District, 114th Congress (2015-2017)

![Representative Nominate Dimension 1 scores by Congressional District,
114th Congress (2015-2017)](maps_png/nl_114_MasterView_Massive.png)

  - Representative Nominate Dimension 1 scores by Congressional
    District, 113th Congress (2013-2015)

![Representative Nominate Dimension 1 scores by Congressional District,
113th Congress (2013-2015)](maps_png/nl_113_MasterView_Massive.png)

#### To Do Next

  - ~~Finish Mapping Dimension 1 Nominate Score for all 2018 House
    districts~~
  - ~~adjust map color coding~~
  - ~~update file table~~
  - ~~add Senate shape layer to map, join Nominate dimension1 data~~
  - upgrade introduction
  - ~~add PRESIDENT nominate dimension1 score for 2016-2018 to color
    Washington DC~~
  - map dimension 2 scores for 2018
  - ~~Add 2016-2017 Congressional district layer to GIS proj~~
  - build R script to subset by political party, add party layer to GIS
    proj
  - ~~build initial webmap~~
  - ~~package webmap(s) into .zip files for download~~
  - build %change over election years plot script
  - build project site to exhibit maps

#### Data

##### Ideological data from:

  - Lewis, Jeffrey B., Keith Poole, Howard Rosenthal, Adam Boche, Aaron
    Rudkin, and Luke Sonnet (2020). Voteview: Congressional Roll-Call
    Votes Database. <https://voteview.com/>

##### Congressional District cartographic boundary data for 113-116th Congress from:

  - [US Census Bureau - US Congressional District Cartographic Boundary
    shapefiles -
    Shapefiles](https://www.census.gov/geographies/mapping-files/time-series/geo/carto-boundary-file.html)
    <https://www.census.gov/geographies/mapping-files/time-series/geo/carto-boundary-file.html>

##### Congressional District cartographic boundary data for 112th Congress and earlier from:

  - Jeffrey B. Lewis, Brandon DeVine, Lincoln Pitcher, and Kenneth C.
    Martis. (2013) Digital Boundary Definitions of U.S. Congressional
    Districts, 1789-2012. Retrieved from
    <http://cdmaps.polisci.ucla.edu> on October 5, 2020
