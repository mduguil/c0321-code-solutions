select count("ci"."name") as "totalCities",
       "co"."name" as "country"
  from "cities" as "ci"
  join "countries" as "co" using ("countryId")
  group by "co"."countryId"
