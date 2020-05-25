For this project, I used the following packages:

-   glue
-   dplyr
-   tidyverse
-   lubridate
-   readr
-   viridis
-   plotly
-   scales
-   ggplotlyExtra
-   rjson
-   moments
-   quantreg
-   caret
-   kableExtra

I suggest running this code so that all your numbers are not in
scientific notation:

    options(scipen = 999)

For this project I used 4 data sets. The first one has details about
coronavirus cases in the USA by county, which would be the equivalent of
NUTS 3 regions. This comes from the [New York Times
github](https://github.com/nytimes/covid-19-data)

The second one has socio-economic and demographic data about the US by
county which was taken from the [Center for Disease
Control](https://nccd.cdc.gov/DHDSPAtlas/Reports.aspx).

The third data set has information about the number and characteristics
of each airport by county, which I took from the [Federal Aviation
Administration](https://www.faa.gov/airports/airport_safety/airportdata_5010/menu/).

Finally, the fourth data set was downloaded from [Scott on
Technology](https://scottontechnology.com/list-of-50-us-states-in-excel/).

I cleaned as well as joined the second and third data sets in Excel into
one.

Introduction to R Markdown
==========================

R markdown is a great tool that you can use to integrate many different
characteristics of your analysis, such as interactive visualizations or
server-side interactions.

These are just some of the things you can create with R markdown:

-   pdfs
-   docs
-   html
-   dashboards
-   presentations
-   websites

Yes, that’s right - you can make presentations directly from R! This can
be really helpful if you want to show code and output without having to
copy and paste a bunch of things. Check out [this
blog](https://r4ds.had.co.nz/r-markdown-formats.html#interactivity) for
more information on R Markdown formats and tutorials.

R markdown can be used alongside WordPress and can be used to display
Quick LaTeX. The easiest way to understand LaTeX is that it enables you
to write maths easily. For example:

$$
\\frac{x\_b}{x\_a}
$$
$$
\\sum\_{j=0}^{i=0}{\\frac{z\_i^j}{i+100^i}}
$$

You can also render images but I’ll leave the explanation up to [the
experts](http://www.holoborodko.com/pavel/quicklatex/). LaTeX rules are
super easy to follow so don’t be afraid to try!

Preparing the Data
==================

Before diving into any analysis, it is necessary to clean the data.
While everyone has their own process, it is helpful for me when I
already have an idea of what I want to do. I came up with three goals
for this analysis:

1.  Perform an exploratory analysis
2.  Create interactive visualizations
3.  Play with a couple of models for the data

In the NYT data set, there were a couple of geographical exceptions for
which they did not use a traditional “fips” county codes - which are
just unique identification numbers for countries. For example, they
created a fictitious “New York City” that would act as a county for
itself. I instead chose to impute these numbers into a county that
didn’t have any cases reported yet - Manhattan - in order to be able to
visualize them using this geographical identifier (the fips).

Exploratory Analysis
====================

In order to perform and EDA, I created a couple of tables that
summarized characteristics of the coronavirus data set.

First, it we will look at the information about the variables in the
analysis. I merged the four data sets together for cases only on the
13th of April.

<table class="table table-striped" style="width: auto !important; margin-left: auto; margin-right: auto;">
<thead>
<tr>
<th style="text-align:left;">
</th>
<th style="text-align:left;">
Variable Description
</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left;">
date
</td>
<td style="text-align:left;">
Date
</td>
</tr>
<tr>
<td style="text-align:left;">
county
</td>
<td style="text-align:left;">
Name of county
</td>
</tr>
<tr>
<td style="text-align:left;">
state
</td>
<td style="text-align:left;">
State of county
</td>
</tr>
<tr>
<td style="text-align:left;">
fips
</td>
<td style="text-align:left;">
Federal Information Processing Standard Publication, was a five-digit
fips code which uniquely identified counties and county equivalents in
the United States, certain U.S. possessions, and certain freely
associated states
</td>
</tr>
<tr>
<td style="text-align:left;">
cases
</td>
<td style="text-align:left;">
Confirmed cases are patients who test positive for the coronavirus
</td>
</tr>
<tr>
<td style="text-align:left;">
deaths
</td>
<td style="text-align:left;">
The cumulative number of confirmed cases and deaths as reported that day
in that county or state
</td>
</tr>
<tr>
<td style="text-align:left;">
diabetes\_perc
</td>
<td style="text-align:left;">
Diagnosed Diabetes, Age-Adjusted Percentage, 20+, 2016
</td>
</tr>
<tr>
<td style="text-align:left;">
nohsdip\_perc
</td>
<td style="text-align:left;">
Percentage without High School Diploma, Ages 25+, 2013-2017 (5-year)
</td>
</tr>
<tr>
<td style="text-align:left;">
femalehd\_perc
</td>
<td style="text-align:left;">
Families with Female Head of Household (%), 2013-2017 (5-year)
</td>
</tr>
<tr>
<td style="text-align:left;">
foodstmp\_perc
</td>
<td style="text-align:left;">
Percentage Food Stamp/Supplemental Nutrition Assistance Program
Recipients, 2016
</td>
</tr>
<tr>
<td style="text-align:left;">
med\_home\_val\_000s
</td>
<td style="text-align:left;">
Median Home Value (in thousands of $), 2013-2017 (5-year)
</td>
</tr>
<tr>
<td style="text-align:left;">
med\_hh\_inc\_000s
</td>
<td style="text-align:left;">
Median Household Income (in thousands of $), 2017
</td>
</tr>
<tr>
<td style="text-align:left;">
gini
</td>
<td style="text-align:left;">
Income Inequality (Gini Index), 2013-2017 (5-year)
</td>
</tr>
<tr>
<td style="text-align:left;">
perc\_poverty
</td>
<td style="text-align:left;">
Percentage Living in Poverty, All Ages, 2017
</td>
</tr>
<tr>
<td style="text-align:left;">
unemp\_rt
</td>
<td style="text-align:left;">
Unemployment Rate, Ages 16+, 2018
</td>
</tr>
<tr>
<td style="text-align:left;">
pop65up\_perc
</td>
<td style="text-align:left;">
Population Aged 65 and Older (%), 2013-2017 (5-year)
</td>
</tr>
<tr>
<td style="text-align:left;">
airpm2.5conc
</td>
<td style="text-align:left;">
Annual Average Ambient Concentrations of PM2.5, 2015
</td>
</tr>
<tr>
<td style="text-align:left;">
perc\_sev\_housing
</td>
<td style="text-align:left;">
Percentage of Households Living with Severe Housing Problems, 2010-2014
(5 year)
</td>
</tr>
<tr>
<td style="text-align:left;">
urban\_rural
</td>
<td style="text-align:left;">
Urban-Rural Status, 2014
</td>
</tr>
<tr>
<td style="text-align:left;">
hospitals
</td>
<td style="text-align:left;">
Number of Hospitals, 2017
</td>
</tr>
<tr>
<td style="text-align:left;">
prim\_phys
</td>
<td style="text-align:left;">
Population per Primary Care Physician (in thousands), 2017
</td>
</tr>
<tr>
<td style="text-align:left;">
perc\_wo\_ins\_und65
</td>
<td style="text-align:left;">
Percentage without Health Insurance, Under Age 65, 2017
</td>
</tr>
<tr>
<td style="text-align:left;">
cost\_percap\_medicare\_hd
</td>
<td style="text-align:left;">
Cost of Care per Capita for Medicare Beneficiaries Diagnosed with Heart
Disease, Total, 2017
</td>
</tr>
<tr>
<td style="text-align:left;">
hd\_among\_ins\_perc
</td>
<td style="text-align:left;">
Prevalence of Diagnosed Heart Disease Among Medicare Beneficiaries, 2017
</td>
</tr>
<tr>
<td style="text-align:left;">
cardio\_deathrt\_per\_hundthou\_ov35
</td>
<td style="text-align:left;">
Total Cardiovascular Disease Death Rate per 100,000, 35+, All
Races/Ethnicities, Both Genders, 2014-2017
</td>
</tr>
<tr>
<td style="text-align:left;">
hyperten\_deathrt\_perhundthou\_over35
</td>
<td style="text-align:left;">
Hypertension Death Rate per 100,000 (any mention), 35+, All
Races/Ethnicities, Both Genders, 2014-2017
</td>
</tr>
<tr>
<td style="text-align:left;">
population
</td>
<td style="text-align:left;">
Total Population, 2013-2017 (5-year)
</td>
</tr>
<tr>
<td style="text-align:left;">
airport
</td>
<td style="text-align:left;">
Number of attended airports in the county
</td>
</tr>
</tbody>
</table>

Here, you can see the first and last cases included in this data set
from the time that I downloaded it.

<table class="table table-striped" style="width: auto !important; margin-left: auto; margin-right: auto;">
<thead>
<tr>
<th style="text-align:left;">
First and Last Case Reported
</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left;">
2020-01-21
</td>
</tr>
<tr>
<td style="text-align:left;">
2020-04-13
</td>
</tr>
</tbody>
</table>

Next, you can see some information about the coronavirus data set.

<table class="table table-striped" style="width: auto !important; margin-left: auto; margin-right: auto;">
<thead>
<tr>
<th style="text-align:right;">
Number of Observations in the Data Set
</th>
<th style="text-align:right;">
Unique Counties (imputed Manhattan)
</th>
<th style="text-align:right;">
Unique States
</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:right;">
56541
</td>
<td style="text-align:right;">
2681
</td>
<td style="text-align:right;">
55
</td>
</tr>
</tbody>
</table>
Here, you can see the top 10 counties that have the most cumulative
coronavirus deaths as of 13-04-2020.
<table class="table table-striped" style="width: auto !important; margin-left: auto; margin-right: auto;">
<thead>
<tr>
<th style="text-align:left;">
date
</th>
<th style="text-align:left;">
county
</th>
<th style="text-align:left;">
state
</th>
<th style="text-align:right;">
fips
</th>
<th style="text-align:right;">
cases
</th>
<th style="text-align:right;">
deaths
</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left;">
2020-04-13
</td>
<td style="text-align:left;">
New York City
</td>
<td style="text-align:left;">
New York
</td>
<td style="text-align:right;">
36061
</td>
<td style="text-align:right;">
106764
</td>
<td style="text-align:right;">
7154
</td>
</tr>
<tr>
<td style="text-align:left;">
2020-04-13
</td>
<td style="text-align:left;">
Nassau
</td>
<td style="text-align:left;">
New York
</td>
<td style="text-align:right;">
36059
</td>
<td style="text-align:right;">
24358
</td>
<td style="text-align:right;">
1109
</td>
</tr>
<tr>
<td style="text-align:left;">
2020-04-13
</td>
<td style="text-align:left;">
Wayne
</td>
<td style="text-align:left;">
Michigan
</td>
<td style="text-align:right;">
26163
</td>
<td style="text-align:right;">
11648
</td>
<td style="text-align:right;">
760
</td>
</tr>
<tr>
<td style="text-align:left;">
2020-04-13
</td>
<td style="text-align:left;">
Westchester
</td>
<td style="text-align:left;">
New York
</td>
<td style="text-align:right;">
36119
</td>
<td style="text-align:right;">
19785
</td>
<td style="text-align:right;">
610
</td>
</tr>
<tr>
<td style="text-align:left;">
2020-04-13
</td>
<td style="text-align:left;">
Suffolk
</td>
<td style="text-align:left;">
New York
</td>
<td style="text-align:right;">
36103
</td>
<td style="text-align:right;">
21643
</td>
<td style="text-align:right;">
580
</td>
</tr>
<tr>
<td style="text-align:left;">
2020-04-13
</td>
<td style="text-align:left;">
Cook
</td>
<td style="text-align:left;">
Illinois
</td>
<td style="text-align:right;">
17031
</td>
<td style="text-align:right;">
15474
</td>
<td style="text-align:right;">
543
</td>
</tr>
<tr>
<td style="text-align:left;">
2020-04-13
</td>
<td style="text-align:left;">
Bergen
</td>
<td style="text-align:left;">
New Jersey
</td>
<td style="text-align:right;">
34003
</td>
<td style="text-align:right;">
10092
</td>
<td style="text-align:right;">
482
</td>
</tr>
<tr>
<td style="text-align:left;">
2020-04-13
</td>
<td style="text-align:left;">
Essex
</td>
<td style="text-align:left;">
New Jersey
</td>
<td style="text-align:right;">
34013
</td>
<td style="text-align:right;">
7634
</td>
<td style="text-align:right;">
433
</td>
</tr>
<tr>
<td style="text-align:left;">
2020-04-13
</td>
<td style="text-align:left;">
Oakland
</td>
<td style="text-align:left;">
Michigan
</td>
<td style="text-align:right;">
26125
</td>
<td style="text-align:right;">
5073
</td>
<td style="text-align:right;">
347
</td>
</tr>
<tr>
<td style="text-align:left;">
2020-04-13
</td>
<td style="text-align:left;">
Los Angeles
</td>
<td style="text-align:left;">
California
</td>
<td style="text-align:right;">
6037
</td>
<td style="text-align:right;">
9420
</td>
<td style="text-align:right;">
320
</td>
</tr>
</tbody>
</table>
Here, you can see the top 10 counties that have the most cumulative
coronavirus cases as of 13-04-2020.
<table class="table table-striped" style="width: auto !important; margin-left: auto; margin-right: auto;">
<thead>
<tr>
<th style="text-align:left;">
date
</th>
<th style="text-align:left;">
county
</th>
<th style="text-align:left;">
state
</th>
<th style="text-align:right;">
fips
</th>
<th style="text-align:right;">
cases
</th>
<th style="text-align:right;">
deaths
</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left;">
2020-04-13
</td>
<td style="text-align:left;">
New York City
</td>
<td style="text-align:left;">
New York
</td>
<td style="text-align:right;">
36061
</td>
<td style="text-align:right;">
106764
</td>
<td style="text-align:right;">
7154
</td>
</tr>
<tr>
<td style="text-align:left;">
2020-04-13
</td>
<td style="text-align:left;">
Nassau
</td>
<td style="text-align:left;">
New York
</td>
<td style="text-align:right;">
36059
</td>
<td style="text-align:right;">
24358
</td>
<td style="text-align:right;">
1109
</td>
</tr>
<tr>
<td style="text-align:left;">
2020-04-13
</td>
<td style="text-align:left;">
Suffolk
</td>
<td style="text-align:left;">
New York
</td>
<td style="text-align:right;">
36103
</td>
<td style="text-align:right;">
21643
</td>
<td style="text-align:right;">
580
</td>
</tr>
<tr>
<td style="text-align:left;">
2020-04-13
</td>
<td style="text-align:left;">
Westchester
</td>
<td style="text-align:left;">
New York
</td>
<td style="text-align:right;">
36119
</td>
<td style="text-align:right;">
19785
</td>
<td style="text-align:right;">
610
</td>
</tr>
<tr>
<td style="text-align:left;">
2020-04-13
</td>
<td style="text-align:left;">
Cook
</td>
<td style="text-align:left;">
Illinois
</td>
<td style="text-align:right;">
17031
</td>
<td style="text-align:right;">
15474
</td>
<td style="text-align:right;">
543
</td>
</tr>
<tr>
<td style="text-align:left;">
2020-04-13
</td>
<td style="text-align:left;">
Wayne
</td>
<td style="text-align:left;">
Michigan
</td>
<td style="text-align:right;">
26163
</td>
<td style="text-align:right;">
11648
</td>
<td style="text-align:right;">
760
</td>
</tr>
<tr>
<td style="text-align:left;">
2020-04-13
</td>
<td style="text-align:left;">
Bergen
</td>
<td style="text-align:left;">
New Jersey
</td>
<td style="text-align:right;">
34003
</td>
<td style="text-align:right;">
10092
</td>
<td style="text-align:right;">
482
</td>
</tr>
<tr>
<td style="text-align:left;">
2020-04-13
</td>
<td style="text-align:left;">
Los Angeles
</td>
<td style="text-align:left;">
California
</td>
<td style="text-align:right;">
6037
</td>
<td style="text-align:right;">
9420
</td>
<td style="text-align:right;">
320
</td>
</tr>
<tr>
<td style="text-align:left;">
2020-04-13
</td>
<td style="text-align:left;">
Rockland
</td>
<td style="text-align:left;">
New York
</td>
<td style="text-align:right;">
36087
</td>
<td style="text-align:right;">
7965
</td>
<td style="text-align:right;">
182
</td>
</tr>
<tr>
<td style="text-align:left;">
2020-04-13
</td>
<td style="text-align:left;">
Hudson
</td>
<td style="text-align:left;">
New Jersey
</td>
<td style="text-align:right;">
34017
</td>
<td style="text-align:right;">
7879
</td>
<td style="text-align:right;">
236
</td>
</tr>
</tbody>
</table>

Creating Interactive Data Visualizations
========================================

Based on both a lecture I had the other day on R, Python and Julia and
reading things online, I have come to the conclusion that data
visualizations using base R versus packages like ggplot are used on two
different occasions.

Base R can be recommended to be used when you want to ensure the
longevity of your code. Meaning, because base R remains the same, you
can be sure of your code functioning on any computer, for years to come.

One of the disadvantages of base R is, of course, the fact that you
won’t get the same level of creativity as you do with R packages.

On the flip side, packages can be recommended to be used when you’re not
so concerned about longevity so much as the breadth of what you can
accomplish. Meaning, if you have a one-off project like this or need to
create some one-off report, R packages can offer you a lot more
creativity.

The disadvantage of using packages is that it will be subject to package
updates or even packages becoming obsolete in the future.

Creating Interactive Graphs
---------------------------

To make the following interactive graphs and maps, I am using two
packages:

-   ggplot2
-   plotly

If you want to see some basic interactive charts, which where the
inspiration for the following ones, check out R Graph Gallery’s section
on [interactive
charts](https://www.r-graph-gallery.com/interactive-charts.html)

<center>
![](2020-05-25-test-markdwon_files/figure-markdown_strict/unique%20counties-1.png)
</center>

Here, you can see that the number of unique counties reporting at least
1 coronavirus case has steadily grown. However, at the latest date, this
growth has finally slowed down.

<center>
![](2020-05-25-test-markdwon_files/figure-markdown_strict/cumulative%20cases-1.png)
</center>

In this graph, you can see the cumulative number of cases reported. As
of April 13th, this number is still growing and the United States
currently has the most COVID-19 cases in the world.
