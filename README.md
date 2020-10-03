Mapping Ideology of US Congress Members in the 21st Century (2000-2018)
================
Ezequiel Contreras

# Mapping-USMembersofCongress-Ideology-in-21stCentury

##### Introduction

The purpose of this work in progress is to create a geo-spatial
visualization of the ideological representation in the United States
Congress.

DW-NOMINATE Scores are a measure of ideology developed by Keith T. Poole
and Howard Rosenthal at Carnegie-Mellon University between in the late
1980’s.

This work in progress will map DW-Nominate Scores for US members of
Congress (US Representatives and Senators) by Congressional District for
the period of 2000-2018. This project uses ideological data accessible
through voteview.com. Voteview.com hosts DW-Nominate Score data for all
Members of Congress from the 1st to 116th Congresses (see citation at
end of doc).

##### File Table

  - “map-master.qgz” ….. master QGIS map project
  - "

##### Rough Map Samples

  - Mapped House Districts for Dimension 1 Scores \[as of 10/3/20\],
    116th Congress, United States (2018)

![Mapped House Districts for Dimension 1 Scores (as of 10/3/20), 116th
Congress, United States (2018)](DWN-D1-MappedDistricts-current.png)

  - Representative Dimension 1 Nominate Scores by District, 116th
    Congress, California (2018)

![Representative Dimension 1 Nominate Scores by District, California,
2018](DWN-D1-116thC-House-California.png)

##### To Do Next

  - Finish Mapping Dimension 1 Nominate Score for all 2018 House
    districts
  - build R script to subset by political party, add party layer to GIS
    proj
  - build initial webmap
  - map dimension 2 scores for 2018
  - Add 2016-2017 Congressional district layer to GIS proj
  - update file table
  - build %change over election years plot script
  - improve map color coding

##### Data

Ideological data from:

  - Lewis, Jeffrey B., Keith Poole, Howard Rosenthal, Adam Boche, Aaron
    Rudkin, and Luke Sonnet (2020). Voteview: Congressional Roll-Call
    Votes Database. <https://voteview.com/>

See documentation for Entity definitions in data here:

  - [Entity name
    definitions](https://github.com/ezequielc97/Mapping-USMembersofCongress-Ideology-in-21stCentury/tree/main/CongDistrict-CartographicBoundaries/EntityNameDefinitions)

Congressional District cartogtraphic boundary data from:

  - [US Census Bureau - Congressional DistrictsCartographic Boundary
    Files -
    Shapefiles](https://www.census.gov/geographies/mapping-files/time-series/geo/carto-boundary-file.html)
